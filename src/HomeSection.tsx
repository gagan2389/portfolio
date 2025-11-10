import React from 'react';
import {
    GithubOutlined, TwitterOutlined, LinkedinOutlined, MediumOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";
import { motion } from 'motion/react';
import portfolioData from "./data.json";

const IconMap = {
    GithubOutlined, TwitterOutlined, LinkedinOutlined, MediumOutlined,
    EnvironmentOutlined
} as const;

type IconKey = keyof typeof IconMap;

interface Social {
  iconKey: string;
  href: string;
  label: string;
  color: string;
}

interface HomeData {
  greeting: string;
  name: string;
  description: string;
  statusColor?: string;
  location?: string | null;
  status?: string | null;
  profileImagePath: string;
  socials: Social[];
}

const HomeSection: React.FC = () => {
  const data = portfolioData.home as HomeData;
  const EnvironmentIcon = IconMap.EnvironmentOutlined;

  return (
    <section id="home" className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-12 pt-20 !mt-10">
      <motion.div 
        className="flex-1 text-center md:text-left order-2 md:order-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {data.greeting} {data.name}
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {data.description}
        </motion.p>

        {(data.status || data.location) && (
        <motion.div 
          className="flex flex-col items-center md:items-start space-y-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {data.location && (
            <div className="flex items-center text-gray-700 dark:text-gray-300 text-base">
              <EnvironmentIcon className="text-gray-500 dark:text-gray-400 mr-2" />
              {data.location}
            </div>
          )}
          {data.status && (
            <div className="flex items-center text-gray-700 dark:text-gray-300 text-base">
              <span className={`w-2.5 h-2.5 ${data.statusColor} rounded-full mr-2`}></span>
              {data.status}
            </div>
          )}
        </motion.div>
        )}

        <motion.div 
          className="flex justify-center md:justify-start space-x-6 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {data.socials.map((social, index) => {
            const IconComponent = IconMap[social.iconKey as IconKey];
            
            // Make LinkedIn and GitHub white in dark mode
            const isLinkedInOrGitHub = social.iconKey === 'LinkedinOutlined' || social.iconKey === 'GithubOutlined';
            const darkModeClass = isLinkedInOrGitHub ? 'dark:text-white' : '';
            
            return (
              <motion.a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <IconComponent className={`text-3xl ${social.color} ${darkModeClass} transition-colors`} />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div 
        className="relative w-full max-w-sm order-1 md:order-2"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-lg transform translate-x-4 translate-y-4 -z-10 hidden md:block"
          initial={{ opacity: 0, x: 0, y: 0 }}
          whileInView={{ opacity: 1, x: 16, y: 16 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        ></motion.div>
        <motion.img
          src={data.profileImagePath}
          alt={`${data.name}'s Profile`}
          className="w-full h-auto rounded-lg shadow-lg relative z-10"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/300x400/374151/FFFFFF?text=Image+Load+Failed";
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
};

export default HomeSection;