import React from "react";
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
  <div
    className="flex flex-col items-center p-4 transition-transform transform hover:scale-105"
    aria-label={name}
  >
    <div className="w-16 h-16 mb-2">
      <img
        src={iconPath}
        alt={`${name} icon`}
        className="w-full h-full object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://placehold.co/64x64/E5E7EB/6B7280?text=Icon";
        }}
      />
    </div>
    <p className="text-sm font-medium text-gray-700 text-center">{name}</p>
  </div>
);

const SkillSection: React.FC = () => {
  const data = portfolioData.skills as SkillsData;

  return (
    <section
      id="skills"
      className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center"
    >
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full shadow-inner">
            Skills
          </span>
        </div>

        {data.title && (
          <h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-700 mb-12">
            {data.title}
          </h2>
        )}
        {data.list && data.list.length > 0 && (
          <div
            className="
                            grid 
                            gap-x-4 
                            gap-y-8 
                            grid-cols-3 
                            sm:grid-cols-6 
                            lg:grid-cols-8
                        "
          >
            {data.list.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                iconPath={skill.iconPath}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillSection;
