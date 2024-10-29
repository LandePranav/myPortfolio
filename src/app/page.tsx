import Container from "@/components/home/Container";
import Hero from "@/components/home/hero";
import TechStack from "@/components/home/techStack";
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
