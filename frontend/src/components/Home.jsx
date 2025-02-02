import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/harshal_photo.png";
import resumePDF   from "../assets/Hareshal_Raghatate_Resume.pdf"
const Home = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const fullText = "A passionate fresher in Computer Engineering & Web Development";
  const fullName = "Harshal Raghatate";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setName(fullName.slice(0, index));
      index++;
      if (index > fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center min-h-screen"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:w-1/2 mb-8 md:mb-0"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">{name}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">{text}</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Harshal1435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/harshal-raghatate-1526b61b3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <a
          href={resumePDF}
          download="Harshal_Raghatate_Resume.pdf"
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="md:w-1/2"
      >
        <div
          className="bg-cover bg-center rounded-full w-64 h-64 mx-auto shadow-lg z-50"
          style={{ backgroundImage: `url(${profilePic})` }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;