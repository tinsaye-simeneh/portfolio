// pages/resume.js or pages/resume.tsx
import { Box, Heading } from "@chakra-ui/react";

export default function ResumePage() {
  return (
    <Box
      maxW="100%"
      mx="auto"
      mt={10}
      px={4}
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Heading as="h1" size="lg" mb={6}>
        My Resume
      </Heading>
      <Box
        as="iframe"
        src="https://docs.google.com/document/d/e/2PACX-1vQMgPneXaqOhVcbDnfI-RkF6xMYQIrL6j4PeKbqFCPU1KvjO1xO9rbP4ZZ4N6yEw-VgeCQcMUFYNuPF/pub?embedded=true"
        width="100%"
        height="100%"
        border="none"
      />
    </Box>
  );
}
