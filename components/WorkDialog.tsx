/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";
import { FC } from "react";

export type WorkItem = {
  title: string;
  link: string;
  image: string;
  type?: string;
  description?: string;
  techStack?: string[];
};

interface WorkDialogProps {
  isOpen: boolean;
  onClose: () => void;
  work: WorkItem | null;
}

const WorkDialog: FC<WorkDialogProps> = ({ isOpen, onClose, work }) => {
  if (!work) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(6px)", background: "rgba(180,185,195,0.35)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="work-dialog rounded-3xl max-w-lg w-full max-h-[88vh] overflow-y-auto scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image — inset recess (bezel + screen) */}
            <div
              className={`work-dialog-img ${
                work.type === "mobile"
                  ? "flex items-center justify-center"
                  : ""
              }`}
              style={{ height: work.type === "mobile" ? 220 : 200 }}
            >
              <img
                src={work.image}
                alt={work.title}
                className={`w-full h-full ${
                  work.type === "mobile"
                    ? "object-contain p-4"
                    : "object-cover object-top"
                }`}
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-5 pt-4 flex flex-col gap-3">
              {/* Title + close */}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-bold text-black dark:text-white leading-snug">
                  {work.title}
                </h2>
                <button
                  onClick={onClose}
                  className="btn-shadow dark:btn-shadow-dark rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center text-gray-500 hover:text-[var(--color)] dark:text-gray-400 transition-colors"
                  aria-label="Close"
                >
                  <i className="bx bx-x text-xl"></i>
                </button>
              </div>

              {work.description && (
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {work.description}
                </p>
              )}

              {work.techStack && work.techStack.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="skill-chip px-3 py-1 rounded-xl text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {work.link && work.link !== "#" && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shadow dark:btn-shadow-dark self-start inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[var(--color)] transition-colors duration-200"
                >
                  <i className="bx bx-link-external text-base" style={{ color: "var(--color)" }}></i>
                  Visit website
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WorkDialog;
