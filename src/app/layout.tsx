"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <body>
            <Box>
              <Navbar />
              {children}
            </Box>
          </body>
        </ChakraProvider>
      </body>
    </html>
  );
}
