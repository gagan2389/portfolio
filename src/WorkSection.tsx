import React from 'react';
import { ExportOutlined } from '@ant-design/icons';
import { motion } from 'motion/react';
import portfolioData from "./data.json";

interface ProjectItem {
    title: string;
    description: string;
    imagePath: string;
    technologies: string[];
        projectLink?: string;   
    liveLink?: string;
}

interface ProjectsData {
    title: string;
    list: ProjectItem[];
}

const ProjectCard: React.FC<ProjectItem & { index: number }> = ({ 
    title, 
    description, 
    imagePath, 
    technologies, 
    projectLink, 
    liveLink,
    index
}) => {
    const isEven = index % 2 === 0;
    const imageOrderClass = isEven ? "order-1" : "order-1 md:order-2";
    const textOrderClass = isEven ? "order-2" : "order-2 md:order-1";

    return (
        <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
                <motion.div 
                    className={`w-full md:w-1/2 flex-shrink-0 ${imageOrderClass}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <img 
                        src={imagePath} 
                        alt={`${title} project screenshot`} 
                        className="w-full h-auto rounded-lg object-cover shadow-md"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/600x400/E5E7EB/6B7280?text=Project+Image";
                        }}
                    />
                </motion.div>

                <div className={`w-full md:w-1/2 flex flex-col justify-center ${textOrderClass}`}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-left mb-4">{description}</p>
                    
                    <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.05
                                }
                            }
                        }}
                    >
                        {technologies.map((tech, techIndex) => (
                            <motion.span 
                                key={techIndex} 
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    <div className="flex items-center space-x-4">
                        {projectLink && (
                            <motion.a 
                                href={projectLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-150 flex items-center space-x-1"
                                aria-label={`View ${title} on GitHub`}
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExportOutlined />
                                <span>Code</span>
                            </motion.a>
                        )}
                        {liveLink && (
                            <motion.a 
                                href={liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-150 flex items-center space-x-1"
                                aria-label={`View live demo of ${title}`}
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExportOutlined />
                                <span>Live Demo</span>
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const WorkSection: React.FC = () => {
    const data = portfolioData.projects as ProjectsData;

    return (
        <section id="work" className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col items-center">
            <div className="max-w-5xl w-full text-center">
                <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 rounded-full shadow-inner">
                        Personal Projects
                    </span>
                </motion.div>

                <motion.h2 
                    className="text-xl md:text-2xl font-medium tracking-tight text-gray-700 dark:text-gray-300 mb-6"
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
                    {data.list.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            {...project}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WorkSection;