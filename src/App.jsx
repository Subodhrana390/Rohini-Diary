import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DiaryBlog from "./pages/Blog";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 font-sans">
        {/* Navigation */}
        <Header />
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<DiaryBlog />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
