import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";

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
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-800">Uditi Sharma</div>
        <div className="flex space-x-6">
          {[
            { name: "home", path: "home" },
            { name: "projects", path: "projects" },
            { name: "skills", path: "skills" },
            { name: "resume", path: "resume" },
            { name: "blog", path: "/blog" },
          ].map((item) =>
            item.path.startsWith("/") ? (
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
            ) : (
              <ScrollLink
                to={item.path}
                smooth={true}
                duration={500}
                offset={-80} // Adjust offset for navigation bar height
                spy={true} // Automatically detects the active section
                key={item.name}
                onSetActive={(section) => setActiveSection(section)}
              >
                <motion.button
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                    activeSection === item.name
                      ? "bg-blue-100 text-blue-800"
                      : "hover:bg-blue-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="capitalize">{item.name}</span>
                </motion.button>
              </ScrollLink>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

// Home Section
const HomeSection = () => {
  return (
    <Element name="home">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center text-center"
      >
        <div>
          <motion.img
            src="uditi.jpg"
            alt="Profile"
            className="mx-auto rounded-full w-64 h-64 object-cover mb-8 shadow-xl"
            whileHover={{ scale: 1.1 }}
          />
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Uditi Sharma</h1>
          <p className="text-xl text-blue-700 mb-8">
            Computer Science Student | Creative Developer
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/uditisharmaaa"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sharmauditi/"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:us2133@nyu.edu"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Email
            </motion.a>
          </div>
        </div>
      </motion.div>
    </Element>
  );
};

// Projects Section
const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "NYUAD Food Tour",
      description:
        "Web app made for Communications Lab website that gives a video guided tour of the various locations to get food in NYUAD campus. Includes an interactive guide of the campus along with personal favorite food items.",
      technologies: ["HTML/CSS/JS", "Figma", "iMovie", "Prototyping"],
      category: "Technical",
      image: "/foodtour.png", 
    },
    {
      title: "Interactive Comic",
      description:
        "Interactive murder mystery comic made using Adobe Photoshop. Users get to find hidden clues in the comic and change decide the ending based on outcomes.",
      technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
      category: "Creative",
      image: "/comic.png", 
    },
    {
      title: "Interactive Sound Project",
      description:
        "Produced and edited a soundscape showing the various stages of grief along with an interactive website for complete immersive experience.",
      technologies: ["Premiere Pro", "Audacity"],
      category: "Creative",
      image: "/stages.png", 
    },
    {
      title: "Interactive Short Film",
      description:
        "Produced and edited a choose your own adventure style short film highlighting healthy living habits for college students.",
      technologies: ["Premiere Pro", "Figma", "Tailwind CSS", "React"],
      category: "Film",
      image: "/film.png",
    },
  ];

  const categories = ["all", "Creative", "Film", "Technical"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Element name="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-white transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600"
                  : "bg-blue-300 hover:bg-blue-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-xl object-cover h-70 w-full mb-4"
              />
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                {project.title}
              </h3>
              {/* Project Description */}
              <p className="text-blue-700 mb-4">{project.description}</p>
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Element>
  );
};


// Skills Section
const SkillsSection = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 80 },
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Swift", level: 70 },
    { name: "React", level: 88 },
    { name: "Figma", level: 75 },
  ];

  return (
    <Element name="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {skill.name}
              </h3>
              <div className="bg-blue-100 h-4 rounded-full overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-4"
                  style={{ width: `${skill.level}%` }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                ></motion.div>
              </div>
              <p className="text-blue-700 text-right mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

// Resume Section
const ResumeSection = () => {
  const experiences = [
    {
      title: "Global Career Peer",
      company: "NYUAD Career Center",
      date: "Fall 2024",
      description:
        "Worked as a student assistant at NYUAD Career Development Center.",
      achievements: [
        "Improved user engagement metrics by 25%",
        "Collaborated with cross-functional design teams",
        "Developed responsive design solutions",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "E-Brain Lab NYUAD",
      date: "Spring 2023 - Present",
      description:
        "Supported web development projects and created interactive web applications.",
      achievements: [
        "Developed multiple responsive web applications",
        "Mentored junior students in web development techniques",
        "Implemented modern JavaScript frameworks",
      ],
    },
    {
      title: "Digital Marketing Intern",
      company: "Local Startup Accelerator",
      date: "Fall 2021",
      description:
        "Managed social media campaigns, created content strategies, and analyzed digital marketing performance metrics.",
      achievements: [
        "Increased social media engagement by 40%",
        "Developed comprehensive marketing reports",
        "Created compelling visual content",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      date: "2020 - 2022",
      description:
        "Worked with small businesses to build responsive websites and optimize performance.",
      achievements: [
        "Built 10+ websites for small businesses",
        "Reduced page load times by 30%",
        "Enhanced SEO rankings for client websites",
      ],
    },
  ];

  return (
    <Element name="resume">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Resume
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-300 to-blue-500 h-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } relative`}
            >
              {/* Circle on Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="bg-gradient-to-br from-blue-400 to-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0px 0px 10px 5px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Description Card */}
              <motion.div
                className={`w-[calc(50%-2rem)] p-6 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                  {exp.title}
                </h3>
                <p className="text-blue-700 font-medium mb-2">
                  {exp.company} | {exp.date}
                </p>
                <p className="text-blue-600 mb-4">{exp.description}</p>
                <ul className="list-disc ml-5 space-y-1">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="text-blue-700">
                      {ach}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

// Main Portfolio Component
const Portfolio = () => {
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

  return (
    <div className="min-h-screen relative">
      <GradientBackground mousePosition={mousePosition} />
      <Navigation />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection /> 
      <ResumeSection />
    </div>
  );
};

export default Portfolio;
