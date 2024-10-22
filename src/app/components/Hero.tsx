import {
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const Hero = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const highlightColor = useColorModeValue("teal.500", "teal.200");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="80vh"
      bg={bgColor}
      px={4}
    >
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color={headingColor}>
          Hi, I'm{" "}
          <Text as="span" color={highlightColor}>
            Tinsaye Simeneh
          </Text>
        </Heading>
        <Text fontSize="lg" textAlign="center" color={textColor}>
          A{" "}
          <Text as="span" fontWeight="bold" color="orange.400">
            web developer
          </Text>{" "}
          and{" "}
          <Text as="span" fontWeight="bold" color="pink.400">
            UI/UX designer
          </Text>{" "}
          with over 4 years of experience. I’ve built and delivered 25+ websites
          using{" "}
          <Text as="span" color="green.400">
            React.js
          </Text>
          ,{" "}
          <Text as="span" color="blue.400">
            Next.js
          </Text>
          ,{" "}
          <Text as="span" color="purple.400">
            TypeScript
          </Text>
          , and{" "}
          <Text as="span" color="yellow.400">
            JavaScript
          </Text>
          . I specialize in styling with{" "}
          <Text as="span" color="red.400">
            Tailwind CSS
          </Text>
          ,{" "}
          <Text as="span" color="blue.600">
            Bootstrap CSS
          </Text>
          ,{" "}
          <Text as="span" color="green.600">
            Mantine CSS
          </Text>
          , and{" "}
          <Text as="span" color="pink.600">
            Material UI
          </Text>
          . Whether it’s a responsive website or a user-friendly interface, I’m
          here to help bring your ideas to life.
        </Text>
        <Button as="a" href="#projects" colorScheme="blue" size="lg">
          View My Work
        </Button>
      </VStack>
    </Flex>
  );
};

export default Hero;
