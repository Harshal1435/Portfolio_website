import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaJava, FaGitAlt } from "react-icons/fa"
import { SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiMysql } from "react-icons/si"

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "C/C++", icon: SiCplusplus, color: "text-blue-600" },
      { name: "Core Java", icon: FaJava, color: "text-red-500" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-red-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { name: "React.js", icon: FaReact, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-500" },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    ],
  },
  {
    category: "Tools and Technologies",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-red-500" },
      { name: "GitHub", icon: FaGitAlt, color: "text-gray-700" },
      { name: "VS Code", icon: FaDatabase, color: "text-blue-500" },
    ],
  },
]

const SkillItem = ({ skill, skillIndex }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100, delay: skillIndex * 0.1 }}
      className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center border border-border"
    >
      <skill.icon className={`text-5xl ${skill.color} mb-4 mx-auto`} />
      <h4 className="text-lg font-medium text-card-foreground">{skill.name}</h4>
    </motion.div>
  )
}

const SkillCategory = ({ category, categoryIndex }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: categoryIndex * 0.2 }}
      className="mb-16"
    >
      <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillItem key={skillIndex} skill={skill} skillIndex={skillIndex} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-primary">Technical Skills</h2>
      {skillsData.map((category, categoryIndex) => (
        <SkillCategory key={categoryIndex} category={category} categoryIndex={categoryIndex} />
      ))}
    </motion.div>
  )
}

export default Skills

