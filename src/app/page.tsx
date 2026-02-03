"use client";
import {
  Container,
  Heading,
  Button,
  Box,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Icon,
  Flex,
  SimpleGrid,
  Badge,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaArrowRight, FaCode, FaPalette, FaRocket, FaEnvelope, FaStar, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Center Section with About Me and Projects Carousel
function CenterSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const topProjects = [
    {
      title: "Muyalogy",
      demoLink: "https://muyalogy.com",
      description: "Learning Management System",
    },
    {
      title: "Jiret",
      demoLink: "https://jiret.com",
      description: "SaaS Learning Management System",
    },
    {
      title: "Guzo School Management",
      demoLink: "https://guzo-sms.vercel.app",
      description: "SaaS School Management System",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [topProjects.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ width: "100%", height: "100%" }}
    >
      <VStack
        spacing={10}
        w="100%"
        h={{ base: "auto", md: "600px", lg: "700px" }}
        align="center"
        justify="center"
        px={8}
      >
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ position: "relative", width: "100%" }}
        >
          <VStack spacing={4} align="center" textAlign="center" maxW="600px" mx="auto" position="relative">
            {/* Floating decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: "-20px",
                left: "-30px",
                width: "60px",
                height: "60px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-30px",
                width: "40px",
                height: "40px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "50%",
                zIndex: 0,
              }}
            />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heading
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                color="white"
                lineHeight="1.2"
                position="relative"
                zIndex={1}
              >
                Tinsaye S. Dessie
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.300"
                lineHeight="1.8"
                position="relative"
                zIndex={1}
              >
                Web Developer & UI/UX Designer passionate about creating seamless 
                digital experiences. 4+ years of building 30+ websites and applications 
                with a focus on performance, accessibility, and delightful user experiences.
              </Text>
            </motion.div>
          </VStack>
        </motion.div>

        {/* Animated Divider */}
        <motion.div
          animate={{
            scaleX: [0.5, 1, 0.5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Box
            h="1px"
            w="150px"
            bg="rgba(255, 255, 255, 0.2)"
            borderRadius="full"
            position="relative"
            overflow="hidden"
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "50%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
              }}
            />
          </Box>
        </motion.div>

        {/* Simple Projects Carousel */}
        <VStack spacing={6} w="100%" maxW="500px">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={{ width: "100%" }}
            >
              <VStack spacing={4} align="center">
                <Heading
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight="bold"
                  color="white"
                >
                  {topProjects[currentIndex].title}
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.400"
                >
                  {topProjects[currentIndex].description}
                </Text>
                <Link
                  href={topProjects[currentIndex].demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    size="sm"
                    bg="rgba(74, 90, 90, 0.8)"
                    color="white"
                    _hover={{ bg: "rgba(74, 90, 90, 1)" }}
                    borderRadius="md"
                    px={6}
                    fontSize="sm"
                    rightIcon={<Icon as={FaArrowRight} />}
                  >
                    View Demo
                  </Button>
                </Link>
              </VStack>
            </motion.div>
          </AnimatePresence>

          {/* Animated Indicators */}
          <HStack spacing={2}>
            {topProjects.map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentIndex(index)}
                style={{ cursor: "pointer" }}
              >
                <motion.div
                  animate={{
                    width: currentIndex === index ? "20px" : "6px",
                    backgroundColor: currentIndex === index 
                      ? "rgba(255, 255, 255, 1)" 
                      : "rgba(255, 255, 255, 0.3)",
                    scale: currentIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    scale: {
                      duration: 2,
                      repeat: currentIndex === index ? Infinity : 0,
                      ease: "easeInOut",
                    },
                  }}
                  style={{
                    height: "6px",
                    borderRadius: "999px",
                  }}
                />
              </motion.div>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </motion.div>
  );
}

