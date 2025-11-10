import React from 'react';
import { ExportOutlined } from '@ant-design/icons';
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
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8">
                <div className={`w-full md:w-1/2 flex-shrink-0 ${imageOrderClass}`}>
                    <img 
                        src={imagePath} 
                        alt={`${title} project screenshot`} 
                        className="w-full h-auto rounded-lg object-cover shadow-md"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://placehold.co/600x400/E5E7EB/6B7280?text=Project+Image";
                        }}
                    />
                </div>

                <div className={`w-full md:w-1/2 flex flex-col justify-center ${textOrderClass}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, techIndex) => (
                            <span 
                                key={techIndex} 
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {projectLink && (
                            <a 
                                href={projectLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-800 transition duration-150 flex items-center space-x-1"
                                aria-label={`View ${title} on GitHub`}
                            >
                                <ExportOutlined />
                                <span>Code</span>
                            </a>
                        )}
                        {liveLink && (
                            <a 
                                href={liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-600 hover:text-blue-800 transition duration-150 flex items-center space-x-1"
                                aria-label={`View live demo of ${title}`}
                            >
                                <ExportOutlined />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const WorkSection: React.FC = () => {
    const data = portfolioData.projects as ProjectsData;

    return (
        <section id="work" className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center">
            <div className="max-w-5xl w-full text-center">
                <div className="mb-8">
                    <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-200 rounded-full shadow-inner">
                        Personal Projects
                    </span>
                </div>

                <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-700 mb-12">
                    {data.title}
                </h2>
                
                <div className="space-y-12">
                    {data.list.map((project, index) => (
                        <ProjectCard 
                            key={index}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkSection;