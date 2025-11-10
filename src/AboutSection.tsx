import React from "react";
import { motion } from 'motion/react';
import portfolioData from "./data.json";

interface aboutData {
  badge?: string;
  title?: string;
  imagePath?: string;
  paragraphs?: string[];
  quickBitsTitle?: string;
  quickBits?: string[];
  closingText?: string;
}
const AboutSection: React.FC = () => {
  const data = portfolioData?.about as aboutData;

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col items-center"
    >
      <motion.div 
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full shadow-inner">
          About me
        </span>
      </motion.div>
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-12">
        {data?.imagePath && (
          <motion.div 
            className="flex relative w-full max-w-sm mx-auto md:w-1/3 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src={data?.imagePath}
              alt="Profile"
              className="w-full h-auto rounded-lg relative z-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://placehold.co/400x500/374151/FFFFFF?text=Profile+Image";
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
        <motion.div 
          className="flex-1 order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {data.title && (
            <motion.h2 
              className="text-4xl font-bold tracking-tight text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {data.title}
            </motion.h2>
          )}

          {data.paragraphs && data.paragraphs.length > 0 && (
            <>
              {data.paragraphs.map((paragraph, index) => (
                <motion.p 
                  key={index} 
                  className="text-gray-700 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  {renderText(paragraph)}
                </motion.p>
              ))}
            </>
          )}

          {data.quickBitsTitle && (
            <motion.h3 
              className="text-xl font-semibold text-gray-900 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {renderText(data.quickBitsTitle)}
            </motion.h3>
          )}
          {data.quickBits && data.quickBits.length > 0 && (
            <motion.ul 
              className="text-gray-700 list-disc list-inside space-y-1 ml-4 grid grid-cols-1 sm:grid-cols-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {data.quickBits.map((bit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                >
                  {bit}
                </motion.li>
              ))}
            </motion.ul>
          )}

          {data.closingText && (
            <motion.p 
              className="text-gray-700 mt-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {renderText(data.closingText)}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
