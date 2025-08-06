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

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const sectionBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("blue.600", "blue.400");

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
            
            <Heading 
              as="h1" 
              size="2xl" 
              color={headingColor}
              bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
              bgClip="text"
            >
              Let&apos;s Work Together
            </Heading>
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
              <Box
                bg={sectionBg}
                p={8}
                borderRadius="2xl"
                shadow="lg"
                border="1px"
                borderColor={borderColor}
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

              <Box
                bg={sectionBg}
                p={8}
                borderRadius="2xl"
                shadow="lg"
                border="1px"
                borderColor={borderColor}
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

              <Box
                bg={cardBg}
                p={6}
                borderRadius="xl"
                border="1px"
                borderColor={borderColor}
              >
                <VStack spacing={4}>
                  <Icon as={MdLanguage} boxSize={8} color={accentColor} />
                  <VStack spacing={2} textAlign="center">
                    <Text fontWeight="bold" color={headingColor}>
                      Languages
                    </Text>
                    <HStack spacing={2} flexWrap="wrap" justify="center">
                      <Badge colorScheme="blue" variant="subtle">English</Badge>
                      <Badge colorScheme="green" variant="subtle">Amharic</Badge>
                    </HStack>
                  </VStack>
                </VStack>
              </Box>
            </VStack>

            <Box
              bg={sectionBg}
              borderRadius="2xl"
              shadow="lg"
              border="1px"
              borderColor={borderColor}
              overflow="hidden"
            >
              <Box p={8} pb={4}>
                <VStack spacing={4} align="start">
                  <HStack spacing={3}>
                    <Icon as={FaPaperPlane} color={accentColor} boxSize={6} />
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
                        color="blue.500"
                        emptyColor="gray.200"
                      />
                      <Text color={textColor} fontWeight="medium">
                        Loading contact form...
                      </Text>
                      <Button 
                        onClick={handleIframeLoad}
                        colorScheme="blue"
                        size="sm"
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
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
