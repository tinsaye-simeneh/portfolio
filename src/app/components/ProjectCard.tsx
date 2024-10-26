import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
  languages: string[]; // Added languages property
}

const ProjectCard = ({
  title,
  description,
  demoLink,
  codeLink,
  languages,
}: ProjectCardProps) => {
  return (
    <Box
      p={6}
      shadow="lg"
      borderWidth="1px"
      rounded="lg"
      w="100%"
      maxW="lg"
      mx={"auto"}
    >
      <VStack align="start" spacing={4}>
        <Heading fontSize="xl">{title}</Heading>
        <Text fontSize="sm">{description}</Text>
        <HStack spacing={2} wrap="wrap">
          {languages.map((language) => (
            <Badge
              key={language}
              colorScheme="blue"
              fontSize={"0.6rem"}
              py={1}
              px={2}
              border={1}
              rounded="md"
            >
              {language}
            </Badge>
          ))}
        </HStack>
        <HStack spacing={4}>
          <Button
            as="a"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            rightIcon={<FaExternalLinkAlt />}
            cursor={"pointer"}
            fontSize={"0.8rem"}
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
            fontSize={"0.8rem"}
          >
            View Code
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
