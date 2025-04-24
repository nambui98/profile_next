import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useState } from "react";
import WorkDialog, { WorkItem } from "../components/WorkDialog";
import Image from "next/image";
const routes = [
  { path: "*", name: "Home" },
  { path: "/", name: "Home" },
  { path: "/contact", name: "Contact" },
  { path: "/work", name: "Work" },
  { path: "/skills", name: "Skills" },
];

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleWorkClick = (work: WorkItem, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedWork(work);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const data: WorkItem[] = [
{
      title: "Arda",
      link: "#",
      image: "/assets/img/arda.png",
      description: "Arda network blockchain",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Nestjs", "Cognito", "Onfido", "Aws"],
    },
    {
      title: "Wedflip",
      link: "https://www.wedflip.com/",
      image: "/assets/img/wedflip.png",
      description: "A wedding planning platform that helps couples manage their wedding preparations and connect with vendors.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Supabase", "Supabase Auth", "Next-intl"],
    },
    
    {
      title: "Zapptrue",
      link: "https://www.zapptrue.com/",
      image: "/assets/img/zapptrue.png",
      description: "A digital service platform focused on providing innovative solutions for businesses.",
      techStack: ["React", "Next.js", "Typescript", "Tailwind CSS", "Supabase", "Clerk", "Cloudinary", "Node.js"],
    },
    {
      title: "WalletPort",
      link: "https://www.walletport.xyz/",
      image: "/assets/img/walletport.png",
      description: "A cryptocurrency wallet management platform with security features and portfolio tracking.",
      techStack: ["Nextjs", "Wagmi", "Viem", "Rainbowkit", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    },
    {
      title: "FluidAI",
      link: "http://www.fluidai.com/",
      image: "/assets/img/fluidAi-2.png",
      description: "An AI-powered platform that provides intelligent automation solutions for businesses.",
      techStack: ["Nextjs", "Wagmi", "Viem", "Typescript", "Tailwind CSS", "Shadcn/ui", "Cognito", "Aws", "Onfido"],
    },
    {
      title: "WalletPort Mobile App",
      link: "#",
      image: "/assets/img/walletport-mb.jpg",
      type: "mobile",
      description: "Mobile application version of WalletPort with enhanced features for on-the-go cryptocurrency management.",
      techStack: ["Flutter", "Flutter web3", "Provider", "Dart"],
    },
    {
      title: "FluidAI Mobile",
      link: "#",
      image: "/assets/img/fluidAi-mb.jpg",
      type: "mobile",
      description: "Mobile application for FluidAI platform, providing AI capabilities on mobile devices.",
      techStack: ["Flutter", "Flutter web3", "Provider", "Dart", "Cognito", "Aws", "Onfido"],
    },
    {
      title: "DeODD",
      link: "https://deodd.io",
      image: "/assets/img/deodd.png",
      description: "A decentralized betting platform operating on blockchain technology.",
      techStack: ["Nextjs", "Typescript", "Material UI", "Ethers.js", "ChainLink"],
    },
    {
      title: "ChipTracker",
      link: "https://chiptracker.net",
      image: "/assets/img/chiptracker.png",
      description: "A tracker for poker chips and tournament management in poker games.",
      techStack: ["Nextjs", "Typescript", "Tailwind CSS", "Shadcn/ui", "Planetscale"],
    },
    {
      title: "Dstax",
      link: "https://dtax.vercel.app/",
      image: "/assets/img/dstax.png",
      description: "A tax management solution for digital assets and cryptocurrencies.",
      techStack: ["Nextjs", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Redux-toolkit", "Redux-toolkit-query", "Redux-persist"],
    },
    {
      title: "Arbix",
      link: "#",
      image: "/assets/img/app3.png",
      description: "A platform for cryptocurrency arbitrage trading across different exchanges.",
      techStack: ["Nextjs", "Typescript", "Tailwind CSS", "Shadcn/ui", "Ton network", "Telegram bot", "Spine animation", "Zustand"],
    },
    {
      title: "Befitter app",
      link: "https://play.google.com/store/apps/details?id=io.befitter.app&hl=en",
      image: "/assets/img/befitter_app.jpg",
      type: "mobile",
      description: "A fitness mobile application that tracks user activities and provides personalized fitness plans.",
      techStack: ["Flutter", "Dart", "Flutter web3", "Provider"],
    },
    {
      title: "Music app",
      link: "https://play.google.com/store/apps/details?id=com.tsp.sound2relax&hl=en",
      image: "/assets/img/music_app.jpg",
      type: "mobile",
      description: "A music streaming and relaxation app with curated playlists for relaxation and focus.",
      techStack: ["Flutter", "Dart", "Audio player", "Audio background"],
    },
    {
      title: "Befitter website",
      link: "https://befitter.io/",
      image: "/assets/img/befitter.png",
      description: "The website for the Befitter fitness platform, providing information about its services and features.",
      techStack: ["React", "Next.js", "TypeScript", "Material UI", "Ethers.js"],
    },
    {
      title: "Nextverse",
      link: "https://nextverse.org/",
      image: "/assets/img/nextverse.png",
      description: "A metaverse platform connecting digital experiences across various virtual environments.",
      techStack: ["Nextjs", "Typescript", "Tailwind CSS", "Shadcn/ui"],
    },
    {
      title: "Quorumex",
      link: "https://quorumex-web.vercel.app/",
      image: "/assets/img/quorumex.png",
      description: "A decentralized governance platform for DAOs and digital communities.",
      techStack: ["React", "Solidity", "Web3.js", "TypeScript"],
    },
    {
      title: "VerseHub bridge",
      link: "https://bridge.versehub.io/",
      image: "/assets/img/versehubbridge.png",
      description: "A cross-chain bridge allowing for asset transfers between different blockchain networks.",
      techStack: ["React", "Solidity", "Ethers.js", "Node.js"],
    },
    {
      title: "Penpal",
      link: "https://www.penpalnft.com/",
      image: "/assets/img/penpal.png",
      description: "An NFT platform connecting creators and collectors through digital art ownership.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Shadcn/ui"],
    },
    {
      title: "Iok chương trình thi topik online",
      link: "https://iok.vn",
      image: "/assets/img/iok.png",
      description: "An online platform for Korean language TOPIK test preparation and practice.",
      techStack: ["Reactjs", "Material UI", "Redux-toolkit", "Redux-toolkit-query", "Redux-persist"],
    },
    {
      title: "Dự án ERP",
      link: "http://172.105.120.33:6004/",
      image: "/assets/img/bavinn.png",
      description: "An Enterprise Resource Planning system for business management and operations.",
      techStack: ["React", "Ant Design", "Redux", "Redux-saga"],
    },
    {
      title: "Làm phần CMS cho webside đặt vé máy bay",
      link: "https://www.vietravelairlines.com/vn/vi",
      image: "/assets/img/vtva.png",
      description: "A Content Management System for an airline ticket booking website.",
      techStack: ["React", "Ant Design", "Redux", "Redux-saga", "React-intl"],
    },
    {
      title: "FE NFT design trên figma",
      link: "https://nft-flame-phi.vercel.app/",
      image: "/assets/img/nft.png",
      description: "A frontend implementation of NFT marketplace design created in Figma.",
      techStack: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Làm thử đồng coin",
      link: "https://namcoin.vercel.app/",
      image: "/assets/img/coin2.png",
      description: "A cryptocurrency project showcasing a custom token implementation.",
      techStack: ["Nextjs", "Solidity", "Web3.js", "Hardhat"],
    },
    {
      title: "Trang portfolio cá nhân",
      link: "https://namportfolio.netlify.app/",
      image: "/assets/img/portpolio.png",
      description: "A personal portfolio website showcasing skills, projects, and professional experience.",
      techStack: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      title: "Tran paralax design trên figma",
      link: "https://parallaxnambv.netlify.app/",
      image: "/assets/img/paralax.png",
      description: "A parallax scrolling website implementation based on a Figma design.",
      techStack: ["JavaScript", "HTML", "CSS", "GSAP"],
    },
  ];
  return (
    <div className=" rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full p-6">
      <Head>
        <title>Profile NamBv</title>
      </Head>

      <p className="text-black dark:text-white text-xl text-left font-bold mb-2">
        {t("works")}
      </p>
      {/* <img className="w-full" src={IOK} alt="Sunset in the mountains" /> */}
      <div className="w-full h-[calc(100%_-_40px)] overflow-y-auto flex justify-between flex-wrap scrollbar">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={(e) => handleWorkClick(item, e)}
            className="border lg:w-[calc(50%_-_10px)] overflow-hidden w-full mb-5 dark:border-dark h-[240px] transition-all duration-300 cursor-pointer  relative group"
          >
            <div className={`w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] relative ${
                item.type === "mobile" ? "!object-contain" : ""
              }`}>
            <Image
              loading="lazy"
              decoding="async"
layout="fill"
objectFit="cover"
objectPosition={'top'}
              // className={`w-[calc(100%_-_20px)] h-[calc(100%_-_20px)] ${
              //   item.type === "mobile" ? "!object-contain" : ""
              // }`}
              src={item.image}
              alt={item.title}
            />
 
            </div>
           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm mt-1">Click to view details</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <WorkDialog 
        isOpen={dialogOpen} 
        onClose={closeDialog} 
        work={selectedWork} 
      />
    </div>
  );
};

export default Home;
