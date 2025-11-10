import React, { useState } from "react";
import { MenuOutlined, CloseOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { motion } from 'motion/react';
import portfolioData from "./data.json";
import { useTheme } from "./ThemeContext";

const Navbar: React.FC = () => {
  const { navLinks, cvPath } = portfolioData;
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => setMobileMenuVisible(!mobileMenuVisible);
  const closeMobileMenu = () => setMobileMenuVisible(false);
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-sm shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 md:px-8">
        <motion.a
          href="#home"
          className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white flex items-center transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-blue-600 dark:text-blue-400">&lt;</span>
          <span className="text-gray-900 dark:text-white">{portfolioData?.home?.logoname}</span>
          <span className="text-blue-600 dark:text-blue-400">/&gt;</span>
        </motion.a>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-150 text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
          </motion.button>

          <motion.a
            href={cvPath}
            download
            className="
                    hidden md:block
                    bg-gray-900 
                    dark:bg-gray-700
                    text-white 
                    py-2 
                    px-4 
                    rounded-lg 
                    text-sm 
                    font-medium 
                    hover:bg-gray-700 
                    dark:hover:bg-gray-600
                    transition 
                    duration-150 
                    shadow-md 
                    whitespace-nowrap 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-gray-900 
                    dark:focus:ring-gray-700
                    focus:ring-opacity-50
                "
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>

          <motion.button
            onClick={toggleTheme}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <MoonOutlined /> : <SunOutlined />}
          </motion.button>

          <motion.button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Open mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MenuOutlined />
          </motion.button>
        </div>
      </nav>

      <Drawer
        placement="right"
        closable={false}
        onClose={closeMobileMenu}
        open={mobileMenuVisible}
        width={250}
        className="[&_.ant-drawer-body]:p-0"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            aria-label="Close mobile menu"
          >
            <CloseOutlined />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 transition duration-150 block"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => {
              toggleTheme();
            }}
            className="flex items-center justify-center w-full py-2 px-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <>
                <MoonOutlined className="mr-2" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <SunOutlined className="mr-2" />
                <span>Light Mode</span>
              </>
            )}
          </button>

          <a
            href={cvPath}
            target="_blank"
            download
            onClick={closeMobileMenu}
            className="
                        bg-gray-900 
                        dark:bg-gray-700
                        text-white 
                        py-2 
                        px-4 
                        rounded-lg 
                        text-base 
                        font-medium 
                        hover:bg-gray-700 
                        dark:hover:bg-gray-600
                        transition 
                        duration-150 
                        shadow-md 
                        text-center 
                        mt-4
                    "
          >
            Download CV
          </a>
        </div>
      </Drawer>
    </motion.header>
  );
};

export default Navbar;
