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
  Grid,
  GridItem
} from "@chakra-ui/react";
import { 
  FaEnvelope, 
  FaArrowRight, 
  FaStar, 
  FaCode, 
  FaPalette,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaChartLine
} from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import Hero from "./components/Hero";
import Link from "next/link";
import { motion } from "framer-motion";

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

  const bgColor = useColorModeValue("white", "gray.900");
  const sectionBg = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("orange.500", "orange.400");
  const statsBgGradient = useColorModeValue(
    "linear(to-r, orange.500, red.500, yellow.500)",
    "linear(to-r, orange.600, red.600, yellow.600)"
  );
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const projectsHeadingGradient = useColorModeValue(
    "linear(to-r, orange.400, red.500)",
    "linear(to-r, orange.300, red.400)"
  );
  const ctaBgGradient = useColorModeValue(
    "linear(to-r, orange.50, red.50, yellow.50)",
    "linear(to-r, orange.900, red.900, yellow.900)"
  );

  const stats = [
    { value: "30+", label: "Projects", icon: FaRocket, color: "orange.500" },
    { value: "4+", label: "Years", icon: FaChartLine, color: "red.500" },
    { value: "100%", label: "Satisfaction", icon: FaUsers, color: "yellow.500" },
  ];

  const services = [
    { 
      icon: FaCode, 
      title: "Development", 
      description: "Building scalable, performant web applications with modern tech stacks.",
      gradient: "linear(to-br, orange.400, red.500)"
    },
    { 
      icon: FaPalette, 
      title: "Design", 
      description: "Creating beautiful, intuitive user experiences that users love.",
      gradient: "linear(to-br, yellow.400, orange.500)"
    },
    { 
      icon: FaLightbulb, 
      title: "Innovation", 
      description: "Transforming ideas into reality with cutting-edge solutions.",
      gradient: "linear(to-br, red.400, orange.500)"
    },
  ];

  return (
    <Box>
      <Hero />
      <Box 
        bgGradient={statsBgGradient}
        py={16}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.100"
          _dark={{ bg: "blackAlpha.300" }}
        />
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <Grid 
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} 
            gap={8}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <VStack spacing={4} color="white">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon as={stat.icon} boxSize={10} />
                  </motion.div>
                  <Text fontSize="5xl" fontWeight="bold">
                    {stat.value}
                  </Text>
                  <Text fontSize="lg" fontWeight="medium" opacity={0.9}>
                    {stat.label}
                  </Text>
                </VStack>
              </motion.div>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section - Split Layout */}
      <Box bg={sectionBg} py={20}>
        <Container maxW="container.xl">
          <Grid 
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }} 
            gap={12}
            alignItems="center"
          >
            <GridItem>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <VStack align="start" spacing={6}>
                  <Badge 
                    colorScheme="orange" 
                    px={4} 
                    py={2} 
                    borderRadius="full"
                    fontSize="sm"
                  >
                    About Me
                  </Badge>
                  <Heading 
                    as="h2" 
                    size="2xl" 
                    color={headingColor}
                    lineHeight="1.2"
                  >
                    Crafting Digital Experiences That Matter
                  </Heading>
                  <Text 
                    fontSize="xl" 
                    color={textColor}
                    lineHeight="1.8"
                  >
                    I&apos;m a versatile web developer and adept UI/UX designer passionate about 
                    creating seamless digital experiences. With expertise in modern web technologies, 
                    I transform ideas into engaging, user-centric solutions.
                  </Text>
                  <Text 
                    fontSize="lg" 
                    color={textColor}
                    lineHeight="1.8"
                  >
                    My journey spans 4+ years of building 30+ websites and applications, 
                    focusing on performance, accessibility, and delightful user experiences.
                  </Text>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      colorScheme="orange"
                      bgGradient="linear(to-r, orange.400, orange.600)"
                      _hover={{ 
                        bgGradient: "linear(to-r, orange.500, orange.700)",
                        shadow: "xl",
                        transform: "translateY(-2px)"
                      }}
                      leftIcon={<Icon as={FaEnvelope} />}
                      onClick={() => window.open("/contact-me", "_self")}
                      px={8}
                      py={6}
                      borderRadius="full"
                    >
                      Get In Touch
                    </Button>
                  </motion.div>
                </VStack>
              </motion.div>
            </GridItem>

            <GridItem>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <SimpleGrid columns={2} spacing={4}>
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.05 }}
                    >
                      <Box
                        bg={cardBg}
                        p={6}
                        borderRadius="2xl"
                        shadow="lg"
                        border="1px"
                        borderColor={cardBorder}
                        h="100%"
                        position="relative"
                        overflow="hidden"
                        _hover={{ shadow: "2xl" }}
                        transition="all 0.3s ease"
                      >
                        <Box
                          position="absolute"
                          top={0}
                          right={0}
                          width="100px"
                          height="100px"
                          bgGradient={service.gradient}
                          borderRadius="full"
                          filter="blur(60px)"
                          opacity={0.3}
                        />
                        <VStack spacing={4} align="start" position="relative" zIndex={1}>
                          <Box
                            p={3}
                            borderRadius="xl"
                            bgGradient={service.gradient}
                            color="white"
                          >
                            <Icon as={service.icon} boxSize={6} />
                          </Box>
                          <Heading size="md" color={headingColor}>
                            {service.title}
                          </Heading>
                          <Text color={textColor} fontSize="sm" lineHeight="1.6">
                            {service.description}
                          </Text>
                        </VStack>
                      </Box>
                    </motion.div>
                  ))}
                </SimpleGrid>
              </motion.div>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section - Featured Showcase */}
      <Box bg={bgColor} py={20} position="relative">
        <Container maxW="container.xl">
          <VStack spacing={16}>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%" }}
            >
              <VStack spacing={4} textAlign="center" maxW="3xl" mx="auto">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge 
                    colorScheme="orange" 
                    px={4} 
                    py={2} 
                    borderRadius="full"
                    fontSize="sm"
                  >
                    <Icon as={FaStar} mr={2} />
                    Featured Work
                  </Badge>
                </motion.div>
                <Heading 
                  as="h2" 
                  size="2xl" 
                  color={headingColor}
                  bgGradient={projectsHeadingGradient}
                  bgClip="text"
                >
                  Projects That Make a Difference
                </Heading>
                <Text 
                  fontSize="xl" 
                  color={textColor} 
                  lineHeight="1.8"
                >
                  A curated selection of my recent work, showcasing expertise in modern 
                  web technologies and user-centered design principles.
                </Text>
              </VStack>
            </motion.div>

            {/* Projects Grid - Asymmetric Layout */}
            <Box w="full">
              <Grid 
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={8}
              >
                {projects.map((project, index) => (
                  <GridItem
                    key={index}
                    colSpan={{ base: 1, md: index === 0 ? 2 : 1, lg: 1 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      whileHover={{ y: -10 }}
                      style={{ height: "100%" }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        demoLink={project.demoLink}
                        languages={project.languages}
                      />
                    </motion.div>
                  </GridItem>
                ))}
              </Grid>
            </Box>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ width: "100%" }}
            >
              <Box
                bgGradient={ctaBgGradient}
                borderRadius="3xl"
                p={12}
                textAlign="center"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top="-50%"
                  right="-50%"
                  width="400px"
                  height="400px"
                  bg="orange.200"
                  borderRadius="full"
                  filter="blur(100px)"
                  opacity={0.3}
                  _dark={{ bg: "orange.800", opacity: 0.2 }}
                />
                <VStack spacing={6} position="relative" zIndex={1}>
                  <Heading 
                    as="h3" 
                    size="xl" 
                    color={headingColor}
                  >
                    Ready to Start Your Project?
                  </Heading>
                  <Text 
                    fontSize="lg" 
                    color={textColor}
                    maxW="2xl"
                  >
                    Let&apos;s work together to bring your ideas to life. 
                    Check out all my projects or get in touch to discuss your next venture.
                  </Text>
                  <HStack spacing={4} flexWrap="wrap" justify="center">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/links">
                        <Button 
                          size="lg"
                          colorScheme="orange"
                          bgGradient="linear(to-r, orange.400, orange.600)"
                          _hover={{ 
                            bgGradient: "linear(to-r, orange.500, orange.700)",
                            shadow: "xl"
                          }}
                          rightIcon={<Icon as={FaArrowRight} />}
                          px={8}
                          py={6}
                          borderRadius="full"
                        >
                          View All Projects
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        borderWidth={2}
                        borderColor={accentColor}
                        color={accentColor}
                        _hover={{ 
                          bg: accentColor,
                          color: "white",
                          shadow: "lg"
                        }}
                        leftIcon={<Icon as={FaEnvelope} />}
                        onClick={() => window.open("/contact-me", "_self")}
                        px={8}
                        py={6}
                        borderRadius="full"
                      >
                        Contact Me
                      </Button>
                    </motion.div>
                  </HStack>
                </VStack>
              </Box>
            </motion.div>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}