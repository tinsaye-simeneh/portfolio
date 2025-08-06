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
} from "@chakra-ui/react";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

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
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const hoverShadow = useColorModeValue("xl", "dark-lg");
  const githubHoverBg = useColorModeValue("gray.50", "gray.700");
  
  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      overflow="hidden"
      shadow="lg"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        shadow: hoverShadow,
        borderColor: "blue.300",
      }}
      w="100%"
      maxW="lg"
      mx="auto"
      position="relative"
    >
      {imageUrl ? (
        <AspectRatio ratio={16 / 9}>
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            objectFit="cover"
            fallback={
              <Box
                bg="gray.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="full"
              >
                <Icon as={FaCode} boxSize={12} color="gray.400" />
              </Box>
            }
          />
        </AspectRatio>
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
          <Icon as={FaCode} boxSize={16} color="white" opacity={0.8} />
        </Box>
      )}

      <VStack align="stretch" spacing={4} p={6}>
        <VStack align="start" spacing={3}>
          <Heading 
            fontSize="xl" 
            color={headingColor}
            fontWeight="bold"
          >
            {title}
          </Heading>
          <Text 
            fontSize="md" 
            color={textColor}
            lineHeight="1.6"
            noOfLines={3}
          >
            {description}
          </Text>
        </VStack>

        <Box>
          <Text fontSize="xs" color={textColor} mb={2} fontWeight="medium">
            TECH STACK
          </Text>
          <Flex wrap="wrap" gap={2}>
            {languages?.map((language) => (
              <Badge
                key={language}
                colorScheme="blue"
                variant="subtle"
                fontSize="xs"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight="medium"
                _hover={{ 
                  transform: "scale(1.05)",
                  colorScheme: "purple"
                }}
                transition="all 0.2s ease"
                cursor="default"
              >
                {language}
              </Badge>
            ))}
          </Flex>
        </Box>

        <HStack spacing={3} pt={2} justify="stretch">
          <Button
            as="a"
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            size="sm"
            rightIcon={<Icon as={FaExternalLinkAlt} />}
            minW="120px"
            borderRadius="full"
            fontWeight="medium"
            _hover={{
              transform: "translateY(-1px)",
              shadow: "md",
            }}
            transition="all 0.2s ease"
          >
            Live Demo
          </Button>
          
          {githubLink ? (
            <Button
              as="a"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              colorScheme="gray"
              size="sm"
              rightIcon={<Icon as={FaGithub} />}
              minW="120px"
              borderRadius="full"
              fontWeight="medium"
              _hover={{
                transform: "translateY(-1px)",
                shadow: "md",
                bg: githubHoverBg,
              }}
              transition="all 0.2s ease"
            >
              Code
            </Button>
          ) : (
            <Box minW="120px" />
          )}
        </HStack>
      </VStack>

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blue.500"
        opacity={0}
        transition="opacity 0.3s ease"
        _groupHover={{ opacity: 0.05 }}
        pointerEvents="none"
        borderRadius="xl"
      />
    </Box>
  );
};

export default ProjectCard;
