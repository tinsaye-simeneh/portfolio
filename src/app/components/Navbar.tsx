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
import {  usePathname } from "next/navigation";

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
  const activeBg = useColorModeValue("blue.50", "blue.900");
  const activeColor = useColorModeValue("blue.600", "blue.300");
  
  return (
    <Button
      as="a"
      href={href}
      variant="ghost"
      size="sm"
      fontWeight={isActive ? "bold" : "medium"}
      color={isActive ? activeColor : undefined}
      bg={isActive ? activeBg : "transparent"}
      _hover={{
        bg: isActive ? activeBg : linkBg,
        transform: "translateY(-1px)",
      }}
      _active={{
        transform: "translateY(0)",
      }}
      transition="all 0.2s ease"
      borderRadius="full"
      px={4}
    >
      {children}
    </Button>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  
  const iconColor = useColorModeValue("gray.700", "gray.300");
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const borderColor = useColorModeValue("gray.200", "gray.700");

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
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex={1000}
      shadow="sm"
    >
      <Box maxW="container.xl" mx="auto" px={6}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
         
          <HStack spacing={8} alignItems="center">
            <Button
              as="a"
              href="/"
              variant="ghost"
              p={0}
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.2s ease"
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
                bgClip="text"
                letterSpacing="-0.02em"
              >
                TSD.
              </Text>
            </Button>
            
            <HStack
              as="nav"
              spacing={2}
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
              <IconButton
                key={social.label}
                as="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                icon={<social.icon />}
                variant="ghost"
                size="sm"
                color={iconColor}
                _hover={{
                  color: social.color,
                  transform: "translateY(-1px)",
                }}
                transition="all 0.2s ease"
              />
            ))}
            
            <IconButton
              aria-label="Toggle Theme"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              variant="ghost"
              size="sm"
              onClick={toggleColorMode}
              color={iconColor}
              _hover={{
                transform: "translateY(-1px)",
              }}
              transition="all 0.2s ease"
            />
          </HStack>

          <IconButton
            size="sm"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }}>
            <VStack spacing={4} align="stretch">
              {Links.map((link) => (
                <Button
                  key={link.label}
                  as="a"
                  href={link.href}
                  variant="ghost"
                  justifyContent="flex-start"
                  fontWeight={pathname === link.href ? "bold" : "medium"}
                  color={pathname === link.href ? "blue.500" : undefined}
                  onClick={onClose}
                >
                  {link.label}
                </Button>
              ))}
              
              <HStack spacing={4} justify="center" pt={4}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    as="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    icon={<social.icon />}
                    variant="ghost"
                    size="lg"
                    color={iconColor}
                  />
                ))}
                <IconButton
                  aria-label="Toggle Theme"
                  icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  variant="ghost"
                  size="lg"
                  onClick={toggleColorMode}
                  color={iconColor}
                />
              </HStack>
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;
