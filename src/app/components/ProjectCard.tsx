import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  languages: string[];
}

const ProjectCard = ({
  title,
  description,
  demoLink,
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
          {languages?.map((language) => (
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
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;
