import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio"; // Portfolio component
import BlogSection from "./BlogSection"; // Blog list page
import BlogPostPage from "./BlogPostPage"; // Individual blog post page

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Ensure all paths match the basename */}
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
