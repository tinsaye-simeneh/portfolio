"use client";

import { 
  Container, 
  Heading,
  Text, 
  Button, 
  Box,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Flex,
  chakra
} from "@chakra-ui/react";
import { FaDownload, FaEye, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CallToActionWithIllustration() {
  const bgGradient = useColorModeValue(
    "linear(to-r, orange.50, red.50, yellow.50)",
    "linear(to-r, orange.900, red.900, yellow.900)"
  );
  
  const techPillBg = useColorModeValue("white", "gray.700");
  const techPillBorder = useColorModeValue("gray.200", "gray.600");
  const techPillColor = useColorModeValue("gray.700", "gray.300");
  
  return (
    <Box
      bgGradient={bgGradient}
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <motion.div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Box
          width="100%"
          height="100%"
          borderRadius="full"
          bg="orange.100"
          opacity={0.3}
          filter="blur(100px)"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "200px",
          height: "200px",
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Box
          width="100%"
          height="100%"
          borderRadius="full"
          bg="red.100"
          opacity={0.3}
          filter="blur(80px)"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          right: "30%",
          width: "150px",
          height: "150px",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Box
          width="100%"
          height="100%"
          borderRadius="full"
          bg="yellow.100"
          opacity={0.2}
          filter="blur(90px)"
        />
      </motion.div>
      
      <Container maxW={"6xl"} zIndex={1}>
        <VStack
          textAlign={"center"}
          spacing={{ base: 8, md: 12 }}
          py={{ base: 20, md: 28 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Box
              bg={useColorModeValue("white", "gray.800")}
              px={4}
              py={2}
              borderRadius="full"
              border="1px"
              borderColor={useColorModeValue("gray.200", "gray.600")}
              shadow="sm"
            >
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                👋 Welcome to my portfolio
              </Text>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <VStack spacing={4}>
              <Heading
                fontWeight={700}
                fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
                lineHeight={"95%"}
                letterSpacing="-0.02em"
              >
                Hi there! <br />
                <chakra.span
                  as={motion.span}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition="all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.4s"
                  display="inline-block"
                  bgGradient="linear(to-r, orange.400, red.500, yellow.400)"
                  bgClip="text"
                  fontWeight={800}
                >
                  I&apos;m Tinsaye S. Dessie
                </chakra.span>
              </Heading>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Text 
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight={500}
                  color={useColorModeValue("orange.600", "orange.300")}
                >
                  Web Developer & UI/UX Designer
                </Text>
              </motion.div>
            </VStack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Text 
              color={useColorModeValue("gray.600", "gray.300")} 
              maxW={"4xl"}
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="1.8"
            >
              A passionate web developer and UI/UX designer with 3-4 years of experience
              crafting digital experiences. I&apos;ve built 30+ websites, focusing on seamless, 
              user-centric solutions using modern technologies like React.js, Next.js, 
              TypeScript, and more.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Flex wrap="wrap" justify="center" gap={2} maxW="2xl">
              {["React.js", "Next.js", "TypeScript", "Supabase", "Tailwind CSS"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box
                    px={3}
                    py={1}
                    bg={techPillBg}
                    borderRadius="full"
                    fontSize="sm"
                    border="1px"
                    borderColor={techPillBorder}
                    color={techPillColor}
                    cursor="pointer"
                  >
                    {tech}
                  </Box>
                </motion.div>
              ))}
            </Flex>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Flex 
              direction={{ base: "column", sm: "row" }}
              gap={4} 
              pt={4} 
              w="full"
              justify="center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  rounded={"full"}
                  px={8}
                  py={6}
                  w={{ base: "full", sm: "auto" }}
                  colorScheme={"orange"}
                  bgGradient="linear(to-r, orange.400, orange.600)"
                  _hover={{ 
                    bgGradient: "linear(to-r, orange.500, orange.700)",
                    shadow: "xl"
                  }}
                  _active={{ transform: "translateY(0)" }}
                  transition="all 0.3s ease"
                  leftIcon={<Icon as={FaDownload} />}
                  as={"a"}
                  href={"/my-resume"}
                >
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  rounded={"full"}
                  px={8}
                  py={6}
                  w={{ base: "full", sm: "auto" }}
                  variant="outline"
                  borderWidth={2}
                  borderColor={useColorModeValue("gray.300", "gray.600")}
                  bg={useColorModeValue("white", "gray.800")}
                  color={useColorModeValue("gray.800", "white")}
                  _hover={{ 
                    bg: useColorModeValue("gray.50", "gray.700"),
                    shadow: "lg"
                  }}
                  _active={{ transform: "translateY(0)" }}
                  transition="all 0.3s ease"
                  leftIcon={<Icon as={FaEye} />}
                  as={"a"}
                  href={"/links"}
                >
                  View Projects
                </Button>
              </motion.div>
            </Flex>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <HStack spacing={4} pt={6}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  as="a"
                  href="#"
                  variant="ghost"
                  size="md"
                  leftIcon={<Icon as={FaGithub} />}
                  _hover={{ color: "orange.500" }}
                >
                  GitHub
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  as="a"
                  href="#"
                  variant="ghost"
                  size="md"
                  leftIcon={<Icon as={FaLinkedin} />}
                  _hover={{ color: "orange.500" }}
                >
                  LinkedIn
                </Button>
              </motion.div>
            </HStack>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
