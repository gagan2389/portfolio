import React from 'react';
import { MailOutlined, PhoneOutlined, CopyOutlined, GithubOutlined, TwitterOutlined, LinkedinOutlined, MediumOutlined } from "@ant-design/icons";
import { message } from 'antd';
import { motion } from 'motion/react';
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
            <Icon className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <a 
                href={`${linkPrefix}:${value}`} 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-150 break-all sm:break-normal"
            >
                {value}
            </a>
            <button
                onClick={() => copyToClipboard(value, label)}
                className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-150 p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 flex-shrink-0"
                aria-label={`Copy ${label} to clipboard`}
            >
                <CopyOutlined />
            </button>
        </div>
    );

    return (
        <footer className="bg-gradient-to-b from-white dark:from-gray-900 to-gray-50 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div id="contact" className="container mx-auto px-2 py-6 md:py-8 lg:py-10 flex flex-col items-center">
                <div className="max-w-2xl w-full text-center">
                    
                    <motion.div 
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-full shadow-sm">
                            {data.badge}
                        </span>
                    </motion.div>

                    <motion.p 
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-4 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {data.description}
                    </motion.p>

                    <motion.div 
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {renderContactDetail(MailOutlined, data.email, 'mailto', 'Email')}
                        {renderContactDetail(PhoneOutlined, data.phone, 'tel', 'Phone')}
                    </motion.div>


                    <motion.div 
                        className="flex justify-center space-x-4 md:space-x-6 text-gray-600 dark:text-gray-400 mb-8"
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
                        {allSocials.map((social) => {
                            const IconComponent = IconMap[social.iconKey as IconKey];
                            if (!IconComponent) return null; 
                            
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
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.5, y: 20 },
                                        visible: { opacity: 1, scale: 1, y: 0 }
                                    }}
                                    whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <IconComponent className={`text-2xl md:text-3xl lg:text-4xl ${social.color} ${darkModeClass} transition-colors hover:opacity-80`} />
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;