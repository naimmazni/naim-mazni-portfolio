"use client";

import { useState } from "react";
import {
  Column,
  Input,
  Button,
  Text,
  Heading,
  Row,
  Icon,
} from "@once-ui-system/core";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Column
      as="form"
      onSubmit={handleSubmit}
      fillWidth
      gap="l"
      padding="24"
      border="neutral-medium"
      radius="l"
      background="surface"
    >
      <Column gap="m">
        <Heading variant="heading-strong-l">Send me a message</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Fill out the form below and I'll get back to you as soon as possible.
        </Text>
      </Column>

      <Column gap="m">
        <Column gap="8">
          <Text variant="label-default-s" onBackground="neutral-strong">
            Name *
          </Text>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />
        </Column>

        <Column gap="8">
          <Text variant="label-default-s" onBackground="neutral-strong">
            Email *
          </Text>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />
        </Column>

        <Column gap="8">
          <Text variant="label-default-s" onBackground="neutral-strong">
            Subject *
          </Text>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="What's this about?"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === "loading"}
          />
        </Column>

        <Column gap="8">
          <Text variant="label-default-s" onBackground="neutral-strong">
            Message *
          </Text>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === "loading"}
            rows={6}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--neutral-border-medium)",
              backgroundColor: "var(--neutral-background-weak)",
              color: "var(--neutral-on-background-strong)",
              fontFamily: "inherit",
              fontSize: "16px",
              resize: "vertical",
            }}
          />
        </Column>
      </Column>

      {status === "success" && (
        <Row
          padding="12"
          radius="m"
          background="success-alpha-weak"
          gap="8"
          vertical="center"
        >
          <Icon name="checkCircle" size="m" onBackground="success-strong" />
          <Text variant="body-default-s" onBackground="success-strong">
            Message sent successfully! I have received it via email and will reply to you soon.
          </Text>
        </Row>
      )}

      {status === "error" && (
        <Row
          padding="12"
          radius="m"
          background="danger-alpha-weak"
          gap="8"
          vertical="center"
        >
          <Icon name="alertCircle" size="m" onBackground="danger-strong" />
          <Text variant="body-default-s" onBackground="danger-strong">
            {errorMessage}
          </Text>
        </Row>
      )}

      <Button
        type="submit"
        variant="primary"
        size="l"
        fillWidth
        disabled={status === "loading"}
        prefixIcon={status === "loading" ? undefined : "send"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </Column>
  );
}
