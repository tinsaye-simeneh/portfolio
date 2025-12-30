"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Text,
  Button,
  Collapse,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const Links = [
  {
    label: "My Resume",
    href: "/my-resume",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Projects",
    href: "/links",
  },
  {
    label: "Contact",
    href: "/contact-me",
  },
];

const NavLink = ({ href, children, isActive }: NavLinkProps) => {
  const linkBg = useColorModeValue("gray.100", "gray.700");
  const activeBg = useColorModeValue("orange.50", "orange.900");
  const activeColor = useColorModeValue("orange.600", "orange.300");
  const hoverBg = useColorModeValue("orange.100", "orange.800");
  
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      <Button
        as="a"
        href={href}
        variant="ghost"
        size="sm"
        fontWeight={isActive ? "bold" : "semibold"}
        color={isActive ? activeColor : undefined}
        bg={isActive ? activeBg : "transparent"}
        _hover={{
          bg: isActive ? activeBg : hoverBg,
          color: isActive ? activeColor : "orange.600",
        }}
        _active={{
          transform: "scale(0.95)",
        }}
        transition="all 0.2s ease"
        borderRadius="full"
        px={5}
        position="relative"
      >
        {children}
        {isActive && (
          <Box
            position="absolute"
            bottom="-2px"
            left="50%"
            transform="translateX(-50%)"
            width="6px"
            height="6px"
            borderRadius="full"
            bg="orange.500"
          />
        )}
      </Button>
    </motion.div>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  
  const iconColor = useColorModeValue("gray.700", "gray.300");
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.3)", "rgba(26, 32, 44, 0.3)");
  const borderColor = useColorModeValue("rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 0.2)");
  const hoverColor = useColorModeValue("orange.500", "orange.400");

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

  return (
    <Box
      bg={bgColor}
      backdropFilter="blur(60px) saturate(200%)"
      position="sticky"
      top={0}
      zIndex={1000}
      mx={{ base: 6, md: 10, lg: 16 }}
      mt={4}
      borderRadius="xl"
      border="2px solid"
      borderColor={borderColor}
      boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 0 50px rgba(255, 255, 255, 0.15)"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: useColorModeValue(
          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)"
        ),
        pointerEvents: "none",
      }}
    >
      <Box maxW="container.xl" mx="auto" px={6}>
        <Flex h={20} alignItems="center" justifyContent="space-between">
         
          <HStack spacing={8} alignItems="center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as="a"
                href="/"
                variant="ghost"
                p={0}
                _hover={{ bg: "transparent" }}
              >
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  bgGradient={useColorModeValue(
                    "linear(to-r, orange.400, red.500, yellow.400)",
                    "linear(to-r, orange.300, red.400, yellow.300)"
                  )}
                  bgClip="text"
                  letterSpacing="-0.02em"
                  cursor="pointer"
                >
                  TSD.
                </Text>
              </Button>
            </motion.div>
            
            <HStack
              as="nav"
              spacing={1}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink 
                  key={link.label} 
                  href={link.href}
                  isActive={pathname === link.href}
                >
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <HStack spacing={2} display={{ base: "none", md: "flex" }}>
            {socialLinks.map((social) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
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
                  size="md"
                  color={iconColor}
                  borderRadius="full"
                  _hover={{
                    color: hoverColor,
                    bg: useColorModeValue("orange.50", "orange.900"),
                  }}
                  transition="all 0.2s ease"
                />
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                variant="ghost"
                size="md"
                onClick={toggleColorMode}
                color={iconColor}
                borderRadius="full"
                _hover={{
                  color: hoverColor,
                  bg: useColorModeValue("orange.50", "orange.900"),
                }}
                transition="all 0.2s ease"
              />
            </motion.div>
          </HStack>

          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color={iconColor}
            borderRadius="full"
            _hover={{
              color: hoverColor,
              bg: useColorModeValue("orange.50", "orange.900"),
            }}
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box pb={6} display={{ md: "none" }}>
            <VStack spacing={3} align="stretch">
              {Links.map((link) => (
                <motion.div
                  key={link.label}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    as="a"
                    href={link.href}
                    variant="ghost"
                    justifyContent="flex-start"
                    fontWeight={pathname === link.href ? "bold" : "semibold"}
                    color={pathname === link.href ? "orange.500" : undefined}
                    bg={pathname === link.href ? useColorModeValue("orange.50", "orange.900") : "transparent"}
                    onClick={onClose}
                    borderRadius="lg"
                    px={4}
                    py={6}
                    _hover={{
                      bg: useColorModeValue("orange.50", "orange.900"),
                      color: "orange.500",
                    }}
                    transition="all 0.2s ease"
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
              
              <HStack spacing={4} justify="center" pt={4}>
                {socialLinks.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
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
                      color={iconColor}
                      borderRadius="full"
                      _hover={{
                        color: hoverColor,
                        bg: useColorModeValue("orange.50", "orange.900"),
                      }}
                      transition="all 0.2s ease"
                    />
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    aria-label="Toggle Theme"
                    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    variant="ghost"
                    size="lg"
                    onClick={toggleColorMode}
                    color={iconColor}
                    borderRadius="full"
                    _hover={{
                      color: hoverColor,
                      bg: useColorModeValue("orange.50", "orange.900"),
                    }}
                    transition="all 0.2s ease"
                  />
                </motion.div>
              </HStack>
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;