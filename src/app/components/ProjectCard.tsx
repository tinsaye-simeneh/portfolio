import { Box, Heading, Text, Button } from "@chakra-ui/react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" rounded="md" w="100%" maxW="lg">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{description}</Text>
      <Button
        mt={4}
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="blue"
      >
        View Project
      </Button>
    </Box>
  );
};

export default ProjectCard;
