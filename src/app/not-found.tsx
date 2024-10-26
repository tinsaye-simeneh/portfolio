"use client";
import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      p={4}
    >
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          404 - Page Not Found
        </Heading>
        <Text fontSize="lg">
          Sorry, the page you are looking for does not exist.
        </Text>
        <Button
          colorScheme="blue"
          onClick={() => window.open("/", "_self")}
          fontSize={"1.2rem"}
          p={6}
        >
          Go Home
        </Button>
      </VStack>
    </Box>
  );
}
