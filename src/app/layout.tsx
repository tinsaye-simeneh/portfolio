import { ChakraProvider, Box } from "@chakra-ui/react";
import Script from "next/script";
import theme from "./theme";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Snow from "./components/Snow";
import PageContainer from "./components/PageContainer";

type RootLayoutProps = {
  children: ReactNode;
};

const GA_TRACKING_ID = "G-E3KRQF74CG";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TSD Portfolio" />
        <title>TSD Portfolio</title>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Snow />
          <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar />
            <PageContainer>{children}</PageContainer>
            <Footer />
          </Box>
        </ChakraProvider>

        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
