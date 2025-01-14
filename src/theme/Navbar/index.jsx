import React, { useState, useEffect } from "react";
import icon from "../../../assets/icon.png";
import Link from "@docusaurus/Link"; // Correct import
import { useThemeConfig } from "@docusaurus/theme-common";

function Navbar() {
    const { navbar } = useThemeConfig();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle closing the menu
    const closeMenu = () => setIsMenuOpen(false);

    // Automatically close the menu when screen width is large enough
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false); // Close menu on large screens
            }
        };

        // Add resize event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navbarItems = [
        { label: "Home", to: "/" },
        { label: "Docs", to: "/docs/intro" },
        { label: "Showcase", to: "/showcase" },
        { label: "Community", to: "/community" },
    ];

    return (
        <span className={"navbar"}>
        <div className={`relative ${isMenuOpen ? "overflow-hidden" : ""}`}>
            <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50">
                <div className="flex items-center justify-between px-6 py-3">
                    {/* Left Section: Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <img src={icon} alt="logo" className="h-10 w-10 object-contain" />
                        <div className="text-xl font-bold tracking-wide text-gray-300 hover:text-white transition-colors">
                            JIIT OPTICA
                        </div>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    {/* Center Section: Navigation Links (hidden on small screens) */}
                    <div className="hidden md:flex space-x-8 text-lg font-medium">
                        {navbarItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown (Slide from Right) */}
            <div
                className={`fixed top-0 right-0 w-2/4 md:w-1/2 h-full bg-gray-900 bg-opacity-50 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } z-40`}
            >
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                    {/* Close Button (X) inside the menu */}
                    <button
                        className="absolute top-3 right-8 text-white text-3xl bg-transparent border-none outline-none cursor-pointer"
                        onClick={closeMenu}
                    >
                        &times;
                    </button>

                    {/* Menu Items */}
                    <div className="flex flex-col items-center space-y-6 py-4 text-lg font-medium text-white gap-2">
                        {navbarItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className="cursor-pointer text-gray-300 hover:text-white transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Blur */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 backdrop-blur-md" : "opacity-0 pointer-events-none"
                    }`}
                onClick={closeMenu}
            ></div>
        </div>
        </span>
    );
}

export default Navbar;
