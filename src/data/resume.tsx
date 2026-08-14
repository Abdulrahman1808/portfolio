import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Dotnet } from "@/components/ui/svgs/dotnet";

export const DATA = {
  name: "Abdulrahman Mohamed Sayed",
  initials: "AM",
  url: "https://portfolio.is-a.dev",
  location: "Cairo, Egypt",
  locationLink:
    "https://www.google.com/maps/place/Cairo+Governorate,+Egypt",
  description:
    "Full-Stack Software Engineer building fast, reliable web, desktop, and embedded systems.",
  summary:
    "I'm a full-stack software engineer focused on building complete, production-ready products — from [desktop POS systems](https://theta-pos.vercel.app/login) and admin dashboards to [embedded IoT solutions](/#work). I enjoy owning features end-to-end: clean architecture, polished UIs, and robust backends. Currently studying Communication & Electronics Engineering while shipping software for real users. Contact me for a free demo serial of [Theta POS](https://theta-pos.vercel.app/login).",
  avatarUrl: "/me.png",
  skills: [
    { name: "C#", icon: Csharp },
    { name: ".NET", icon: Dotnet },
    { name: "C++", icon: Java },
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Java", icon: Java },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "Abdulrahman.mohamed1808@gmail.com",
    tel: "+201557375071",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Abdulrahman1808",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdulrahman-mohamed-63b4b734b/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:Abdulrahman.mohamed1808@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Theta Tech",
      href: "https://github.com/Abdulrahman1808",
      badges: [],
      location: "Cairo, Egypt",
      title: "Founder & Software Engineer",
      logoUrl: "",
      start: "2025",
      end: "Present",
      description:
        "Founded and run Theta Tech, a software startup building point-of-sale systems and digital tools for businesses, including Theta POS — a desktop POS with a real-time web dashboard.",
    },
    {
      company: "Micro Engineering Tech Inc. (METI)",
      href: "https://microengineeringtech.com",
      badges: [],
      location: "Remote",
      title: "Data Annotator",
      logoUrl: "",
      start: "Oct 2024",
      end: "Feb 2025",
      description:
        "Prepared and annotated datasets with high accuracy to train AI models, following strict quality and labeling guidelines while meeting daily production targets.",
    },
    {
      company: "IoT Attendance Fingerprint Project",
      href: "https://www.arduino.cc/",
      badges: [],
      location: "School Project",
      title: "Embedded Systems Developer",
      logoUrl: "",
      start: "Sep 2020",
      end: "Jun 2023",
      description:
        "Built an IoT-based attendance tracking system using Arduino and ESP32 that records fingerprint attendance directly to Google Sheets. Reduced manual attendance errors by 90% through automated, real-time logging.",
    },
  ],
  education: [
    {
      school: "October High Institute for Engineering and Technology",
      href: "https://ohi.edu.eg",
      degree: "B.Sc. Communication & Electronics Engineering",
      logoUrl: "",
      start: "2023",
      end: "2028",
    },
    {
      school: "El Salam Technical Secondary School",
      href: "https://www.moe.gov.eg",
      degree: "Technical Diploma in Computer Science (GPA 96.6%)",
      logoUrl: "",
      start: "2020",
      end: "2023",
    },
  ],
  certifications: [
    {
      name: "Cisco Networking Academy - Cybersecurity",
      href: "https://www.netacad.com/",
      issuer: "Cisco Networking Academy",
      badgeUrl: "",
      year: "2025",
    },
  ],
  projects: [
    {
      title: "Theta POS",
      href: "https://theta-pos.vercel.app/login",
      dates: "2025",
      active: true,
      description:
        "A complete point-of-sale desktop application with a React admin dashboard. Handles sales, inventory, customers, and reporting in real time. Try the [live demo](https://theta-pos.vercel.app/login) — contact me for a free demo serial.",
      technologies: [
        "C#",
        "WPF",
        ".NET 8",
        "Supabase",
        "React",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://theta-pos.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Abdulrahman1808",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "C++ POS System",
      href: "https://github.com/Abdulrahman1808",
      dates: "2024 - 2025",
      active: true,
      description:
        "A fast, lightweight point-of-sale desktop system built with Qt6 and C++17, featuring sales, product management, and invoice printing.",
      technologies: ["C++", "Qt6", "C++17", "SQLite"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Abdulrahman1808",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MegaMart",
      href: "https://github.com/Abdulrahman1808",
      dates: "2025",
      active: true,
      description:
        "A modern e-commerce web app with product browsing, cart, and checkout powered by Firebase.",
      technologies: ["React", "TypeScript", "Vite", "Firebase", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Abdulrahman1808",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Theta Tech Company Website",
      href: "https://github.com/Abdulrahman1808",
      dates: "2025",
      active: true,
      description:
        "A responsive corporate website for Theta Tech showcasing services and products with modern animations.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Abdulrahman1808",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hookah Shop System",
      href: "https://github.com/Abdulrahman1808",
      dates: "2024",
      active: true,
      description:
        "A shop management system for inventory and sales built with Python and MongoDB.",
      technologies: ["Python", "MongoDB", "PyQt"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Abdulrahman1808",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
