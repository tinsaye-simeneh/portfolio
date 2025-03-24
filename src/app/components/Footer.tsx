import { Box, Text, Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py={4} mt={8} border="1px" borderColor="gray.600">
      <Flex
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm">© {new Date().getFullYear()} Tinsaye Simeneh.</Text>
        <Text fontSize="sm">
          Built with{" "}
          <Link
            href="https://nextjs.org"
            isExternal
            color="teal.500"
            textDecoration="underline"
          >
            Next.js
          </Link>{" "}
          and{" "}
          <Link
            href="https://chakra-ui.com"
            isExternal
            color="teal.500"
            textDecoration="underline"
          >
            Chakra UI
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
