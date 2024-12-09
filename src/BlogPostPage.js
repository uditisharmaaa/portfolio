import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: "nyu-experience",
    title: "My Journey at NYU: Navigating Interactive Media",
    date: "November 15, 2023",
    shortDescription:
      "Reflections on my transformative experience as an Interactive Media student at New York University.",
    content: `
      <h2 class="text-3xl font-bold mb-4">My Journey at NYU: Navigating Interactive Media</h2>
      <p>
        Stepping into the Interactive Media program at NYU was a turning point in my academic and creative journey. The program offered a unique blend of interdisciplinary learning and exposure to cutting-edge industry practices, shaping not just technical skills but also a creative mindset. 
      </p>
      <p>
        From collaborating on innovative projects to connecting with professionals in the field, the experience was both challenging and rewarding. Each step, from brainstorming ideas to bringing them to life, was a transformative process that deepened my understanding of interactive media's potential to inspire and engage.
      </p>
    `,
  },
  {
    id: "saadiyat-food",
    title: "Culinary Gems of Saadiyat Island",
    date: "December 1, 2023",
    shortDescription:
      "A foodie's guide to the most delectable dining experiences on Saadiyat Island.",
    content: `
      <h2 class="text-3xl font-bold mb-4">Culinary Gems of Saadiyat Island</h2>
      <p>
        Saadiyat Island is a treasure trove for food enthusiasts, offering a diverse range of culinary delights that cater to every palate. Whether you are a seafood lover, a fan of traditional Emirati cuisine, or someone seeking Instagram-worthy cafés, the island has something special for you.
      </p>
      <p>
        Highlights include the coastal charm of seafood restaurants that serve fresh catches of the day, cozy cafés with artisanal coffee and decadent desserts, and fine dining establishments that fuse global flavors with local ingredients. Each spot provides a unique dining experience, making Saadiyat Island a must-visit for food lovers.
      </p>
    `,
  },
  {
    id: "course-recommendations",
    title: "Course Recommendations: Core and Colloquium",
    date: "December 5, 2023",
    shortDescription:
      "Discover recommended courses at NYU Abu Dhabi based on student experiences across various disciplines.",
    content: `
      <h2 class="text-3xl font-bold mb-4">Course Recommendations: Core and Colloquium</h2>
      <p>
        Choosing the right courses at NYU Abu Dhabi can significantly enhance the academic experience. Based on insights from students, here are some standout Core and Colloquium courses:
      </p>
      <p>
        <strong>Creative Expressions in Visual Arts</strong>: Maya Patel ('25) describes this as "a perfect blend of creativity and critical thinking, inspiring artistic exploration." The course encourages students to express their ideas through various visual mediums.
      </p>
      <p>
        <strong>The Social History of Cities</strong>: Jamal Khan ('26) shared, "This course reshaped my perspective on urban spaces and their evolution over time." It offers a deep dive into the cultural and societal aspects of cities across history.
      </p>
      <p>
        <strong>Data Visualization for Beginners</strong>: Anna Smith ('24) found this course to be "a practical and hands-on introduction to making complex data understandable through visuals." It’s perfect for those looking to enhance their analytical and design skills.
      </p>
      <p>
        These courses combine engaging content with dedicated professors, providing a well-rounded and enriching learning experience.
      </p>
    `,
  },
  {
    id: "succeeding-at-nyuad",
    title: "Succeeding as a First-Year at NYUAD",
    date: "December 8, 2023",
    shortDescription:
      "Tips to thrive in your first year at NYU Abu Dhabi, from making friends to acing academics.",
    content: `
      <h2 class="text-3xl font-bold mb-4">Succeeding as a First-Year at NYUAD</h2>
      <p>
        Starting your journey at NYU Abu Dhabi can be exciting yet overwhelming. To ensure a smooth transition and a successful first year, here are some essential tips:
      </p>
      <p>
        <strong>Attend Classes Consistently</strong>: Building a strong foundation begins with showing up. Regular attendance helps in staying engaged and fostering good relationships with professors and peers.
      </p>
      <p>
        <strong>Make the Most of Marhaba Week</strong>: Orientation activities during Marhaba Week are a fantastic way to meet new people, learn about campus resources, and immerse yourself in the vibrant NYUAD community.
      </p>
      <p>
        <strong>Get Involved</strong>: Participating in clubs and events is not only a great way to explore interests but also an opportunity to connect with like-minded individuals. The more you engage, the more you will feel a sense of belonging.
      </p>
      <p>
        Following these tips can help first-year students navigate the academic and social aspects of university life, making their time at NYUAD both enjoyable and rewarding.
      </p>
    `,
  },
];


// Gradient Background Component
const GradientBackground = ({ mousePosition }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[-1]"
      animate={{
        background: `
          radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59, 130, 246, 0.3), 
            rgba(59, 130, 246, 0.15),
            transparent
          ),
          linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(255, 255, 255, 0.02))
        `,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      style={{
        filter: "blur(60px)",
        height: "100%",
        width: "100%",
      }}
    />
  );
};

// Navigation Component
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("blog");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-800">Uditi Sharma</div>
        <div className="flex space-x-6">
          {[
            { name: "home", path: "/" },
            { name: "projects", path: "/" },
            { name: "resume", path: "/" },
            { name: "blog", path: "/blog" },
          ].map((item) => (
            <Link to={item.path} key={item.name}>
              <motion.button
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  activeSection === item.name
                    ? "bg-blue-100 text-blue-800"
                    : "hover:bg-blue-50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.name)}
              >
                <span className="capitalize">{item.name}</span>
              </motion.button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const BlogPostPage = () => {
  const { id } = useParams();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-blue-800 text-lg font-bold">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <GradientBackground mousePosition={mousePosition} />
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{post.title}</h1>
          <p className="text-blue-600 text-sm mb-8">{post.date}</p>
          <div
            className="prose text-blue-700 prose-headings:text-blue-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg transition-colors hover:bg-blue-200"
            >
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
export default BlogPostPage;
