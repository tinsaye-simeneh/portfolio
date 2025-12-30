"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Spinner,
  useColorModeValue,
  Icon,
  Link,
  Badge,
} from "@chakra-ui/react";
import { 
  MdPhone, 
  MdEmail, 
  MdLocationOn, 
  MdAccessTime,
  MdLanguage 
} from "react-icons/md";
import { 
  BsGithub, 
  BsTelegram, 
  BsLinkedin,
  BsWhatsapp 
} from "react-icons/bs";
import { FaArrowLeft, FaPaperPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const sectionBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("orange.600", "orange.400");

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: MdPhone,
      label: "Phone",
      value: "+251-983779803",
      action: "tel:+251983779803",
      color: "green",
    },
    {
      icon: MdEmail,
      label: "Email",
      value: "tinsayesimeneh608@gmail.com",
      action: "mailto:tinsayesimeneh608@gmail.com",
      color: "blue",
    },
    {
      icon: MdLocationOn,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      action: null,
      color: "red",
    },
    {
      icon: MdAccessTime,
      label: "Timezone",
      value: "EAT (UTC+3)",
      action: null,
      color: "purple",
    },
  ];

  const socialLinks = [
    {
      icon: BsLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tinsayesimeneh/",
      color: "#0077B5",
    },
    {
      icon: BsGithub,
      label: "GitHub",
      url: "https://www.github.com/tinsaye-simeneh",
      color: "#333",
    },
    {
      icon: BsTelegram,
      label: "Telegram",
      url: "https://t.me/TinsayeSimeneh",
      color: "#0088CC",
    },
    {
      icon: BsWhatsapp,
      label: "WhatsApp",
      url: "https://wa.me/251983779803",
      color: "#25D366",
    },
  ];

  return (
    <Box minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <VStack spacing={6} textAlign="center">
            <Button
              leftIcon={<Icon as={FaArrowLeft} />}
              variant="ghost"
              alignSelf="flex-start"
              onClick={() => router.push('/')}
              mb={4}
            >
              Back to Home
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading 
                as="h1" 
                size="2xl" 
                color={headingColor}
                bgGradient={useColorModeValue(
                  "linear(to-r, orange.400, red.500, yellow.400)",
                  "linear(to-r, orange.300, red.400, yellow.300)"
                )}
                bgClip="text"
              >
                Let&apos;s Work Together
              </Heading>
            </motion.div>
            <Text 
              fontSize="xl" 
              color={textColor} 
              maxW="2xl"
              lineHeight="1.6"
            >
              Have a project in mind? I&apos;d love to hear from you. 
              Send me a message and let&apos;s discuss how we can bring your ideas to life.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="start">
            
            <VStack spacing={8} align="stretch">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")}
                  backdropFilter="blur(30px) saturate(180%)"
                  p={8}
                  borderRadius="2xl"
                  shadow="xl"
                  border="2px solid"
                  borderColor={useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.15)")}
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
                  <VStack spacing={6} align="stretch">
                    <VStack spacing={2} align="start">
                      <Heading size="lg" color={headingColor}>
                        Contact Information
                      </Heading>
                      <Text color={textColor}>
                        Feel free to reach out through any of these channels
                      </Text>
                    </VStack>

                  <VStack spacing={4} align="stretch">
                    {contactInfo.map((info, index) => (
                      info.action ? (
                        <Link
                          key={index}
                          href={info.action}
                          isExternal
                          _hover={{ textDecoration: "none" }}
                        >
                          <Box
                            p={4}
                            bg={cardBg}
                            borderRadius="xl"
                            border="1px"
                            borderColor={borderColor}
                            transition="all 0.3s ease"
                            _hover={{
                              transform: "translateY(-2px)",
                              shadow: "md",
                              borderColor: `${info.color}.300`
                            }}
                            cursor="pointer"
                          >
                            <HStack spacing={4}>
                              <Box
                                p={3}
                                borderRadius="lg"
                                bg={`${info.color}.100`}
                                color={`${info.color}.600`}
                              >
                                <Icon as={info.icon} boxSize={5} />
                              </Box>
                              <VStack align="start" spacing={0}>
                                <Text fontSize="sm" color={textColor} fontWeight="medium">
                                  {info.label}
                                </Text>
                                <Text fontWeight="bold" color={headingColor}>
                                  {info.value}
                                </Text>
                              </VStack>
                            </HStack>
                          </Box>
                        </Link>
                      ) : (
                        <Box
                          key={index}
                          p={4}
                          bg={cardBg}
                          borderRadius="xl"
                          border="1px"
                          borderColor={borderColor}
                          cursor="default"
                        >
                          <HStack spacing={4}>
                            <Box
                              p={3}
                              borderRadius="lg"
                              bg={`${info.color}.100`}
                              color={`${info.color}.600`}
                            >
                              <Icon as={info.icon} boxSize={5} />
                            </Box>
                            <VStack align="start" spacing={0}>
                              <Text fontSize="sm" color={textColor} fontWeight="medium">
                                {info.label}
                              </Text>
                              <Text fontWeight="bold" color={headingColor}>
                                {info.value}
                              </Text>
                            </VStack>
                          </HStack>
                        </Box>
                      )
                    ))}
                  </VStack>
                </VStack>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Box
                  bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")}
                  backdropFilter="blur(30px) saturate(180%)"
                  p={8}
                  borderRadius="2xl"
                  shadow="xl"
                  border="2px solid"
                  borderColor={useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.15)")}
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
                  <VStack spacing={6} align="stretch">
                    <VStack spacing={2} align="start">
                      <Heading size="lg" color={headingColor}>
                        Connect With Me
                      </Heading>
                      <Text color={textColor}>
                        Follow me on social media for updates
                      </Text>
                    </VStack>

                  <SimpleGrid columns={2} spacing={4}>
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        as={Link}
                        href={social.url}
                        isExternal
                        variant="outline"
                        size="lg"
                        leftIcon={<Icon as={social.icon} />}
                        borderRadius="xl"
                        _hover={{
                          bg: social.color,
                          color: "white",
                          borderColor: social.color,
                          transform: "translateY(-2px)",
                          shadow: "lg",
                          textDecoration: "none"
                        }}
                        transition="all 0.3s ease"
                      >
                        {social.label}
                      </Button>
                    ))}
                  </SimpleGrid>
                </VStack>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Box
                  bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")}
                  backdropFilter="blur(30px) saturate(180%)"
                  p={6}
                  borderRadius="xl"
                  border="2px solid"
                  borderColor={useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.15)")}
                  shadow="lg"
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    bgGradient: "linear(to-r, orange.400, red.500, yellow.400)",
                  }}
                >
                  <VStack spacing={4}>
                    <Box
                      p={3}
                      borderRadius="lg"
                      bgGradient="linear(to-r, yellow.400, orange.500)"
                      color="white"
                    >
                      <Icon as={MdLanguage} boxSize={6} />
                    </Box>
                    <VStack spacing={2} textAlign="center">
                      <Text fontWeight="bold" color={headingColor}>
                        Languages
                      </Text>
                      <HStack spacing={2} flexWrap="wrap" justify="center">
                        <Badge 
                          bgGradient="linear(to-r, orange.400, red.500)"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontWeight="bold"
                        >
                          English
                        </Badge>
                        <Badge 
                          bgGradient="linear(to-r, red.400, yellow.500)"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontWeight="bold"
                        >
                          Amharic
                        </Badge>
                      </HStack>
                    </VStack>
                  </VStack>
                </Box>
              </motion.div>
            </VStack>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box
                bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)")}
                backdropFilter="blur(30px) saturate(180%)"
                borderRadius="2xl"
                shadow="xl"
                border="2px solid"
                borderColor={useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 0.15)")}
                overflow="hidden"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bgGradient: "linear(to-r, orange.400, red.500, yellow.400)",
                  zIndex: 1,
                }}
              >
              <Box p={8} pb={4}>
                <VStack spacing={4} align="start">
                  <HStack spacing={3}>
                    <Box
                      p={2}
                      borderRadius="lg"
                      bgGradient="linear(to-r, orange.400, red.500)"
                      color="white"
                    >
                      <Icon as={FaPaperPlane} boxSize={5} />
                    </Box>
                    <Heading size="lg" color={headingColor}>
                      Send a Message
                    </Heading>
                  </HStack>
                  <Text color={textColor}>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </Text>
                </VStack>
              </Box>

              <Box position="relative">
                {isLoading && (
                  <Box 
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg={sectionBg}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    zIndex={2}
                    borderRadius="xl"
                    m={4}
                  >
                    <VStack spacing={4}>
                      <Spinner
                        size="xl"
                        thickness="4px"
                        speed="0.65s"
                        color="orange.500"
                        emptyColor="gray.200"
                      />
                      <Text color={textColor} fontWeight="medium">
                        Loading contact form...
                      </Text>
                      <Button 
                        onClick={handleIframeLoad}
                        bgGradient="linear(to-r, orange.400, orange.600)"
                        color="white"
                        size="sm"
                        _hover={{
                          bgGradient: "linear(to-r, orange.500, orange.700)",
                        }}
                        borderRadius="full"
                      >
                        Retry
                      </Button>
                    </VStack>
                  </Box>
                )}

                <Box p={4}>
                  <Box
                    as="iframe"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScZ2tGwNNTRUIBSo3DjeoH-gNXFbCfEgDO7C2uEwq1pOwTvnA/viewform?embedded=true"
                    w="100%"
                    h="600px"
                    border="none"
                    borderRadius="12px"
                    display={isLoading ? "none" : "block"}
                    onLoad={handleIframeLoad}
                  />
                </Box>
              </Box>
              </Box>
            </motion.div>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
