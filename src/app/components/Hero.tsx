import { Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="80vh"
      bg="gray.100"
      px={4}
    >
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Hi, I'm Tinsaye Simeneh
        </Heading>
        <Text fontSize="lg" textAlign="center">
          I'm a frontend developer and UI/UX designer with experience in
          building beautiful, responsive websites using Next.js, TypeScript, and
          Chakra UI.
        </Text>
        <Button as="a" href="#projects" colorScheme="blue" size="lg">
          View My Work
        </Button>
      </VStack>
    </Flex>
  );
};

export default Hero;
