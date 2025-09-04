import { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Home = () => {
  const [openPdf, setOpenPdf] = useState(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const closeModal = () => setOpenPdf(null);

  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to My Training Diary
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Documenting my journey at Ablore, Panchkula, Haryana
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => setOpenPdf("/Training_Report.pdf")}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition shadow-lg flex items-center"
            >
              <i className="fas fa-file-alt mr-2"></i> View Final Report
            </button>
            <button
              onClick={() => setOpenPdf("/Training_Certificate.pdf")}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition flex items-center"
            >
              <i className="fas fa-award mr-2"></i> View Certificate
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            About My Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                Ablore
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ablore is a technology-driven company specializing in providing
                innovative software solutions and digital services to businesses
                and individuals. With a focus on Full-Stack Web Development,
                Artificial Intelligence (AI), and modern cloud-based
                technologies, Ablore delivers high-quality, scalable, and
                user-friendly products tailored to meet client requirements.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The company's expertise spans across various domains, including
                web and mobile application development, AI-powered solutions,
                UI/UX design, API integration, and data-driven analytics. By
                leveraging cutting-edge frameworks such as Next.js, React, and
                Tailwind CSS, along with advanced AI tools like Google's
                Generative AI via Genkit, Ablore ensures that its solutions are
                not only technically robust but also future-ready.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Training Details
              </h4>
              <div className="space-y-3">
                <div className="flex">
                  <div className="w-40 font-medium text-gray-700">Name:</div>
                  <div className="text-gray-600">Rohini</div>
                </div>
                <div className="flex">
                  <div className="w-40 font-medium text-gray-700">URN:</div>
                  <div className="text-gray-600">2315198</div>
                </div>
                <div className="flex">
                  <div className="w-40 font-medium text-gray-700">
                    Duration:
                  </div>
                  <div className="text-gray-600">1 Months</div>
                </div>
                <div className="flex">
                  <div className="w-40 font-medium text-gray-700">
                    Focus Area:
                  </div>
                  <div className="text-gray-600">Full-Stack Development</div>
                </div>
                <div className="flex">
                  <div className="w-40 font-medium text-gray-700">
                    Technologies:
                  </div>
                  <div className="text-gray-600">
                    React, Next.js, Node.js, AI Integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Learning Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <div className="text-blue-500 text-3xl mb-4">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Frontend Development
              </h3>
              <p className="text-gray-700">
                Gained expertise in React.js, Next.js, and modern UI frameworks
                to create responsive and interactive web applications with
                optimal user experience.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <div className="text-green-500 text-3xl mb-4">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Backend Development
              </h3>
              <p className="text-gray-700">
                Developed server-side applications using Node.js, implemented
                RESTful APIs, and integrated databases for full-stack
                application development.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <div className="text-purple-500 text-3xl mb-4">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
              <p className="text-gray-700">
                Worked with Google's Generative AI via Genkit to implement AI
                features and create intelligent applications with cutting-edge
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 bg-gradient-to-br from-blue-50 to-green-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Featured Project
          </h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A smart farming solution leveraging AI to transform agricultural
            decision-making
          </p>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-green-600 to-blue-700 p-8 text-white flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-3 rounded-xl mr-4">
                      <i className="fas fa-seedling text-2xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold">CropSense AI</h3>
                  </div>
                  <p className="text-white/90">
                    Smart farming assistant that helps farmers make data-driven
                    decisions using AI
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Core Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-check-circle mr-2 text-green-300"></i>
                      AI-powered crop recommendations
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle mr-2 text-green-300"></i>
                      Market price estimation
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle mr-2 text-green-300"></i>
                      Farming community chat
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check-circle mr-2 text-green-300"></i>
                      Weather-integrated planning
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:w-3/5 p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Project Overview
                  </h3>
                  <p className="text-gray-700">
                    CropSense AI is a smart farming assistant built with Next.js
                    and Google's Generative AI. It provides farmers with
                    intelligent tools to make informed decisions, from crop
                    selection to market price estimation, and fosters a
                    community through a built-in chat feature.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center bg-blue-50 px-3 py-2 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-desktop text-blue-600"></i>
                      </div>
                      <span className="text-sm font-medium">
                        Next.js (App Router)
                      </span>
                    </div>
                    <div className="flex items-center bg-green-50 px-3 py-2 rounded-lg">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-robot text-green-600"></i>
                      </div>
                      <span className="text-sm font-medium">
                        Google AI & Genkit
                      </span>
                    </div>
                    <div className="flex items-center bg-purple-50 px-3 py-2 rounded-lg">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-paint-brush text-purple-600"></i>
                      </div>
                      <span className="text-sm font-medium">
                        Tailwind CSS & ShadCN UI
                      </span>
                    </div>
                    <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-lg">
                      <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-database text-yellow-600"></i>
                      </div>
                      <span className="text-sm font-medium">MongoDB</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">
                    Authentication
                  </h4>
                  <div className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <i className="fas fa-lock text-gray-600"></i>
                    </div>
                    <span className="text-sm font-medium">
                      JWT-based session management
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  <button
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    onClick={() =>
                      window.open(
                        "https://github.com/Subodhrana390/cropsense",
                        "_blank"
                      )
                    }
                  >
                    <i className="fab fa-github mr-2"></i> View Code
                  </button>
                  <button
                    className="flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                    onClick={() =>
                      window.open("https://cropsense.vercel.app/", "_blank")
                    }
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-shopping-cart text-blue-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">
                    E-Commerce Platform
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Developed a full-stack e-commerce solution with React
                  frontend, Node.js backend, and MongoDB database. Implemented
                  user authentication, product catalog, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Stripe API
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <i className="fas fa-comments text-purple-600"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-700">
                    AI-Powered Chat Application
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Created a real-time chat application integrated with Google's
                  Generative AI to provide intelligent responses and assistance
                  to users.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Socket.io
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Genkit AI
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* PDF Modal */}
      {openPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">Preview</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✖
              </button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <div className="h-[75vh]">
                  <Viewer
                    fileUrl={openPdf}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker>
            </div>
            <div className="p-4 border-t flex justify-between">
              <span className="text-sm text-gray-600">
                {openPdf.split("/").pop()}
              </span>
              <a
                href={openPdf}
                download
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
