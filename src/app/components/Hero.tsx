"use client";

import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 24 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Hi there! <br />
          <Text as={"span"} color={"blue.400"}>
            I&apos;m Tinsaye Simeneh
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          A web developer and UI/UX designer with 4+ years of experience.
          I&apos;ve built 30+ websites, focusing on seamless, user-centric
          experiences. My stack includes React.js, Next.js, TypeScript,
          JavaScript, Supabase, and Tailwind CSS, along with Bootstrap, Mantine,
          Chakra, and Material UI for styling.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"green"}
            _hover={{ bg: "green.500" }}
            as={"a"}
            href={"/my-resume"}
          >
            Resume
          </Button>
          <Button
            rounded={"full"}
            px={6}
            as={"a"}
            href={"/projects"}
            bg={"white"}
            color={"gray.800"}
            _hover={{ bg: "gray.50" }}
            border={"1px"}
          >
            My Projects
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
