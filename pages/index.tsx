import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const print = (pdf: string) => {
    const iframe: HTMLIFrameElement = document.createElement("iframe");
    iframe.style.visibility = "hidden";
    iframe.src = pdf;
    document.body.appendChild(iframe);
    iframe?.contentWindow?.focus();
    iframe?.contentWindow?.print();
  };

  const socials = [
    {
      href: "https://www.facebook.com/namyeuyen.hihi/",
      icon: "bxl-facebook",
      cls: "fb",
    },
    { href: "https://github.com/nambui98", icon: "bxl-github", cls: "gh" },
    {
      href: "https://www.instagram.com/nambui27/",
      icon: "bxl-instagram-alt",
      cls: "itg",
    },
    { href: "mailto:bvnam98@gmail.com", icon: "bxl-gmail", cls: "gg" },
  ];

  return (
    <div className="rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full p-6 flex justify-center items-center flex-col">
      <h1 className="text-black dark:text-white text-3xl text-center font-extrabold">
        Bùi Văn Nam
      </h1>
      <p className="w-full text-center text-gray-400 dark:text-gray-300 tracking-widest font-semibold text-sm uppercase mt-1">
        Senior Frontend Engineer
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-3 max-w-xs leading-relaxed">
        6+ years building high-performance web &amp; mobile apps. Expert in
        React/Next.js, Flutter, and Web3 integration.
      </p>

      <div className="flex mt-5 gap-4">
        {socials.map(({ href, icon, cls }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`btn-shadow dark:btn-shadow-dark ${cls} rounded-full text-center w-12 h-12 text-gray-400 hover:text-[var(--color)] dark:text-gray-300 dark:hover:text-[var(--color)] transition-colors duration-200`}
          >
            <i className={`bx ${icon} text-2xl`}></i>
          </a>
        ))}
      </div>

      <div className="absolute bottom-10 2xl:right-20 2xl:left-20 md:right-10 md:left-10 flex items-center smx:flex-col smx:items-start justify-between">
        <span className="flex items-center">
          <a
            href="/nam-resume.pdf"
            download
            className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"
          >
            <i
              className="bx bxs-download text-2xl"
              style={{ color: "var(--color)" }}
            ></i>
          </a>
          <span className="ml-2 dark:text-white text-sm">
            {t("downloadcv")}
          </span>
        </span>
        <span className="flex flex-row-reverse smx:flex-row smx:mt-2 items-center">
          <button
            onClick={() => print("nam-resume.pdf")}
            className="btn-shadow dark:btn-shadow-dark rounded-full text-center w-12 h-12"
          >
            <i
              className="bx bxs-printer text-2xl"
              style={{ color: "var(--color)" }}
            ></i>
          </button>
          <span className="mr-2 smx:ml-2 dark:text-white text-sm">
            {t("printmyresum")}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Home;
