import { motion } from "framer-motion"
import profilePic from "../assets/harshal_photo.png"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <div
            className="bg-cover bg-center rounded-full w-64 h-64 mx-auto shadow-lg z-50"
            style={{
              backgroundImage: `url(${profilePic})`,
            }}
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:w-1/2"
        >
          <p className="mb-4 text-muted-foreground">
            I'm a motivated Computer Engineering student with a strong foundation in web development and a passion for
            creating user-friendly, responsive websites. Currently pursuing my B.Tech in Computer Engineering (RTMNU),
            I'm in my 8th semester and eager to apply my skills in a professional setting.
          </p>
          <p className="mb-4 text-muted-foreground">
            As a fresher, I'm excited about the opportunity to contribute to innovative web solutions and continue
            learning in a dynamic work environment. My educational journey has equipped me with problem-solving
            abilities and a keen interest in staying up-to-date with the latest web technologies.
          </p>
          <p className="text-muted-foreground">
            I'm currently gaining practical experience through internships and personal projects, which are helping me
            enhance my skills in various web development technologies.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About

