import { Timeline, type TimelineEntry } from "@/components/Timeline";

// Education and the AKB Tech role come from public/Khushi_Roy_Resume.pdf;
// CSG and Intrixel Systems come from LinkedIn.
const experience: TimelineEntry[] = [
  {
    year: "2026",
    range: "Apr 2026 – Present",
    title: "CSG International",
    meta: "Remote · 8 mos",
    roles: [
      {
        title: "SDE Grad",
        detail: "Full-time",
        range: "Oct 2026 – Present",
        points: [
          "Currently working on modernizing a legacy application by migrating it to a newer .NET platform and updating its underlying architecture to improve maintainability and scalability.",
        ],
      },
      {
        title: "SDE Intern",
        detail: "Internship",
        range: "Apr 2026 – Oct 2026",
        points: [
          "Collaborated with team members to understand new tasks, troubleshoot technical issues, and improve problem-solving skills.",
          "Diagnosed and resolved 10+ production and development defects, improving overall system reliability.",
          "Independently designed and developed a Glean AI agent for the Admin team to identify stale and business-critical Confluence documentation, facilitating the migration of on-premises Confluence content to cloud infrastructure.",
          "Built and coordinated deployments of new builds and feature updates.",
          "Participated in design discussions, code reviews, and agile ceremonies.",
        ],
      },
    ],
    tags: [".NET", "AWS", "Terraform", "Elasticsearch", "Prometheus"],
  },
  {
    year: "2026",
    range: "Feb – Mar 2026",
    title: "Intern",
    subtitle: "Intrixel Systems",
    meta: "Internship · Remote",
    points: [
      "Built a full-stack license management control plane using FastAPI, React, and PostgreSQL, enabling issuance, renewal, revocation, and audit tracking of signed software licenses.",
      "Designed and implemented a secure Ed25519-based licensing system with local signing, including canonical payload signing and key management.",
      "Contributed to revamping the company website, improving structure, usability, and overall frontend experience.",
      "Implemented a feature-gating system using entitlements (e.g., analytics, mailflow rules) integrated with backend APIs to control access dynamically.",
    ],
    tags: ["FastAPI", "React", "PostgreSQL"],
  },
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
