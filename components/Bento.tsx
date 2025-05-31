"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { ArrowRightCircleIcon, BracesIcon } from "lucide-react";
import { div } from "motion/react-client";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";
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
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  return (
    <div className=" overflow-hidden flex items-center justify-center">
      <BackgroundBeamsWithCollision>
        <SparklesText>
          <h1 className="text-5xl md:text-4xl font-bold italic text-white flex items-center justify-center">
            PROJECTS
          </h1>
        </SparklesText>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

const items = [
  {
    // title: "AI Content Generation",
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
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
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
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
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
    title: "Sentiment Analysis",
    description: (
      <span className="text-sm">
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];
