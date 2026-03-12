import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "boxicons/css/boxicons.min.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "../components/menu";

import Setting from "../containers/Setting";
import Bubbles from "../components/bubbles/Bubbles";
import useTranslation from "next-translate/useTranslation";
import { ThemeProvider } from "../containers/ThemeContext";
import { ColorProvider } from "../containers/ColorsContext";
import Loading from "../components/loading/Loading";
import Head from "next/head";
function MyApp({ Component, pageProps, router }: AppProps) {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "/", icon: "bxs-home-alt-2", label: t("home") },
    { href: "/works", icon: "bxs-briefcase", label: t("work") },
    { href: "/skills", icon: "bxs-archive", label: t("skill") },
    { href: "/contact", icon: "bxs-contact", label: t("contact") },
  ];

  return (
    <ThemeProvider>
      <ColorProvider>
        <Head>
          <title>Nam Bùi — Frontend Developer</title>
          <meta
            name="description"
            content="Frontend Developer specializing in React, Next.js, and modern web technologies."
          />
          <link rel="icon" href="/photo3.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Nam Bùi — Frontend Developer" />
          <meta
            property="og:description"
            content="Frontend Developer specializing in React, Next.js, and modern web technologies."
          />
          <meta property="og:image" content="/photo3.jpg" />
        </Head>
        <div className="bg-app dark:bg-neutral-800 transition-colors duration-300">
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="fixed right-0 top-0 mr-4 mt-2 md:mt-6 z-10">
                <Setting />
              </div>
              <Bubbles />
              <div className="App relative">
                <Menu />
                <div className="flex h-screen w-screen items-center justify-center relative">
                  <div
                    className="flex w-full items-start justify-center"
                    style={{ height: "600px" }}
                  >
                    <div className="md:w-6/12 sm:w-10/12 smx:w-10/12 h-full">
                      <SwitchTransition mode="out-in">
                        <CSSTransition
                          key={router.pathname}
                          classNames="page"
                          timeout={300}
                        >
                          <Component {...pageProps} />
                        </CSSTransition>
                      </SwitchTransition>
                    </div>

                    <div className="rounded-3xl w-[300px] md:flex sm:hidden smx:hidden h-full mx-4 bg-app shadow-3xl dark:bg-neutral-800 dark:shadow-3xl-dark items-center flex-col py-10 px-6">
                      <div className="wrap-avatar dark:wrap-avatar-dark">
                        <div className="avatar">
                          <img src="/Logo.jpg" alt="Nam Bùi" />
                        </div>
                      </div>
                      <h1 className="text-black dark:text-white font-extrabold tracking-widest text-3xl mt-5">
                        Nam Bùi
                      </h1>
                      <p className="text-center text-gray-400 dark:text-gray-300 font-semibold tracking-[2px] text-sm uppercase mt-1">
                        Frontend Engineer
                      </p>
                      <nav>
                        <ul className="mt-4">
                          {navLinks.map(({ href, icon, label }) => {
                            const isActive = router.pathname === href;
                            return (
                              <li key={href}>
                                <Link href={href}>
                                  <a
                                    className={`font-bold w-48 h-10 rounded-2xl mt-5 px-9 flex items-center transition-all duration-200 ${isActive ? "nav-link-active" : "nav-link-inactive hover:text-[var(--color)]"}`}
                                  >
                                    <i
                                      className={`bx ${icon} mr-3 text-xl`}
                                    ></i>
                                    {label}
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </ColorProvider>
    </ThemeProvider>
  );
}

export default MyApp;
