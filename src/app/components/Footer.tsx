import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} textAlign="center" bg="gray.100" mt={8}>
      <Text fontSize="sm">
        © {new Date().getFullYear()} Tinsaye Simeneh. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
