import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Script from "next/script";
import theme from "./theme";
import type { ReactNode } from "react";
import AppWrapper from "./components/AppWrapper";

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
      <body style={{ margin: 0, padding: 0 }}>
        <ColorModeScript initialColorMode="dark" />
        <ChakraProvider theme={theme}>
          <AppWrapper>{children}</AppWrapper>
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
