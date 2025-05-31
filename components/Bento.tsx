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

        <p className="text-sm text-gray-500">@royKhushi27</p>
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
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
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
        <span className="tracking-tight font-semibold dark:border-gray-600">Db:</span>
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
  //   {
  //     title: "Automated Proofreading",
  //     description: (
  //       <span className="text-sm">
  //         Let AI handle the proofreading of your documents.
  //       </span>
  //     ),
  //     header: <SkeletonTwo />,
  //     className: "md:col-span-1",
  //     icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  //   },
  {
    
    header: <SkeletonFour />,
    className: "md:col-span-2 ",
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-3",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
