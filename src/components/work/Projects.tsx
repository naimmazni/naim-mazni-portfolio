import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "projects", "content"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Grid
      columns="3"
      m={{ columns: "2" }}
      s={{ columns: "1" }}
      fillWidth
      gap="l"
      marginBottom="40"
      paddingX="l"
    >
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/projects/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          tags={post.metadata.tags || []}
          publishedAt={post.metadata.publishedAt}
          role={post.metadata.team?.[0]?.role || "Developer"}
        />
      ))}
    </Grid>
  );
}
