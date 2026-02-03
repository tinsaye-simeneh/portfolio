"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  Button,
  Collapse,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  InputGroup,
  InputLeftElement,
  Kbd,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { FaCode, FaBookOpen, FaLink } from "react-icons/fa";

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
  return (
    <Button
      as="a"
      href={href}
      variant="ghost"
      size="sm"
      fontWeight={isActive ? "bold" : "normal"}
      color="white"
      _hover={{
        bg: "transparent",
        textDecoration: "underline",
      }}
      textDecoration={isActive ? "underline" : "none"}
      borderRadius="none"
      px={4}
    >
      {children}
    </Button>
  );
};

// Search data - projects from links page
const searchableProjects = [
  { type: "project", title: "Muyalogy", description: "An online learning management system.", url: "https://muyalogy.com", category: "Client Systems" },
  { type: "project", title: "Jiret", description: "A SaaS Learning Management System.", url: "https://jiret.com", category: "Client Systems" },
  { type: "project", title: "Guzo School Management System", description: "A saas school management system", url: "https://guzo-sms.vercel.app", category: "Client Systems" },
  { type: "project", title: "Bunna Bank Agent Port", description: "Agent portal for Bunna Bank onboarding system", category: "Client Systems" },
  { type: "project", title: "Bunna Bank Client Onboarding System", description: "Client onboarding system for Bunna Bank", category: "Client Systems" },
  { type: "project", title: "Shangi Main Site", description: "Main website with admin panel for Shangi", url: "http://shangi-indol.vercel.app/", category: "Client Systems" },
  { type: "project", title: "Specter systems portal", description: "A saas school management system", url: "https://portal.spectersystems.io", category: "Client Systems" },
  { type: "project", title: "TNH Gaming", description: "A gaming portfolio showcasing various games.", url: "https://tnh-gaming.vercel.app/", category: "Client Portfolio" },
  { type: "project", title: "Charity Kappa", description: "A charity organization portfolio.", url: "https://charity-kappa.vercel.app/", category: "Client Portfolio" },
  { type: "project", title: "Viva Update", description: "A news update platform portfolio.", url: "https://viva-update.vercel.app/", category: "Client Portfolio" },
  { type: "project", title: "Weather App", description: "A weather forecast application.", url: "https://weather-app-cyan-three.vercel.app/", category: "Learning Projects" },
  { type: "project", title: "Currency Converter", description: "An application to convert currencies.", url: "https://currency-converter-rho-azure.vercel.app/", category: "Learning Projects" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  // Fetch blog posts for search
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          setBlogPosts(data);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Keyboard shortcut for search (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        onSearchOpen();
      }
      if (e.key === "Escape" && isSearchOpen) {
        onSearchClose();
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, onSearchOpen, onSearchClose]);

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { pages: [], projects: [], blogs: [] };

    const query = searchQuery.toLowerCase();
    const allPages = [...Links, { label: "Home", href: "/" }];
    const pages = allPages.filter(
      (link) =>
        link.label.toLowerCase().includes(query) ||
        link.href.toLowerCase().includes(query)
    );

    const projects = searchableProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query)
    );

    const blogs = blogPosts.filter(
      (post) =>
        post.title?.toLowerCase().includes(query) ||
        post.description?.toLowerCase().includes(query) ||
        post.tags?.some((tag: string) => tag.toLowerCase().includes(query))
    );

    return { pages, projects, blogs };
  }, [searchQuery, blogPosts]);

  const handleResultClick = (url?: string, href?: string) => {
    if (url) {
      window.open(url, "_blank");
    } else if (href) {
      router.push(href);
      onSearchClose();
      setSearchQuery("");
    }
  };

  return (
    <Box
      bg="rgba(26, 46, 46, 0.8)"
      backdropFilter="blur(10px)"
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
    >
      <Box maxW="1600px" mx="auto" px={6}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Left: Logo */}
          <HStack spacing={4} alignItems="center">
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Toggle Menu"
              display={{ base: "flex", md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color="white"
              _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
            />
            <Link href="/" style={{ textDecoration: "none" }}>
              <HStack spacing={2} alignItems="center">
                <Image
                  src="/logo.png"
                  alt="TSD Logo"
                  height="32px"
                  width="auto"
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                  transition="opacity 0.2s"
                />
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="white"
                  letterSpacing="-0.02em"
                >
                  TSD
                </Text>
              </HStack>
            </Link>
          </HStack>

          {/* Center: Navigation Links */}
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

          {/* Right: Search + Start work button */}
          <HStack spacing={4}>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
              size="md"
              color="white"
              _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
              display={{ base: "none", md: "flex" }}
              onClick={onSearchOpen}
            />
            <Link href="/contact-me" style={{ textDecoration: "none" }}>
              <Button
                bg="rgba(74, 90, 90, 0.8)"
                color="white"
                _hover={{ bg: "rgba(74, 90, 90, 1)" }}
                borderRadius="md"
                px={6}
                size="sm"
              >
                Start work
              </Button>
            </Link>
          </HStack>
        </Flex>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: "none" }}>
            <VStack spacing={2} align="stretch">
              {Links.map((link) => (
                <Button
                  key={link.label}
                  as="a"
                  href={link.href}
                  variant="ghost"
                  justifyContent="flex-start"
                  fontWeight={pathname === link.href ? "bold" : "normal"}
                  color="white"
                  textDecoration={pathname === link.href ? "underline" : "none"}
                  onClick={onClose}
                  borderRadius="none"
                  px={4}
                  py={6}
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </VStack>
          </Box>
        </Collapse>
      </Box>

      {/* Search Modal */}
      <Modal isOpen={isSearchOpen} onClose={onSearchClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
        <ModalContent
          bg="rgba(26, 46, 46, 0.95)"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.15)"
          borderRadius="xl"
          backdropFilter="blur(20px)"
          maxH="80vh"
          overflow="hidden"
          display="flex"
          flexDirection="column"
        >
          <ModalBody p={0} display="flex" flexDirection="column" overflow="hidden">
            <Box p={6} borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.1)">
              <InputGroup size="lg">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search projects, blog posts, or pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  bg="rgba(74, 90, 90, 0.5)"
                  borderColor="rgba(255, 255, 255, 0.1)"
                  color="white"
                  _hover={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                  _focus={{
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.3)",
                  }}
                  _placeholder={{ color: "gray.400" }}
                  autoFocus
                />
              </InputGroup>
            </Box>

            {/* Search Results */}
            <Box flex="1" overflowY="auto" p={4}>
              {!searchQuery.trim() ? (
                <VStack spacing={3} py={8}>
                  <Text color="gray.400" fontSize="sm">
                    Start typing to search...
                  </Text>
                  <HStack justify="center" fontSize="xs" color="gray.500" spacing={4}>
                    <HStack spacing={1}>
                      <Kbd bg="rgba(74, 90, 90, 0.8)" color="white" borderColor="rgba(255, 255, 255, 0.2)" fontSize="xs">
                        Esc
                      </Kbd>
                      <Text>to close</Text>
                    </HStack>
                    <HStack spacing={1}>
                      <Kbd bg="rgba(74, 90, 90, 0.8)" color="white" borderColor="rgba(255, 255, 255, 0.2)" fontSize="xs">
                        Ctrl
                      </Kbd>
                      <Text>+</Text>
                      <Kbd bg="rgba(74, 90, 90, 0.8)" color="white" borderColor="rgba(255, 255, 255, 0.2)" fontSize="xs">
                        K
                      </Kbd>
                    </HStack>
                  </HStack>
                </VStack>
              ) : (
                <VStack spacing={4} align="stretch">
                  {/* Pages Results */}
                  {searchResults.pages.length > 0 && (
                    <Box>
                      <Text fontSize="xs" color="gray.400" mb={2} fontWeight="bold" textTransform="uppercase">
                        Pages ({searchResults.pages.length})
                      </Text>
                      <VStack spacing={1} align="stretch">
                        {searchResults.pages.map((page, idx) => (
                          <Button
                            key={idx}
                            variant="ghost"
                            justifyContent="flex-start"
                            onClick={() => handleResultClick(undefined, page.href)}
                            color="white"
                            _hover={{ bg: "rgba(74, 90, 90, 0.5)" }}
                            leftIcon={<FaLink />}
                          >
                            {page.label}
                          </Button>
                        ))}
                      </VStack>
                    </Box>
                  )}

                  {/* Projects Results */}
                  {searchResults.projects.length > 0 && (
                    <Box>
                      {searchResults.pages.length > 0 && <Divider my={2} borderColor="rgba(255, 255, 255, 0.1)" />}
                      <Text fontSize="xs" color="gray.400" mb={2} fontWeight="bold" textTransform="uppercase">
                        Projects ({searchResults.projects.length})
                      </Text>
                      <VStack spacing={1} align="stretch">
                        {searchResults.projects.map((project, idx) => (
                          <Button
                            key={idx}
                            variant="ghost"
                            justifyContent="flex-start"
                            onClick={() => handleResultClick(project.url)}
                            color="white"
                            _hover={{ bg: "rgba(74, 90, 90, 0.5)" }}
                            leftIcon={<FaCode />}
                            isDisabled={!project.url}
                          >
                            <VStack align="start" spacing={0} flex={1}>
                              <Text fontSize="sm" fontWeight="medium">
                                {project.title}
                              </Text>
                              <Text fontSize="xs" color="gray.400" noOfLines={1}>
                                {project.description}
                              </Text>
                            </VStack>
                            {!project.url && (
                              <Badge ml={2} fontSize="xs" bg="rgba(74, 90, 90, 0.8)" color="gray.300">
                                No link
                              </Badge>
                            )}
                          </Button>
                        ))}
                      </VStack>
                    </Box>
                  )}

                  {/* Blog Results */}
                  {searchResults.blogs.length > 0 && (
                    <Box>
                      {(searchResults.pages.length > 0 || searchResults.projects.length > 0) && (
                        <Divider my={2} borderColor="rgba(255, 255, 255, 0.1)" />
                      )}
                      <Text fontSize="xs" color="gray.400" mb={2} fontWeight="bold" textTransform="uppercase">
                        Blog Posts ({searchResults.blogs.length})
                      </Text>
                      <VStack spacing={1} align="stretch">
                        {searchResults.blogs.map((blog, idx) => (
                          <Button
                            key={idx}
                            variant="ghost"
                            justifyContent="flex-start"
                            onClick={() => handleResultClick(undefined, `/blog/${blog.id}`)}
                            color="white"
                            _hover={{ bg: "rgba(74, 90, 90, 0.5)" }}
                            leftIcon={<FaBookOpen />}
                          >
                            <VStack align="start" spacing={0} flex={1}>
                              <Text fontSize="sm" fontWeight="medium">
                                {blog.title}
                              </Text>
                              <Text fontSize="xs" color="gray.400" noOfLines={1}>
                                {blog.description}
                              </Text>
                            </VStack>
                          </Button>
                        ))}
                      </VStack>
                    </Box>
                  )}

                  {/* No Results */}
                  {searchQuery.trim() &&
                    searchResults.pages.length === 0 &&
                    searchResults.projects.length === 0 &&
                    searchResults.blogs.length === 0 && (
                      <VStack py={8} spacing={2}>
                        <Text color="gray.400" fontSize="sm">
                          No results found for &quot;{searchQuery}&quot;
                        </Text>
                        <Text color="gray.500" fontSize="xs">
                          Try a different search term
                        </Text>
                      </VStack>
                    )}
                </VStack>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
