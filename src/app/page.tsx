import Container from "@/components/home/Container";
import Hero from "@/components/home/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
      <>
        <Container>
          <Hero />
          <Separator className="mt-20 opacity-15" />
        </Container>
      </>
  );
}
