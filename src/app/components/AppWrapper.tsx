"use client";

import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PageContainer from "./PageContainer";
import ProgressBar from "./ProgressBar";

type AppWrapperProps = {
  children: ReactNode;
};

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="#1a2e2e"
      position="relative"
    >
      <ProgressBar />
      <Navbar />
      <Flex flex="1" position="relative">
        <Sidebar />
        <PageContainer>{children}</PageContainer>
      </Flex>
    </Box>
  );
}

