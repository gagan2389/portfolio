import React from 'react';
import { MailOutlined, PhoneOutlined, CopyOutlined, GithubOutlined, TwitterOutlined, LinkedinOutlined, MediumOutlined } from "@ant-design/icons";
import { message } from 'antd';
import portfolioData from "./data.json";

const IconMap = {
    GithubOutlined, TwitterOutlined, LinkedinOutlined, MediumOutlined,
} as const;

type IconKey = keyof typeof IconMap;

interface Social {
  iconKey: string;
  href: string;
  label: string;
  color: string;
}

interface ContactData {
    badge: string;
    description: string;
    email: string;
    phone: string;
    socialsText: string;
    socials: Social[];
}

const ContactSection: React.FC = () => {
    const data = portfolioData.contact as ContactData;
    const allSocials = portfolioData.home.socials;
    const copyToClipboard = async (text: string, label: string) => {
        try {
            await navigator.clipboard.writeText(text);
            message.success(`${label} copied to clipboard!`);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            message.error(`Failed to copy ${label}.`);
        }
    };

    const renderContactDetail = (Icon: React.ElementType, value: string, linkPrefix: string, label: string) => (
        <div className="flex items-center justify-center space-x-2 sm:space-x-3 px-4">
            <Icon className="text-lg sm:text-xl md:text-2xl text-gray-600 flex-shrink-0" />
            <a 
                href={`${linkPrefix}:${value}`} 
                className="text-[14px] !sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 hover:text-blue-600 transition duration-150 break-all sm:break-normal"
            >
                {value}
            </a>
            <button
                onClick={() => copyToClipboard(value, label)}
                className="text-base sm:text-lg md:text-xl text-gray-500 hover:text-gray-900 transition duration-150 p-1.5 rounded hover:bg-gray-100 flex-shrink-0"
                aria-label={`Copy ${label} to clipboard`}
            >
                <CopyOutlined />
            </button>
        </div>
    );

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
            <div id="contact" className="container mx-auto px-2 py-6 md:py-8 lg:py-10 flex flex-col items-center">
                <div className="max-w-2xl w-full text-center">
                    
                    <div className="mb-6 md:mb-8">
                        <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold text-gray-800 bg-gray-100 rounded-full shadow-sm">
                            {data.badge}
                        </span>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 md:mb-4 px-4">
                        {data.description}
                    </p>

                    <div className="mb-8">
                        {renderContactDetail(MailOutlined, data.email, 'mailto', 'Email')}
                        {renderContactDetail(PhoneOutlined, data.phone, 'tel', 'Phone')}
                    </div>


                    <div className="flex justify-center space-x-4 md:space-x-6 text-gray-600 mb-8">
                        {allSocials.map((social) => {
                            const IconComponent = IconMap[social.iconKey as IconKey];
                            if (!IconComponent) return null; 
                            
                            return (
                                <a 
                                    key={social.label} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={social.label}
                                    className="hover:scale-110 transition-transform duration-200"
                                >
                                    <IconComponent className={`text-2xl md:text-3xl lg:text-4xl ${social.color} transition-colors hover:opacity-80`} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;