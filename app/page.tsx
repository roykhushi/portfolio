import { Footer } from "@/components/Footer";
import { CursorCat } from "@/components/home/CursorCat";
import { Hero } from "@/components/home/Hero";
import { ShaderBackground } from "@/components/home/ShaderBackground";
import { SiteHeader } from "@/components/home/SiteHeader";
import { Work } from "@/components/home/Work";
import { EducationTimeline, ExperienceTimeline } from "@/components/TimelineSections";

export default function Home() {
  return (
    <div className="text-foreground">
      <CursorCat />
      <ShaderBackground />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <Work />
        <ExperienceTimeline />
        <EducationTimeline />
      </main>
      <div id="contact" className="relative z-10 scroll-mt-20">
        <Footer />
      </div>
    </div>
  );
}
