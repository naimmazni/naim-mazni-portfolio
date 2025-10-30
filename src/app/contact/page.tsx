import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { ContactForm } from "@/components/ContactForm";

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact - ${person.name}`,
  description: `Get in touch with ${person.name}. Open to internship opportunities and software engineering roles.`,
};

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    path: contact.path,
  });
}

export default function Contact() {
  return (
    <Column fillWidth paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contact.path}
        title={contact.title}
        description={contact.description}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column maxWidth="s" gap="l" horizontal="center">
        {/* Header Section */}
        <Column fillWidth gap="m" horizontal="center" align="center">
          <Heading variant="display-strong-l">
            Let's Connect
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            style={{ textAlign: 'center' }}
          >
            I'm currently open to internship opportunities and software engineering roles. Feel free to reach out!
          </Text>
        </Column>

        {/* Contact Form */}
        <ContactForm />
      </Column>
    </Column>
  );
}
