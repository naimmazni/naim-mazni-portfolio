import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: `Projects - ${person.name}`,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" fillWidth paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Header */}
      <Column fillWidth gap="l" marginBottom="40" horizontal="center" align="center">
        <Heading variant="display-strong-l">
          {work.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" style={{ textAlign: 'center' }}>
          {work.description}
        </Text>
      </Column>
      
      <Projects />
    </Column>
  );
}
