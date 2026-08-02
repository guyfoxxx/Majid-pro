import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Timeline } from "@/components/sections/Timeline";
import { Pricing } from "@/components/sections/Pricing";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Timeline />
      <Pricing />
      <CtaBanner />
    </>
  );
}
