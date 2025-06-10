"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "motion/react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { BracesIcon } from "lucide-react";
import Link from "next/link";
import { SparklesText } from "./magicui/sparkles-text";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button } from "./ui/button";
import { AuroraText } from "./magicui/aurora-text";
import { useRouter } from "next/navigation";

export function BentoGridThirdDemo() {

  return (
    <BentoGrid className="max-w-4xl mx-auto grid-cols-1 md:auto-rows-[20rem] gap-4 p-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  function openResume(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.open('/Khushi_Roy_Resume.pdf', '_blank');
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="flex flex-col sm:flex-row items-center gap-14 justify-between">
        <div className="rounded-full overflow-hidden border w-20 h-20">
          <img src="/profile.jpg" alt="profile" />
        </div>
        <span className="text-4xl font-bold">Khushi Roy.</span>

        <Button className="cursor-pointer" onClick={openResume}>Resume</Button>
      </div>

      <div className="mt-4 pt-4 flex items-center gap-2 p-2">
        <p className="text-2xl font-bold">I build</p>{" "}
        <WordRotate
          words={["WebApps", "Frontend", "Backend"]}
          className="text-2xl font-bold text-blue-600"
        />
      </div>
      <div className="mt-0 pt-0 p-2">
        <p className="text-sm font-semibold">
          Hello, I am Khushi Roy! a developer based out of New Delhi , India. I
          craft high-performance, responsive and aesthetic web applications.
        </p>
      </div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="w-full max-w-full  px-3 sm:px-4">
      <div className="mb-4 sm:mb-6 ">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-center font-bold italic underline decoration-blue-600 decoration-wavy">
          EXPERIENCE
        </h1>
      </div>
      <div className="mb-3 sm:mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 px-2">
          <h2 className="text-base sm:text-lg font-semibold">AKB Tech</h2>
          <span className="hidden sm:inline text-gray-500">|</span>
          <h2 className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Front-End Developer</h2>
        </div>
        <div className="px-2 mt-1">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">October 2024 - December 2024</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <ul className="list-disc">
          <li className="text-xs sm:text-base md:text-sm leading-relaxed break-words">
            Designed & optimized responsive UIs for the company’s website and
            admin dashboards using React.js, Tailwind CSS, Material UI, and
            Framer Motion.
          </li>
          <li className="text-xs sm:text-base md:text-sm leading-relaxed break-words">
            Optimized state management with Zustand, reducing re-renders by 30%,
            and integrated OTPless authentication.
          </li>
          <li className="text-xs sm:text-base md:text-sm leading-relaxed break-words">
            Enhanced website performance by 44% through lazy loading, SEO
            enhancements and code enhancements, and code optimization, reducing
            page load time by 1.5 seconds.
          </li>
          
        </ul>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <div className="mt-2 mb-2 p-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight"><AuroraText speed={0.75}>LINKS</AuroraText></h1>
      </div>
      <div className="mt-2 flex">
        <div className=" p-4">
          <Link href="https://leetcode.com/u/roykhushi432/">
            <img
              src="/leetcode.svg"
              className="w-10 h-10 cursor-pointer"
              alt="leetcode"
            />
          </Link>
        </div>
        <div className=" p-4">
          <Link href="https://github.com/roykhushi">
            <img
              src="/github.svg"
              className="w-10 h-10 cursor-pointer block dark:hidden"
              alt="leetcode"
            />
            <img
              src="/github-white.png"
              alt="profile"
              className="hidden dark:block w-10 h-10 cursor-pointer"
            />
          </Link>
        </div>
        <div className=" p-4">
          <Link href="https://www.geeksforgeeks.org/user/roykhushi432/">
            <img
              src="/gfg.svg"
              className="w-12 h-12 cursor-pointer"
              alt="leetcode"
            />
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <div className="mt-2"></div>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="flex items-center mb-4 p-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight underline decoration-wavy decoration-blue-600">
          TECH STACK
        </h1>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="tracking-tight font-semibold text-sm sm:text-base whitespace-nowrap">
            Frontend:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">React</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">NextJS</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">TailwindCSS</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">ShadCN</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">Zustand</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="tracking-tight font-semibold text-sm sm:text-base whitespace-nowrap">
            Backend:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">NodeJS</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">ExpressJS</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">FastAPI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="tracking-tight font-semibold text-sm sm:text-base whitespace-nowrap">
            Database:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">MongoDB</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">MySQL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="tracking-tight font-semibold text-sm sm:text-base whitespace-nowrap">
            Services:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">Postman</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">Vercel</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">Git</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">Github</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
          <span className="tracking-tight font-semibold text-sm sm:text-base whitespace-nowrap">
            Languages:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">Javascript</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">C++</p>
            </div>
            <div className="border rounded-full px-3 py-1 dark:border-gray-600 flex-shrink-0">
              <p className="text-xs whitespace-nowrap">Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonFive = () => {

  
  const router = useRouter();
  const navigateToProjects = () => {
    router.push('/projects');
  }
  
  return (
    <div className=" overflow-hidden flex items-center justify-center"
    onClick={navigateToProjects}>
      <BackgroundBeamsWithCollision>
        <SparklesText>
          <h1 className="text-5xl md:text-4xl font-bold italic text-black dark:text-white flex items-center justify-center">
            PROJECTS
          </h1>
        </SparklesText>
      </BackgroundBeamsWithCollision>
    </div>
  );
};



const items = [
  {
    description: (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-sm">
          Let&apos;s connect and build something awesome together ✨
        </span>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-600 w-2 h-2" />
          <p className="dark:text-white text-black">Available</p>
        </div>
      </div>
    ),
    header: <SkeletonOne />,
    className: "col-span-1 md:col-span-2 shadow-2xl dark:shadow-lg",
  },

  {
    title: "Coding Profiles",
    description: <span className="text-sm">Check out my coding profiles</span>,
    header: <SkeletonThree />,
    className: "col-span-1 md:col-span-1 shadow-2xl dark:shadow-lg",
    icon: <BracesIcon className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "My Projects </>",
    description: <span className="text-sm">Check out my latest projects</span>,
    header: <SkeletonFive />,
    className: "col-span-1 cursor-pointer shadow-2xl dark:shadow-lg",
  },

  {
    header: <SkeletonFour />,
    className: "col-span-1 md:col-span-2 shadow-2xl dark:shadow-lg",
  },
  {
    // title: "Automated Proofreading",
    // description: (
    //   <span className="text-sm">
    //     Let AI handle the proofreading of your documents.
    //   </span>
    // ),
    header: <SkeletonTwo />,
    className: "col-span-1 md:col-span-3 shadow-2xl dark:shadow-lg",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
