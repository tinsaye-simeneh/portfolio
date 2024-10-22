import { Box, Heading, VStack, Text, Button } from "@chakra-ui/react";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <Box>
      <Hero />
      <VStack spacing={8} mt={10}>
        <Heading as="h2" size="lg">
          My Projects
        </Heading>
        <ProjectCard
          title="E-Commerce App"
          description="A modern e-commerce app built with Next.js, TypeScript, and Chakra UI."
          link="https://github.com/tinsaye-simeneh/ecommerce"
        />
        <ProjectCard
          title="Portfolio Website"
          description="A portfolio website showcasing my web development skills."
          link="https://github.com/tinsaye-simeneh/portfolio"
        />
        <Button
          as="a"
          href="mailto:your-email@example.com"
          colorScheme="blue"
          mt={4}
        >
          Contact Me
        </Button>
      </VStack>
    </Box>
  );
}
