import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description" />
        <title>TSD Portfolio</title>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Box>
            <Navbar />
            {children}
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
