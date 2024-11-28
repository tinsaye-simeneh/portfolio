"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Links = [
  {
    lable: "My Resume",
    href: "/my-resume",
  },
  {
    lable: "Blog",
    href: "/blog",
  },
  {
    lable: "Links",
    href: "/links",
  },
  {
    lable: "Contact Me",
    href: "/contact-me",
  },
];

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Box bg={bgColor} px={10} position="sticky" top={0} zIndex={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box fontSize={"2rem"} color={"blue.400"}>
              <a href="/">TSD.</a>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.lable} href={link.href}>
                  {link.lable}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack spacing={4}>
              <IconButton
                as="a"
                href="https://github.com/tinsaye-simeneh"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                color={iconColor}
                size="lg"
              />
              <IconButton
                as="a"
                href="https://linkedin.com/in/tinsayesimeneh"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color={iconColor}
                size="lg"
              />
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                variant="ghost"
                size="lg"
                onClick={toggleColorMode}
                color={iconColor}
              />
            </HStack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.lable} href={link.href}>
                  {link.lable}
                </NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Navbar;
