import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
}

const ProjectCard = ({
  title,
  description,
  demoLink,
  codeLink,
}: ProjectCardProps) => {
  return (
    <Box
      p={6}
      shadow="lg"
      borderWidth="1px"
      rounded="lg"
      w="100%"
      maxW="lg"
      bg={useColorModeValue("white", "gray.800")}
    >
      <VStack align="start" spacing={4}>
        <Heading
          fontSize="2xl"
          color={useColorModeValue("blue.600", "blue.300")}
        >
          {title}
        </Heading>
        <Text fontSize="md" color={useColorModeValue("gray.700", "gray.300")}>
          {description}
        </Text>
        <HStack spacing={4}>
          <Button
            as="a"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            rightIcon={<FaExternalLinkAlt />}
            cursor={"pointer"}
          >
            View Demo
          </Button>
          <Button
            as="a"
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="gray"
            variant="outline"
            rightIcon={<FaGithub />}
            cursor={"pointer"}
          >
            View Code
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
