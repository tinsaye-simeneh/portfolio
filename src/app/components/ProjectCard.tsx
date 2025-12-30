"use client";

import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  Icon,
  Flex,
  Image,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaCode, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  demoLink: string;
  languages: string[];
  githubLink?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  demoLink,
  languages,
  githubLink,
  imageUrl,
}: ProjectCardProps) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const overlayBg = useColorModeValue("rgba(255, 255, 255, 0.95)", "rgba(26, 32, 44, 0.95)");
  
  // Orange theme gradients
  const gradientBg = useColorModeValue(
    "linear(to-br, orange.400, red.500, yellow.400)",
    "linear(to-br, orange.500, red.600, yellow.500)"
  );
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ height: "100%" }}
    >
      <Box
        position="relative"
        w="100%"
        h="100%"
        minH="400px"
        borderRadius="3xl"
        overflow="hidden"
        shadow="2xl"
        bg={cardBg}
        group
        cursor="pointer"
        onClick={() => window.open(demoLink, "_blank")}
      >
        {/* Background Image/Gradient Layer */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${title} preview`}
              objectFit="cover"
              w="100%"
              h="100%"
              transition="transform 0.6s ease"
              _groupHover={{ transform: "scale(1.1)" }}
              fallback={
                <Box
                  h="100%"
                  bgGradient={gradientBg}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={FaCode} boxSize={20} color="white" opacity={0.7} />
                </Box>
              }
            />
          ) : (
            <Box
              h="100%"
              bgGradient={gradientBg}
              position="relative"
              overflow="hidden"
            >
              {/* Animated gradient orbs */}
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "10%",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                  filter: "blur(60px)",
                }}
              />
              <motion.div
                animate={{
                  x: [0, -80, 0],
                  y: [0, -60, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  bottom: "20%",
                  left: "10%",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.15)",
                  filter: "blur(50px)",
                }}
              />
              <Icon 
                as={FaCode} 
                boxSize={20} 
                color="white" 
                opacity={0.6}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={1}
              />
            </Box>
          )}
          
          {/* Gradient Overlay */}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            h="70%"
            bgGradient="linear(to-t, blackAlpha.800, blackAlpha.400, transparent)"
            opacity={0.8}
            transition="opacity 0.3s ease"
            _groupHover={{ opacity: 0.9 }}
          />
        </Box>

        {/* Content Layer */}
        <Box
          position="relative"
          zIndex={1}
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={8}
        >
          {/* Top Section - Tech Stack Floating Pills */}
          <Flex wrap="wrap" gap={2} justify="flex-end">
            {languages?.slice(0, 4).map((language, index) => (
              <motion.div
                key={language}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
              >
                <Badge
                  fontSize="xs"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontWeight="bold"
                  bg={overlayBg}
                  backdropFilter="blur(10px)"
                  color={headingColor}
                  border="1px solid"
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                  boxShadow="lg"
                  textTransform="uppercase"
                  letterSpacing="wide"
                >
                  {language}
                </Badge>
              </motion.div>
            ))}
            {languages?.length > 4 && (
              <Badge
                fontSize="xs"
                px={4}
                py={2}
                borderRadius="full"
                fontWeight="bold"
                bg={overlayBg}
                backdropFilter="blur(10px)"
                color={headingColor}
                border="1px solid"
                borderColor={useColorModeValue("gray.200", "gray.600")}
                boxShadow="lg"
              >
                +{languages.length - 4}
              </Badge>
            )}
          </Flex>

          {/* Bottom Section - Title, Description, Actions */}
          <VStack align="stretch" spacing={6} mt="auto">
            {/* Title and Description */}
            <VStack align="stretch" spacing={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Heading
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color="white"
                  fontWeight="bold"
                  lineHeight="1.2"
                  textShadow="0 2px 10px rgba(0,0,0,0.5)"
                  _groupHover={{ transform: "translateY(-2px)" }}
                  transition="transform 0.3s ease"
                >
                  {title}
                </Heading>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Text
                  fontSize="md"
                  color="whiteAlpha.900"
                  lineHeight="1.7"
                  noOfLines={2}
                  textShadow="0 1px 5px rgba(0,0,0,0.5)"
                >
                  {description}
                </Text>
              </motion.div>
            </VStack>

            {/* Action Buttons - Floating Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <HStack spacing={3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    as="a"
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    rightIcon={<Icon as={FaArrowRight} />}
                    bg="white"
                    color="gray.800"
                    borderRadius="full"
                    fontWeight="bold"
                    px={6}
                    _hover={{
                      bg: "orange.400",
                      color: "white",
                      transform: "translateX(4px)",
                      shadow: "xl",
                    }}
                    transition="all 0.3s ease"
                    boxShadow="lg"
                  >
                    View Project
                  </Button>
                </motion.div>

                {githubLink && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      as="a"
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="md"
                      variant="ghost"
                      leftIcon={<Icon as={FaGithub} />}
                      color="white"
                      borderRadius="full"
                      fontWeight="bold"
                      px={6}
                      bg="whiteAlpha.200"
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      _hover={{
                        bg: "whiteAlpha.300",
                        transform: "scale(1.05)",
                        borderColor: "whiteAlpha.500",
                      }}
                      transition="all 0.3s ease"
                    >
                      Code
                    </Button>
                  </motion.div>
                )}
              </HStack>
            </motion.div>
          </VStack>
        </Box>

        {/* Border Glow Effect on Hover */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderRadius="3xl"
          border="2px solid"
          borderColor="transparent"
          transition="all 0.3s ease"
          _groupHover={{
            borderColor: "orange.400",
            boxShadow: "0 0 30px rgba(255, 140, 0, 0.4)",
          }}
          pointerEvents="none"
        />
      </Box>
    </motion.div>
  );
};

export default ProjectCard;