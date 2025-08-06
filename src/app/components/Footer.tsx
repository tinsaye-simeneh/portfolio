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

const Footer = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const headingColor = useColorModeValue("gray.800", "white");
  const linkColor = useColorModeValue("blue.600", "blue.300");

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
    <Box bg={bgColor} borderTop="1px" borderColor={borderColor} mt="auto">
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
         
          <VStack align="start" spacing={4}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
              bgClip="text"
              letterSpacing="-0.02em"
            >
              TSD.
            </Text>
            <Text color={textColor} fontSize="sm" lineHeight="1.6">
              Full-Stack Developer & UI/UX Designer passionate about creating 
              exceptional digital experiences.
            </Text>
            <Badge colorScheme="green" variant="subtle">
              Available for freelance work
            </Badge>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm" color={headingColor}>
              Quick Links
            </Heading>
            <VStack align="start" spacing={2}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  color={textColor}
                  fontSize="sm"
                  _hover={{ 
                    color: linkColor,
                    textDecoration: "none",
                    transform: "translateX(4px)"
                  }}
                  transition="all 0.2s ease"
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm" color={headingColor}>
              Get in Touch
            </Heading>
            <VStack align="start" spacing={2}>
              <HStack spacing={2}>
                <FaEnvelope color={textColor} size="12px" />
                <Link
                  href="mailto:tinsayesimeneh608@gmail.com"
                  color={textColor}
                  fontSize="sm"
                  _hover={{ color: linkColor }}
                  transition="color 0.2s ease"
                >
                  tinsayesimeneh608@gmail.com
                </Link>
              </HStack>
              <HStack spacing={2}>
                <FaPhone color={textColor} size="12px" />
                <Link
                  href="tel:+251983779803"
                  color={textColor}
                  fontSize="sm"
                  _hover={{ color: linkColor }}
                  transition="color 0.2s ease"
                >
                  +251-983779803
                </Link>
              </HStack>
              <Text color={textColor} fontSize="sm">
                📍 Addis Ababa, Ethiopia
              </Text>
            </VStack>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm" color={headingColor}>
              Connect & Tech
            </Heading>
            
            <HStack spacing={2}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  as="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  icon={<social.icon />}
                  size="sm"
                  variant="ghost"
                  color={textColor}
                  _hover={{
                    color: social.color,
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s ease"
                />
              ))}
            </HStack>

            <VStack align="start" spacing={2}>
              <Text color={textColor} fontSize="xs" fontWeight="medium">
                Built with:
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                <Badge size="sm" colorScheme="blue" variant="subtle">Next.js</Badge>
                <Badge size="sm" colorScheme="purple" variant="subtle">Chakra UI</Badge>
                <Badge size="sm" colorScheme="green" variant="subtle">TypeScript</Badge>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider my={8} />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <HStack spacing={1} fontSize="sm" color={textColor}>
            <Text>© {currentYear} Tinsaye Simeneh. Made with</Text>
            <FaHeart color="red" size="12px" />
            <Text>in Ethiopia</Text>
          </HStack>
          
          <HStack spacing={4} fontSize="xs" color={textColor}>
            <Text>
              <FaCode style={{ display: "inline", marginRight: "4px" }} />
              Open Source
            </Text>
            <Link
              href="https://github.com/tinsaye-simeneh/portfolio"
              isExternal
              _hover={{ color: linkColor }}
              transition="color 0.2s ease"
            >
              View Source
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
