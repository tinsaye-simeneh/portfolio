"use client";

import { 
  Box, 
  Text, 
  Link, 
  Flex, 
  VStack, 
  HStack, 
  IconButton,
  Divider,
  Container,
  SimpleGrid,
  Heading,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTelegram, 
  FaHeart, 
  FaCode,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const bgGradient = useColorModeValue(
    "linear(to-b, gray.50, white)",
    "linear(to-b, gray.900, gray.800)"
  );
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");
  const linkColor = useColorModeValue("orange.600", "orange.400");
  const hoverBg = useColorModeValue("orange.50", "orange.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/tinsaye-simeneh",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/tinsayesimeneh",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: FaTelegram,
      href: "https://t.me/TinsayeSimeneh",
      label: "Telegram",
      color: "#0088CC"
    },
  ];

  const quickLinks = [
    { label: "My Resume", href: "/my-resume" },
    { label: "Blog Posts", href: "/blog" },
    { label: "All Projects", href: "/links" },
    { label: "Contact Me", href: "/contact-me" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <Box 
      bgGradient={bgGradient}
      borderTop="1px" 
      borderColor={borderColor} 
      mt="auto"
      position="relative"
      overflow="hidden"
    >
      {/* Enhanced decorative background elements */}
      <motion.div
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "400px",
          height: "400px",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
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
          bgGradient={useColorModeValue(
            "linear(to-br, orange.200, red.200)",
            "linear(to-br, orange.800, red.800)"
          )}
          filter="blur(100px)"
        />
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-120px",
          width: "350px",
          height: "350px",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1],
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
          bgGradient={useColorModeValue(
            "linear(to-br, yellow.200, orange.200)",
            "linear(to-br, yellow.800, orange.800)"
          )}
          filter="blur(90px)"
        />
      </motion.div>
      <Box
        position="absolute"
        top="20%"
        left="50%"
        transform="translateX(-50%)"
        width="200px"
        height="200px"
        borderRadius="full"
        bgGradient={useColorModeValue(
          "linear(to-br, red.200, orange.200)",
          "linear(to-br, red.800, orange.800)"
        )}
        opacity={0.08}
        filter="blur(80px)"
      />

      <Container maxW="container.xl" py={16} position="relative" zIndex={1}>
        <VStack spacing={12}>
          {/* Top Section - Brand and Social with Cards */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full">
            {/* Brand Section - Card Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                bg={cardBg}
                p={8}
                borderRadius="2xl"
                border="1px solid"
                borderColor={cardBorder}
                shadow="lg"
                position="relative"
                overflow="hidden"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Box
                  position="absolute"
                  top="-50px"
                  right="-50px"
                  width="150px"
                  height="150px"
                  borderRadius="full"
                  bgGradient="linear(to-br, orange.200, red.200)"
                  filter="blur(60px)"
                  opacity={0.3}
                />
                <VStack align="start" spacing={5} position="relative" zIndex={1}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Text
                      fontSize="4xl"
                      fontWeight="bold"
                      bgGradient={useColorModeValue(
                        "linear(to-r, orange.400, red.500, yellow.400)",
                        "linear(to-r, orange.300, red.400, yellow.300)"
                      )}
                      bgClip="text"
                      letterSpacing="-0.02em"
                      cursor="pointer"
                    >
                      TSD.
                    </Text>
                  </motion.div>
                  <Text 
                    color={textColor} 
                    fontSize="md" 
                    lineHeight="1.8"
                    maxW="md"
                  >
                  Web Developer & UI/UX Designer passionate about creating 
                    exceptional digital experiences.
                  </Text>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      bgGradient={useColorModeValue(
                        "linear(to-r, orange.400, red.500)",
                        "linear(to-r, orange.500, red.600)"
                      )}
                      color="white"
                      px={5}
                      py={2}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="bold"
                      boxShadow="md"
                    >
                      ✨ Open for collaboration and employment
                    </Badge>
                  </motion.div>
                </VStack>
              </Box>
            </motion.div>

            {/* Social Icons - Card Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                bg={cardBg}
                p={8}
                borderRadius="2xl"
                border="1px solid"
                borderColor={cardBorder}
                shadow="lg"
                position="relative"
                overflow="hidden"
                _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
              >
                <Box
                  position="absolute"
                  bottom="-50px"
                  left="-50px"
                  width="150px"
                  height="150px"
                  borderRadius="full"
                  bgGradient="linear(to-br, yellow.200, orange.200)"
                  filter="blur(60px)"
                  opacity={0.3}
                />
                <VStack align={{ base: "center", lg: "start" }} spacing={5} position="relative" zIndex={1}>
                  <Heading 
                    size="md" 
                    color={headingColor} 
                    fontWeight="bold"
                    bgGradient={useColorModeValue(
                      "linear(to-r, orange.400, red.500)",
                      "linear(to-r, orange.300, red.400)"
                    )}
                    bgClip="text"
                  >
                    Connect With Me
                  </Heading>
                  <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -5, rotate: [0, -10, 10, 0] }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Box
                          as="a"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          p={4}
                          borderRadius="xl"
                          bgGradient={useColorModeValue(
                            "linear(to-br, orange.50, red.50)",
                            "linear(to-br, orange.900, red.900)"
                          )}
                          border="2px solid"
                          borderColor={useColorModeValue("orange.200", "orange.700")}
                          color={linkColor}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          _hover={{
                            bgGradient: useColorModeValue(
                              "linear(to-br, orange.100, red.100)",
                              "linear(to-br, orange.800, red.800)"
                            ),
                            borderColor: linkColor,
                            transform: "translateY(-3px)",
                            boxShadow: "lg",
                          }}
                          transition="all 0.3s ease"
                        >
                          <social.icon size="24px" />
                        </Box>
                      </motion.div>
                    ))}
                  </HStack>
                </VStack>
              </Box>
            </motion.div>
          </SimpleGrid>

          {/* Middle Section - Links and Contact with Cards */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            {/* Quick Links - Card Style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                bg={cardBg}
                p={6}
                borderRadius="2xl"
                border="1px solid"
                borderColor={cardBorder}
                shadow="md"
                _hover={{ shadow: "lg" }}
                transition="all 0.3s ease"
              >
                <VStack align="start" spacing={5}>
                  <Heading 
                    size="md" 
                    color={headingColor} 
                    fontWeight="bold"
                    bgGradient={useColorModeValue(
                      "linear(to-r, orange.400, red.500)",
                      "linear(to-r, orange.300, red.400)"
                    )}
                    bgClip="text"
                  >
                    Quick Links
                  </Heading>
                  <SimpleGrid columns={2} spacing={4} w="full">
                    {quickLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 4, scale: 1.02 }}
                      >
                        <Link
                          href={link.href}
                          color={textColor}
                          fontSize="sm"
                          fontWeight="semibold"
                          display="flex"
                          alignItems="center"
                          p={3}
                          borderRadius="lg"
                          bg={useColorModeValue("gray.50", "gray.700")}
                          _hover={{ 
                            color: linkColor,
                            bg: hoverBg,
                            textDecoration: "none",
                            transform: "translateX(4px)",
                          }}
                          transition="all 0.2s ease"
                        >
                          <Text as="span" mr={2}>→</Text>
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </motion.div>

            {/* Contact Info - Card Style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                bg={cardBg}
                p={6}
                borderRadius="2xl"
                border="1px solid"
                borderColor={cardBorder}
                shadow="md"
                _hover={{ shadow: "lg" }}
                transition="all 0.3s ease"
              >
                <VStack align="start" spacing={5}>
                  <Heading 
                    size="md" 
                    color={headingColor} 
                    fontWeight="bold"
                    bgGradient={useColorModeValue(
                      "linear(to-r, orange.400, red.500)",
                      "linear(to-r, orange.300, red.400)"
                    )}
                    bgClip="text"
                  >
                    Get in Touch
                  </Heading>
                  <VStack align="start" spacing={4} w="full">
                    <motion.div
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        as="a"
                        href="mailto:tinsayesimeneh608@gmail.com"
                        display="flex"
                        alignItems="center"
                        p={4}
                        borderRadius="xl"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="1px solid"
                        borderColor={cardBorder}
                        _hover={{
                          bg: hoverBg,
                          borderColor: linkColor,
                          transform: "translateX(4px)",
                        }}
                        transition="all 0.2s ease"
                        w="full"
                      >
                        <Box
                          p={3}
                          borderRadius="lg"
                          bgGradient="linear(to-br, orange.400, red.500)"
                          color="white"
                          mr={4}
                        >
                          <FaEnvelope size="18px" />
                        </Box>
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="medium"
                          flex={1}
                        >
                          tinsayesimeneh608@gmail.com
                        </Text>
                      </Box>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        as="a"
                        href="tel:+251983779803"
                        display="flex"
                        alignItems="center"
                        p={4}
                        borderRadius="xl"
                        bg={useColorModeValue("gray.50", "gray.700")}
                        border="1px solid"
                        borderColor={cardBorder}
                        _hover={{
                          bg: hoverBg,
                          borderColor: linkColor,
                          transform: "translateX(4px)",
                        }}
                        transition="all 0.2s ease"
                        w="full"
                      >
                        <Box
                          p={3}
                          borderRadius="lg"
                          bgGradient="linear(to-br, red.400, orange.500)"
                          color="white"
                          mr={4}
                        >
                          <FaPhone size="18px" />
                        </Box>
                        <Text
                          color={textColor}
                          fontSize="sm"
                          fontWeight="medium"
                          flex={1}
                        >
                          +251-983779803
                        </Text>
                      </Box>
                    </motion.div>
                    
                    <Box
                      display="flex"
                      alignItems="center"
                      p={4}
                      borderRadius="xl"
                      bg={useColorModeValue("gray.50", "gray.700")}
                      border="1px solid"
                      borderColor={cardBorder}
                      w="full"
                    >
                      <Box
                        p={3}
                        borderRadius="lg"
                        bgGradient="linear(to-br, yellow.400, orange.500)"
                        color="white"
                        mr={4}
                      >
                        <Text fontSize="18px">📍</Text>
                      </Box>
                      <Text color={textColor} fontSize="sm" fontWeight="medium">
                        Addis Ababa, Ethiopia
                      </Text>
                    </Box>
                  </VStack>
                </VStack>
              </Box>
            </motion.div>
          </SimpleGrid>

          {/* Tech Stack - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ width: "100%" }}
          >
            <Box
              bg={cardBg}
              p={6}
              borderRadius="2xl"
              border="1px solid"
              borderColor={cardBorder}
              shadow="md"
              w="full"
            >
              <VStack spacing={4} align={{ base: "center", md: "start" }}>
                <Text 
                  color={headingColor} 
                  fontSize="sm" 
                  fontWeight="bold" 
                  textTransform="uppercase" 
                  letterSpacing="wide"
                  bgGradient={useColorModeValue(
                    "linear(to-r, orange.400, red.500)",
                    "linear(to-r, orange.300, red.400)"
                  )}
                  bgClip="text"
                >
                  Built with:
                </Text>
                <HStack spacing={3} flexWrap="wrap" justify={{ base: "center", md: "flex-start" }}>
                  {["Next.js", "Chakra UI", "TypeScript"].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge 
                        bgGradient={useColorModeValue(
                          index === 0 ? "linear(to-r, orange.400, orange.600)" :
                          index === 1 ? "linear(to-r, red.400, red.600)" :
                          "linear(to-r, yellow.400, yellow.600)",
                          index === 0 ? "linear(to-r, orange.500, orange.700)" :
                          index === 1 ? "linear(to-r, red.500, red.700)" :
                          "linear(to-r, yellow.500, yellow.700)"
                        )}
                        color="white"
                        px={4}
                        py={2}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
                        transition="all 0.2s ease"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </HStack>
              </VStack>
            </Box>
          </motion.div>
        </VStack>

        <Box
          bgGradient={useColorModeValue(
            "linear(to-r, orange.50, red.50, yellow.50)",
            "linear(to-r, orange.900, red.900, yellow.900)"
          )}
          borderRadius="xl"
          p={6}
          mt={8}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg={useColorModeValue("whiteAlpha.600", "blackAlpha.300")}
            backdropFilter="blur(10px)"
            borderRadius="xl"
          />
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
            position="relative"
            zIndex={1}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <HStack spacing={2} fontSize="sm" color={headingColor} fontWeight="medium">
                <Text>© {currentYear} Tinsaye Simeneh. Made with</Text>
                <motion.span
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <FaHeart color="#ef4444" size="16px" />
                </motion.span>
                <Text>in Ethiopia 🇪🇹</Text>
              </HStack>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <HStack 
                spacing={4} 
                fontSize="sm" 
                color={headingColor}
                fontWeight="medium"
              >
                <HStack 
                  spacing={2}
                  px={3}
                  py={1.5}
                  borderRadius="lg"
                  bg={useColorModeValue("whiteAlpha.500", "blackAlpha.300")}
                >
                  <FaCode size="14px" />
                  <Text>Open Source</Text>
                </HStack>
                <Link
                  href="https://github.com/tinsaye-simeneh/portfolio"
                  isExternal
                  fontWeight="bold"
                  px={4}
                  py={1.5}
                  borderRadius="lg"
                  bg={useColorModeValue("whiteAlpha.500", "blackAlpha.300")}
                  _hover={{ 
                    color: linkColor,
                    bg: useColorModeValue("whiteAlpha.700", "blackAlpha.500"),
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s ease"
                >
                  View Source
                </Link>
              </HStack>
            </motion.div>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;