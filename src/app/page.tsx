import Container from "@/components/home/Container";
import Hero from "@/components/home/hero";
import { Separator } from "@/components/ui/separator";
import TechStack from "@/components/home/techStack";
import { projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import ProjectSection from "@/components/home/projects";

export default function Home() {
  return (
      <>
        <Container>
          <Hero />
          <TechStack />
          <ProjectSection />
        </Container>
      </>
  );
}
