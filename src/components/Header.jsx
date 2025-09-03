import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-2"
            : "bg-gradient-to-r from-blue-700 to-indigo-800 py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-lg ${
                  isScrolled
                    ? "bg-blue-100 text-blue-700"
                    : "bg-white text-blue-700"
                }`}
              >
                <i className="fas fa-book-open text-xl"></i>
              </div>
              <span
                className={`text-xl font-bold ${
                  isScrolled ? "text-blue-800" : "text-white"
                }`}
              >
                Daily Diary
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className={`transition-all hover:text-blue-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white"
                }`}
              >
                <i className="fas fa-home mr-2"></i>Home
              </a>
              <a
                href="/blog"
                className={`transition-all hover:text-blue-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white"
                }`}
              >
                <i className="fas fa-book mr-2"></i>Diary Blog
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg ${
                  isScrolled ? "text-blue-700" : "text-white"
                }`}
              >
                {isMobileMenuOpen ? (
                  <i className="fas fa-times text-2xl"></i>
                ) : (
                  <i className="fas fa-bars text-2xl"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div
            className={`px-4 pt-2 pb-4 ${
              isScrolled ? "bg-white" : "bg-indigo-800"
            }`}
          >
            <a
              href="/"
              className={`block py-3 px-4 rounded-lg transition-all ${
                isScrolled
                  ? "text-gray-700 hover:bg-blue-50"
                  : "text-white hover:bg-indigo-700"
              }`}
            >
              <i className="fas fa-home mr-3"></i>Home
            </a>
            <a
              href="/blog"
              className={`block py-3 px-4 rounded-lg transition-all ${
                isScrolled
                  ? "text-gray-700 hover:bg-blue-50"
                  : "text-white hover:bg-indigo-700"
              }`}
            >
              <i className="fas fa-book mr-3"></i>Diary Blog
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
        nav {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
};

export default Header;
