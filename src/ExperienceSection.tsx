import React from "react";
import { motion } from 'motion/react';
import portfolioData from "./data.json";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  logoPath: string;
  descriptionPoints: string[];
}

interface ExperienceData {
  title: string;
  list: ExperienceItem[];
}

const ExperienceCard: React.FC<ExperienceItem> = ({
  company,
  role,
  duration,
  logoPath,
  descriptionPoints,
}) => {
  return (
    <motion.div 
      className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex flex-col mb-4 md:mb-0 items-start">
          <div className="flex items-center space-x-3 mb-2">
            <img
              src={logoPath}
              alt={`${company} logo`}
              className="w-auto h-12 object-contain"
              style={{
                filter:
                  "grayscale(0%) brightness(1) sepia(0%) hue-rotate(0deg) saturate(150%)",
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://placehold.co/80x20/F0FDF4/10B981?text=Logo";
              }}
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900">{role}</h3>
        </div>

        <p className="text-sm font-medium text-gray-600 md:text-right">
          {duration}
        </p>
      </div>

      <motion.ul 
        className="list-disc ml-5 text-gray-700 space-y-2 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {descriptionPoints.map((point, index) => (
          <motion.li 
            key={index} 
            className="text-base leading-relaxed"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            {point}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const data = portfolioData.experience as ExperienceData;

  return (
    <section
      id="experience"
      className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col items-center"
    >
      <div className="max-w-full w-full text-center">
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-full shadow-inner">
            Experience
          </span>
        </motion.div>
        <motion.h2 
          className="text-xl md:text-2xl font-medium tracking-tight text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {data.title}
        </motion.h2>
        <motion.div 
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {data.list.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
