"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      w="95vw"
      h="90vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <Box
        w={{ base: "100%", md: "40vw" }}
        p={8}
        boxShadow="lg"
        borderRadius="md"
      >
        <Heading as="h1" mb={6} textAlign="center">
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
              />
            </FormControl>

            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
              />
            </FormControl>

            <Button type="submit" colorScheme="blue" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}
