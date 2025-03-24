"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Spinner,
  Flex,
  Text,
  Badge,
} from "@chakra-ui/react";

type Post = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  reactions: { heart?: number };
  read_time: number;
};

export default function BlogsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Text color="red.500" fontSize="xl">
          {error}
        </Text>
        <Button
          mt={4}
          colorScheme="blue"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box maxW="container.xl" mx="auto" py={10} px={4}>
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="xl" fontWeight="bold" color="gray.800">
          Available Blogs
        </Text>
        <Button
          colorScheme="blue"
          onClick={() => window.location.reload()}
          size="sm"
        >
          Refresh
        </Button>
      </Flex>

      {posts.length === 0 ? (
        <Text textAlign="center" fontSize="lg" color="gray.500">
          No blogs available.
        </Text>
      ) : (
        <Box overflowX="auto" borderWidth="1px" borderRadius="lg" shadow="md">
          <Table variant="simple">
            <Thead bg="gray.100">
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Tags</Th>
                <Th>Reactions</Th>
                <Th>Read Time</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts.map((post) => (
                <Tr key={post.id} _hover={{ bg: "gray.50" }}>
                  <Td fontWeight="medium" maxW="200px" isTruncated>
                    {post.title}
                  </Td>
                  <Td maxW="300px" isTruncated>
                    {post.description}
                  </Td>
                  <Td>
                    <Flex gap={2} wrap="wrap">
                      {post.tags.map((tag) => (
                        <Badge key={tag} colorScheme="teal">
                          {tag}
                        </Badge>
                      ))}
                    </Flex>
                  </Td>
                  <Td>❤️ {post.reactions.heart || 0}</Td>
                  <Td>{post.read_time} min</Td>
                  <Td>
                    <Button
                      as={Link}
                      href={`/blog/${post.id}`}
                      colorScheme="blue"
                      size="sm"
                      variant="outline"
                      className="hover:bg-blue-50"
                    >
                      View
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
}
