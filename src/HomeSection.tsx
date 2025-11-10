import React from 'react';
import {
    GithubOutlined, TwitterOutlined, LinkedinOutlined, MediumOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";
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
    <section id="home" className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12 mt-4">
      <div className="flex-1 text-center md:text-left order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
          {data.greeting} {data.name}
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-xl mb-6">
          {data.description}
        </p>

        {(data.status || data.location) && (
        <div className="flex flex-col items-center md:items-start space-y-2 mb-8">
          {data.location && (
            <div className="flex items-center text-gray-700 text-base">
              <EnvironmentIcon className="text-gray-500 mr-2" />
              {data.location}
            </div>
          )}
          {data.status && (
            <div className="flex items-center text-gray-700 text-base">
              <span className={`w-2.5 h-2.5 ${data.statusColor} rounded-full mr-2`}></span>
              {data.status}
            </div>
          )}
        </div>
        )}

        <div className="flex justify-center md:justify-start space-x-6 text-gray-600">
          {data.socials.map((social) => {
            const IconComponent = IconMap[social.iconKey as IconKey];
            return (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
              >
                <IconComponent className={`text-3xl ${social.color} transition-colors`} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="relative w-full max-w-sm order-1 md:order-2">
        <div className="absolute inset-0 bg-gray-200 rounded-lg transform translate-x-4 translate-y-4 -z-10 hidden md:block"></div>
        <img
          src={data.profileImagePath}
          alt={`${data.name}'s Profile`}
          className="w-full h-auto rounded-lg shadow-lg relative z-10"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/300x400/374151/FFFFFF?text=Image+Load+Failed";
          }}
        />
      </div>
    </section>
  );
};

export default HomeSection;