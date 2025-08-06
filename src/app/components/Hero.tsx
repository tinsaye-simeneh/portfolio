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
  Flex
} from "@chakra-ui/react";
import { FaDownload, FaEye, FaGithub, FaLinkedin } from "react-icons/fa";

export default function CallToActionWithIllustration() {
  const bgGradient = useColorModeValue(
    "linear(to-r, blue.50, purple.50, pink.50)",
    "linear(to-r, blue.900, purple.900, pink.900)"
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
      <Box
        position="absolute"
        top="10%"
        right="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="blue.100"
        opacity={0.3}
        filter="blur(100px)"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="10%"
        width="200px"
        height="200px"
        borderRadius="full"
        bg="purple.100"
        opacity={0.3}
        filter="blur(80px)"
      />
      
      <Container maxW={"6xl"} zIndex={1}>
        <VStack
          textAlign={"center"}
          spacing={{ base: 8, md: 12 }}
          py={{ base: 20, md: 28 }}
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

          <VStack spacing={4}>
            <Heading
              fontWeight={700}
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
              lineHeight={"95%"}
              letterSpacing="-0.02em"
            >
              Hi there! <br />
              <Text 
                as={"span"} 
                bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
                bgClip="text"
                fontWeight={800}
              >
                I&apos;m Tinsaye S. Dessie
              </Text>
            </Heading>
            
            <Text 
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight={500}
              color={useColorModeValue("blue.600", "blue.300")}
            >
              Full-Stack Developer & UI/UX Designer
            </Text>
          </VStack>

          <Text 
            color={useColorModeValue("gray.600", "gray.300")} 
            maxW={"4xl"}
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight="1.8"
          >
            A passionate web developer and UI/UX designer with 3-4 years of experience
            crafting digital experiences. I&apos;ve built 30+ websites, focusing on seamless, 
            user-centric solutions using modern technologies like React.js, Next.js, 
            TypeScript, and more.
          </Text>

          <Flex wrap="wrap" justify="center" gap={2} maxW="2xl">
            {["React.js", "Next.js", "TypeScript", "Supabase", "Tailwind CSS"].map((tech) => (
              <Box
                key={tech}
                px={3}
                py={1}
                bg={techPillBg}
                borderRadius="full"
                fontSize="sm"
                border="1px"
                borderColor={techPillBorder}
                color={techPillColor}
              >
                {tech}
              </Box>
            ))}
          </Flex>

          <Flex 
            direction={{ base: "column", sm: "row" }}
            gap={4} 
            pt={4} 
            w="full"
            justify="center"
          >
            <Button
              size="lg"
              rounded={"full"}
              px={8}
              py={6}
              w={{ base: "full", sm: "auto" }}
              colorScheme={"blue"}
              bgGradient="linear(to-r, blue.400, blue.600)"
              _hover={{ 
                bgGradient: "linear(to-r, blue.500, blue.700)",
                transform: "translateY(-2px)",
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
            <Button
              size="lg"
              rounded={"full"}
              px={8}
              py={6}
              w={{ base: "full", sm: "auto" }}
              variant="outline"
              borderWidth={2}
              borderColor={useColorModeValue("gray.300", "gray.600")}
              bg={useColorModeValue("white", "gray.800")}
              color={useColorModeValue("gray.800", "white")}
              _hover={{ 
                bg: useColorModeValue("gray.50", "gray.700"),
                transform: "translateY(-2px)",
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
          </Flex>

          <HStack spacing={4} pt={6}>
            <Button
              as="a"
              href="#"
              variant="ghost"
              size="sm"
              leftIcon={<Icon as={FaGithub} />}
              _hover={{ color: "blue.500" }}
            >
              GitHub
            </Button>
            <Button
              as="a"
              href="#"
              variant="ghost"
              size="sm"
              leftIcon={<Icon as={FaLinkedin} />}
              _hover={{ color: "blue.500" }}
            >
              LinkedIn
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
