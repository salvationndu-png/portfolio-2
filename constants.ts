import { Experience, Project } from "./types";
import { Server, Database, Globe, Zap, Layout, Code2, Briefcase } from "lucide-react";

export const CONTACT_INFO = {
  name: "Ndu Salvation O.",
  role: "Full Stack Web Developer",
  phone: "+234 903 840 6900",
  email: "salvationndu@gmail.com",
  github: "salvationndu-png",
  location: "Nigeria",
};

export const SUMMARY = "Full‑Stack Web Developer (3+ years) that specializes in design and building robust Laravel backends, RESTful APIs and transactional systems for logistics, wholesale and local businesses. Expert in Laravel-based architectures, relational databases and production deployments on shared and managed hosting. I design reliable backend services, implement secure authentication & authorization delivering measurable improvements in stability and operational workflows.";

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Freelance Web Developer",
    company: "Remote",
    location: "Global",
    period: "2023 – Present",
    achievements: [
      "Delivered full websites, dashboards and APIs for small businesses; end‑to‑end development from requirements to deployment.",
      "Maintained existing sites: bug fixes, security patches, and performance tuning.",
      "Managed hosting (cPanel), backups, DNS and SSL; provided client onboarding and hands‑on training.",
    ],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Ice Hub Company",
    location: "Nigeria",
    period: "2022 – 2023",
    achievements: [
      "Core team member building domain apps: Hotel Management and Bakery POS systems.",
      "Implemented booking engines, room inventory models, booking conflict checks and multi‑rate pricing.",
      "Built RESTful APIs with token-based auth, clear versioning and validation for internal dashboards and partner integrations.",
    ],
  },
  {
    id: 3,
    role: "Corps Member",
    company: "Premium Pensions Limited",
    location: "Nigeria",
    period: "2025",
    achievements: [
      "Supported member verification, data validation and records update; improved data accuracy, reduced follow-ups and strengthened compliance with internal procedures.",
      "Assisted field and office teams to align operational processes with digital records.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Wholesale Manager",
    category: "Wholesale Business System",
    description: "Digital Manager for Wholesale Businesses. A multi-module system for products, product‑models (variants), stock and sales.",
    tech: ["Laravel", "MySQL", "Tailwind CSS", "Javascript"],
    features: [
      "Role‑based access (admin/sales/viewer)",
      "CSV/Excel exports and dashboard widgets",
      "Transactional patterns to prevent race conditions",
      "Stock and sales monitoring"
    ],
  },
  {
    id: 2,
    title: "Courier Manager",
    category: "Parcel Tracking Platform",
    description: "End-to-end parcel tracking platform managing the lifecycle from created to in-transit to delivered.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Javascript"],
    features: [
      "Parcel lifecycle with status history",
      "Admin dashboard and customer tracking",
      "API endpoints for updates & hooks",
      "Shipment volume reporting"
    ],
  },
  {
    id: 3,
    title: "Hotel Management System",
    category: "Hospitality Management",
    description: "Comprehensive system with reservation engine, room inventory, invoices and housekeeping integration.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    features: [
      "Booking conflict checks",
      "Multi-rate pricing",
      "Stay reports and exports",
      "Housekeeping integration"
    ],
  },
  {
    id: 4,
    title: "Bakery POS",
    category: "Local Business System",
    description: "Lightweight POS for non‑technical operators designed for local business systems.",
    tech: ["Laravel", "MySQL", "Vanilla JS", "Bootstrap"],
    features: [
      "Quick order checkout",
      "End‑of‑day reconciliation",
      "Printable receipts",
      "Simple UI for non-technical users"
    ],
  },
];

export const SERVICES = [
  {
    title: "Backend Engineering",
    description: "PHP, Laravel, REST APIs, MVC Architecture, Authentication & RBAC.",
    icon: Server,
  },
  {
    title: "API Development",
    description: "JSON APIs, REST, API Documentation, Postman Testing.",
    icon: Zap,
  },
  {
    title: "Database Systems",
    description: "MySQL, Relational Schema Design, Migrations, Query Optimization, Data Seeding.",
    icon: Database,
  },
  {
    title: "Business Systems",
    description: "Wholesale Management, Inventory & Stock Tracking, POS, Booking Systems.",
    icon: Briefcase,
  },
];

export const STATS = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Delivered", value: "15+" },
  { label: "Uptime Managed", value: "99.9%" },
];

export const TECH_LOGOS = [
  { name: "Laravel", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", color: "#FF2D20" },
  { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", color: "#777BB4" },
  { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "Tailwind CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
  { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#E34F26" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", color: "#007ACC" },
  { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#FF6C37" },
];

export const EDUCATION = {
  degree: "B.Sc., Computer Science",
  school: "Chukwuemeka Odumegwu Ojukwu University (COOU), Uli",
  period: "2019 – 2023",
  grade: "Second Class Upper Honors"
};

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
];
