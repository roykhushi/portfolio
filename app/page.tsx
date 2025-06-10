import { BentoGridThirdDemo } from "@/components/Bento";
import { DockDemo } from "@/components/Dock";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="mb-4">
      <div className="mb-4 sm:mb-8">
        <DockDemo />
      </div>
      <main className="min-h-screen flex items-center justify-center mb-20">
        <BentoGridThirdDemo />
      </main>
      <div className="mt-4 pt-4">
          <Footer />
      </div>
    </div>
  );
}
