"use client";
import { useState } from "react";
import { 
  Box, 
  Heading, 
  Spinner, 
  Button, 
  VStack, 
  HStack, 
  Text,
  Container,
  useColorModeValue,
  Icon,
  Badge,
  Divider
} from "@chakra-ui/react";
import { 
  FaArrowLeft, 
  FaDownload, 
  FaEye, 
  FaFileAlt,
  FaPrint
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const sectionBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleDownload = () => {
    // Replace with your actual resume download link
    window.open("https://docs.google.com/document/d/1vQMgPneXaqOhVcbDnfI-RkF6xMYQIrL6j4PeKbqFCPU1KvjO1xO9rbP4ZZ4N6yEw-VgeCQcMUFYNuPF/export?format=pdf", "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

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
            
            <VStack spacing={4}>
              <Heading 
                as="h1" 
                size="2xl" 
                color={headingColor}
                bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
                bgClip="text"
              >
                My Resume
              </Heading>
              <Text 
                fontSize="xl" 
                color={textColor} 
                maxW="2xl"
                lineHeight="1.6"
              >
                Get to know my professional background, skills, and experience
              </Text>
            </VStack>

            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                leftIcon={<Icon as={FaDownload} />}
                colorScheme="blue"
                size="lg"
                onClick={handleDownload}
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg"
                }}
                transition="all 0.3s ease"
              >
                Download PDF
              </Button>
              <Button
                leftIcon={<Icon as={FaPrint} />}
                variant="outline"
                colorScheme="blue"
                size="lg"
                onClick={handlePrint}
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg"
                }}
                transition="all 0.3s ease"
              >
                Print
              </Button>
            </HStack>

            <HStack spacing={6} pt={4}>
              <VStack spacing={1}>
                <Badge colorScheme="blue" variant="subtle" px={3} py={1} borderRadius="full">
                  <Icon as={FaFileAlt} mr={1} />
                  Latest Version
                </Badge>
                <Text fontSize="xs" color={textColor}>Updated {new Date().getFullYear()}</Text>
              </VStack>
            </HStack>
          </VStack>

          <Divider />

          <Box
            bg={sectionBg}
            borderRadius="2xl"
            shadow="xl"
            border="1px"
            borderColor={borderColor}
            overflow="hidden"
            position="relative"
            minH="80vh"
          >
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
                borderRadius="2xl"
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
                    Loading resume...
                  </Text>
                  <Button 
                    onClick={handleLoad}
                    colorScheme="blue"
                    size="sm"
                    variant="ghost"
                  >
                    Retry
                  </Button>
                </VStack>
              </Box>
            )}

            <Box p={6} borderBottom="1px" borderColor={borderColor}>
              <HStack justify="space-between" align="center">
                <HStack spacing={3}>
                  <Icon as={FaEye} color="blue.500" boxSize={5} />
                  <Text fontWeight="bold" color={headingColor}>
                    Resume Preview
                  </Text>
                </HStack>
                <Badge colorScheme="green" variant="subtle">
                  Live Document
                </Badge>
              </HStack>
            </Box>

            <Box p={4}>
              <Box
                as="iframe"
                src="https://docs.google.com/document/d/e/2PACX-1vQMgPneXaqOhVcbDnfI-RkF6xMYQIrL6j4PeKbqFCPU1KvjO1xO9rbP4ZZ4N6yEw-VgeCQcMUFYNuPF/pub?embedded=true"
                w="100%"
                h={{ base: "70vh", md: "80vh" }}
                border="none"
                borderRadius="lg"
                onLoad={handleLoad}
                display={isLoading ? "none" : "block"}
              />
            </Box>
          </Box>

          <VStack spacing={4} textAlign="center">
            <Text color={textColor}>
              Interested in working together?
            </Text>
            <HStack spacing={4}>
              <Button
                colorScheme="blue"
                size="lg"
                onClick={() => router.push('/contact-me')}
                borderRadius="full"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                colorScheme="blue"
                size="lg"
                onClick={() => router.push('/links')}
                borderRadius="full"
              >
                View Projects
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
