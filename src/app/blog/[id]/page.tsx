"use client"; // Switch to client-side for interactivity

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
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

  // Fetch post data on mount
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.id}`, {
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
      const response = await fetch(`/api/blogs/${params.id}`, {
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
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  if (error || !post) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Text color="red.500" fontSize="xl">
          {error || "Blog not found"}
        </Text>
        <Button as={Link} href="/blogs" mt={4} colorScheme="blue">
          Back to Blogs
        </Button>
      </Box>
    );
  }

  return (
    <Box maxW="container.lg" mx="auto" py={12} px={6}>
      <Card
        shadow="xl"
        borderRadius="lg"
        overflow="hidden"
        className="bg-white hover:shadow-2xl transition-shadow duration-300"
      >
        <CardHeader bg="gray.50" p={6}>
          <Heading as="h1" size="xl" color="gray.800">
            {post.title}
          </Heading>
        </CardHeader>
        <CardBody p={6}>
          <Text fontSize="lg" color="gray.600" mb={6}>
            {post.description}
          </Text>
          <Flex gap={3} mb={6} wrap="wrap">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                colorScheme="teal"
                px={3}
                py={1}
                borderRadius="full"
                className="shadow-sm"
              >
                {tag}
              </Badge>
            ))}
          </Flex>
          <Flex justify="space-between" align="center" mb={6}>
            <Flex gap={4}>
              <Text fontSize="md" color="gray.500">
                ❤️ {heartCount}
              </Text>
              <Text fontSize="md" color="gray.500">
                {post.read_time} min read
              </Text>
            </Flex>
            <Button
              colorScheme="red"
              variant="outline"
              size="md"
              leftIcon={<span>❤️</span>}
              onClick={handleHeartReaction}
              className="hover:bg-red-50 transition-colors"
            >
              Like
            </Button>
          </Flex>
          <Button
            as={Link}
            href="/blogs"
            colorScheme="blue"
            variant="ghost"
            className="hover:bg-blue-50"
          >
            Back to Blogs
          </Button>
        </CardBody>
      </Card>
    </Box>
  );
}
