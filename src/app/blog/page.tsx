"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Button,
  Spinner,
  Text,
  Badge,
  Container,
  VStack,
  HStack,
  SimpleGrid,
  Heading,
  Icon,
  Flex,
  Divider,
} from "@chakra-ui/react";
import {
  FaArrowLeft,
  FaHeart,
  FaClock,
  FaTag,
  FaEye,
  FaBookOpen,
  FaRedo,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Post = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  reactions: { heart?: number };
  read_time: number;
  published_at?: string;
  cover_image?: string;
};

export default function BlogsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const textColor = "gray.300";
  const headingColor = "white";
  const headingGradient = "linear(to-r, orange.300, red.400, yellow.300)";
  const buttonBorderColor = "orange.600";
  const buttonColor = "orange.400";
  const buttonHoverBg = "rgba(74, 90, 90, 0.3)";
  const cardBg = "rgba(26, 46, 46, 0.8)";
  const cardBorder = "rgba(255, 255, 255, 0.15)";
  const cardHoverBorder = "orange.600";
  const subscribeButtonBorder = "orange.600";
  const subscribeButtonColor = "orange.400";
  const subscribeButtonHoverBg = "rgba(74, 90, 90, 0.3)";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blogs", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to load posts");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setError(null);
    window.location.reload();
  };

  if (isLoading) {
    return (
      <Box bg="#1a2e2e" minH="100vh" color="white" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Spinner size="xl" thickness="4px" speed="0.65s" color="orange.500" />
          <Text color={textColor} fontWeight="medium">
            Loading blog posts...
          </Text>
        </VStack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box bg="#1a2e2e" minH="100vh" color="white" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={6} textAlign="center" maxW="md">
          <Icon as={FaBookOpen} boxSize={16} color="red.400" />
          <VStack spacing={2}>
            <Heading size="lg" color={headingColor}>
              Oops! Something went wrong
            </Heading>
            <Text color={textColor} fontSize="lg">
              {error}
            </Text>
          </VStack>
          <Button
            bgGradient="linear(to-r, orange.400, orange.600)"
            color="white"
            size="lg"
            onClick={handleRefresh}
            leftIcon={<Icon as={FaRedo} />}
            borderRadius="full"
            _hover={{
              bgGradient: "linear(to-r, orange.500, orange.700)",
              transform: "translateY(-2px)",
              shadow: "xl"
            }}
            transition="all 0.3s ease"
          >
            Try Again
          </Button>
        </VStack>
      </Box>
    );
  }

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
            
            <VStack spacing={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Heading 
                  as="h1" 
                  size="2xl" 
                  color={headingColor}
                  bgGradient={headingGradient}
                  bgClip="text"
                >
                  My Blog Posts
                </Heading>
              </motion.div>
              <Text 
                fontSize="xl" 
                color={textColor} 
                maxW="2xl"
                lineHeight="1.6"
              >
                Thoughts, tutorials, and insights from my development journey
              </Text>
            </VStack>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HStack spacing={8} flexWrap="wrap" justify="center">
                <VStack spacing={1}>
                  <Text 
                    fontSize="2xl" 
                    fontWeight="bold" 
                    bgGradient="linear(to-r, orange.400, red.500)"
                    bgClip="text"
                  >
                    {posts.length}
                  </Text>
                  <Text fontSize="sm" color={textColor}>
                    {posts.length === 1 ? 'Article' : 'Articles'}
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text 
                    fontSize="2xl" 
                    fontWeight="bold" 
                    bgGradient="linear(to-r, red.400, yellow.500)"
                    bgClip="text"
                  >
                    {posts.reduce((acc, post) => acc + (post.reactions.heart || 0), 0)}
                  </Text>
                  <Text fontSize="sm" color={textColor}>Total Hearts</Text>
                </VStack>
                <Button
                  leftIcon={<Icon as={FaRedo} />}
                  variant="outline"
                  borderColor={buttonBorderColor}
                  color={buttonColor}
                  onClick={handleRefresh}
                  borderRadius="full"
                  _hover={{
                    bg: buttonHoverBg,
                    transform: "translateY(-2px)",
                    shadow: "lg"
                  }}
                  transition="all 0.3s ease"
                >
                  Refresh
                </Button>
              </HStack>
            </motion.div>
          </VStack>

          <Divider />

          {posts.length === 0 ? (
            <VStack spacing={6} py={20} textAlign="center">
              <Icon as={FaBookOpen} boxSize={20} color="gray.300" />
              <VStack spacing={2}>
                <Heading size="lg" color={headingColor}>
                  No Blog Posts Yet
                </Heading>
                <Text color={textColor} fontSize="lg" maxW="md">
                  I&apos;m working on creating amazing content. Check back soon for updates!
                </Text>
              </VStack>
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
                Get Notified
              </Button>
            </VStack>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    bg={cardBg}
                    backdropFilter="blur(30px) saturate(180%)"
                    borderRadius="2xl"
                    shadow="xl"
                    border="2px solid"
                    borderColor={cardBorder}
                    overflow="hidden"
                    transition="all 0.3s ease"
                    position="relative"
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
                    _hover={{
                      transform: "translateY(-8px)",
                      shadow: "2xl",
                      borderColor: cardHoverBorder
                    }}
                  >
                  {post.cover_image ? (
                    <Box
                      h="200px"
                      bgImage={`url(${post.cover_image})`}
                      bgSize="cover"
                      bgPosition="center"
                    />
                  ) : (
                    <Box
                      h="200px"
                      bgGradient="linear(45deg, blue.400, purple.500, pink.400)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        position="absolute"
                        top="-50px"
                        right="-50px"
                        w="100px"
                        h="100px"
                        borderRadius="full"
                        bg="whiteAlpha.200"
                      />
                      <Box
                        position="absolute"
                        bottom="-30px"
                        left="-30px"
                        w="60px"
                        h="60px"
                        borderRadius="full"
                        bg="whiteAlpha.300"
                      />
                      <Icon as={FaBookOpen} boxSize={16} color="white" opacity={0.8} />
                    </Box>
                  )}

                  <VStack align="stretch" spacing={4} p={6}>
                    <VStack align="start" spacing={3}>
                      <Heading 
                        size="md" 
                        color={headingColor}
                        noOfLines={2}
                        lineHeight="1.3"
                      >
                        {post.title}
                      </Heading>
                      <Text 
                        color={textColor}
                        fontSize="sm"
                        noOfLines={3}
                        lineHeight="1.5"
                      >
                        {post.description}
                      </Text>
                    </VStack>

                    <Flex wrap="wrap" gap={2}>
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          bg="rgba(74, 90, 90, 0.8)"
                          color="white"
                          fontSize="xs"
                          px={2}
                          py={1}
                          borderRadius="full"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.1)"
                        >
                          <Icon as={FaTag} boxSize={2} mr={1} />
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge
                          bg="rgba(74, 90, 90, 0.5)"
                          color="gray.300"
                          fontSize="xs"
                          px={2}
                          py={1}
                          borderRadius="full"
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.1)"
                        >
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </Flex>

                    <HStack justify="space-between" pt={2}>
                      <HStack spacing={4} fontSize="sm" color={textColor}>
                        <HStack spacing={1}>
                          <Icon as={FaHeart} color="red.400" />
                          <Text>{post.reactions.heart || 0}</Text>
                        </HStack>
                        <HStack spacing={1}>
                          <Icon as={FaClock} />
                          <Text>{post.read_time} min</Text>
                        </HStack>
                      </HStack>
                    </HStack>

                    <Button
                      as={Link}
                      href={`/blog/${post.id}`}
                      bgGradient="linear(to-r, orange.400, orange.600)"
                      color="white"
                      variant="solid"
                      size="sm"
                      rightIcon={<Icon as={FaEye} />}
                      borderRadius="full"
                      _hover={{
                        bgGradient: "linear(to-r, orange.500, orange.700)",
                        textDecoration: "none",
                        transform: "translateY(-1px)",
                        shadow: "md"
                      }}
                      transition="all 0.2s ease"
                    >
                      Read Article
                    </Button>
                  </VStack>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          )}

         {posts.length > 0 && (
            <VStack spacing={4} textAlign="center" pt={8}>
              <Text color={textColor} fontSize="lg">
                Want to stay updated with my latest posts?
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
                Subscribe
              </Button>
              <Button
                variant="outline"
                borderColor={subscribeButtonBorder}
                color={subscribeButtonColor}
                size="lg"
                onClick={() => router.push('/links')}
                borderRadius="full"
                _hover={{
                  bg: subscribeButtonHoverBg,
                  transform: "translateY(-2px)",
                  shadow: "lg"
                }}
                transition="all 0.3s ease"
              >
                View Projects
              </Button>
              </HStack>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
