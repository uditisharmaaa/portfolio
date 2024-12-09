import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio"; // Portfolio component
import BlogSection from "./BlogSection"; // Blog list page
import BlogPostPage from "./BlogPostPage"; // Individual blog post page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blog" element={<BlogSection />} />
      <Route path="/blog/:id" element={<BlogPostPage />} />
    </Routes>
  );
};

export default App;
