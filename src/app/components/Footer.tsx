"use client";

import { 
  Box, 
  Text, 
  Link, 
  VStack, 
  HStack, 
  Container,
  Icon,
} from "@chakra-ui/react";
import { FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "My Resume", href: "/my-resume" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/links" },
    { label: "Contact", href: "/contact-me" },
  ];

  return (
    <Box 
      bg="#1a2e2e"
      borderTop="1px" 
      borderColor="rgba(255, 255, 255, 0.1)" 
      mt="auto"
      py={8}
      color="white"
    >
      <Container maxW="1600px">
        <VStack spacing={6}>
          {/* Quick Links */}
          <HStack spacing={6} flexWrap="wrap" justify="center">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  color="gray.300"
                  fontSize="sm"
                  _hover={{ color: "white" }}
                  textDecoration="none"
                  transition="color 0.2s"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </HStack>

          {/* Divider */}
          <Box
            w="100px"
            h="1px"
            bg="rgba(255, 255, 255, 0.2)"
            borderRadius="full"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HStack spacing={2} fontSize="sm" color="gray.400" flexWrap="wrap" justify="center">
              <Text>© {currentYear}</Text>
              <Link
                href="https://www.github.com/tinsaye-simeneh"
                target="_blank"
                rel="noopener noreferrer"
                color="gray.300"
                _hover={{ color: "white" }}
                textDecoration="none"
                display="inline-flex"
                alignItems="center"
                gap={1}
                transition="color 0.2s"
              >
                <Text as="span">Tinsaye Simeneh</Text>
                <Icon as={FaExternalLinkAlt} boxSize={3} />
              </Link>
              <Text>. Made with</Text>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <FaHeart color="#ef4444" size="14px" />
              </motion.span>
              <Text>in Ethiopia 🇪🇹</Text>
            </HStack>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
