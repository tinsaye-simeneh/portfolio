"use client";

import {
  Container,
  Heading,
  Box,
  Link,
  Text,
  VStack,
  HStack,
  Badge,
  Icon,
  Button,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";
import {
  FaExternalLinkAlt,
  FaDesktop,
  FaUser,
  FaGraduationCap,
  FaCube,
  FaLock,
  FaEye,
  FaArrowLeft,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const PortfolioLinks = () => {
  const router = useRouter();

  const cardBg = "rgba(26, 46, 46, 0.5)";
  const headingGradient = "linear(to-r, orange.300, red.400, yellow.300)";
  const cardBgValue = "rgba(26, 46, 46, 0.8)";
  const cardBorderValue = "rgba(255, 255, 255, 0.15)";
  const borderColor = "rgba(255, 255, 255, 0.1)";
  const textColor = "gray.300";
  const headingColor = "white";

  const sections = [
    {
      title: "Client Systems",
      description:
        "Complex web applications and management systems built for clients.",
      icon: FaDesktop,
      color: "blue",
      links: [
        {
          label: "Muyalogy - Private",
          url: "https://muyalogy.com",
          description: "An online learning management system.",
          hasAuth: true,
        },
        {
          label: "Jiret (Management Side) - Saas",
          url: "https://jiret.com",
          description: "A SaaS Learning Management System.",
        },
        {
          label: "Guzo School Management System - Saas (Private)",
          url: "https://guzo-sms.vercel.app",
          description: "A saas school management system",
          hasAuth: true,
        },
        {
          label: "Bunna Bank Agent Port",
          description: "Agent portal for Bunna Bank onboarding system",
          languages: ["JavaScript", "React", "Tailwind CSS"],
          hasAuth: true,
        },
        {
          label: "Bunna Bank Client Onboarding System",
          description: "Client onboarding system for Bunna Bank",
          languages: ["JavaScript", "React", "Tailwind CSS"],
          hasAuth: true,
        },
        {
          label: "Shangi Main Site with Admin Side",
          url: "http://shangi-indol.vercel.app/",
          description: "Main website with admin panel for Shangi",
          languages: ["JavaScript", "React", "Next.js"],
        },
        {
          label: "Specter systems portal - Saas",
          url: "https://portal.spectersystems.io",
          description: "A saas school management system",
          languages: [
            "JavaScript",
            "React",
            "Next.js",
            "Mantine",
            "Tailwind CSS",
            "Supabase",
          ],
        },
        {
          label: "Precise ethiopia Consulting site",
          description: "A Precise ethiop Consulting site",
          languages: ["JavaScript", "React", "Tailwind CSS"],
        },
        {
          label: "Lucy Delala",
          description: "A Lucy Delala website",
          languages: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
        },
        {
          label: "Keno Retail Game",
          description: "An interactive gaming platform.",
          hasAuth: true,
        },
        {
          label: "Spin Retail Game",
          description: "A spin-the-wheel gaming application.",
          hasAuth: true,
        },
        {
          label: "Cashier Retail",
          description: "A retail management system.",
          hasAuth: true,
        },
        {
          label: "Game Admins",
          description: "An admin panel for managing users and data.",
          hasAuth: true,
        },
        {
          label: "Bingo Cash",
          description: "Cashier system",
          hasAuth: true,
        },
        {
          label: "Bingo Finance",
          description: "Finance management",
          hasAuth: true,
        },
        {
          label: "Bingo Admin",
          description: "Admin panel",
          hasAuth: true,
        },
        {
          url: "https://zagol-new.vercel.app/",
          label: "Zagol",
          description: "Business platform",
        },
      ],
    },
    {
      title: "Client Portfolio",
      description:
        "Professional websites and portfolios created for various clients.",
      icon: FaUser,
      color: "purple",
      links: [
        {
          url: "https://et-construction.vercel.app/",
          label: "ET Construction",
          description: "Construction company site",
        },
        {
          url: "https://ruth-coffee.vercel.app/",
          label: "Ruth Coffee",
          description: "Coffee shop website",
        },
        {
          url: "https://tnh-gaming.vercel.app/",
          label: "TNH Gaming",
          description: "Gaming community site",
        },
        {
          url: "https://charity-kappa.vercel.app/",
          label: "Charity Kappa",
          description: "Non-profit organization",
        },
        {
          url: "https://dynamictehcnologieset.com",
          label: "Dynamic Technologies",
          description: "Tech company website",
        },
        {
          url: "https://viva-update.vercel.app/",
          label: "Viva Update",
          description: "News and updates platform",
        },
        {
          url: "https://elsamtechnoglogies.com",
          label: "Elsam Technologies",
          description: "Technology solutions",
        },
        {
          url: "https://gdscaastu.club/",
          label: "GDSC AASTU Club",
          description: "Student developer community",
        },
        {
          url: "https://utopixtechnologies.vercel.app/",
          label: "Utopix Technologies",
          description: "Tech startup website",
        },
        {
          url: "https://portfolio2-eight-alpha.vercel.app/",
          label: "Portfolio 2 Eight Alpha",
          description: "Personal portfolio",
        },
        {
          url: "https://backend-dev-portfolio.vercel.app/",
          label: "Backend Dev Portfolio",
          description: "Developer showcase",
        },
      ],
    },
    {
      title: "Learning Projects",
      description:
        "Experimental projects and learning exercises to master new technologies.",
      icon: FaGraduationCap,
      color: "green",
      links: [
        {
          url: "https://life-kit-gamma.vercel.app",
          label: "Life Kit Gamma",
          description: "Productivity tools",
        },
        {
          url: "https://minim-url.vercel.app",
          label: "Minim URL",
          description: "URL shortener service",
        },
        {
          url: "https://simple-design-pi.vercel.app/",
          label: "Simple Design Pi",
          description: "Minimalist design showcase",
        },
        {
          url: "https://uni-share.vercel.app/",
          label: "Uni Share",
          description: "University resource sharing",
        },
        {
          url: "https://kofi-nine.vercel.app/",
          label: "Kofi Nine",
          description: "Coffee ordering app",
        },
        {
          url: "https://weather-app-cyan-three.vercel.app/",
          label: "Weather App Cyan",
          description: "Weather forecast tool",
        },
        {
          url: "https://currency-converter-rho-azure.vercel.app/",
          label: "Currency Converter Rho",
          description: "Real-time currency exchange",
        },
        {
          url: "https://firebase-react-auth-wine.vercel.app/",
          label: "Firebase React Auth Wine",
          description: "Authentication system",
        },
        {
          url: "https://apiip.vercel.app/",
          label: "API IP",
          description: "IP address lookup tool",
        },
        {
          url: "https://telegram-oauth.vercel.app/",
          label: "Telegram OAuth",
          description: "Telegram integration",
        },
      ],
    },
    {
      title: "UI Components",
      description: "Reusable UI components and design system elements.",
      icon: FaCube,
      color: "orange",
      links: [
        {
          url: "https://m-square-login.vercel.app/",
          label: "M-Square Login",
          description: "Login component",
        },
        {
          url: "https://m-square-login-2.vercel.app/",
          label: "M-Square Login 2",
          description: "Alternative login design",
        },
        {
          url: "https://m-square-signup.vercel.app/",
          label: "M-Square Signup",
          description: "Registration component",
        },
        {
          url: "https://m-square-footer.vercel.app/",
          label: "M-Square Footer",
          description: "Footer component",
        },
        {
          url: "https://pricing-card-black.vercel.app/",
          label: "Pricing Card Black",
          description: "Pricing table component",
        },
        {
          url: "https://simple-responsive-survey-form.vercel.app/",
          label: "Responsive Survey Form",
          description: "Form component",
        },
        {
          url: "https://fm-card-component-eight.vercel.app/",
          label: "FM Card Component",
          description: "Card design",
        },
        {
          url: "https://fm-notification.vercel.app/",
          label: "FM Notification",
          description: "Notification system",
        },
        {
          url: "https://fm-expenses-chart.vercel.app/",
          label: "FM Expenses Chart",
          description: "Data visualization",
        },
        {
          url: "https://fm-rating-component-one.vercel.app/",
          label: "FM Rating Component",
          description: "Rating system",
        },
        {
          url: "https://fm-loopstudios-landing-three.vercel.app/",
          label: "FM Loop Studios Landing",
          description: "Landing page",
        },
        {
          url: "https://fm-order-summary-rose.vercel.app/",
          label: "FM Order Summary",
          description: "Order summary UI",
        },
        {
          url: "https://fm-landing.vercel.app/",
          label: "FM Landing",
          description: "Landing page template",
        },
      ],
    },
  ];

  return (
    <Box bg="#1a2e2e" minH="100vh" color="white" py={10}>
      <Container maxW="1600px">
        <VStack spacing={8} align="stretch">
          <VStack spacing={6} textAlign="center">
            <Button
              leftIcon={<Icon as={FaArrowLeft} />}
              variant="ghost"
              alignSelf="flex-start"
              onClick={() => router.push("/")}
              mb={4}
            >
              Back to Home
            </Button>

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
                Complete Portfolio Collection
              </Heading>
            </motion.div>
            <Text fontSize="xl" color={textColor} maxW="3xl" lineHeight="1.6">
              Explore my comprehensive collection of projects, from complex
              client systems to learning experiments and reusable components.
            </Text>
          </VStack>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HStack justify="center" spacing={8} py={6} flexWrap="wrap">
              <VStack>
                <Text 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  bgGradient="linear(to-r, orange.400, red.500)"
                  bgClip="text"
                >
                  {sections.reduce(
                    (acc, section) => acc + section.links.length,
                    0
                  )}
                  +
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Total Projects
                </Text>
              </VStack>
              <VStack>
                <Text 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  bgGradient="linear(to-r, red.400, yellow.500)"
                  bgClip="text"
                >
                  4
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Categories
                </Text>
              </VStack>
              <VStack>
                <Text 
                  fontSize="2xl" 
                  fontWeight="bold" 
                  bgGradient="linear(to-r, yellow.400, orange.500)"
                  bgClip="text"
                >
                  100%
                </Text>
                <Text fontSize="sm" color={textColor}>
                  Functional
                </Text>
              </VStack>
            </HStack>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Box
                bg={cardBgValue}
                backdropFilter="blur(30px) saturate(180%)"
                borderRadius="2xl"
                p={8}
                shadow="xl"
                border="2px solid"
                borderColor={cardBorderValue}
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  bgGradient: "linear(to-r, orange.400, red.500, yellow.400)",
                }}
              >
              <VStack align="stretch" spacing={6}>
                <HStack spacing={4}>
                  <Box
                    p={3}
                    borderRadius="xl"
                    bg="rgba(74, 90, 90, 0.5)"
                    color={`${section.color}.300`}
                  >
                    <Icon as={section.icon} boxSize={6} />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Heading as="h2" size="lg" color={headingColor}>
                      {section.title}
                    </Heading>
                    <Text color={textColor} fontSize="md">
                      {section.description}
                    </Text>
                  </VStack>
                  <Badge
                    bg="rgba(74, 90, 90, 0.8)"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.1)"
                  >
                    {section.links.length} projects
                  </Badge>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                  {section.links.map((link, linkIndex) => (
                    <Box
                      key={linkIndex}
                      bg={cardBg}
                      p={5}
                      borderRadius="xl"
                      shadow="sm"
                      border="1px"
                      borderColor={borderColor}
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "translateY(-4px)",
                        shadow: "lg",
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        bg: "rgba(74, 90, 90, 0.6)",
                      }}
                    >
                      <VStack align="stretch" spacing={3}>
                        <HStack justify="space-between" align="start">
                          <VStack align="start" spacing={1} flex={1}>
                            <Text
                              fontWeight="bold"
                              color={headingColor}
                              fontSize="md"
                              noOfLines={1}
                            >
                              {link.label}
                            </Text>
                            {link.description && (
                              <Text
                                fontSize="sm"
                                color={textColor}
                                noOfLines={2}
                              >
                                {link.description}
                              </Text>
                            )}
                          </VStack>
                          {link.hasAuth && (
                            <Tooltip label="Requires login credentials">
                              <Box>
                                <Icon
                                  as={FaLock}
                                  color="orange.400"
                                  boxSize={3}
                                />
                              </Box>
                            </Tooltip>
                          )}
                        </HStack>

                        {link.hasAuth && (
                          <Box
                            bg="rgba(74, 90, 90, 0.5)"
                            p={2}
                            borderRadius="md"
                            fontSize="xs"
                            border="1px solid"
                            borderColor="rgba(255, 255, 255, 0.1)"
                          >
                            <Text color="orange.300" fontWeight="medium">
                              Login required
                            </Text>
                          </Box>
                        )}

                        <Button
                          as={Link}
                          href={link.url}
                          isExternal
                          size="sm"
                          bg="rgba(74, 90, 90, 0.8)"
                          color="white"
                          _hover={{
                            bg: "rgba(74, 90, 90, 1)",
                            textDecoration: "none",
                          }}
                          border="1px solid"
                          borderColor="rgba(255, 255, 255, 0.1)"
                          variant="outline"
                          rightIcon={<Icon as={FaExternalLinkAlt} />}
                          borderRadius="full"
                        >
                          <Icon as={FaEye} mr={2} />
                          View Live
                        </Button>
                      </VStack>
                    </Box>
                  ))}
                </SimpleGrid>
              </VStack>
              </Box>
            </motion.div>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default PortfolioLinks;
