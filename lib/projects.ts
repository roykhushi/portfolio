export type Project = {
  slug: string;
  title: string;
  category: string;
  blurb: string;
  image: string;
  github: string;
  live: string;
  liveLabel: string;
};

// Descriptions come from the existing project cards and the resume.
export const projects: Project[] = [
  {
    slug: "contest-hub",
    title: "ContestHub",
    category: "Web app",
    blurb:
      "Discover and track upcoming programming contests from LeetCode, Codeforces, CodeChef and AtCoder.",
    image: "/contest-hub.png",
    github: "https://github.com/roykhushi/contest-hub",
    live: "https://contest-hub-omega.vercel.app/",
    liveLabel: "Live demo",
  },
  {
    slug: "manim-ai",
    title: "ManimAI",
    category: "AI + Full-stack",
    blurb:
      "Describe a math concept in plain English and get a Manim animation back, with MP4/GIF download. Next.js, FastAPI and Gemini.",
    image: "/manim.png",
    github: "https://github.com/roykhushi/llmanim",
    live: "https://llmanim-n8pj.vercel.app/",
    liveLabel: "Live demo",
  },
  {
    slug: "focus-flow",
    title: "FocusFlow",
    category: "Chrome extension",
    blurb:
      "Blocks distracting websites, keeps your tasks in a built-in todo list, and summarises pages and YouTube videos with AI.",
    image: "/focus-flow.png",
    github: "https://github.com/roykhushi/site_blocker",
    live: "https://chromewebstore.google.com/detail/website-blocker-productiv/dheofdaoggifphcmmjeckojcdlkklddl?authuser=0&hl=en",
    liveLabel: "Chrome Web Store",
  },
  {
    slug: "talksy",
    title: "Talksy",
    category: "Real-time chat",
    blurb:
      "A real-time chat app on the MERN stack and Socket.IO with themes, image sharing and online status.",
    image: "/talksy.png",
    github: "https://github.com/roykhushi/talksy",
    live: "https://talksy-wcbc.onrender.com/",
    liveLabel: "Live demo",
  },
];
