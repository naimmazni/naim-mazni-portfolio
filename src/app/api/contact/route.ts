import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/utils/supabaseClient";
import { generateContactEmailHTML } from "@/utils/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // 1. Save to Supabase database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          subject,
          message,
          created_at: new Date().toISOString(),
        },
      ]);

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to save message");
    }

    // 2. Send email notification via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "naimmazni@gmail.com",
      subject: `💼 New Contact: ${subject}`,
      html: generateContactEmailHTML({ name, email, subject, message }),
    });

    if (emailError) {
      console.error("Email error:", emailError);
      // Don't throw here - message is saved in DB even if email fails
      return NextResponse.json(
        {
          success: true,
          warning: "Message saved but email notification failed",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        emailId: emailData?.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
