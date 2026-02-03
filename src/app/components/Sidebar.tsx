"use client";

import { VStack, Box, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
  const socialLinks = [
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/tinsayesimeneh/",
      label: "LinkedIn",
      color: "#0077B5"
    },
    { 
      icon: FaGithub, 
      href: "https://www.github.com/tinsaye-simeneh",
      label: "GitHub",
      color: "#333"
    },
    { 
      icon: FaTelegram, 
      href: "https://t.me/TinsayeSimeneh",
      label: "Telegram",
      color: "#0088CC"
    },
  ];

  return (
    <Box
      position="fixed"
      left={0}
      top="50%"
      transform="translateY(-50%)"
      zIndex={100}
      display={{ base: "none", md: "block" }}
      pl={4}
    >
      <VStack spacing={4} align="start">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              as="a"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              icon={<social.icon />}
              variant="ghost"
              size="lg"
              color="gray.400"
              _hover={{ 
                color: "white",
                bg: "rgba(74, 90, 90, 0.3)",
                transform: "scale(1.1)",
              }}
              borderRadius="lg"
              fontSize="24px"
              transition="all 0.3s ease"
              w="50px"
              h="50px"
            />
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
