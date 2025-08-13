import { Link, useLocation } from "react-router";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 


function Layout({ children }) {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">

            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-800/60 text-white backdrop-blur-md shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link className="text-3xl font-bold" to="/">
                                JITU {" "} 
                               
                                <FontAwesomeIcon icon={faCode} className="fa-beat" />
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/projects"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/projects"
                            >
                                Projects
                            </Link>
                            <Link
                                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/career"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/career"
                            >
                                Career
                            </Link>
                            <Link
                                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/services"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/services"
                            >
                                Services
                            </Link>
                            <Link
                                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/research"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/research"
                            >
                                Research
                            </Link>
                            <Link
                                className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === "/contact"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/contact"
                            >
                                Contact
                            </Link>


                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/projects"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/projects"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/career"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/career"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Career
                            </Link>
                            <Link
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/services"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/services"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/research"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/research"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Research
                            </Link>
                            <Link
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === "/contact"
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>


                        </div>
                    </div>
                )}
            </nav>

            {/* Add top padding so content is not hidden behind the fixed navbar */}
            <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {children}
            </main>

            <footer className="bg-gray-900 text-gray-300 py-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        {/* Left Section */}
                        <div className="mb-8 md:mb-0">
                            <Link className="text-2xl font-bold text-white mb-3" to="/">
                                JITU {" "} 
                               
                                <FontAwesomeIcon icon={faCode} className="fa-beat" />
                            </Link>
                            
                            <p className="max-w-md text-gray-400">
                                Showcasing my work with the help of AI agents
                            </p>
                        </div>

                        {/* Right Section - Social Links */}
                        <div className="flex space-x-6 items-center justify-center md:justify-start">
                            {/* GitHub */}
                            <a
                                href="https://github.com/jitugandhare"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.423 2.865 8.175 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.114-4.555-4.957 0-1.094.39-1.988 1.029-2.69-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.202 2.397.1 2.65.64.702 1.028 1.596 1.028 2.69 0 3.852-2.339 4.7-4.566 4.947.36.31.68.923.68 1.86 0 1.343-.013 2.425-.013 2.754 0 .267.18.58.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/jitu-gandhare-6680ab201/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.27c-.966 0-1.75-.793-1.75-1.77 0-.978.784-1.77 1.75-1.77s1.75.792 1.75 1.77c0 .977-.784 1.77-1.75 1.77zm13 10.27h-3v-4.5c0-1.072-.035-2.452-1.495-2.452-1.5 0-1.73 1.172-1.73 2.38v4.572h-3v-9h2.88v1.232h.041c.402-.761 1.382-1.563 2.846-1.563 3.043 0 3.603 2.004 3.603 4.61v4.721z" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:jitugandhare@gmail.com"
                                aria-label="Email"
                                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M4 4h16v16H4z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+1234567890"
                                aria-label="Phone"
                                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.38 2.39.72 3.52a2 2 0 01-.45 2.11L9 10.41a16 16 0 006 6l1.06-1.06a2 2 0 012.11-.45c1.13.34 2.31.59 3.52.72a2 2 0 011.71 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                        <p className="text-gray-500 text-sm select-none">
                            &copy; 2025 Portfolio. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Layout;
