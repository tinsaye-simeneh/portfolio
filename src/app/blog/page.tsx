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
  useColorModeValue,
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

  const sectionBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");

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
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.500" />
          <Text color={textColor} fontWeight="medium">
            Loading blog posts...
          </Text>
        </VStack>
      </Box>
    );
  }

  if (error) {
    return (
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
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
            colorScheme="blue"
            size="lg"
            onClick={handleRefresh}
            leftIcon={<Icon as={FaRedo} />}
            borderRadius="full"
          >
            Try Again
          </Button>
        </VStack>
      </Box>
    );
  }

  return (
    <Box minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          {/* Header */}
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
              <Heading 
                as="h1" 
                size="2xl" 
                color={headingColor}
                bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
                bgClip="text"
              >
                My Blog Posts
              </Heading>
              <Text 
                fontSize="xl" 
                color={textColor} 
                maxW="2xl"
                lineHeight="1.6"
              >
                Thoughts, tutorials, and insights from my development journey
              </Text>
            </VStack>

            {/* Stats and Actions */}
            <HStack spacing={8} flexWrap="wrap" justify="center">
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                  {posts.length}
                </Text>
                <Text fontSize="sm" color={textColor}>
                  {posts.length === 1 ? 'Article' : 'Articles'}
                </Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="2xl" fontWeight="bold" color="purple.500">
                  {posts.reduce((acc, post) => acc + (post.reactions.heart || 0), 0)}
                </Text>
                <Text fontSize="sm" color={textColor}>Total Hearts</Text>
              </VStack>
              <Button
                leftIcon={<Icon as={FaRedo} />}
                variant="outline"
                colorScheme="blue"
                onClick={handleRefresh}
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  shadow: "lg"
                }}
                transition="all 0.3s ease"
              >
                Refresh
              </Button>
            </HStack>
          </VStack>

          <Divider />

          {/* Blog Posts */}
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
                colorScheme="blue"
                size="lg"
                onClick={() => router.push('/contact-me')}
                borderRadius="full"
              >
                Get Notified
              </Button>
            </VStack>
          ) : (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {posts.map((post) => (
                <Box
                  key={post.id}
                  bg={sectionBg}
                  borderRadius="2xl"
                  shadow="lg"
                  border="1px"
                  borderColor={borderColor}
                  overflow="hidden"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    shadow: "xl",
                    borderColor: "blue.300"
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
                          colorScheme="blue"
                          variant="subtle"
                          fontSize="xs"
                          px={2}
                          py={1}
                          borderRadius="full"
                        >
                          <Icon as={FaTag} boxSize={2} mr={1} />
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge
                          colorScheme="gray"
                          variant="subtle"
                          fontSize="xs"
                          px={2}
                          py={1}
                          borderRadius="full"
                        >
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </Flex>

                    {/* Meta Info */}
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

                    {/* Action Button */}
                    <Button
                      as={Link}
                      href={`/blog/${post.id}`}
                      colorScheme="blue"
                      variant="outline"
                      size="sm"
                      rightIcon={<Icon as={FaEye} />}
                      borderRadius="full"
                      _hover={{
                        bg: "blue.500",
                        color: "white",
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
              ))}
            </SimpleGrid>
          )}

          {/* Footer CTA */}
          {posts.length > 0 && (
            <VStack spacing={4} textAlign="center" pt={8}>
              <Text color={textColor} fontSize="lg">
                Want to stay updated with my latest posts?
              </Text>
              <HStack spacing={4}>
                <Button
                  colorScheme="blue"
                  size="lg"
                  onClick={() => router.push('/contact-me')}
                  borderRadius="full"
                >
                  Subscribe
                </Button>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  size="lg"
                  onClick={() => router.push('/links')}
                  borderRadius="full"
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
