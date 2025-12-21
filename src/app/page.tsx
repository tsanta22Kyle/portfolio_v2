import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <Skills />
      <CertificationsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ActivitiesSection />
      <FinalCTA />
    </div>
  );
}
