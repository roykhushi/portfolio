import { Timeline, type TimelineEntry } from "@/components/Timeline";

// Source: public/Khushi_Roy_Resume.pdf
const experience: TimelineEntry[] = [
  {
    year: "2024",
    range: "Oct – Dec 2024",
    title: "Frontend Developer Intern",
    subtitle: "AKB Tech",
    meta: "Hyderabad, India (Remote)",
    points: [
      "Designed and optimized responsive UIs for the company website and admin dashboards using React.js, Tailwind CSS, Material UI and Framer Motion.",
      "Optimized state management with Zustand and integrated OTPless authentication.",
      "Improved website performance by 44% through lazy loading, SEO optimization and code refactoring, cutting page load time by 1.5 seconds.",
      "Took part in regular code reviews to keep the code maintainable and scalable.",
    ],
    tags: ["React", "Tailwind CSS", "Material UI", "Framer Motion", "Zustand"],
  },
];

const education: TimelineEntry[] = [
  {
    year: "2022",
    range: "Oct 2022 – Present",
    title: "B.Tech, Computer Science and Engineering",
    subtitle: "Vellore Institute of Technology Bhopal University",
    meta: "Bhopal · CGPA 8.79",
  },
  {
    year: "2008",
    range: "Apr 2008 – Mar 2021",
    title: "Class XII & Class X (CBSE)",
    subtitle: "Seth Anandram Jaipuria School",
    meta: "Ghaziabad",
    points: ["Class XII: 95.4%", "Class X: 96.6%"],
  },
];

export function ExperienceTimeline() {
  return <Timeline id="experience" heading="Experience" entries={experience} />;
}

export function EducationTimeline() {
  return <Timeline id="education" heading="Education" entries={education} />;
}
