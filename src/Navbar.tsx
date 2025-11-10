import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import portfolioData from "./data.json";

const Navbar: React.FC = () => {
  const { navLinks, cvPath } = portfolioData;
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const toggleMobileMenu = () => setMobileMenuVisible(!mobileMenuVisible);
  const closeMobileMenu = () => setMobileMenuVisible(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4 md:px-8">
        <a
          href="#home"
          className="text-3xl font-bold tracking-tighter text-gray-900 flex items-center transition-colors"
        >
          <span className="text-blue-600">&lt;</span>
          <span className="text-gray-900">{portfolioData?.home?.logoname}</span>
          <span className="text-blue-600">/&gt;</span>
        </a>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition duration-150 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href={cvPath}
            download
            className="
                    hidden md:block
                    bg-gray-900 
                    text-white 
                    py-2 
                    px-4 
                    rounded-lg 
                    text-sm 
                    font-medium 
                    hover:bg-gray-700 
                    transition 
                    duration-150 
                    shadow-md 
                    whitespace-nowrap 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-gray-900 
                    focus:ring-opacity-50
                "
          >
            Download CV
          </a>

          <button
            className="md:hidden text-2xl text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Open mobile menu"
          >
            <MenuOutlined />
          </button>
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
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="text-2xl text-gray-700 hover:text-gray-900 focus:outline-none"
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
              className="text-lg text-gray-700 hover:text-blue-600 font-medium py-2 transition duration-150 block"
            >
              {link.name}
            </a>
          ))}

          <a
            href={cvPath}
            target="_blank"
            download
            onClick={closeMobileMenu}
            className="
                        bg-gray-900 
                        text-white 
                        py-2 
                        px-4 
                        rounded-lg 
                        text-base 
                        font-medium 
                        hover:bg-gray-700 
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
    </header>
  );
};

export default Navbar;
