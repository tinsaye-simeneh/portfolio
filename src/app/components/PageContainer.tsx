"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  const bgGradient = useColorModeValue(
    "linear(to-r, orange.50, red.50, yellow.50)",
    "linear(to-r, orange.900, red.900, yellow.900)"
  );

  return (
    <Box flex="1" bgGradient={bgGradient}>
      {children}
    </Box>
  );
}

