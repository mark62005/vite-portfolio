import { GraduationCap } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Codesandbox } from "lucide-react";

export const navLinks = [
	{
		label: "Home",
		href: "#home",
	},
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Projects",
		href: "#projects",
	},
	{
		label: "Skills",
		href: "#skills",
	},
	{
		label: "Experience",
		href: "#experience",
	},
	{
		label: "Contact",
		href: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated bootcamp",
		location: "Miami, FL",
		description:
			"I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
		Icon: GraduationCap,
		date: "2019",
	},
	{
		title: "Front-End Developer",
		location: "Orlando, FL",
		description:
			"I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
		Icon: Briefcase,
		date: "2019 - 2021",
	},
	{
		title: "Full-Stack Developer",
		location: "Houston, TX",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		Icon: Codesandbox,
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "CorpComment",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: new URL("../../public/corpcomment.png", import.meta.url).href,
	},
	{
		title: "rmtDev",
		description:
			"Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: new URL("../../public/rmtdev.png", import.meta.url).href,
	},
	{
		title: "Word Analytics",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: new URL("../../public/wordanalytics.png", import.meta.url).href,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"GraphQL",
	"Apollo",
	"Express",
	"PostgreSQL",
	"Python",
	"Django",
	"Framer Motion",
] as const;