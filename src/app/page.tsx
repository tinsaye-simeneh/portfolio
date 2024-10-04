"use client";
import { Button, Heading } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <div>
      <Heading as="h1" size="xl" textAlign="center" my={4}>
        Welcome to My Portfolio
      </Heading>
      <Button colorScheme="teal" size="lg">
        Click Me
      </Button>
    </div>
  );
}
