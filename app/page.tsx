import { BentoGridThirdDemo } from "@/components/Bento";
import { DockDemo } from "@/components/Dock";

export default function Home() {
  return (
    <div className="mb-4">
      <div className="mb-4 sm:mb-8">
        <DockDemo />
      </div>
      <main className="min-h-screen flex items-center justify-center mb-10">
        <BentoGridThirdDemo />
      </main>
    </div>
  );
}