export default function Home() {
  const navigationLinks = [
    { name: "My Resume", active: false, href: "/my-resume" },
    { name: "Blog", active: false, href: "/blog" },
    { name: "Projects", active: false, href: "/links" },
    { name: "Contact", active: false, href: "/contact-me" },
  ];


  return (
    <Box bg="#1a2e2e" minH="100vh" color="white">
      <Container maxW="1600px" py={16}>
        {/* Main Content Grid */}
        <Grid
          templateColumns={{ base: "1fr", lg: "200px 1fr 200px" }}
          gap={12}
          mb={24}
          alignItems="center"
          position="relative"
        >
          {/* Animated Decorative Background Elements */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "-20%",
              right: "10%",
              width: "400px",
              height: "400px",
              zIndex: 0,
            }}
          >
            <Box
              w="100%"
              h="100%"
              bg="rgba(74, 90, 90, 0.2)"
              borderRadius="full"
              filter="blur(80px)"
            />
          </motion.div>
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "5%",
              width: "300px",
              height: "300px",
              zIndex: 0,
            }}
          >
            <Box
              w="100%"
              h="100%"
              bg="rgba(74, 90, 90, 0.15)"
              borderRadius="full"
              filter="blur(60px)"
            />
          </motion.div>
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{
                position: "absolute",
                top: `${20 + i * 15}%`,
                left: `${10 + i * 12}%`,
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.4)",
                zIndex: 0,
              }}
            />
          ))}
          
          {/* Animated Grid Lines */}
          <Box
            position="absolute"
            inset={0}
            zIndex={0}
            opacity={0.1}
            pointerEvents="none"
          >
            <motion.svg
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0 }}
            >
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="white"
                strokeWidth="1"
                animate={{
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.line
                x1="0"
                y1="100%"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="1"
                animate={{
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.svg>
          </Box>

          {/* Left Section - Simplified */}
          <GridItem position="relative" zIndex={1} display={{ base: "none", lg: "block" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <VStack align="start" spacing={4}>
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Text fontSize="sm" color="gray.400" fontWeight="medium">
                    /01
                  </Text>
                </motion.div>
                <VStack align="start" spacing={3}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Text fontSize="lg" fontWeight="semibold" color="white">
                      Navigation
                    </Text>
                  </motion.div>
                  <VStack align="start" spacing={2}>
                    {navigationLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <Link href={link.href} style={{ textDecoration: "none" }}>
                          <ChakraLink
                            fontSize="sm"
                            color={link.active ? "white" : "gray.400"}
                            cursor="pointer"
                            _hover={{ color: "white" }}
                            transition="all 0.2s"
                            display="block"
                          >
                            {link.name}
                          </ChakraLink>
                        </Link>
                      </motion.div>
                    ))}
                  </VStack>
                </VStack>
              </VStack>
            </motion.div>
          </GridItem>

          {/* Center - About Me & Projects Carousel */}
          <GridItem position="relative" zIndex={1}>
            <CenterSection />
          </GridItem>

          {/* Right Section - Quick Stats */}
          <GridItem position="relative" zIndex={1} display={{ base: "none", lg: "block" }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <VStack align="end" spacing={6}>
                <VStack align="end" spacing={4}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <VStack align="end" spacing={1}>
                      <Text fontSize="sm" color="gray.400" fontWeight="medium">
                        Experience
                      </Text>
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Text fontSize="3xl" fontWeight="bold" color="white">
                          4+ Years
                        </Text>
                      </motion.div>
                    </VStack>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <VStack align="end" spacing={1}>
                      <Text fontSize="sm" color="gray.400" fontWeight="medium">
                        Projects
                      </Text>
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        <Text fontSize="3xl" fontWeight="bold" color="white">
                          30+
                        </Text>
                      </motion.div>
                    </VStack>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <VStack align="end" spacing={1}>
                      <Text fontSize="sm" color="gray.400" fontWeight="medium">
                        Satisfaction
                      </Text>
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      >
                        <Text fontSize="3xl" fontWeight="bold" color="white">
                          100%
                        </Text>
                      </motion.div>
                    </VStack>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <VStack align="end" spacing={1}>
                      <Text fontSize="sm" color="gray.400" fontWeight="medium">
                        SaaS Platforms
                      </Text>
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.5,
                        }}
                      >
                        <Text fontSize="3xl" fontWeight="bold" color="white">
                          4+
                        </Text>
                      </motion.div>
                    </VStack>
                  </motion.div>
                </VStack>
                <motion.div
                  animate={{
                    scaleX: [0.5, 1, 0.5],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Box
                    h="1px"
                    w="100px"
                    bg="rgba(255, 255, 255, 0.2)"
                    borderRadius="full"
                  />
                </motion.div>
                <Link href="/my-resume" style={{ textDecoration: "none" }}>
                  <Button
                    size="sm"
                    variant="outline"
                    borderColor="rgba(255, 255, 255, 0.2)"
                    color="white"
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.1)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                    borderRadius="md"
                    px={6}
                  >
                    View Resume
                  </Button>
                </Link>
              </VStack>
            </motion.div>
          </GridItem>
        </Grid>

        {/* Decorative Divider */}
        <Flex justify="center" align="center" my={20} position="relative">
          <Box
            h="1px"
            w="200px"
            bg="rgba(255, 255, 255, 0.2)"
            borderRadius="full"
            position="relative"
          >
            <Box
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              w="8px"
              h="8px"
              bg="white"
              borderRadius="full"
            />
          </Box>
        </Flex>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            bg="rgba(74, 90, 90, 0.2)"
            borderRadius="lg"
            py={16}
            px={8}
            mb={24}
            border="1px solid"
            borderColor="rgba(255, 255, 255, 0.1)"
            _hover={{
              borderColor: "rgba(255, 255, 255, 0.2)",
              bg: "rgba(74, 90, 90, 0.3)",
            }}
            transition="all 0.3s ease"
          >
            <VStack spacing={8}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Heading
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="white"
                  textAlign="center"
                >
                  Tools & Technologies
                </Heading>
                <Text
                  fontSize="md"
                  color="gray.300"
                  textAlign="center"
                  mt={2}
                >
                  Technologies I use to build modern web applications
                </Text>
              </motion.div>
              <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={6} w="100%">
                {[
                  { name: "JavaScript", icon: FaCode },
                  { name: "TypeScript", icon: FaCode },
                  { name: "React.js", icon: FaCode },
                  { name: "Next.js", icon: FaRocket },
                  { name: "Supabase", icon: FaRocket },
                  { name: "Shadcn UI", icon: FaPalette },
                  { name: "Mantine", icon: FaPalette },
                  { name: "Tailwind CSS", icon: FaPalette },
                  { name: "MUI", icon: FaPalette },
                  { name: "Chakra UI", icon: FaPalette },
                  { name: "Redux & RTK", icon: FaCode },
                  { name: "Zustand", icon: FaCode },
                  { name: "React Hook Form", icon: FaCheckCircle },
                  { name: "Zod", icon: FaCheckCircle },
                  { name: "Adobe XD", icon: FaPalette },
                ].map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <VStack
                      spacing={3}
                      p={6}
                      bg="rgba(26, 46, 46, 0.5)"
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.1)"
                      _hover={{
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        bg: "rgba(26, 46, 46, 0.7)",
                      }}
                      transition="all 0.3s ease"
                      cursor="pointer"
                      h="100%"
                    >
                      <motion.div
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon as={tool.icon} boxSize={8} color="gray.300" />
                      </motion.div>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="white"
                        textAlign="center"
                      >
                        {tool.name}
                      </Text>
                    </VStack>
                  </motion.div>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>
        </motion.div>

        {/* Decorative Divider */}
        <Flex justify="center" align="center" my={20} position="relative">
          <VStack spacing={2}>
            <Box
              h="60px"
              w="1px"
              bg="rgba(255, 255, 255, 0.2)"
              borderRadius="full"
            />
            <Box
              w="8px"
              h="8px"
              bg="white"
              borderRadius="full"
              opacity={0.6}
            />
            <Box
              h="60px"
              w="1px"
              bg="rgba(255, 255, 255, 0.2)"
              borderRadius="full"
            />
          </VStack>
        </Flex>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={12}
            mb={24}
            alignItems="center"
          >
          <GridItem>
            <VStack align="start" spacing={6}>
              <Badge
                bg="rgba(74, 90, 90, 0.8)"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
              >
                About Me
              </Badge>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                color="white"
                lineHeight="1.2"
              >
                Crafting Digital Experiences That Matter
              </Heading>
              <Text fontSize="lg" color="gray.300" lineHeight="1.8">
                I&apos;m a versatile web developer and adept UI/UX designer passionate about 
                creating seamless digital experiences. With expertise in modern web technologies, 
                I transform ideas into engaging, user-centric solutions.
              </Text>
              <Text fontSize="md" color="gray.400" lineHeight="1.8">
                My journey spans 4+ years of building 30+ websites and applications, 
                focusing on performance, accessibility, and delightful user experiences.
              </Text>
              <Link href="/contact-me" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  bg="rgba(74, 90, 90, 0.8)"
                  color="white"
                  _hover={{ bg: "rgba(74, 90, 90, 1)" }}
                  leftIcon={<Icon as={FaEnvelope} />}
                  borderRadius="md"
                  px={8}
                >
                  Get In Touch
                </Button>
              </Link>
            </VStack>
          </GridItem>

          <GridItem>
            <SimpleGrid columns={2} spacing={4}>
              {[
                {
                  icon: FaCode,
                  title: "Development",
                  description: "Building scalable, performant web applications with modern tech stacks.",
                },
                {
                  icon: FaPalette,
                  title: "Design",
                  description: "Creating beautiful, intuitive user experiences that users love.",
                },
                {
                  icon: FaRocket,
                  title: "Innovation",
                  description: "Transforming ideas into reality with cutting-edge solutions.",
                },
                {
                  icon: FaStar,
                  title: "Quality",
                  description: "Delivering high-quality solutions with attention to detail.",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Box
                    bg="rgba(74, 90, 90, 0.3)"
                    p={6}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.1)"
                    h="100%"
                    _hover={{
                      bg: "rgba(74, 90, 90, 0.5)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                    transition="all 0.3s ease"
                  >
                    <VStack spacing={4} align="start">
                      <Box
                        p={3}
                        borderRadius="xl"
                        bg="rgba(255, 255, 255, 0.1)"
                        color="white"
                      >
                        <Icon as={service.icon} boxSize={6} />
                      </Box>
                      <Heading size="md" color="white">
                        {service.title}
                      </Heading>
                      <Text color="gray.300" fontSize="sm" lineHeight="1.6">
                        {service.description}
                      </Text>
                    </VStack>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
        </motion.div>

        {/* Decorative Divider */}
        <Flex justify="center" align="center" my={20} position="relative">
          <HStack spacing={4} align="center">
            <Box
              h="1px"
              w="100px"
              bg="rgba(255, 255, 255, 0.2)"
              borderRadius="full"
            />
            <Box
              w="12px"
              h="12px"
              border="2px solid"
              borderColor="rgba(255, 255, 255, 0.3)"
              borderRadius="full"
              position="relative"
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="4px"
                h="4px"
                bg="white"
                borderRadius="full"
              />
            </Box>
            <Box
              h="1px"
              w="100px"
              bg="rgba(255, 255, 255, 0.2)"
              borderRadius="full"
            />
          </HStack>
        </Flex>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box mb={24}>
            <VStack spacing={8} align="start" mb={8}>
            <HStack spacing={4}>
              <Badge
                bg="rgba(74, 90, 90, 0.8)"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
              >
                <Icon as={FaStar} mr={2} />
                Featured Work
              </Badge>
            </HStack>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              color="white"
            >
              Projects That Make a Difference
            </Heading>
            <Text fontSize="lg" color="gray.300" lineHeight="1.8" maxW="3xl">
              A curated selection of my recent work, showcasing expertise in modern 
              web technologies and user-centered design principles.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
          >
            {[
              {
                title: "Muyalogy",
                demoLink: "https://muyalogy.com",
                description: "An online learning management system.",
                languages: ["JavaScript", "React", "Next.js", "Mantine", "Supabase", "Tailwind CSS"],
              },
              {
                title: "Jiret",
                demoLink: "https://jiret.com",
                description: "A SaaS Learning Management System.",
                languages: ["JavaScript", "React", "Next.js", "Mantine", "Tailwind CSS"],
              },
              {
                title: "Guzo School Management System",
                demoLink: "https://guzo-sms.vercel.app",
                description: "A saas school management system",
                languages: ["JavaScript", "React", "Next.js", "Mantine", "Tailwind CSS", "Supabase"],
              },
            ].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                languages={project.languages}
              />
            ))}
          </SimpleGrid>

          <Flex justify="center" mt={8}>
            <Link href="/links" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                bg="rgba(74, 90, 90, 0.8)"
                color="white"
                _hover={{ bg: "rgba(74, 90, 90, 1)" }}
                rightIcon={<Icon as={FaArrowRight} />}
                borderRadius="md"
                px={8}
              >
                View All Projects
              </Button>
            </Link>
          </Flex>
        </Box>
        </motion.div>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
