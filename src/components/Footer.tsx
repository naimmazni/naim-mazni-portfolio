import { Row, IconButton, SmartLink, Text, Column } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Column
        className={styles.mobile}
        maxWidth="m"
        paddingY="24"
        paddingX="16"
        gap="24"
        horizontal="center"
        s={{
          align: "center",
        }}
      >
        {/* Contact Info Section */}
        <Column fillWidth gap="16" horizontal="center" align="center">
          <Text variant="heading-strong-m" onBackground="neutral-strong">
            Get In Touch
          </Text>
          <Row gap="8" wrap horizontal="center">
            <Text variant="body-default-s" onBackground="neutral-weak">
              {person.email}
            </Text>
            <Text onBackground="neutral-weak">•</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Malaysia
            </Text>
            <Text onBackground="neutral-weak">•</Text>
            <Text variant="body-default-s" onBackground="brand-medium">
              <SmartLink href="/contact">Contact Page</SmartLink>
            </Text>
          </Row>
        </Column>

        {/* Social Links */}
        <Row gap="16" horizontal="center">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="m"
                  variant="ghost"
                />
              ),
          )}
        </Row>

        {/* Navigation Links */}
        <Row gap="24" wrap horizontal="center">
          <SmartLink href="/">Home</SmartLink>
          <SmartLink href="/about">About</SmartLink>
          <SmartLink href="/projects">Projects</SmartLink>
          <SmartLink href="/achievements">Achievements</SmartLink>
          <SmartLink href="/contact">Contact</SmartLink>
        </Row>

        {/* Copyright */}
        <Column gap="8" horizontal="center" align="center">
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">
            © {currentYear} {person.name}. All rights reserved.
          </Text>
        </Column>
      </Column>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
