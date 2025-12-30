"use client";

import { 
  Box, 
  Text, 
  Link, 
  Flex, 
  VStack, 
  HStack, 
  Container,
  SimpleGrid,
  Heading,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { 
  FaHeart, 
  FaCode,
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
  const cardBgGradient1 = useColorModeValue(
    "linear(to-br, orange.200, red.200)",
    "linear(to-br, orange.800, red.800)"
  );
  const cardBgGradient2 = useColorModeValue(
    "linear(to-br, yellow.200, orange.200)",
    "linear(to-br, yellow.800, orange.800)"
  );
  const cardBgGradient3 = useColorModeValue(
    "linear(to-br, red.200, orange.200)",
    "linear(to-br, red.800, orange.800)"
  );
  const cardBgValue = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const cardBorderValue = useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.15)");
  const linkBgValue = useColorModeValue("gray.50", "gray.700");
  const badgeGradient1 = useColorModeValue(
    "linear(to-r, orange.400, red.500)",
    "linear(to-r, orange.500, red.600)"
  );
  const badgeGradient2 = useColorModeValue(
    "linear(to-r, orange.400, red.500)",
    "linear(to-r, orange.300, red.400)"
  );
  const badgeGradientOrange = useColorModeValue(
    "linear(to-r, orange.400, orange.600)",
    "linear(to-r, orange.500, orange.700)"
  );
  const badgeGradientRed = useColorModeValue(
    "linear(to-r, red.400, red.600)",
    "linear(to-r, red.500, red.700)"
  );
  const badgeGradientYellow = useColorModeValue(
    "linear(to-r, yellow.400, yellow.600)",
    "linear(to-r, yellow.500, yellow.700)"
  );

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
          bgGradient={cardBgGradient1}
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
          bgGradient={cardBgGradient2}
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
        bgGradient={cardBgGradient3}
        opacity={0.08}
        filter="blur(80px)"
      />

      <Container maxW="container.xl" py={16} position="relative" zIndex={1}>
        <VStack spacing={12}>
          {/* All Cards in One Row */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="full">
            {/* Brand Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                bg={cardBgValue}
                backdropFilter="blur(30px) saturate(180%)"
                p={6}
                borderRadius="2xl"
                border="2px solid"
                borderColor={cardBorderValue}
                shadow="xl"
                position="relative"
                overflow="hidden"
                h="full"
                _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
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
                <VStack align={{ base: "center", md: "start" }} spacing={4} position="relative" zIndex={1}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Text
                      fontSize="3xl"
                      fontWeight="bold"
                      bgGradient={badgeGradient1}
                      bgClip="text"
                      letterSpacing="-0.02em"
                      cursor="pointer"
                      textAlign={{ base: "center", md: "left" }}
                    >
                      TSD.
                    </Text>
                  </motion.div>
                  <Text 
                    color={textColor} 
                    fontSize="sm" 
                    lineHeight="1.7"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    Web Developer & UI/UX Designer passionate about creating 
                    exceptional digital experiences.
                  </Text>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      bgGradient={badgeGradient1}
                      color="white"
                      px={4}
                      py={1.5}
                      borderRadius="full"
                      fontSize="xs"
                      fontWeight="bold"
                      boxShadow="md"
                    >
                      ✨ Open for collaboration
                    </Badge>
                  </motion.div>
                </VStack>
              </Box>
            </motion.div>

            {/* Quick Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box
                bg={cardBgValue}
                backdropFilter="blur(30px) saturate(180%)"
                p={6}
                borderRadius="2xl"
                border="2px solid"
                borderColor={cardBorderValue}
                shadow="xl"
                _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
                h="full"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bgGradient: "linear(to-r, orange.400, red.500, yellow.400)",
                }}
              >
                <VStack align="start" spacing={4} h="full">
                  <Heading 
                    size="md" 
                    color={headingColor} 
                    fontWeight="bold"
                    bgGradient={badgeGradient2}
                    bgClip="text"
                  >
                    Quick Links
                  </Heading>
                  <VStack spacing={3} w="full" align="stretch">
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
                          bg={linkBgValue}
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
                  </VStack>
                </VStack>
              </Box>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box
                bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")}
                backdropFilter="blur(30px) saturate(180%)"
                p={6}
                borderRadius="2xl"
                border="2px solid"
                borderColor={useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.15)")}
                shadow="xl"
                _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
                transition="all 0.3s ease"
                h="full"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bgGradient: "linear(to-r, orange.400, red.500, yellow.400)",
                }}
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
                        bgGradient={
                          index === 0 ? badgeGradientOrange :
                          index === 1 ? badgeGradientRed :
                          badgeGradientYellow
                        }
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
          </SimpleGrid>
        </VStack>

        <Box
          bgGradient={bgGradient}
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
            bg={cardBgValue}
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
                  bg={cardBgValue}
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
                  bg={cardBgValue}
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