import React from "react";
import { useInView } from "../hooks/useInView.js";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaBlog, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact-section animate-fade-in-up ${
        isVisible ? "is-visible" : ""
      } bg-black text-red-500 py-16`}
    >
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-600"> Get in Touch</h2>
        <p className="text-lg mb-8 opacity-80 text-gray-300">
          Open to opportunities, collabs, or just a friendly hello — reach out and let’s build something epic together
        </p>

        {/* Futuristic Email Button */}
        <div className="mb-10">
          <a
            href="mailto:ginojames957@gmail.com?subject=Hello Gino&body=Write your message here..."
            className="inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold rounded-xl
                       border border-red-600 text-red-500 shadow-lg 
                       hover:bg-red-600 hover:text-black hover:scale-105 hover:shadow-2xl 
                       transition-all duration-300"
          >
            <FaEnvelope className="text-2xl" />
            Send me an Email
          </a>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-red-500">Connect with me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/gino-james"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-500
                         hover:bg-red-600 hover:text-black hover:scale-110 hover:shadow-lg 
                         transition-all duration-300"
            >
              <FaGithub className="text-2xl" /> GitHub
            </a>
            <a
              href="https://x.com/Gino_Jame_s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-500
                         hover:bg-red-600 hover:text-black hover:scale-110 hover:shadow-lg 
                         transition-all duration-300"
            >
              <FaTwitter className="text-2xl" /> Twitter
            </a>
            <a
              href="https://www.instagram.com/gino.james.562/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-500
                         hover:bg-red-600 hover:text-black hover:scale-110 hover:shadow-lg 
                         transition-all duration-300"
            >
              <FaInstagram className="text-2xl" /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/gino-james-010931255/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-500
                         hover:bg-red-600 hover:text-black hover:scale-110 hover:shadow-lg 
                         transition-all duration-300"
            >
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>
            <a
              href="https://codecrafterco.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-600 text-red-500
                         hover:bg-red-600 hover:text-black hover:scale-110 hover:shadow-lg 
                         transition-all duration-300"
            >
              <FaBlog className="text-2xl" /> Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
