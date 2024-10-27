"use client";
import { useState } from "react";
import { Box, Heading, Spinner } from "@chakra-ui/react";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        My Resume
      </Heading>

      {isLoading && (
        <Box
          position="absolute"
          zIndex="1000"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="70vw"
          h="100vh"
        >
          <Spinner size="xl" color="blue.500" />
        </Box>
      )}

      <Box
        as="iframe"
        src="https://docs.google.com/document/d/e/2PACX-1vQMgPneXaqOhVcbDnfI-RkF6xMYQIrL6j4PeKbqFCPU1KvjO1xO9rbP4ZZ4N6yEw-VgeCQcMUFYNuPF/pub?embedded=true"
        width={{ base: "90vw", sm: "80vw", md: "70vw", lg: "60vw", xl: "50vw" }}
        height="80vh"
        border="1px solid"
        onLoad={handleLoad}
        textAlign={"center"}
      />
    </Box>
  );
}
