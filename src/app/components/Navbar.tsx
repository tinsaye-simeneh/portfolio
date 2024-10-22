import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const iconColor = useColorModeValue("gray.800", "white");
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bgColor} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box fontWeight="bold" fontSize="xl">
          <Link href="/">Tinsaye</Link>
        </Box>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          <Button as="a" href="#contact" colorScheme="blue">
            Contact Me
          </Button>
          <Button as="a" href="/resume.pdf" download colorScheme="teal">
            Download Resume
          </Button>
        </HStack>
        <Flex alignItems={"center"}>
          <HStack spacing={3}>
            <IconButton
              as="a"
              href="https://github.com/your-github-username"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              color={iconColor}
              size="lg"
            />
            <IconButton
              as="a"
              href="https://linkedin.com/in/your-linkedin-username"
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
              onClick={toggleColorMode}
              variant="ghost"
              size="lg"
              color={iconColor}
            />
          </HStack>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Button as="a" href="#contact" colorScheme="blue">
              Contact Me
            </Button>
            <Button as="a" href="/resume.pdf" download colorScheme="teal">
              Download Resume
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
