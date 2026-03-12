import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("common");

  const contactItems = [
    { label: t("address"), value: "Hà Nội", href: null, icon: "bxs-map" },
    {
      label: t("nativeland"),
      value: "Hưng Yên",
      href: null,
      icon: "bxs-home-heart",
    },
    {
      label: t("phonenumber"),
      value: "+84 35 581 7589",
      href: "tel:+84355817589",
      icon: "bxs-phone",
    },
    {
      label: t("mail"),
      value: "bvnam98@gmail.com",
      href: "mailto:bvnam98@gmail.com",
      icon: "bxs-envelope",
    },
  ];

  return (
    <div className="rounded-3xl bg-app dark:bg-neutral-800 shadow-3xl dark:shadow-3xl-dark relative w-full h-full p-6">
      <div className="border w-full mb-4 dark:border-dark rounded-2xl overflow-hidden">
        <div className="border-insite my-3 dark:border-dark-insite w-full mx-3 p-4">
          <div className="grid grid-cols-1 gap-2">
            {contactItems.map(({ label, value, href, icon }) => (
              <div key={label} className="flex items-center gap-3">
                <i
                  className={`bx ${icon} text-lg text-[var(--color)] flex-shrink-0`}
                ></i>
                <span className="text-black dark:text-white font-semibold smx:text-sm">
                  {label}:
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-gray-600 dark:text-gray-300 smx:text-sm hover:text-[var(--color)] dark:hover:text-[var(--color)] transition-colors duration-150 truncate"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-gray-600 dark:text-gray-300 smx:text-sm">
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border w-full h-[350px] mt-2 dark:border-dark rounded-2xl overflow-hidden">
        <div className="border-insite dark:border-dark-insite m-3 w-full h-[calc(100%-24px)] ">
          <iframe
            title="address"
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.079749879821!2d105.78880097649419!3d21.029494780620023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4f25a5e0a9%3A0x26fe96003b912e52!2zQ8O0bmcgVmnDqm4gQ-G6p3UgR2nhuqV5!5e0!3m2!1sen!2s!4v1773305431873!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{
              border: 0,
              // width: "calc(100% - 20px)",
              // height: "calc(100% - 20px)",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
