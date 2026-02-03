"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { FaGithub, FaCode, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  languages: string[];
  githubLink?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  demoLink,
  languages,
  githubLink,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ height: "100%" }}
      whileHover={{ y: -8 }}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        minH="350px"
        borderRadius="xl"
        overflow="hidden"
        bg="rgba(74, 90, 90, 0.3)"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.1)"
        cursor="pointer"
        _hover={{
          bg: "rgba(74, 90, 90, 0.5)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          shadow: "xl",
        }}
        transition="all 0.3s ease"
        display="flex"
        flexDirection="column"
      >
        {/* Header Section with Icon */}
        <Box
          p={6}
          borderBottom="1px solid"
          borderColor="rgba(255, 255, 255, 0.1)"
          bg="rgba(74, 90, 90, 0.2)"
        >
          <HStack justify="space-between" align="start">
            <Box
              w="50px"
              h="50px"
              borderRadius="lg"
              bg="rgba(255, 255, 255, 0.1)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              <Icon as={FaCode} boxSize={6} color="white" />
            </Box>
            {demoLink && (
              <Link href={demoLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <Icon
                  as={FaExternalLinkAlt}
                  boxSize={4}
                  color="gray.400"
                  _hover={{ color: "white" }}
                  transition="color 0.2s"
                />
              </Link>
            )}
          </HStack>
        </Box>

        {/* Content Section */}
        <VStack
          align="stretch"
          spacing={4}
          p={6}
          flex="1"
          justify="space-between"
        >
          {/* Title and Description */}
          <VStack align="stretch" spacing={3}>
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              color="white"
              fontWeight="bold"
              lineHeight="1.2"
            >
              {title}
            </Heading>
            <Text
              fontSize="sm"
              color="gray.300"
              lineHeight="1.6"
              noOfLines={3}
            >
              {description}
            </Text>
          </VStack>

          {/* Tech Stack Tags */}
          <Flex wrap="wrap" gap={2} mt="auto">
            {languages?.slice(0, 5).map((language, index) => (
              <Badge
                key={language}
                fontSize="xs"
                px={3}
                py={1}
                borderRadius="md"
                fontWeight="medium"
                bg="rgba(255, 255, 255, 0.1)"
                color="gray.300"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
              >
                {language}
              </Badge>
            ))}
            {languages?.length > 5 && (
              <Badge
                fontSize="xs"
                px={3}
                py={1}
                borderRadius="md"
                fontWeight="medium"
                bg="rgba(255, 255, 255, 0.1)"
                color="gray.300"
                border="1px solid"
                borderColor="rgba(255, 255, 255, 0.1)"
              >
                +{languages.length - 5}
              </Badge>
            )}
          </Flex>

          {/* Action Button */}
          <Link href={demoLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Button
              size="sm"
              bg="rgba(74, 90, 90, 0.8)"
              color="white"
              _hover={{
                bg: "rgba(74, 90, 90, 1)",
                transform: "translateX(4px)",
              }}
              rightIcon={<Icon as={FaArrowRight} />}
              borderRadius="md"
              w="full"
              transition="all 0.3s ease"
            >
              View Project
            </Button>
          </Link>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default ProjectCard;
