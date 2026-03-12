import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import WorkDialog, { WorkItem } from "../components/WorkDialog";

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
    // --- Nami Innovation (Sep 2025 - Now) ---
    {
      title: "Hakifi",
      link: "https://hakifi.xyz",
      image: "/assets/img/hakifi.png",
      description:
        "Decentralized perpetual trading platform with real-time orderbook, Hyperliquid WebSocket integration, and leveraged smart contract trading.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Viem",
        "Wagmi",
        "Hyperliquid SDK",
        "TanStack Query",
        "Tailwind CSS",
        "TradingView",
      ],
    },
    {
      title: "SciLabs",
      link: "https://scilabs.io",
      image: "/assets/img/scilabs.png",
      description:
        "High-performance landing pages and platform interfaces for scientific ecosystems, optimized with server components, caching, and GSAP animations.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GSAP",
        "Server Components",
      ],
    },
    // --- Quorumex ---
    {
      title: "Caps",
      link: "https://app.capsl.london",
      image: "/assets/img/caps.png",
      description:
        "Lead Full-stack: end-to-end Monorepo (Web + API + DB). NestJS backend with PostgreSQL/Drizzle ORM; integrated Veriff/Onfido KYC, Bluechain payments, and Enigio digital documents.",
      techStack: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "Turborepo",
        "Veriff",
        "Onfido",
        "Bluechain",
      ],
    },
    // --- Personal Projects ---
    {
      title: "Wedflip",
      link: "https://www.wedflip.com/",
      image: "/assets/img/wedflip2.png",
      description:
        "Schema-driven wedding website builder: users fill data schemas to auto-render high-quality templates. Background jobs via Inngest/Redis; VPS deployed with Docker Compose and Caddy.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Supabase",
        "Inngest",
        "Redis",
        "Docker",
        "Caddy",
      ],
    },
    {
      title: "Zapptrue",
      link: "https://www.zapptrue.com/",
      image: "/assets/img/zapptrue.png",
      description:
        "Personalized apparel platform with custom CMS, product configurator, and Cloudinary image pipeline.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Supabase",
        "Clerk",
        "Cloudinary",
        "Node.js",
      ],
    },
    // --- FPT Software (Nov 2023 - Sep 2025) ---
    {
      title: "WalletPort",
      link: "https://www.walletport.xyz/",
      image: "/assets/img/walletport.png",
      description:
        "Multi-chain wallet management platform with portfolio tracking, transaction history, and on-chain data visualization.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Wagmi",
        "Viem",
        "RainbowKit",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      title: "WalletPort Mobile",
      link: "#",
      image: "/assets/img/walletport-mb.jpg",
      type: "mobile",
      description:
        "Flutter mobile app for WalletPort — multi-chain wallet, in-app Web3 transactions, and portfolio tracking.",
      techStack: ["Flutter", "Dart", "Web3dart", "BLoC"],
    },
    {
      title: "FluidAI",
      link: "http://www.fluidai.com/",
      image: "/assets/img/fluidAi-2.png",
      description:
        "AI-based trading platform with real-estate tokenization; integrated smart contracts and KYC flows.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Wagmi",
        "Viem",
        "Tailwind CSS",
        "shadcn/ui",
        "Cognito",
        "Onfido",
        "AWS",
      ],
    },
    {
      title: "FluidAI Mobile",
      link: "#",
      image: "/assets/img/fluidAi-mb.jpg",
      type: "mobile",
      description:
        "Mobile app for FluidAI — AI-powered investment platform with blockchain wallet and KYC.",
      techStack: ["Flutter", "Dart", "Web3dart", "BLoC", "Cognito", "Onfido"],
    },
    // --- Versehub (Apr 2022 - Nov 2023) ---
    {
      title: "beFITTER App",
      link: "https://play.google.com/store/apps/details?id=io.befitter.app&hl=en",
      image: "/assets/img/befitter_app.jpg",
      type: "mobile",
      description:
        "Move-to-earn fitness dApp with 100K+ downloads. In-app blockchain wallet for NFT/token management and signed transactions.",
      techStack: ["Flutter", "Dart", "BLoC", "Web3dart"],
    },
    {
      title: "beFITTER Website",
      link: "https://befitter.io/",
      image: "/assets/img/befitter.png",
      description:
        "Marketing and platform website for the beFITTER move-to-earn fitness ecosystem.",
      techStack: ["Next.js", "TypeScript", "Material UI", "Ethers.js"],
    },
    {
      title: "DSTAX",
      link: "https://dtax.vercel.app/",
      image: "/assets/img/dstax.png",
      description:
        "Real estate tokenization and digital asset tax management platform with smart contract integrations.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux Toolkit",
        "RTK Query",
        "Wagmi",
        "Ethers.js",
      ],
    },
    {
      title: "VerseHub Bridge",
      link: "https://bridge.versehub.io/",
      image: "/assets/img/versehubbridge.png",
      description:
        "Cross-chain bridge for asset transfers between blockchain networks with custom Indexer Service for real-time event sync.",
      techStack: ["React", "TypeScript", "Ethers.js", "Solidity", "Node.js"],
    },
    {
      title: "DeODD",
      link: "https://deodd.io",
      image: "/assets/img/deodd.png",
      description:
        "Decentralized betting platform on blockchain with Chainlink oracle integration.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Material UI",
        "Ethers.js",
        "ChainLink",
      ],
    },
    // --- Legacy (VTC Online & TSP Software, Oct 2018 - Apr 2022) ---
    {
      title: "IOK — TOPIK Online",
      link: "https://iok.vn",
      image: "/assets/img/iok.png",
      description:
        "Interactive Korean language TOPIK exam preparation platform with quiz engine and progress tracking.",
      techStack: [
        "React",
        "TypeScript",
        "Material UI",
        "Redux Toolkit",
        "RTK Query",
      ],
    },
    {
      title: "Vietravel Airlines CMS",
      link: "https://www.vietravelairlines.com/vn/vi",
      image: "/assets/img/vtva.png",
      description:
        "Content Management System for Vietravel Airlines' flight booking website with multilingual support.",
      techStack: ["React", "Ant Design", "Redux", "Redux-Saga", "React-intl"],
    },
    {
      title: "Baviin ERP",
      link: "#",
      image: "/assets/img/bavinn.png",
      description:
        "Enterprise Resource Planning system for business management, logistics, and operations.",
      techStack: ["React", "Ant Design", "Redux", "Redux-Saga"],
    },
  ];
  return (
    <div className="rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full p-2">
      <p className=" px-4 pt-4 text-black dark:text-white text-xl text-left font-bold">
        {t("works")}
      </p>
      <div className="w-full h-[calc(100%_-_56px)] p-4 overflow-y-auto grid md:grid-cols-2 gap-3 scrollbar">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={(e) => handleWorkClick(item, e)}
            className="work-card w-full aspect-video rounded-2xl cursor-pointer group"
          >
            {/* Inset image recess — the "screen in the bezel" */}
            <div className="work-card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${item.type === "mobile" ? "object-contain p-3" : "object-cover object-top"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-start justify-end p-3">
                <h3 className="font-bold text-white text-sm leading-tight">
                  {item.title}
                </h3>
                <p
                  className="text-gray-300 text-xs mt-0.5 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                </p>
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
