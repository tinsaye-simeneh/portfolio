import {
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="80vh" px={4}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Hi, I'm Tinsaye Simeneh
        </Heading>
        <Text fontSize="lg" textAlign="center" mt={5} mb={20}>
          A Passionate{" "}
          <Box bgColor="orange" p={3} as="span" mx={3}>
            {" "}
            Web Developer{" "}
          </Box>
          and Designer
        </Text>
        <HStack spacing={4}>
          <Button as="a" href="#about" colorScheme="blue" size="lg">
            About Me
          </Button>
          <Button as="a" href="/projects" colorScheme="blue" size="lg">
            My Projects
          </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Hero;
