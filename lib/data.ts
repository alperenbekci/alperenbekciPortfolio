import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

import solgrantapp from "@/public/solgrantapp.png";
import ranval from "@/public/ranval.png";
import mrairdropapp from "@/public/mrairdropapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sales and Marketing Manager | Masev",
    location: "Istanbul",
    description:
      "Managing and executing e-commerce operations, conducting sales and marketing activities, market analysis and calculating profitability",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer | Karadag",
    location: "Istanbul",
    description:
      "Designing e-commerce and corporate applications from start to finish, setting them up with brand identity, implementing and publishing.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Trading Associate | KoinBasket",
    location: "Singapore | Remote",
    description:
      "Trading partner collaboration and marketing, application analysis, market analysis, product development.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Mr Airdrop",
    description:
      "I created an airdrop app enabling token withdrawals to Solana's testnet and devnet.",
    tags: ["React", "Next.js",  "Chackra UI ", "Tailwind", "TypeScript", "Solana" ],
    imageUrl: mrairdropapp,
  },
  {
    title: "SolGrant",
    description:
      "With my team we build a decentralized crowdfunding app enabling users to secure project investments via a voting mechanism.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Solana","Figma"],
    imageUrl: solgrantapp,
  },
  {
    title: "RanVal",
    description:
      "With my team We create a decentralized AI application allowing users to generate web3 project concepts and NFT-license them.",
    tags: ["Express.js", "Solana", "Figma", "Opeanai"],
    imageUrl: ranval,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Axios",
  "React Native",
  "React-Router",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Chackra UI",
  "Material UI",
  "Framer Motion",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Solidity",
  "Solana",
  "Figma",
  "Openai",
] as const;