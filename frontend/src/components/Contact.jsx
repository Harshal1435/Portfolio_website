import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post("http://localhost:5000/send", formData); // Update the URL if hosted
      setStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send your message. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-primary mr-2" />
              <p className="text-muted-foreground">raghatateharshal4@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-primary mr-2" />
              <p className="text-muted-foreground">+918975461685</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <p className="text-muted-foreground">Budhwari peth umred, Nagpur</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-card p-6 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-input-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-input-foreground"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-input text-input-foreground"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition duration-300"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-sm text-muted-foreground">{status}</p>}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
