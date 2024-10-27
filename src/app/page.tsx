"use client";
import {
  Container,
  Stack,
  Heading,
  Button,
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Jiret",
      demoLink: "https://jiret.com",
      description: "A comprehensive client management system.",
      codeLink: "https://github.comtinsaye-simeneh/jiret",
      languages: ["JavaScript", "React"],
    },
    {
      title: "Muyalogy",
      demoLink: "https://muyalogy.com",
      description: "An online learning management system.",
      codeLink: "https://github.comtinsaye-simeneh/muyalogy",
      languages: ["JavaScript", "React"],
    },
    {
      title: "Tin ET",
      demoLink: "https://tin-et.vercel.app/",
      description: "An engaging e-commerce platform.",
      codeLink: "https://github.comtinsaye-simeneh/tin-et",
      languages: ["JavaScript", "Next.js"],
    },
  ];

  return (
    <Box p={4}>
      <Hero />

      <Container maxW="container.xl" my={10}>
        <Stack spacing={8}>
          <Text fontSize="lg" textAlign="center">
            I&apos;m a versatile web developer and adept UI/UX designer with 3-4{" "}
            <br />
            years of experience. Explore my projects, learn about my journey,
            and feel free to reach out!
          </Text>

          <Button
            colorScheme="teal"
            size="lg"
            alignSelf="center"
            onClick={() => window.open("/contact-me", "_self")}
          >
            Contact Me
          </Button>

          <Stack spacing={8} py={10} mx={"auto"} textAlign={"center"}>
            <Heading as="h3" size="lg" textAlign="center" mt={20}>
              Featured Projects
            </Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  demoLink={project.demoLink}
                  codeLink={project.codeLink}
                  languages={project.languages}
                />
              ))}
            </SimpleGrid>

            <Link href="/projects">
              <Button alignSelf="center" colorScheme="teal" size="lg">
                View All Projects
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
