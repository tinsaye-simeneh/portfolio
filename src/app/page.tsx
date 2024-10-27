"use client";
import { Container, Stack, Heading, Button, Box, Text } from "@chakra-ui/react";

import Hero from "./components/Hero";

export default function Home() {
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

          <Heading as="h3" size="lg" textAlign="center" mt={20}>
            Featured Projects
          </Heading>
        </Stack>
      </Container>
    </Box>
  );
}
