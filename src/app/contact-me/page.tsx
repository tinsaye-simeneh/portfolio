"use client";

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
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsTelegram, BsLinkedin, BsPerson } from "react-icons/bs";

export default function Contact() {
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
          bg="blue.700"
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
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
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
                    justifyContent="center" // Center the icons on mobile
                    px={5}
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsLinkedin size="28px" color="white" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsGithub size="28px" color="white" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsTelegram size="28px" color="white" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg="white"
                  borderRadius="lg"
                  width={{ base: "95vw", lg: "450px" }}
                  textAlign="left" // Ensure text inside this box aligns left
                >
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>E-mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="submit" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
