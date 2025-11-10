import React from "react";
import { motion } from 'motion/react';
import portfolioData from "./data.json";

interface Skill {
  name: string;
  iconPath: string;
}

interface SkillsData {
  title?: string;
  list?: Skill[];
}

const SkillCard: React.FC<Skill> = ({ name, iconPath }) => (
  <motion.div
    className="flex flex-col items-center p-4"
    aria-label={name}
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <motion.div 
      className="w-16 h-16 mb-2"
      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={iconPath}
        alt={`${name} icon`}
        className="w-full h-full object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://placehold.co/64x64/E5E7EB/6B7280?text=Icon";
        }}
      />
    </motion.div>
    <p className="text-sm font-medium text-gray-700 text-center">{name}</p>
  </motion.div>
);

const SkillSection: React.FC = () => {
  const data = portfolioData.skills as SkillsData;

  return (
    <section
      id="skills"
      className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col items-center"
    >
      <div className="max-w-4xl w-full text-center">
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full shadow-inner">
            Skills
          </span>
        </motion.div>

        {data.title && (
          <motion.h2 
            className="text-xl md:text-2xl font-medium tracking-tight text-gray-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.title}
          </motion.h2>
        )}
        {data.list && data.list.length > 0 && (
          <motion.div
            className="
                            grid 
                            gap-x-4 
                            gap-y-8 
                            grid-cols-3 
                            sm:grid-cols-6 
                            lg:grid-cols-8
                        "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {data.list.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.5, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <SkillCard
                  name={skill.name}
                  iconPath={skill.iconPath}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
