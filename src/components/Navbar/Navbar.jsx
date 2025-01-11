import React, { useState, useEffect } from "react";
import icon from "../../../assets/icon.png";

function Navbar() {
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

    return (
        <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50">
            <div className="flex items-center justify-between px-6 py-3">
                {/* Left Section: Logo and Title */}
                <div className="flex items-center space-x-3">
                    <img src={icon} alt="logo" className="h-10 w-10 object-contain" />
                    <div className="text-xl font-bold tracking-wide bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        JIIT OPTICA
                    </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12" // Close icon (X)
                                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                            }
                        />
                    </svg>
                </button>

                {/* Center Section: Navigation Links (hidden on small screens) */}
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Home
                    </div>
                    <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Docs
                    </div>
                    <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Showcase
                    </div>
                    <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Community
                    </div>
                    <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                        Tags
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Slide from Right) */}
            <div
                className={`fixed top-0 right-0 w-2/3 md:w-1/2 h-full bg-gray-900 bg-opacity-50 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } z-40`}
            >
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                    {/* Close Button (X) inside the menu */}
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={closeMenu}
                    >
                        &times;
                    </button>

                    {/* Menu Items */}
                    <div className="flex flex-col items-center space-y-6 py-4 text-lg font-medium text-white">
                        <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Home
                        </div>
                        <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Docs
                        </div>
                        <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Showcase
                        </div>
                        <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Community
                        </div>
                        <div className="hover:text-gray-400 transition cursor-pointer bg-gradient-to-b from-blue-600 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Tags
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
