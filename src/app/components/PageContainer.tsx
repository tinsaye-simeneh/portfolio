"use client";

import { Box } from "@chakra-ui/react";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Box flex="1" bg="#1a2e2e" ml={{ base: 0, md: "40px" }}>
      {children}
    </Box>
  );
}

