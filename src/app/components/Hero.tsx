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
  chakra,
  Badge,
  SimpleGrid
} from "@chakra-ui/react";
import { FaDownload, FaEye, FaGithub, FaLinkedin, FaCode, FaPalette, FaRocket, FaCheckCircle, FaStar, FaUsers } from "react-icons/fa";
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
          spacing={{ base: 4, md: 6 }}
          py={{ base: 12, md: 16 }}
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
            style={{ width: "100%" }}
          >
            <Box
              maxW="4xl"
              mx="auto"
              position="relative"
            >
              <Box
                bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")}
                backdropFilter="blur(30px) saturate(180%)"
                borderRadius="2xl"
                p={{ base: 5, md: 7 }}
                border="2px solid"
                borderColor={useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.15)")}
                boxShadow="0 20px 60px 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2) inset"
                position="relative"
                overflow="hidden"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 25px 70px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.3) inset",
                }}
                transition="all 0.3s ease"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bgGradient: "linear(to-r, orange.400, red.500, yellow.400)",
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "300px",
                  height: "300px",
                  borderRadius: "full",
                  bgGradient: "linear(to-br, orange.200, red.200)",
                  filter: "blur(80px)",
                  opacity: 0.2,
                  zIndex: 0,
                }}
              >
                <VStack spacing={4} align="center" position="relative" zIndex={1}>
                  {/* Stats Badges with Icons */}
                  <Flex wrap="wrap" gap={2}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        bgGradient="linear(to-r, orange.400, red.500)"
                        color="white"
                        px={5}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                        boxShadow="lg"
                        display="flex"
                        alignItems="center"
                        gap={2}
                      >
                        <Icon as={FaRocket} />
                        30+ Projects Delivered
                      </Badge>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        bgGradient="linear(to-r, red.400, yellow.500)"
                        color="white"
                        px={5}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                        boxShadow="lg"
                        display="flex"
                        alignItems="center"
                        gap={2}
                      >
                        <Icon as={FaCheckCircle} />
                        4 Years Experience
                      </Badge>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        bgGradient="linear(to-r, yellow.400, orange.500)"
                        color="white"
                        px={5}
                        py={2}
                        borderRadius="full"
                        fontSize="sm"
                        fontWeight="bold"
                        boxShadow="lg"
                        display="flex"
                        alignItems="center"
                        gap={2}
                      >
                        <Icon as={FaStar} />
                        100% Satisfaction
                      </Badge>
                    </motion.div>
                  </Flex>
                  
                  {/* Main Description */}
                  <Text 
                    color={useColorModeValue("gray.700", "gray.200")} 
                    fontSize={{ base: "md", md: "lg" }}
                    lineHeight="1.8"
                    fontWeight={500}
                  >
                    I&apos;m a passionate{" "}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      style={{ display: "inline-block" }}
                    >
                      <chakra.span
                        bgGradient="linear(to-r, orange.400, red.500)"
                        bgClip="text"
                        fontWeight="bold"
                        fontSize="1.1em"
                      >
                        Full-Stack Developer
                      </chakra.span>
                    </motion.span>
                    {" "}and{" "}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      style={{ display: "inline-block" }}
                    >
                      <chakra.span
                        bgGradient="linear(to-r, red.400, yellow.500)"
                        bgClip="text"
                        fontWeight="bold"
                        fontSize="1.1em"
                      >
                        UI/UX Designer
                      </chakra.span>
                    </motion.span>
                    {" "}dedicated to crafting exceptional digital experiences. 
                    With a focus on{" "}
                    <chakra.span
                      color={useColorModeValue("orange.600", "orange.400")}
                      fontWeight="bold"
                      position="relative"
                      _after={{
                        content: '""',
                        position: "absolute",
                        bottom: "-2px",
                        left: 0,
                        right: 0,
                        height: "2px",
                        bgGradient: "linear(to-r, orange.400, red.500)",
                        borderRadius: "full",
                        opacity: 0.6,
                      }}
                    >
                      seamless, user-centric solutions
                    </chakra.span>
                    , I transform ideas into beautiful, functional web applications using cutting-edge technologies.
                  </Text>
                  
                  {/* Feature Pills with Icons */}
                  <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={3} w="full" pt={1}>
                    {[
                      { icon: FaCode, label: "Modern Stack", gradient: "linear(to-r, orange.400, red.500)" },
                      { icon: FaPalette, label: "Responsive Design", gradient: "linear(to-r, red.400, yellow.500)" },
                      { icon: FaRocket, label: "Performance Focused", gradient: "linear(to-r, yellow.400, orange.500)" },
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <HStack
                          spacing={3}
                          p={3}
                          borderRadius="xl"
                          bg={useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.05)")}
                          border="1px solid"
                          borderColor={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.1)")}
                          _hover={{
                            bg: useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.1)"),
                            borderColor: useColorModeValue("orange.300", "orange.600"),
                            transform: "translateY(-2px)",
                          }}
                          transition="all 0.2s ease"
                        >
                          <Box
                            p={2}
                            borderRadius="lg"
                            bgGradient={feature.gradient}
                            color="white"
                            boxShadow="md"
                          >
                            <Icon as={feature.icon} boxSize={4} />
                          </Box>
                          <Text 
                            fontSize="sm" 
                            color={useColorModeValue("gray.700", "gray.300")} 
                            fontWeight="semibold"
                          >
                            {feature.label}
            </Text>
                        </HStack>
                      </motion.div>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Flex wrap="wrap" justify="center" gap={2} maxW="2xl" display={{ base: "none", md: "flex" }}>
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
              gap={3} 
              pt={2} 
              w="full"
              justify="center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size={{ base: "md", md: "lg" }}
                  rounded={"full"}
                  px={{ base: 6, md: 8 }}
                  py={{ base: 5, md: 6 }}
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
                  size={{ base: "md", md: "lg" }}
                  rounded={"full"}
                  px={{ base: 6, md: 8 }}
                  py={{ base: 5, md: 6 }}
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
            <HStack spacing={4} pt={3}>
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
