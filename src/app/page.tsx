"use client";
import { Box, Container, Button, Heading, Stack } from "@chakra-ui/react";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Box bg="gray.50" p={4}>
      <Hero />
      <Container maxW="container.xl" my={10}>
        <Stack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center">
            Want to contact me?
          </Heading>

          <Button
            colorScheme="teal"
            size="lg"
            alignSelf="center"
            onClick={() => window.open("/contact-me", "_self")}
          >
            Contact Me
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
