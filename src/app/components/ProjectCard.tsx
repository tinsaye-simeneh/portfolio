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
    <Box p={6} shadow="lg" borderWidth="1px" rounded="lg" w="100%" maxW="lg">
      <VStack align="start" spacing={4}>
        <Heading fontSize="2xl">{title}</Heading>
        <Text fontSize="md">{description}</Text>
        <HStack spacing={2} wrap="wrap">
          {languages.map((language) => (
            <Badge key={language} colorScheme="blue">
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
