import {
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  Icon,
  Tag,
  Grid,
  Media,
} from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Achievements - ${person.name}`,
    description: "International and national awards, competitions, and academic achievements.",
    baseURL: baseURL,
    image: `/api/og/generate?title=Achievements`,
    path: "/achievements",
  });
}

export default function Achievements() {
  return (
    <Column maxWidth="m" fillWidth paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Achievements"
        description="International and national awards, competitions, and academic achievements."
        path="/achievements"
        image={`/api/og/generate?title=Achievements`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header */}
      <Column fillWidth gap="l" marginBottom="40" horizontal="center" align="center">
        <Heading variant="display-strong-l">Achievements & Recognition</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" style={{ textAlign: 'center' }}>
          A showcase of international and national awards, academic excellence, and competitive achievements.
        </Text>
      </Column>

      {/* Statistics Overview */}
      <Row
        fillWidth
        gap="24"
        marginBottom="64"
        horizontal="center"
        wrap
      >
        <Column
          border="neutral-medium"
          radius="l"
          padding="24"
          gap="8"
          align="center"
          flex={1}
          style={{ minWidth: "200px" }}
        >
          <Text variant="display-strong-l">25+</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Total Awards
          </Text>
        </Column>
        <Column
          border="neutral-medium"
          radius="l"
          padding="24"
          gap="8"
          align="center"
          flex={1}
          style={{ minWidth: "200px" }}
        >
          <Text variant="display-strong-l">6</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Hackathon Joined
          </Text>
        </Column>
        <Column
          border="neutral-medium"
          radius="l"
          padding="24"
          gap="8"
          align="center"
          flex={1}
          style={{ minWidth: "200px" }}
        >
          <Text variant="display-strong-l">5</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Academic Honors
          </Text>
        </Column>
      </Row>

      {/* Academic Excellence Section */}
      {about.work.experiences[0] && (
        <Column fillWidth gap="32" marginBottom="64">
          <Column gap="16">
            <Row gap="12" vertical="center">
              <Icon name="trophy" size="l" onBackground="brand-strong" />
              <Heading as="h2" variant="display-strong-m">
                Academic Excellence
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {about.work.experiences[0].timeframe} • {about.work.experiences[0].role}
            </Text>
          </Column>

          <Column gap="20" paddingLeft="l">
            {about.work.experiences[0].achievements.map((achievement, index) => {
              // Map achievements to their transcripts
              const getTranscriptLink = (achievementText: string) => {
                if (achievementText.includes("Semester 4")) {
                  return about.work.experiences[0].images?.[0]?.src;
                } else if (achievementText.includes("Semester 3")) {
                  return about.work.experiences[0].images?.[1]?.src;
                } else if (achievementText.includes("Semester 2")) {
                  return about.work.experiences[0].images?.[2]?.src;
                } else if (achievementText.includes("Semester 1")) {
                  return about.work.experiences[0].images?.[3]?.src;
                }
                return null;
              };

              const achievementText = achievement?.toString() || "";
              const transcriptLink = getTranscriptLink(achievementText);

              return (
                <Row key={index} gap="16" vertical="start">
                  <Text variant="heading-default-l" style={{ minWidth: "24px" }}>
                    •
                  </Text>
                  {transcriptLink ? (
                    <a
                      href={transcriptLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                        borderBottom: "1px dashed var(--neutral-border-medium)",
                        transition: "all 0.2s",
                      }}
                    >
                      <Text variant="body-default-l">
                        {achievement} 📄
                      </Text>
                    </a>
                  ) : (
                    <Text variant="body-default-l">{achievement}</Text>
                  )}
                </Row>
              );
            })}
          </Column>
        </Column>
      )}

      {/* Hackathons & Competitions */}
      <Column fillWidth gap="32" marginBottom="64">
        <Column gap="16">
          <Row gap="12" vertical="center">
            <Icon name="rocket" size="l" onBackground="accent-strong" />
            <Heading as="h2" variant="display-strong-m">
              Hackathons & Competitions
            </Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            2025 • Software Development & Innovation
          </Text>
        </Column>

        {/* Individual Competitions */}
        <Column fillWidth gap="48" paddingLeft="l">
          {about.work.experiences.slice(1, 7).map((competition, index) => (
            <Column key={index} fillWidth gap="16">
              <Column gap="12">
                <Text variant="heading-strong-l">{competition.company}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {competition.timeframe} • {competition.role}
                </Text>
              </Column>

              {competition.achievements.map((achievement, achIndex) => {
                const achievementText = achievement?.toString() || "";
                const [text, certificateLink] = achievementText.split("|");
                
                return (
                  <Row key={achIndex} gap="16" vertical="start">
                    <Text variant="heading-default-l" style={{ minWidth: "24px" }}>
                      •
                    </Text>
                    {certificateLink ? (
                      <a
                        href={certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          cursor: "pointer",
                          borderBottom: "1px dashed var(--neutral-border-medium)",
                          transition: "all 0.2s",
                        }}
                      >
                        <Text variant="body-default-l">
                          {text} 📄
                        </Text>
                      </a>
                    ) : (
                      <Text variant="body-default-l">{text}</Text>
                    )}
                  </Row>
                );
              })}

              {/* Image Gallery for this competition */}
              {competition.images && competition.images.length > 0 && (
                <Grid
                  columns="3"
                  m={{ columns: "2" }}
                  s={{ columns: "1" }}
                  gap="12"
                  fillWidth
                  marginTop="16"
                >
                  {competition.images.map((image, imgIndex) => (
                    <Media
                      key={imgIndex}
                      src={image.src}
                      alt={image.alt}
                      aspectRatio={`${image.width}/${image.height}`}
                      radius="l"
                      border="neutral-medium"
                    />
                  ))}
                </Grid>
              )}
            </Column>
          ))}
        </Column>
      </Column>

      {/* International Achievements */}
      {about.work.experiences[7] && (
        <Column fillWidth gap="32" marginBottom="64">
          <Column gap="16">
            <Row gap="12" vertical="center">
              <Icon name="globe" size="l" onBackground="accent-strong" />
              <Heading as="h2" variant="display-strong-m">
                International Competitions
              </Heading>
            </Row>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {about.work.experiences[7].timeframe} • {about.work.experiences[7].role}
            </Text>
          </Column>

          <Column gap="20" paddingLeft="l">
            {about.work.experiences[7].achievements.map((achievement, index) => {
              const achievementText = achievement?.toString() || "";
              const [text, certificateLink] = achievementText.split("|");
              
              return (
                <Row key={index} gap="16" vertical="start">
                  <Text variant="heading-default-l" style={{ minWidth: "24px" }}>
                    •
                  </Text>
                  {certificateLink ? (
                    <a
                      href={certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        cursor: "pointer",
                        borderBottom: "1px dashed var(--neutral-border-medium)",
                        transition: "all 0.2s",
                      }}
                    >
                      <Text variant="body-default-l">
                        {text} 📄
                      </Text>
                    </a>
                  ) : (
                    <Text variant="body-default-l">{text}</Text>
                  )}
                </Row>
              );
            })}
          </Column>

          {/* Image Gallery for International */}
          {about.work.experiences[7].images && about.work.experiences[7].images.length > 0 && (
            <Grid
              columns="3"
              m={{ columns: "2" }}
              s={{ columns: "1" }}
              gap="12"
              fillWidth
              marginTop="16"
              paddingLeft="l"
            >
              {about.work.experiences[7].images.map((image, imgIndex) => (
                <Media
                  key={imgIndex}
                  src={image.src}
                  alt={image.alt}
                  aspectRatio={`${image.width}/${image.height}`}
                  radius="l"
                  border="neutral-medium"
                />
              ))}
            </Grid>
          )}
        </Column>
      )}

      {/* National Achievements */}
      <Column fillWidth gap="32" marginBottom="64">
        <Column gap="16">
          <Row gap="12" vertical="center">
            <Icon name="trophy" size="l" onBackground="brand-strong" />
            <Heading as="h2" variant="display-strong-m">
              National Competitions (Malaysia)
            </Heading>
          </Row>
          <Text variant="body-default-m" onBackground="neutral-weak">
            2020 - 2023 • Innovation & STEM Excellence
          </Text>
        </Column>

        {/* Individual National Competitions */}
        <Column fillWidth gap="48" paddingLeft="l">
          {about.work.experiences.slice(8).map((competition, index) => (
            <Column key={index} fillWidth gap="16">
              <Column gap="12">
                <Text variant="heading-strong-l">{competition.company}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {competition.timeframe} • {competition.role}
                </Text>
              </Column>

              {competition.achievements.map((achievement, achIndex) => {
                const achievementText = achievement?.toString() || "";
                const [text, certificateLink] = achievementText.split("|");
                
                return (
                  <Row key={achIndex} gap="16" vertical="start">
                    <Text variant="heading-default-l" style={{ minWidth: "24px" }}>
                      •
                    </Text>
                    {certificateLink ? (
                      <a
                        href={certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          cursor: "pointer",
                          borderBottom: "1px dashed var(--neutral-border-medium)",
                          transition: "all 0.2s",
                        }}
                      >
                        <Text variant="body-default-l">
                          {text} 📄
                        </Text>
                      </a>
                    ) : (
                      <Text variant="body-default-l">{text}</Text>
                    )}
                  </Row>
                );
              })}

              {/* Image Gallery for this competition */}
              {competition.images && competition.images.length > 0 && (
                <Grid
                  columns="3"
                  m={{ columns: "2" }}
                  s={{ columns: "1" }}
                  gap="12"
                  fillWidth
                  marginTop="16"
                >
                  {competition.images.map((image, imgIndex) => (
                    <Media
                      key={imgIndex}
                      src={image.src}
                      alt={image.alt}
                      aspectRatio={`${image.width}/${image.height}`}
                      radius="l"
                      border="neutral-medium"
                    />
                  ))}
                </Grid>
              )}
            </Column>
          ))}
        </Column>
      </Column>

    </Column>
  );
}
