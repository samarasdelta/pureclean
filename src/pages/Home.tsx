import { Hero } from "../components/sections/Hero";
import { StatsBar } from "../components/sections/StatsBar";
import { LogoDivider } from "../components/sections/LogoDivider";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { WhyUs } from "../components/sections/WhyUs";
import { Process } from "../components/sections/Process";
import { ServiceArea } from "../components/sections/ServiceArea";
import { Testimonials } from "../components/sections/Testimonials";
import { CtaBanner } from "../components/sections/CtaBanner";

export function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LogoDivider />
      <ServicesGrid />
      <WhyUs />
      <Process />
      <ServiceArea />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
