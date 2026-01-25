"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "@/styles/Hero.css";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <div className="hero-container">
        {/* Left Side: Text Content */}
        <motion.div
          className="hero-content-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-badge"
          >
            Available for hire
          </motion.div>

          <h1 className="hero-title">
            Building digital <br />
            <span>experiences</span> that matter.
          </h1>

          <p className="hero-description">
            I'm Toluwalope Adegoke, a frontend developer specializing in
            building exceptional digital experiences. Currently focused on
            creating accessible, human-centered products.
          </p>

          <div className="hero-actions">
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-primary"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right Side: Visual/Image */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glass-card">
            <div className="hero-image-wrapper">
              <Image
                src="/images/port-img.jpg"
                alt="Toluwalope Adegoke"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};
