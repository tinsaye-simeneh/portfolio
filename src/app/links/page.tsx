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
  useColorModeValue,
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
  FaArrowLeft
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const PortfolioLinks = () => {
  const router = useRouter();
  
  const sectionBg = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const headingColor = useColorModeValue("gray.800", "white");
  const credentialsBg = useColorModeValue("orange.50", "orange.900");

  const sections = [
    {
      title: "Client Systems",
      description: "Complex web applications and management systems built for clients.",
      icon: FaDesktop,
      color: "blue",
      links: [
        { url: "https://jiret.com", label: "Jiret", description: "Client management system" },
        { url: "https://muyalogy.com", label: "Muyalogy", description: "Learning management platform" },
        { url: "https://tin-et.vercel.app/", label: "Tin ET", description: "E-commerce platform" },
        {
          url: "https://et-keno2.vercel.app",
          label: "ET Keno 2",
          description: "Gaming platform",
          credentials: "test.shop / 12345678",
          hasAuth: true
        },
        {
          url: "https://et-spin2.vercel.app",
          label: "ET Spin 2",
          description: "Gaming platform",
          credentials: "test.shop / 12345678",
          hasAuth: true
        },
        {
          url: "https://et-cash.vercel.app",
          label: "ET Cashier",
          description: "Cashier management",
          credentials: "test.cashier / 12345678",
          hasAuth: true
        },
        {
          url: "https://et-admin2.vercel.app",
          label: "ET Admin 2",
          description: "Admin dashboard",
          credentials: "admin.test / 12345678",
          hasAuth: true
        },
        {
          url: "https://bingo-cash2.vercel.app",
          label: "Bingo Cash 2",
          description: "Cashier system",
          credentials: "cross.cashier / 123456",
          hasAuth: true
        },
        {
          url: "https://bingo-finance2.vercel.app",
          label: "Bingo Finance 2",
          description: "Finance management",
          credentials: "cross.finance / 123456",
          hasAuth: true
        },
        {
          url: "https://bingo-admin2.vercel.app",
          label: "Bingo Admin 2",
          description: "Admin panel",
          credentials: "cross.admin / 123456",
          hasAuth: true
        },
        { url: "https://zagol-new.vercel.app/", label: "Zagol New", description: "Business platform" },
      ],
    },
    {
      title: "Client Portfolio",
      description: "Professional websites and portfolios created for various clients.",
      icon: FaUser,
      color: "purple",
      links: [
        { url: "https://dynamictehcnologieset.com", label: "Dynamic Technologies", description: "Tech company website" },
        { url: "https://et-construction.vercel.app/", label: "ET Construction", description: "Construction company site" },
        { url: "https://ruth-coffee.vercel.app/", label: "Ruth Coffee", description: "Coffee shop website" },
        { url: "https://tnh-gaming.vercel.app/", label: "TNH Gaming", description: "Gaming community site" },
        { url: "https://gdscaastu.club/", label: "GDSC AASTU Club", description: "Student developer community" },
        { url: "https://charity-kappa.vercel.app/", label: "Charity Kappa", description: "Non-profit organization" },
        { url: "https://viva-update.vercel.app/", label: "Viva Update", description: "News and updates platform" },
        { url: "https://elsamtechnoglogies.com", label: "Elsam Technologies", description: "Technology solutions" },
        { url: "https://utopixtechnologies.vercel.app/", label: "Utopix Technologies", description: "Tech startup website" },
        { url: "https://portfolio2-eight-alpha.vercel.app/", label: "Portfolio 2 Eight Alpha", description: "Personal portfolio" },
        { url: "https://backend-dev-portfolio.vercel.app/", label: "Backend Dev Portfolio", description: "Developer showcase" },
      ],
    },
    {
      title: "Learning Projects",
      description: "Experimental projects and learning exercises to master new technologies.",
      icon: FaGraduationCap,
      color: "green",
      links: [
        { url: "https://life-kit-gamma.vercel.app", label: "Life Kit Gamma", description: "Productivity tools" },
        { url: "https://minim-url.vercel.app", label: "Minim URL", description: "URL shortener service" },
        { url: "https://simple-design-pi.vercel.app/", label: "Simple Design Pi", description: "Minimalist design showcase" },
        { url: "https://uni-share.vercel.app/", label: "Uni Share", description: "University resource sharing" },
        { url: "https://kofi-nine.vercel.app/", label: "Kofi Nine", description: "Coffee ordering app" },
        { url: "https://weather-app-cyan-three.vercel.app/", label: "Weather App Cyan", description: "Weather forecast tool" },
        { url: "https://currency-converter-rho-azure.vercel.app/", label: "Currency Converter Rho", description: "Real-time currency exchange" },
        { url: "https://firebase-react-auth-wine.vercel.app/", label: "Firebase React Auth Wine", description: "Authentication system" },
        { url: "https://apiip.vercel.app/", label: "API IP", description: "IP address lookup tool" },
        { url: "https://telegram-oauth.vercel.app/", label: "Telegram OAuth", description: "Telegram integration" },
      ],
    },
    {
      title: "UI Components",
      description: "Reusable UI components and design system elements.",
      icon: FaCube,
      color: "orange",
      links: [
        { url: "https://m-square-login.vercel.app/", label: "M-Square Login", description: "Login component" },
        { url: "https://m-square-login-2.vercel.app/", label: "M-Square Login 2", description: "Alternative login design" },
        { url: "https://m-square-signup.vercel.app/", label: "M-Square Signup", description: "Registration component" },
        { url: "https://m-square-footer.vercel.app/", label: "M-Square Footer", description: "Footer component" },
        { url: "https://pricing-card-black.vercel.app/", label: "Pricing Card Black", description: "Pricing table component" },
        { url: "https://simple-responsive-survey-form.vercel.app/", label: "Responsive Survey Form", description: "Form component" },
        { url: "https://fm-card-component-eight.vercel.app/", label: "FM Card Component", description: "Card design" },
        { url: "https://fm-notification.vercel.app/", label: "FM Notification", description: "Notification system" },
        { url: "https://fm-expenses-chart.vercel.app/", label: "FM Expenses Chart", description: "Data visualization" },
        { url: "https://fm-rating-component-one.vercel.app/", label: "FM Rating Component", description: "Rating system" },
        { url: "https://fm-loopstudios-landing-three.vercel.app/", label: "FM Loop Studios Landing", description: "Landing page" },
        { url: "https://fm-order-summary-rose.vercel.app/", label: "FM Order Summary", description: "Order summary UI" },
        { url: "https://fm-landing.vercel.app/", label: "FM Landing", description: "Landing page template" },
      ],
    },
  ];

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
            
            <Heading 
              as="h1" 
              size="2xl" 
              color={headingColor}
              bgGradient="linear(to-r, blue.400, purple.500, pink.400)"
              bgClip="text"
            >
              Complete Portfolio Collection
            </Heading>
            <Text 
              fontSize="xl" 
              color={textColor} 
              maxW="3xl"
              lineHeight="1.6"
            >
              Explore my comprehensive collection of projects, from complex client systems 
              to learning experiments and reusable components.
            </Text>
          </VStack>

          {/* Stats */}
          <HStack justify="center" spacing={8} py={6}>
            <VStack>
              <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                {sections.reduce((acc, section) => acc + section.links.length, 0)}+
              </Text>
              <Text fontSize="sm" color={textColor}>Total Projects</Text>
            </VStack>
            <VStack>
              <Text fontSize="2xl" fontWeight="bold" color="purple.500">4</Text>
              <Text fontSize="sm" color={textColor}>Categories</Text>
            </VStack>
            <VStack>
              <Text fontSize="2xl" fontWeight="bold" color="green.500">100%</Text>
              <Text fontSize="sm" color={textColor}>Functional</Text>
            </VStack>
          </HStack>

          {/* Sections */}
          {sections.map((section, index) => (
            <Box 
              key={index} 
              bg={sectionBg}
              borderRadius="2xl"
              p={8}
              shadow="lg"
              border="1px"
              borderColor={borderColor}
            >
              <VStack align="stretch" spacing={6}>
                {/* Section Header */}
                <HStack spacing={4}>
                  <Box
                    p={3}
                    borderRadius="xl"
                    bg={`${section.color}.100`}
                    color={`${section.color}.600`}
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
                    colorScheme={section.color} 
                    variant="subtle"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {section.links.length} projects
                  </Badge>
                </HStack>

                {/* Projects Grid */}
                <SimpleGrid 
                  columns={{ base: 1, md: 2, lg: 3 }} 
                  spacing={4}
                >
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
                        borderColor: `${section.color}.300`
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
                                <Icon as={FaLock} color="orange.400" boxSize={3} />
                              </Box>
                            </Tooltip>
                          )}
                        </HStack>

                        {link.credentials && (
                          <Box
                            bg={credentialsBg}
                            p={2}
                            borderRadius="md"
                            fontSize="xs"
                          >
                            <Text color="orange.600" fontWeight="medium">
                              Login: {link.credentials}
                            </Text>
                          </Box>
                        )}

                        <Button
                          as={Link}
                          href={link.url}
                          isExternal
                          size="sm"
                          colorScheme={section.color}
                          variant="outline"
                          rightIcon={<Icon as={FaExternalLinkAlt} />}
                          _hover={{ textDecoration: "none" }}
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
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default PortfolioLinks;
