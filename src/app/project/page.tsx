import { SimpleGrid, Container } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description:
      "This is a description of project one. It is a very interesting project.",
    demoLink: "https://project-one-demo.com",
    codeLink: "https://github.com/user/project-one",
  },
  {
    title: "Project Two",
    description:
      "This is a description of project two. It is also a very interesting project.",
    demoLink: "https://project-two-demo.com",
    codeLink: "https://github.com/user/project-two",
  },
];

export default function Projects() {
  return (
    <Container maxW="container.xl" py={10}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
