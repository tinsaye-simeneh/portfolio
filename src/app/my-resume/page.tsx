// pages/resume.js or pages/resume.tsx
import { Box, Heading } from "@chakra-ui/react";

export default function ResumePage() {
  return (
    <Box
      w="95vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1" size="lg" mb={6} textAlign="center">
        My Resume
      </Heading>
      <Box
        as="iframe"
        src="https://docs.google.com/document/d/e/2PACX-1vQMgPneXaqOhVcbDnfI-RkF6xMYQIrL6j4PeKbqFCPU1KvjO1xO9rbP4ZZ4N6yEw-VgeCQcMUFYNuPF/pub?embedded=true"
        width="70vw"
        height="80vh"
        border="2px solid"
      />
    </Box>
  );
}
