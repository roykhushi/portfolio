import { BentoGridThirdDemo } from "@/components/Bento";
import { DockDemo } from "@/components/Dock";

export default function Home() {
  return (
    <div className="mb-4 font-[family-name:var(--font-geist-sans)] ">
      <div className="mb-4 sm:mb-8">
        <DockDemo />
      </div>
      <main className="min-h-screen flex items-center justify-center mb-10">
        <BentoGridThirdDemo />
      </main>
      <footer className="border">
        <div className="flex">
          <h3>Khushi Roy</h3>
        </div>
      </footer>
    </div>
  );
}
