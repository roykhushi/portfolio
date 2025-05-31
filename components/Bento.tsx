"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconFileBroken } from "@tabler/icons-react";
import { motion } from "motion/react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { BracesIcon } from "lucide-react";
import Link from "next/link";
import { SparklesText } from "./magicui/sparkles-text";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button } from "./ui/button";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
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
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="flex items-center gap-14 justify-between">
        <div className="rounded-full overflow-hidden border w-20 h-20">
          <img src="/profile.jpg" alt="profile" />
        </div>
        <span className="text-4xl font-bold">Khushi Roy.</span>

        <Button>Resume</Button>
      </div>

      <div className="mt-4 pt-4 flex items-center gap-2 p-2">
        <p className="text-2xl font-bold">I build</p>{" "}
        <WordRotate
          words={["WebApps", "Frontend", "Backend"]}
          className="text-2xl font-bold text-blue-700"
        />
      </div>
      <div className="mt-0 pt-0 p-2">
        <p className="text-sm font-semibold">
          Hello, I am Khushi Roy! a developer based out of New Delhi - India. I
          craft high-performance, responsive and aesthetic web applications.
        </p>
      </div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-4xl text-center font-bold italic underline decoration-blue-600 decoration-wavy">
          Experience
        </h1>
      </div>
      <div className="flex items-center p-2 gap-2">
        <h2 className="">AKB Tech</h2>
        <span className="">|</span>
        <h2>Front-End Developer</h2>
      </div>
      <div className="flex items-center p-2 ml-2">
        <p className="text-xs">October 2024-December 2024</p>
      </div>
      <div className="flex items-center p-2">
        <ul className="list-disc mx-auto">
          <li className="text-sm">
            Designed & optimized responsive UIs for the company’s website and
            admin dashboards using React.js, Tailwind CSS, Material UI, and
            Framer Motion.
          </li>
          <li className="text-sm">
            Optimized state management with Zustand, reducing re-renders by 30%,
            and integrated OTPless authentication, cutting login time by 40%.
          </li>
          <li className="text-sm">
            Enhanced website performance by 44% through lazy loading, SEO
            enhancements and code enhancements, and code optimization, reducing
            page load time by 1.5 seconds.
          </li>
          <li className="text-sm">
            Collaborated in regular code reviews ensuring code quality,
            maintainability, and scalability.
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
        <h1 className="text-5xl md:text-6xl font-bold">LINKS</h1>
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
    <div>
      <div className="flex items-center mb-4 p-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight underline decoration-wavy decoration-blue-600">
          TECH STACK
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="tracking-tight font-semibold">Frontend:</span>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">React</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">NextJS</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">TailwindCSS</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">ShadCN</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">Zustand</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="tracking-tight font-semibold">Backend:</span>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">NodeJS</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">ExpressJS</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">FastAPI</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="tracking-tight font-semibold dark:border-gray-600">
          Db:
        </span>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">MongoDB</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">MySQL</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span className="tracking-tight font-semibold ">Services:</span>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">Postman</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">Vercel</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">Git</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">Github</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="tracking-tight font-semibold">Languages:</span>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">Javascript</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">C++</p>
        </div>
        <div className="border rounded-full p-2 dark:border-gray-600">
          <p className="text-xs">Typescript</p>
        </div>
      </div>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div className=" overflow-hidden flex items-center justify-center">
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
      <div className="flex items-center justify-between">
        <span className="text-sm">
          Let's connect and build something awesome together ✨
        </span>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-green-600 w-2 h-2" />
          <p className="dark:text-white text-black">Available</p>
        </div>
      </div>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2",
  },

  {
    title: "Coding Profiles",
    description: <span className="text-sm">Check out my coding profiles</span>,
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <BracesIcon className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "My Projects </>",
    description: <span className="text-sm">Check out my latest projects</span>,
    header: <SkeletonFive />,
    className: "md:col-span-1 cursor-pointer ",
  },

  {
    header: <SkeletonFour />,
    className: "md:col-span-2 ",
  },
  {
    // title: "Automated Proofreading",
    // description: (
    //   <span className="text-sm">
    //     Let AI handle the proofreading of your documents.
    //   </span>
    // ),
    header: <SkeletonTwo />,
    className: "md:col-span-3",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
