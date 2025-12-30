"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Snow from "./Snow";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageContainer from "./PageContainer";

type AppWrapperProps = {
  children: ReactNode;
};

export default function AppWrapper({ children }: AppWrapperProps) {
  const bgGradient = useColorModeValue(
    "linear(to-r, orange.50, red.50, yellow.50)",
    "linear(to-r, orange.900, red.900, yellow.900)"
  );

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bgGradient={bgGradient}
    >
      <Snow />
      <Navbar />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </Box>
  );
}

