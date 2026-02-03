import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#e6f2f2",
      100: "#b3d9d9",
      200: "#80bfbf",
      300: "#4da6a6",
      400: "#1a8c8c",
      500: "#0d7373",
      600: "#0a5c5c",
      700: "#084646",
      800: "#052f2f",
      900: "#021919",
    },
    dark: {
      teal: "#1a2e2e",
      grey: "#2a3a3a",
      lightGrey: "#4a5a5a",
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#1a2e2e",
        color: "white",
      },
    },
  },
});

export default theme; 