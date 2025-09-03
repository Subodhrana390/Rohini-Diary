import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-white/10 p-3 rounded-xl mr-4">
                  <i className="fas fa-book-open text-2xl text-blue-300"></i>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
                  Daily Diary
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Documenting the training journey of Rohini at Ablore, showcasing
                projects, learnings, and professional growth in full-stack
                development.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <i className="fas fa-map-marker-alt mr-2 text-blue-300"></i>
                <span>Panchkula, Haryana</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-blue-400 after:rounded-full">
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-all flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs text-blue-300 mr-2 group-hover:translate-x-1 transition-transform"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-all flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs text-blue-300 mr-2 group-hover:translate-x-1 transition-transform"></i>
                    Diary Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="/#projects"
                    className="text-gray-300 hover:text-white transition-all flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs text-blue-300 mr-2 group-hover:translate-x-1 transition-transform"></i>
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="text-gray-300 hover:text-white transition-all flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs text-blue-300 mr-2 group-hover:translate-x-1 transition-transform"></i>
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-xl font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-blue-400 after:rounded-full">
                Connect With Me
              </h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out for collaborations or just to say hello!
              </p>

              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-lg hover:bg-blue-500 transition-all transform hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-lg hover:bg-gray-700 transition-all transform hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-lg hover:bg-blue-400 transition-all transform hover:-translate-y-1"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a
                  href="#"
                  className="bg-white/10 p-3 rounded-lg hover:bg-red-500 transition-all transform hover:-translate-y-1"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope text-lg"></i>
                </a>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">
                  Have a project in mind?
                </p>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 Rohini - GNDEC. All rights reserved.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 right-0 w-48 h-48 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1200px;
        }
      `}</style>
    </>
  );
};

export default Footer;
