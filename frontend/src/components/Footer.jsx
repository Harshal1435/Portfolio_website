import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground mb-4 md:mb-0">&copy; 2023 Harshal Raghatate. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/Harshal1435"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshal-raghatate-1526b61b3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

