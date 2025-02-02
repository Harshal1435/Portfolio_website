import { motion } from "framer-motion"
import { useState } from "react"

const useImageLoader = (src) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleLoad = () => setLoaded(true)
  const handleError = () => setError(true)

  return { loaded, error, handleLoad, handleError }
}

const projectsData = [
  {
    title: "Face Lock Website",
    description: "A website created with a 4-member team to replace password authentication with face lock.",
    image: "/placeholder.svg",
  },
  {
    title: "Weather Website",
    description: "A website that provides weather information for different countries.",
    image: "../assets/wether_app.png",
  },
  {
    title: "E-commerce Website",
    description: "An e-commerce website created using HTML, CSS, and JavaScript.",
    image: "../assets/E-commerse.png",
  },
  {
    title: "Filter Project",
    description: "A website that filters given products and displays search results.",
    image: "/placeholder.svg",
  },
  {
    title: "Resort Website",
    description: "A basic frontend website showcasing React.js functionality.",
    image: "/placeholder.svg",
  },
]

const ProjectCard = ({ project, index }) => {
  const { loaded, error, handleLoad, handleError } = useImageLoader(project.image)

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <motion.div
        className="w-full h-48 bg-muted relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
      >
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: loaded ? "block" : "none" }}
        />
        {error && (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            Image not available
          </div>
        )}
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects

