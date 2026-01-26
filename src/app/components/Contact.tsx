"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import Link from "next/link";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (form.current) {
      emailjs
        .sendForm(
          "service_f9ydw08",
          "template_bhf3euk",
          form.current,
          "K5gsQAgTkfK2jkwqH",
        )
        .then(() => {
          setLoading(false);
          setStatus("success");
          if (form.current) {
            form.current.reset();
          }
        })
        .catch(() => {
          setLoading(false);
          setStatus("error");
        });
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/toluwalope-adegoke-b441b9380",
      icon: <LuLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/ulot2",
      icon: <LuGithub />,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/Tolu_dev",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="contact">
      <div className="general-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Typography & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 dark:text-white leading-[1.1]">
                Let's work <br />
                <span className="text-teal-600 dark:text-teal-400">
                  together.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
                I'm currently available for freelance projects and open to
                full-time opportunities.
              </p>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 dark:text-slate-500">
                  Contact
                </h3>
                <a
                  href="mailto:tolu.nuell@gmail.com"
                  className="text-2xl md:text-3xl font-medium text-slate-900 hover:text-teal-600 transition-colors dark:text-white dark:hover:text-teal-400 inline-flex items-center gap-2 group"
                >
                  tolu.nuell@gmail.com
                  <FiArrowUpRight className="text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 dark:text-slate-500">
                  Socials
                </h3>
                <div className="flex gap-6">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-teal-600 transition-colors text-2xl dark:text-slate-400 dark:hover:text-teal-400"
                      title={link.name}
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Minimalist Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="space-y-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-slate-300 py-4 text-lg text-slate-900 focus:border-slate-900 outline-none transition-colors peer dark:border-slate-700 dark:text-white dark:focus:border-white placeholder-transparent"
                    placeholder="Name"
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedInput === "name" ||
                      (form.current?.name as any)?.value
                        ? "-top-3 text-xs text-teal-600 dark:text-teal-400"
                        : "top-4 text-lg text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-slate-300 py-4 text-lg text-slate-900 focus:border-slate-900 outline-none transition-colors peer dark:border-slate-700 dark:text-white dark:focus:border-white placeholder-transparent"
                    placeholder="Email"
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedInput === "email" ||
                      (form.current?.email as any)?.value
                        ? "-top-3 text-xs text-teal-600 dark:text-teal-400"
                        : "top-4 text-lg text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-slate-300 py-4 text-lg text-slate-900 focus:border-slate-900 outline-none transition-colors resize-none peer dark:border-slate-700 dark:text-white dark:focus:border-white placeholder-transparent"
                    placeholder="Message"
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                      focusedInput === "message" ||
                      (form.current?.message as any)?.value
                        ? "-top-3 text-xs text-teal-600 dark:text-teal-400"
                        : "top-4 text-lg text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    Your Message
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white text-lg font-medium rounded-full overflow-hidden transition-all hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                    {loading ? "Sending Message..." : "Send Message"}
                  </span>
                  {!loading && (
                    <FiSend className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </button>
              </div>

              {/* Status Messages */}
              <div className="min-h-[2rem]">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 mt-2"
                  >
                    <IoIosCheckmark className="text-xl" />
                    <span className="text-sm font-medium">
                      Message sent! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 mt-2"
                  >
                    <IoIosClose className="text-xl" />
                    <span className="text-sm font-medium">
                      Something went wrong. Please try again.
                    </span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
