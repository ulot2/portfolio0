"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import Link from "next/link";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

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
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <section
      className="general-box bg-slate-50/50 dark:bg-slate-900"
      id="contact"
    >
      <div className="general-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2 dark:text-slate-50">
            Get in Touch
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            {
              "I'm always interested in new opportunities and exciting projects. Let's connect and create something amazing together!"
            }
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 justify-between mt-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="w-full md:w-[95%] p-8 backdrop-blur-xl bg-white/80 border border-white/20 shadow-xl rounded-2xl dark:bg-slate-900 dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Send a message
              </h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block font-semibold mb-1 text-slate-700 dark:text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-semibold mb-1 text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-1 text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hi!"
                    className="w-full p-3 border border-gray-300 rounded-lg text-base transition-colors duration-200 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/10 min-h-[120px] resize-none dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:placeholder-slate-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white border-none rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-base font-medium hover:bg-teal-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? (
                    <p>
                      Sending<span className="animate-pulse">...</span>
                    </p>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              {/* Status Messages */}
              {status === "success" && (
                <p className="flex items-center mt-2 text-green-600 font-medium">
                  <IoIosCheckmark className="text-2xl mr-1" />
                  Your message has been sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center mt-2 text-red-600 font-medium">
                  <IoIosClose className="text-2xl mr-1" />
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-[80%]"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-8 mb-4 dark:bg-slate-900/80 dark:border-slate-800 md:p-8">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
                Contact Information
              </h3>
              <div className="flex items-center mb-4 mt-6">
                <div className="mr-4 w-9 h-9 flex justify-center items-center rounded-full bg-teal-50 text-teal-600 text-xl dark:bg-teal-900/30 dark:text-teal-400">
                  <MdOutlineEmail />
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  <p className="font-semibold mb-1">Email</p>
                  <Link
                    href="mailto:tolu.nuell@gmail.com"
                    className="text-teal-600 hover:text-teal-700 border-b border-transparent hover:border-teal-700 transition-all text-sm decoration-0 dark:text-teal-400 dark:hover:text-teal-300 dark:hover:border-teal-300"
                  >
                    {"tolu.nuell@gmail.com"}
                  </Link>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-4 w-9 h-9 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 text-xl dark:bg-blue-900/30 dark:text-blue-400">
                  <LuLinkedin />
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  <p className="font-semibold mb-1">LinkedIn</p>
                  <Link
                    href="https://www.linkedin.com/in/toluwalope-adegoke-b441b9380"
                    className="text-blue-600 hover:text-blue-700 border-b border-transparent hover:border-blue-700 transition-all text-sm decoration-0 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:border-blue-300"
                  >
                    {"linkedin.com/in/toluwlape-adegoke"}
                  </Link>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="mr-4 w-9 h-9 flex justify-center items-center rounded-full bg-gray-100 text-gray-800 text-xl dark:bg-slate-800 dark:text-slate-300">
                  <LuGithub />
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  <p className="font-semibold mb-1">GitHub</p>
                  <Link
                    href="https://github.com/ulot2"
                    className="text-gray-800 hover:text-black border-b border-transparent hover:border-black transition-all text-sm decoration-0 dark:text-slate-300 dark:hover:text-white dark:hover:border-white"
                  >
                    {"github.com/ulot2"}
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-8 backdrop-blur-xl bg-linear-to-r from-teal-50 to-blue-50 border border-white/20 shadow-xl rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl dark:from-slate-800 dark:to-slate-900 dark:border-white/10 dark:text-slate-100">
              <h4 className="text-lg font-semibold text-slate-900 mb-4 dark:text-slate-100">
                Quick Response
              </h4>
              <p className="text-slate-700 mb-4 dark:text-slate-300">
                {
                  "I typically respond to emails within 24 hours. For urgent matters, feel free to reach out on LinkedIn."
                }
              </p>
              <div className="flex gap-4">
                <button
                  className="flex-1 py-2 px-3 border border-teal-300 rounded-lg bg-transparent cursor-pointer flex items-center justify-center gap-2 transition-colors duration-200 text-sm text-teal-700 hover:bg-teal-50 dark:border-teal-700 dark:text-teal-400 dark:hover:bg-teal-900/20"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/toluwalope-adegoke-b441b9380",
                      "_blank",
                    )
                  }
                >
                  <LuLinkedin />
                  LinkedIn
                </button>
                <button
                  className="flex-1 py-2 px-3 border border-gray-300 rounded-lg bg-transparent cursor-pointer flex items-center justify-center gap-2 transition-colors duration-200 text-sm text-slate-700 hover:bg-gray-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  onClick={() =>
                    window.open("https://x.com/Tolu_dev", "_blank")
                  }
                >
                  <FaXTwitter />
                  (formally twitter)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
