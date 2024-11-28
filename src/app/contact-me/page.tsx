"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Spinner,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsTelegram, BsLinkedin } from "react-icons/bs";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <Container
      maxW="95%"
      mt={{ base: 10, sm: 10, md: 10, lg: 0 }}
      mx={"auto"}
      centerContent
      overflow="hidden"
      textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
    >
      <Flex justifyContent={{ base: "center", md: "flex-start" }}>
        <Box
          bg="gray.400"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
          w="100%"
        >
          <Box p={10}>
            <Wrap
              spacing={{ base: 5, sm: 3, md: 5, lg: 20 }}
              justify={{ base: "center", md: "flex-start" }}
            >
              <WrapItem>
                <Box textAlign="center" w="100%">
                  <Heading>Contact Me</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="blue.900">
                    Fill up the form below to contact Me
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +251-983779803
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="300px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        <a
                          href="mailto: tinsayesimeneh608@gmail.com"
                          target="_blank"
                        >
                          tinsayesimeneh608@gmail.com
                        </a>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="230px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Addis Ababa, Ethiopia
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    justifyContent="center"
                    px={5}
                  >
                    <IconButton
                      as={"a"}
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsLinkedin size="28px" color="white" />}
                      href="https://www.linkedin.com/in/tinsayesimeneh/"
                    />
                    <IconButton
                      as={"a"}
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" color="white" />}
                      href="https://www.github.com/tinsaye-simeneh"
                    />
                    <IconButton
                      as={"a"}
                      aria-label="telegram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsTelegram size="28px" color="white" />}
                      href="https://t.me/TinsayeSimeneh"
                    />
                  </HStack>
                </Box>
              </WrapItem>

              <WrapItem>
                <Box textAlign="center">
                  {isLoading && (
                    <Box textAlign="center" mt={5}>
                      <Spinner
                        size="lg"
                        thickness="4px"
                        speed="0.65s"
                        color="blue.500"
                        emptyColor="gray.200"
                      />
                      <Text mt={3}>Loading Contact form, please wait...</Text>
                      <Button mt={3} onClick={handleIframeLoad}>
                        Reload
                      </Button>
                    </Box>
                  )}

                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScZ2tGwNNTRUIBSo3DjeoH-gNXFbCfEgDO7C2uEwq1pOwTvnA/viewform?embedded=true"
                    style={{
                      width: isMobile ? "100vw" : "600px",
                      height: "500px",
                      border: "none",
                      display: isLoading ? "none" : "block",
                    }}
                    onLoad={handleIframeLoad}
                  />
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
