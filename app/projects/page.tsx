import { DockDemo } from "@/components/Dock";
import { ProjectCarousel } from "@/components/ProjectCarousel";


export default function Projects() {
  return (
    <>
      <div className="mb-4">
        <div className="mb-4 sm:mb-8">
          <DockDemo />
        </div>

        <div className="w-full">
          <ProjectCarousel />
        </div>
        
      </div>
    </>
  );
}
