import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const PortfolioLinks = () => {
  const sections = [
    {
      title: "Client Systems",
      description: "These are the client system projects I have worked on.",
      links: [
        { url: "https://jiret.com", label: "Jiret" },
        { url: "https://muyalogy.com", label: "Muyalogy" },
        { url: "https://tin-et.vercel.app/", label: "Tin ET" },
        { url: "https://et-keno2.vercel.app", label: "ET Keno 2" },
        { url: "https://et-spin2.vercel.app", label: "ET Spin 2" },
        { url: "https://et-cash.vercel.app", label: "ET Cash" },
        {
          url: "https://et-admin2.vercel.app",
          label: "ET Admin 2 (username: admin.test0, pass: @thghwe1234)",
        },
        {
          url: "https://bingo-cash2.vercel.app",
          label: "Bingo Cash 2 (username: cross.cashier, password: 123456)",
        },
        {
          url: "https://bingo-finance2.vercel.app",
          label: "Bingo Finance 2 (username: cross.finance, password: 123456)",
        },
        {
          url: "https://bingo-admin2.vercel.app",
          label: "Bingo Admin 2 (username: cross.admin, password: 123456)",
        },
        { url: "https://zagol-new.vercel.app/", label: "Zagol New" },
      ],
    },
    {
      title: "Client Portfolio",
      description: "These are the client portfolio projects I have worked on.",
      links: [
        {
          url: "https://dynamictehcnologieset.com",
          label: "Dynamic Technologies",
        },
        {
          url: "https://et-construction.vercel.app/",
          label: "ET Construction",
        },
        { url: "https://ruth-coffee.vercel.app/", label: "Ruth Coffee" },
        { url: "https://tnh-gaming.vercel.app/", label: "TNH Gaming" },
        { url: "https://gdscaastu.club/", label: "GDSC AASTU Club" },
        { url: "https://charity-kappa.vercel.app/", label: "Charity Kappa" },
        { url: "https://viva-update.vercel.app/", label: "Viva Update" },
        { url: "https://elsamtechnoglogies.com", label: "Elsam Technologies" },
        {
          url: "https://utopixtechnologies.vercel.app/",
          label: "Utopix Technologies",
        },
        {
          url: "https://portfolio2-eight-alpha.vercel.app/",
          label: "Portfolio 2 Eight Alpha",
        },
        {
          url: "https://backend-dev-portfolio.vercel.app/",
          label: "Backend Dev Portfolio",
        },
      ],
    },
    {
      title: "Learning",
      description: "These are some of the learning projects I’ve worked on.",
      links: [
        { url: "https://life-kit-gamma.vercel.app", label: "Life Kit Gamma" },
        { url: "https://minim-url.vercel.app", label: "Minim URL" },
        {
          url: "https://simple-design-pi.vercel.app/",
          label: "Simple Design Pi",
        },
        { url: "https://uni-share.vercel.app/", label: "Uni Share" },
        { url: "https://kofi-nine.vercel.app/", label: "Kofi Nine" },
        {
          url: "https://weather-app-cyan-three.vercel.app/",
          label: "Weather App Cyan",
        },
        {
          url: "https://currency-converter-rho-azure.vercel.app/",
          label: "Currency Converter Rho",
        },
        {
          url: "https://firebase-react-auth-wine.vercel.app/",
          label: "Firebase React Auth Wine",
        },
        { url: "https://apiip.vercel.app/", label: "API IP" },
        { url: "https://telegram-oauth.vercel.app/", label: "Telegram OAuth" },
      ],
    },
    {
      title: "Components",
      description: "These are some standalone components I’ve built.",
      links: [
        { url: "https://m-square-login.vercel.app/", label: "M-Square Login" },
        {
          url: "https://m-square-login-2.vercel.app/",
          label: "M-Square Login 2",
        },
        {
          url: "https://m-square-signup.vercel.app/",
          label: "M-Square Signup",
        },
        {
          url: "https://m-square-footer.vercel.app/",
          label: "M-Square Footer",
        },
        {
          url: "https://pricing-card-black.vercel.app/",
          label: "Pricing Card Black",
        },
        {
          url: "https://simple-responsive-survey-form.vercel.app/",
          label: "Responsive Survey Form",
        },
        {
          url: "https://fm-card-component-eight.vercel.app/",
          label: "FM Card Component",
        },
        {
          url: "https://fm-notification.vercel.app/",
          label: "FM Notification",
        },
        {
          url: "https://fm-expenses-chart.vercel.app/",
          label: "FM Expenses Chart",
        },
        {
          url: "https://fm-rating-component-one.vercel.app/",
          label: "FM Rating Component",
        },
        {
          url: "https://fm-loopstudios-landing-three.vercel.app/",
          label: "FM Loop Studios Landing",
        },
        {
          url: "https://fm-order-summary-rose.vercel.app/",
          label: "FM Order Summary",
        },
        { url: "https://fm-landing.vercel.app/", label: "FM Landing" },
      ],
    },
  ];

  return (
    <Container maxW="container.lg" mt={10}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        My Previous Portfolio Projects
      </Heading>
      <VStack spacing={8} align="stretch">
        {sections.map((section, index) => (
          <Box key={index} bg="gray.50" p={6} borderRadius="md" shadow="md">
            <Heading as="h2" size="lg" mb={4}>
              {section.title}
            </Heading>
            <Text mb={4} fontSize="md" color="gray.700">
              {section.description}
            </Text>
            {/* Grid System to display links in columns */}
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {section.links.map((link, linkIndex) => (
                <GridItem
                  key={linkIndex}
                  bg="white"
                  p={4}
                  borderRadius="md"
                  boxShadow="md"
                  _hover={{ boxShadow: "xl" }}
                >
                  <Link
                    href={link.url}
                    isExternal
                    color="blue.500"
                    _hover={{ textDecoration: "underline" }}
                  >
                    <FaExternalLinkAlt /> {link.label}
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default PortfolioLinks;
