"use client";

import { SimpleGrid, Container, Heading } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

const projects = [
   {
    title: "Muyalogy",
    demoLink: "https://muyalogy.com",
    description: "An online learning management system.",
    languages: [
      "JavaScript",
      "React",
      "Next.js",
      "Mantine",
      "Supabase",
      "Tailwind CSS",
    ],
  },
  {
    title: "Guzo School Management System - Saas",
    demoLink: "https://guzo-sms.vercel.app",
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
    title: "Jiret (Management Side) - Saas",
    demoLink: "https://jiret.com",
    description: "A comprehensive client management system.",
    languages: ["JavaScript", "React", "Next.js", "Mantine", "Tailwind CSS"],
  },
  {
    title: "Bunna Bank Onboarding Systems",
    description: "A Bunna Bank onboarding system including agent, customer and admin systems",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Specter systems portal - Saas",
    demoLink: "https://portal.spectersystems.io",
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
    title: "Precise ethiopia Consulting site",
    description: "A Precise ethiop Consulting site",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Lucy Delala",
    description: "A Lucy Delala website",
    languages: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Keno Retail Game",
    description: "An interactive gaming platform.",
    languages: ["JavaScript", "React.js"],
  },
  {
    title: "Spin Retail Game",
    description: "A spin-the-wheel gaming application.",
    languages: ["JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Cashier Retail",
    description: "A retail management system.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Game Admins",
    description: "An admin panel for managing users and data.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Bingo",
    demoLink: "https://bingo.etvirtual.com",
    description: "An online bingo game platform.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Bingo Finance",
    demoLink: "https://bingofinance.etvirtual.com/",
    description: "A finance management tool for bingo.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Bingo Admin",
    demoLink: "https://bingoadmin.etvirtual.com/",
    description: "Admin management for the bingo platform.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Tin ET",
    demoLink: "https://tin-et.vercel.app/",
    description: "An engaging Business License platform.",
    languages: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Zagol New",
    demoLink: "https://zagol-new.vercel.app/",
    description: "A new version of the Zagol platform.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "ET Construction",
    demoLink: "https://et-construction.vercel.app/",
    description: "A portfolio for construction services.",
    languages: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Ruth Coffee",
    demoLink: "https://ruth-coffee.vercel.app/",
    description: "An online coffee shop portfolio.",
    languages: ["JavaScript", "HTML5", "Tailwind CSS"],
  },
  {
    title: "TNH Gaming",
    demoLink: "https://tnh-gaming.vercel.app/",
    description: "A gaming portfolio showcasing various games.",
    languages: ["JavaScript", "React"],
  },
  {
    title: "GDSCAASTU",
    demoLink: "https://gdscaastu.club/",
    description: "A portfolio for a university student association.",
    languages: ["Adobe XD"],
  },
  {
    title: "Charity Kappa",
    demoLink: "https://charity-kappa.vercel.app/",
    description: "A charity organization portfolio.",
    languages: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Viva Update",
    demoLink: "https://viva-update.vercel.app/",
    description: "A news update platform portfolio.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Elsam Technologies",
    demoLink: "https://elsamtechnoglogies.com",
    description: "A tech company portfolio.",
    languages: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Utopix Technologies",
    demoLink: "https://utopixtechnologies.vercel.app/",
    description: "A tech portfolio showcasing various services.",
    languages: ["JavaScript", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    title: "Dynamic Technologies",
    demoLink: "https://dynamictehcnologieset.com",
    description: "A portfolio showcasing tech solutions.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Portfolio 2",
    demoLink: "https://portfolio2-eight-alpha.vercel.app/",
    description: "A personal portfolio showcasing projects.",
    languages: ["JavaScript", "React"],
  },
  {
    title: "Backend Dev Portfolio",
    demoLink: "https://backend-dev-portfolio.vercel.app/",
    description: "A portfolio showcasing backend development skills.",
    languages: ["JavaScript", "React.js"],
  },

  {
    title: "Simple Design",
    demoLink: "https://simple-design-pi.vercel.app/",
    description: "A project for simple design learning.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Uni Share",
    demoLink: "https://uni-share.vercel.app/",
    description: "A platform for sharing university resources.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Kofi Nine",
    demoLink: "https://kofi-nine.vercel.app/",
    description: "An online payment solution.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Weather App",
    demoLink: "https://weather-app-cyan-three.vercel.app/",
    description: "A weather forecast application.",
    languages: ["JavaScript", "React", "Axios", "Tailwind CSS"],
  },
  {
    title: "Currency Converter",
    demoLink: "https://currency-converter-rho-azure.vercel.app/",
    description: "An application to convert currencies.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Firebase Auth",
    demoLink: "https://firebase-react-auth-wine.vercel.app/",
    description: "A project demonstrating Firebase authentication.",
    languages: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "API IP",
    demoLink: "https://apiip.vercel.app/",
    description: "A project to get IP address details.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Telegram OAuth",
    demoLink: "https://telegram-oauth.vercel.app/",
    description: "A project demonstrating OAuth with Telegram.",
    languages: ["JavaScript", "React", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={10} textAlign="center">
        My Projects (25+)
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink || ""}
            languages={project.languages}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}
