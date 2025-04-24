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
        <>
          <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white dark:bg-neutral-800 rounded-lg p-6 max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto shadow-lg m-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex flex-col space-y-4">
                <div className="mb-4">
                  <img
                    src={work.image}
                    alt={work.title}
                    className={`w-full h-auto rounded-lg ${work.type === "mobile" ? "max-h-[400px] object-contain" : ""}`}
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-black dark:text-white">{work.title}</h2>
                
                {work.description && (
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Description</h3>
                    <p className="text-gray-700 dark:text-gray-300">{work.description}</p>
                  </div>
                )}
                
                {work.techStack && work.techStack.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-1">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {work.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-gray-200 dark:bg-neutral-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
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
                    className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit website
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WorkDialog; 