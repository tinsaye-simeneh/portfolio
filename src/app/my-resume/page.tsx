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
import { motion } from "framer-motion";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const sectionBg = "rgba(26, 46, 46, 0.8)";
  const borderColor = "rgba(255, 255, 255, 0.1)";
  const textColor = "gray.300";
  const headingColor = "white";

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
    <Box bg="#1a2e2e" minH="100vh" color="white" py={10}>
      <Container maxW="1600px">
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
              <VStack spacing={4}>
                <Heading 
                  as="h1" 
                  size="2xl" 
                  color={headingColor}
                  bgGradient="linear(to-r, orange.300, red.400, yellow.300)"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  leftIcon={<Icon as={FaDownload} />}
                  bgGradient="linear(to-r, orange.400, orange.600)"
                  color="white"
                  size="lg"
                  onClick={handleDownload}
                  borderRadius="full"
                  _hover={{
                    bgGradient: "linear(to-r, orange.500, orange.700)",
                    transform: "translateY(-2px)",
                    shadow: "xl"
                  }}
                  transition="all 0.3s ease"
                >
                  Download PDF
                </Button>
                <Button
                  leftIcon={<Icon as={FaPrint} />}
                  variant="outline"
                  borderColor="orange.600"
                  color="orange.400"
                  size="lg"
                  onClick={handlePrint}
                  borderRadius="full"
                  _hover={{
                    bg: "rgba(74, 90, 90, 0.3)",
                    transform: "translateY(-2px)",
                    shadow: "lg"
                  }}
                  transition="all 0.3s ease"
                >
                  Print
                </Button>
              </HStack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HStack spacing={6} pt={4}>
                <VStack spacing={1}>
                  <Badge 
                    bgGradient="linear(to-r, orange.400, red.500)"
                    color="white"
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    fontWeight="bold"
                    boxShadow="md"
                  >
                    <Icon as={FaFileAlt} mr={2} />
                    Latest Version
                  </Badge>
                  <Text fontSize="xs" color={textColor}>Updated {new Date().getFullYear()}</Text>
                </VStack>
              </HStack>
            </motion.div>
          </VStack>

          <Divider />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Box
              bg="rgba(26, 46, 46, 0.8)"
              backdropFilter="blur(30px) saturate(180%)"
              borderRadius="2xl"
              shadow="xl"
              border="2px solid"
              borderColor="rgba(255, 255, 255, 0.15)"
              overflow="hidden"
              position="relative"
              minH="80vh"
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
                    color="orange.500"
                    emptyColor="rgba(74, 90, 90, 0.5)"
                  />
                  <Text color={textColor} fontWeight="medium">
                    Loading resume...
                  </Text>
                  <Button 
                    onClick={handleLoad}
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

            <Box p={6} borderBottom="1px" borderColor={borderColor} position="relative" zIndex={1}>
              <HStack justify="space-between" align="center">
                <HStack spacing={3}>
                  <Box
                    p={2}
                    borderRadius="lg"
                    bgGradient="linear(to-r, orange.400, red.500)"
                    color="white"
                  >
                    <Icon as={FaEye} boxSize={4} />
                  </Box>
                  <Text fontWeight="bold" color={headingColor}>
                    Resume Preview
                  </Text>
                </HStack>
                <Badge 
                  bgGradient="linear(to-r, red.400, yellow.500)"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontWeight="bold"
                >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <VStack spacing={4} textAlign="center">
              <Text color={textColor} fontSize="lg">
                Interested in working together?
              </Text>
              <HStack spacing={4}>
                <Button
                  bgGradient="linear(to-r, orange.400, orange.600)"
                  color="white"
                  size="lg"
                  onClick={() => router.push('/contact-me')}
                  borderRadius="full"
                  _hover={{
                    bgGradient: "linear(to-r, orange.500, orange.700)",
                    transform: "translateY(-2px)",
                    shadow: "xl"
                  }}
                  transition="all 0.3s ease"
                >
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  borderColor="orange.600"
                  color="orange.400"
                  size="lg"
                  onClick={() => router.push('/links')}
                  borderRadius="full"
                  _hover={{
                    bg: "rgba(74, 90, 90, 0.3)",
                    transform: "translateY(-2px)",
                    shadow: "lg"
                  }}
                  transition="all 0.3s ease"
                >
                  View Projects
                </Button>
              </HStack>
            </VStack>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
