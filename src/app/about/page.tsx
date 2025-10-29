import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            style={{ minWidth: "200px" }}
            paddingX="l"
            paddingBottom="xl"
            gap="l"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Column gap="8" horizontal="center">
              <Heading as="h2" variant="heading-strong-l">
                {person.name}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                {person.role}
              </Text>
            </Column>
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              <Text variant="body-default-s">{person.location}</Text>
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8" horizontal="center">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {/* Intro Section - Simplified */}
          <Column
            id={about.intro.title}
            fillWidth
            style={{ minHeight: "120px" }}
            vertical="center"
            marginBottom="48"
          >
            <Heading className={styles.textAlign} variant="display-strong-l" marginBottom="16">
              About Me
            </Heading>
            <Text
              className={styles.textAlign}
              variant="body-default-l"
              onBackground="neutral-weak"
              marginBottom="24"
            >
              Software Engineering student passionate about building innovative solutions
            </Text>
          </Column>

          {/* Resume Download CTA */}
          <Row fillWidth horizontal="center" marginBottom="64">
            <Button
              href="/resume.pdf"
              prefixIcon="download"
              label="Download Resume"
              size="l"
              variant="primary"
            />
          </Row>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="64">
              {about.intro.description}
            </Column>
          )}

          {/* Achievements Preview with Link */}
          <Column fillWidth gap="24" marginBottom="64">
            <Line fillWidth marginBottom="24" />
            <Row fillWidth horizontal="between" vertical="center">
              <Heading as="h2" variant="display-strong-m">
                Achievements & Recognition
              </Heading>
              <Button
                href="/achievements"
                suffixIcon="arrowRight"
                label="View All"
                size="m"
                variant="secondary"
              />
            </Row>
            <Text variant="body-default-l" onBackground="neutral-weak">
              12+ international and national awards including Gold and Silver medals in Mathematics Olympiads, Innovation Competitions, and STEM Excellence.
            </Text>
            <Row gap="16" wrap>
              <Column border="neutral-medium" radius="m" padding="16" gap="8" style={{ minWidth: "150px" }}>
                <Text variant="heading-strong-l">🥇 5</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">Gold/Silver Medals</Text>
              </Column>
              <Column border="neutral-medium" radius="m" padding="16" gap="8" style={{ minWidth: "150px" }}>
                <Text variant="heading-strong-l">🌍 2</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">International</Text>
              </Column>
              <Column border="neutral-medium" radius="m" padding="16" gap="8" style={{ minWidth: "150px" }}>
                <Text variant="heading-strong-l">🇲🇾 10+</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">National Awards</Text>
              </Column>
            </Row>
          </Column>

          {about.work.display && false && (
            <>
              <Line fillWidth marginBottom="48" />
              <Heading as="h2" id={about.work.title} variant="display-strong-m" marginBottom="24">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="32" marginBottom="64">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Line fillWidth marginBottom="48" />
              <Heading as="h2" id={about.studies.title} variant="display-strong-m" marginBottom="24">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="32" marginBottom="64">
                {about.studies.institutions.map((institution, index) => (
                  <Row
                    key={`${institution.name}-${index}`}
                    fillWidth
                    gap="24"
                    vertical="start"
                    style={{ position: "relative" }}
                  >
                    {/* Timeline Line - connects from center of current logo to next logo */}
                    {index < about.studies.institutions.length - 1 && (
                      <Column
                        style={{
                          position: "absolute",
                          left: "31px",
                          top: "64px",
                          width: "2px",
                          height: "calc(100% + 32px)",
                          background: "var(--neutral-border-medium)",
                        }}
                      />
                    )}

                    {/* Logo */}
                    {institution.logo && (
                      <Column
                        border="neutral-medium"
                        radius="l"
                        padding="8"
                        background="surface"
                        style={{
                          minWidth: "64px",
                          width: "64px",
                          height: "64px",
                          zIndex: 1,
                        }}
                        horizontal="center"
                        vertical="center"
                      >
                        <Media
                          src={institution.logo}
                          alt={`${institution.name} logo`}
                          aspectRatio="1/1"
                          radius="m"
                          style={{ width: "48px", height: "48px", objectFit: "contain" }}
                        />
                      </Column>
                    )}

                    {/* Content */}
                    <Column fillWidth gap="8" style={{ flex: 1 }}>
                      <Row fillWidth horizontal="between" vertical="start" wrap>
                        <Text id={institution.name} variant="heading-strong-l">
                          {institution.name}
                        </Text>
                        {institution.timeframe && (
                          <Text
                            variant="body-default-m"
                            onBackground="brand-medium"
                            style={{ fontWeight: 500 }}
                          >
                            {institution.timeframe}
                          </Text>
                        )}
                      </Row>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </Row>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Line fillWidth marginBottom="48" />
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-m"
                marginBottom="24"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="32">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}