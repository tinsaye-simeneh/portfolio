"use client"; // Switch to client-side for interactivity

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Button,
  Flex,
  Badge,
  Spinner,
} from "@chakra-ui/react";

type Post = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  reactions: { heart?: number };
  read_time: number;
};

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [heartCount, setHeartCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blogs/get-blog?id=${params.id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }

        const data = await response.json();
        setPost(data);
        setHeartCount(data.reactions.heart || 0);
      } catch (err) {
        setError("Blog not found");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [params.id]);

  // Handle heart reaction
  const handleHeartReaction = async () => {
    if (!post) return;

    const newHeartCount = heartCount + 1;
    setHeartCount(newHeartCount);

    try {
      const response = await fetch(`/api/blogs/update-blog?id=${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...post,
          reactions: { heart: newHeartCount },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update reaction");
      }
    } catch (err) {
      setHeartCount(heartCount); // Revert on error
      console.error("Reaction update failed:", err);
    }
  };

  if (isLoading) {
    return (
      <Box bg="#1a2e2e" minH="100vh" color="white" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="orange.500" />
      </Box>
    );
  }

  if (error || !post) {
    return (
      <Box bg="#1a2e2e" minH="100vh" color="white" textAlign="center" py={10} px={6}>
        <Text color="red.400" fontSize="xl">
          {error || "Blog not found"}
        </Text>
        <Button as={Link} href="/blog" mt={4} bg="rgba(74, 90, 90, 0.8)" color="white" _hover={{ bg: "rgba(74, 90, 90, 1)" }}>
          Back to Blogs
        </Button>
      </Box>
    );
  }

  return (
    <Box bg="#1a2e2e" minH="100vh" color="white">
      <Box maxW="1600px" mx="auto" py={12} px={6}>
        <Card
          shadow="xl"
          borderRadius="lg"
          overflow="hidden"
          bg="rgba(26, 46, 46, 0.8)"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.15)"
        >
          <CardHeader bg="rgba(74, 90, 90, 0.3)" p={6}>
            <Flex align="center" gap={3} wrap="nowrap">
              <Heading as="h1" size="xl" color="white">
                {post.title}
              </Heading>
              <Flex gap={2} wrap="nowrap" overflowX="auto">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    bg="rgba(74, 90, 90, 0.8)"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    whiteSpace="nowrap"
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Flex>
          </CardHeader>

          <CardBody p={6} pt={2}>
            <Text fontSize="lg" color="gray.300" mb={5}>
              {post.description}
            </Text>
            <Flex justify="space-between" align="center" mb={6}>
              <Flex gap={4}>
                <Text fontSize="md" color="gray.400">
                  ❤️ {heartCount}
                </Text>
                <Text fontSize="md" color="gray.400">
                  {post.read_time} min read
                </Text>
              </Flex>
              <Button
                bg="rgba(74, 90, 90, 0.8)"
                color="white"
                variant="outline"
                borderColor="rgba(255, 255, 255, 0.2)"
                size="md"
                leftIcon={<span>❤️</span>}
                onClick={handleHeartReaction}
                _hover={{ bg: "rgba(74, 90, 90, 1)" }}
              >
                Like
              </Button>
            </Flex>
            <Button
              as={Link}
              href="/blog"
              bg="rgba(74, 90, 90, 0.8)"
              color="white"
              variant="ghost"
              _hover={{ bg: "rgba(74, 90, 90, 0.5)" }}
            >
              Back to Blogs
            </Button>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}
