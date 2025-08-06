import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
});

export default theme; 