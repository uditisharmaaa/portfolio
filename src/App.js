import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio"; // Portfolio component
import BlogSection from "./BlogSection"; // Blog list page
import BlogPostPage from "./BlogPostPage"; // Individual blog post page

const App = () => {
  return (
    <Router basename="/portfolio"> {/* Add the basename for GitHub Pages */}
      <Routes>
        {/* Ensure all paths match the basename */}
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </Router>
  );
};

export default App;