"use client";
import {
  Container,
  Heading,
  Button,
  Box,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  Badge,
  Divider
} from "@chakra-ui/react";
import { FaEnvelope, FaArrowRight, FaStar, FaCode, FaPalette } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Jiret",
      demoLink: "https://jiret.com",
      description: "A comprehensive client management system.",
      languages: ["JavaScript", "React", "Next.js", "Mantine", "Tailwind CSS"],
    },
    {
      title: "Muyalogy",
      demoLink: "https://muyalogy.com",
      description: "An online learning management system.",
      languages: [
        "JavaScript",
        "React",
        "Next.js",
        "Mantine",
        "Supabase",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tin ET",
      demoLink: "https://tin-et.vercel.app/",
      description: "An engaging e-commerce platform.",
      languages: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    },
  ];

  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  return (
    <Box>
      <Hero />

      <Box bg={sectionBg} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} textAlign="center">
            {/* Stats Section */}
            <HStack spacing={8} flexWrap="wrap" justify="center">
              <VStack>
                <Text fontSize="3xl" fontWeight="bold" color="blue.500">30+</Text>
                <Text fontSize="sm" color={textColor}>Projects Built</Text>
              </VStack>
              <VStack>
                <Text fontSize="3xl" fontWeight="bold" color="purple.500">4+</Text>
                <Text fontSize="sm" color={textColor}>Years Experience</Text>
              </VStack>
              <VStack>
                <Text fontSize="3xl" fontWeight="bold" color="pink.500">100%</Text>
                <Text fontSize="sm" color={textColor}>Client Satisfaction</Text>
              </VStack>
            </HStack>

            <Divider maxW="200px" />

            <VStack spacing={6} maxW="4xl">
              <Heading 
                as="h2" 
                size="xl" 
                color={headingColor}
                textAlign="center"
              >
                Crafting Digital Experiences
              </Heading>
              <Text 
                fontSize={{ base: "lg", md: "xl" }} 
                color={textColor}
                lineHeight="1.8"
                textAlign="center"
              >
                I&apos;m a versatile web developer and adept UI/UX designer passionate about 
                creating seamless digital experiences. With expertise in modern web technologies, 
                I transform ideas into engaging, user-centric solutions.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="4xl" w="full">
              <Box
                bg={cardBg}
                p={8}
                borderRadius="xl"
                shadow="lg"
                border="1px"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                transition="all 0.3s ease"
              >
                <VStack spacing={4}>
                  <Icon as={FaCode} boxSize={8} color="blue.500" />
                  <Heading size="md" color={headingColor}>Web Development</Heading>
                  <Text color={textColor} textAlign="center">
                    Full-stack development with React, Next.js, TypeScript, and modern frameworks
                  </Text>
                </VStack>
              </Box>
              
              <Box
                bg={cardBg}
                p={8}
                borderRadius="xl"
                shadow="lg"
                border="1px"
                borderColor={useColorModeValue("gray.200", "gray.700")}
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
                transition="all 0.3s ease"
              >
                <VStack spacing={4}>
                  <Icon as={FaPalette} boxSize={8} color="purple.500" />
                  <Heading size="md" color={headingColor}>UI/UX Design</Heading>
                  <Text color={textColor} textAlign="center">
                    User-centered design with modern aesthetics and seamless user experiences
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>

            <Button
              size="lg"
              colorScheme="blue"
              bgGradient="linear(to-r, blue.400, blue.600)"
              _hover={{ 
                bgGradient: "linear(to-r, blue.500, blue.700)",
                transform: "translateY(-2px)",
                shadow: "xl"
              }}
              _active={{ transform: "translateY(0)" }}
              transition="all 0.3s ease"
              leftIcon={<Icon as={FaEnvelope} />}
              onClick={() => window.open("/contact-me", "_self")}
              px={8}
              py={6}
              borderRadius="full"
            >
              Let&apos;s Work Together
            </Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Badge 
              colorScheme="blue" 
              px={3} 
              py={1} 
              borderRadius="full"
              fontSize="sm"
            >
              <Icon as={FaStar} mr={2} />
              Portfolio
            </Badge>
            <Heading 
              as="h2" 
              size="2xl" 
              color={headingColor}
              textAlign="center"
            >
              Featured Projects
            </Heading>
            <Text 
              fontSize="xl" 
              color={textColor} 
              maxW="2xl" 
              textAlign="center"
            >
              A showcase of my recent work, demonstrating expertise in modern web technologies 
              and user-centered design principles.
            </Text>
          </VStack>

          <SimpleGrid 
            columns={{ sm: 1, md: 2, lg: 3 }} 
            spacing={8} 
            w="full"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                languages={project.languages}
              />
            ))}
          </SimpleGrid>

          <VStack spacing={4} pt={8}>
            <Text color={textColor} fontSize="lg">
              Want to see more of my work?
            </Text>
            <Link href="/links">
              <Button 
                size="lg"
                variant="outline"
                borderWidth={2}
                borderColor="blue.400"
                color="blue.400"
                _hover={{ 
                  bg: "blue.400",
                  color: "white",
                  transform: "translateY(-2px)",
                  shadow: "lg"
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.3s ease"
                rightIcon={<Icon as={FaArrowRight} />}
                px={8}
                py={6}
                borderRadius="full"
              >
                View All Projects
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
