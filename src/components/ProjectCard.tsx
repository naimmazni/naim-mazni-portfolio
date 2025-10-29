"use client";

import {
  Column,
  SmartLink,
  Text,
  Tag,
  Row,
  Media,
  Heading,
  Icon,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  tags?: string[];
  publishedAt?: string;
  role?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  tags,
  description,
  publishedAt,
  role,
}) => {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    });
  };

  return (
    <SmartLink
      href={href}
      style={{ 
        textDecoration: 'none',
        display: 'block',
        height: '100%',
      }}
    >
      <Column
        fillWidth
        gap="0"
        padding="0"
        radius="l"
        border="neutral-medium"
        background="surface"
        style={{
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="project-card-hover"
      >
        {/* Project Thumbnail */}
        {images && images.length > 0 && (
          <Column
            fillWidth
            style={{
              aspectRatio: '16/9',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Media
              src={images[0]}
              alt={title}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Column>
        )}

        {/* Project Info */}
        <Column fillWidth gap="m" padding="l" style={{ flex: 1 }}>
          <Heading as="h3" variant="heading-strong-l" wrap="balance">
            {title}
          </Heading>

          {/* Role */}
          {role && (
            <Text variant="body-default-s" onBackground="brand-medium">
              {role}
            </Text>
          )}

          {/* Description */}
          {description && (
            <Text 
              variant="body-default-s" 
              onBackground="neutral-weak"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </Text>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <Row wrap gap="8">
              {tags.slice(0, 3).map((tag, index) => (
                <Tag key={index} size="s">
                  {tag}
                </Tag>
              ))}
              {tags.length > 3 && (
                <Tag size="s" onBackground="neutral-weak">
                  +{tags.length - 3}
                </Tag>
              )}
            </Row>
          )}

          {/* Date - at bottom */}
          {publishedAt && (
            <Row gap="8" vertical="center" style={{ marginTop: 'auto', paddingTop: '8px' }}>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {formatDate(publishedAt)}
              </Text>
            </Row>
          )}
        </Column>
      </Column>
    </SmartLink>
  );
};
