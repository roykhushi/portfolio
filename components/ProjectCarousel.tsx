"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { GithubIcon, Globe } from "lucide-react";
import Link from "next/link";

export function ProjectCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl mb-8 pl-2 sm:ml-0 md:ml-0 mx-auto text-xl tracking-tight md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Here are some of my Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Talksy = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>{" "}
              Talksy is a modern real-time chat application built with the MERN
              stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for
              real-time communication. The app features a clean UI with theme
              customization, user authentication, real-time messaging, image
              sharing, and online/offline user status.
            </p>{" "}
            <div className="flex items-center mt-4 p-4 md:p-8 gap-8">
              <Link href="https://github.com/roykhushi/talksy" target="_blank">
                <GithubIcon className="size-14" />
              </Link>
              <Link href="https://talksy-wcbc.onrender.com/" target="_blank">
                <Globe className="size-14" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

const FocusFlow = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>{" "}
              A powerful and user-friendly Chrome extension to help you stay
              productive by blocking distracting websites, managing your tasks
              with a built-in todo list, and summarizing content with AI.
            </p>{" "}
            <div className="flex items-center mt-4 p-4 md:p-8 gap-8">
              <Link href="https://github.com/roykhushi/site_blocker" target="_blank">
                <GithubIcon className="size-14" />
              </Link>
              <Link href="https://chromewebstore.google.com/detail/website-blocker-productiv/dheofdaoggifphcmmjeckojcdlkklddl?authuser=0&hl=en" target="_blank">
                <Globe className="size-14" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ManimAI = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>{" "}
              ManimAI is a web application that uses AI to generate mathematical
              animations using Manim. Simply describe the mathematical concept
              you want to visualize, and ManimAI will generate a beautiful
              animation for you - no coding required!
            </p>{" "}
            <div className="flex items-center mt-4 p-4 md:p-8 gap-8">
              <Link href="https://github.com/roykhushi/llmanim" target="_blank">
                <GithubIcon className="size-14" />
              </Link>
              <Link href="https://llmanim-n8pj.vercel.app/" target="_blank">
                <Globe className="size-14" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ContestHub = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>{" "}
              A web app to discover and track upcoming programming contests from major platforms like LeetCode, Codeforces, CodeChef, and AtCoder.
            </p>{" "}
            <div className="flex items-center mt-4 p-4 md:p-8 gap-8">
              <Link href="https://github.com/roykhushi/contest-hub" target="_blank">
                <GithubIcon className="size-14" />
              </Link>
              <Link href="https://contest-hub-omega.vercel.app/" target="_blank">
                <Globe className="size-14" />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Track Your Upcoming Contests:",
    title: "ContestHub",
    src: "/contest-hub.png",
    content: <ContestHub />,
  },
  {
    category: "Understand Mathematical Concepts through Animations:",
    title: "ManimAI",
    src: "/manim.png",
    content: <ManimAI />,
  },
  {
    category: "Chrome Extension : Enhance Productivity",
    title: "FocusFlow",
    src: "/focus-flow.png",
    content: <FocusFlow />,
  },
  {
    category: "Chat Application",
    title: "Talksy",
    src: "/talksy.png",
    content: <Talksy />,
  },
];
