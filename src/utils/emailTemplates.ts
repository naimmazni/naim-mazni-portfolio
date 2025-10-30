interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function generateContactEmailHTML(data: ContactEmailData): string {
  const { name, email, subject, message } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a;">
      <table role="presentation" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 40px 20px;">
            <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #141414; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.1); overflow: hidden;">
              
              <!-- Header -->
              <tr>
                <td style="padding: 40px 40px 32px; text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                  <div style="display: inline-block; padding: 12px 24px; background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 12px; margin-bottom: 16px;">
                    <span style="font-size: 24px;">✉️</span>
                  </div>
                  <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 600; letter-spacing: -0.5px;">
                    New Contact Message
                  </h1>
                  <p style="margin: 8px 0 0; color: rgba(255, 255, 255, 0.6); font-size: 14px;">
                    Someone reached out through naimmazni.vercel.app
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  
                  <!-- Sender Info Card -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
                    <tr>
                      <td style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 24px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 10px 0;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 90px;">
                                    <span style="color: rgba(255, 255, 255, 0.5); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">From</span>
                                  </td>
                                  <td>
                                    <span style="color: #ffffff; font-size: 15px; font-weight: 600;">${name}</span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 90px;">
                                    <span style="color: rgba(255, 255, 255, 0.5); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                                  </td>
                                  <td>
                                    <a href="mailto:${email}" style="color: #06b6d4; font-size: 15px; text-decoration: none; font-weight: 500;">${email}</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0;">
                              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                  <td style="width: 90px;">
                                    <span style="color: rgba(255, 255, 255, 0.5); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Subject</span>
                                  </td>
                                  <td>
                                    <span style="color: rgba(255, 255, 255, 0.9); font-size: 15px;">${subject}</span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message Section -->
                  <div style="margin-bottom: 32px;">
                    <p style="margin: 0 0 12px; color: rgba(255, 255, 255, 0.5); font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">
                      Message
                    </p>
                    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-left: 3px solid #06b6d4; padding: 24px; border-radius: 12px;">
                      <p style="margin: 0; color: rgba(255, 255, 255, 0.85); font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </div>
                  </div>
                  
                  <!-- Reply Button -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="text-align: center; padding: 8px 0;">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; background: #06b6d4; color: #000000; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 600; font-size: 15px; transition: all 0.2s;">
                          Reply to ${name.split(' ')[0]} →
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background: rgba(255, 255, 255, 0.02); padding: 24px 40px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="text-align: center;">
                        <p style="margin: 0 0 6px; color: rgba(255, 255, 255, 0.4); font-size: 12px;">
                          ${new Date().toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                        <p style="margin: 0; color: rgba(255, 255, 255, 0.3); font-size: 11px;">
                          Sent from portfolio contact form · naimmazni.vercel.app
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
