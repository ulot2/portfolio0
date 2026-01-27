export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  image2: string;
  image3: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  //   {
  //     id: 1,
  //     title: "Portfolio",
  //     description:
  //       "A modern and responsive portfolio website that showcases projects, skills, and contact info. Built with Next.js and styled using CSS.",
  //     image: "/images/portfolio-image.png",
  //     technologies: ["Next.js", "CSS", "Framer Motion"],
  //     liveUrl: "https://tolu-a.vercel.app/",
  //     githubUrl: "https://github.com/ulot2/portfolio-new.git",
  //   },
  {
    id: 1,
    title: "PromptNest",
    description:
      "PromptNest is a community-driven library for discovering, sharing, and organizing high-quality AI prompts.",
    fullDescription:
      "PromptNest was built to solve the frustration of finding reliable AI prompts. Instead of guessing, browse a curated collection of prompts verified by the community. Whether you are debugging code, writing marketing copy, or generating art, PromptNest gives you the tools to share your expertise and learn from others. Sign in to start building your personal library and contribute to the growing knowledge base.",
    image: "/images/promptnest-main.png",
    image2: "/images/promptnest-1.png",
    image3: "/images/promptnest-2.png",
    technologies: ["Next.js", "Prisma", "Tailwind CSS", "motion/react"],
    liveUrl: "https://prompt-nest-eta.vercel.app/",
    githubUrl: "https://github.com/ulot2/portfolio-new.git",
  },
  {
    id: 2,
    title: "BiblioQuest",
    description:
      "A book discovery platform that helps users find books based on their interests and preferences.",
    fullDescription:
      "BiblioQuest is an immersive 'Infinite' Text Adventure platform designed to push the boundaries of procedural storytelling. Built with a focus on narrative depth over traditional combat, the project leverages AI to create a living world where players navigate intricate story arcs and solve logic-based puzzles.\n\nKey features include:\n\nDynamic Narrative Engine: A system that adapts the story in real-time based on player decisions, ensuring no two playthroughs are the same.\n\nInteraction-First Gameplay: Replaces standard combat loops with complex dialogue systems and environmental puzzles.\n\nCustom Quest Architecture: Allows for the integration of tailored quests and specific story modes, providing a structured yet boundless exploration experience.\n\nTech Stack: Developed using Next.js for a seamless UI/UX and integrated with advanced AI models to handle natural language generation and world-building logic.",
    image: "/images/biblio-main.png",
    image2: "/images/biblio-1.png",
    image3: "/images/biblio-2.png",
    technologies: ["Next.js", "Tailwind CSS", "Google Books API", "Groq AI"],
    liveUrl: "https://biblio-quest.vercel.app/",
    githubUrl: "https://github.com/ulot2/biblio-quest.git",
  },
  {
    id: 3,
    title: "Weather app",
    description:
      "A weather application that provides real-time updates and detailed forecasts, helping users stay informed about current conditions with ease.",
    fullDescription: "wow",
    image: "/images/weather.png",
    image2: "/images/weather1.png",
    image3: "/images/weather2.png",
    technologies: ["React", "CSS", "OpenWeather API"],
    liveUrl: "https://weather-app-tolu.vercel.app/",
    githubUrl: "https://github.com/ulot2/weather-app.git",
  },
  {
    id: 4,
    title: "Thrive Forge",
    description:
      "A high-performance landing page for a digital marketing agency, built with Next.js and Framer Motion. It features a conversion-focused layout, sleek scroll animations, and a responsive multi-tier pricing system.",
    fullDescription:
      "Built for a global performance agency, this Next.js project focuses on professional branding and lead generation. It incorporates motion/react for smooth, interactive storytelling and showcases complex service frameworks and client case studies. The site is optimized for speed and clarity, providing a seamless user experience that guides prospects from value proposition to lead capture.",
    image: "/images/thrive-main.png",
    image2: "/images/thrive-1.png",
    image3: "/images/thrive-2.png",
    technologies: ["Next.js", "motion/react", "Tailwind CSS"],
    liveUrl: "https://thrive-forge.vercel.app/",
    githubUrl: "https://github.com/ulot2/Browser-Extensions.git",
  },

  {
    id: 5,
    title: "The B2 Foundation",
    description:
      "A nonprofit website for The B2 Foundation dedicated to reducing litter, promoting recycling, and inspiring community efforts toward a cleaner environment.",
    fullDescription: "wow",
    image: "/images/b2-foundation.png",
    image2: "/images/b2-foundation-1.png",
    image3: "/images/b2-foundation-2.png",
    technologies: ["React", "CSS"],
    liveUrl: "https://the-b2-foundation2.vercel.app/",
    githubUrl: "https://github.com/ulot2/the-b2-foundation.git",
  },
  {
    id: 6,
    title: "Age Calculator",
    description:
      "A simple age calculator application that determines someone's age precisely from their date of birth, offering accuracy, simplicity, and ease.",
    fullDescription:
      "This Age Calculator application provides a precise breakdown of a user's age in years, months, and days. Built with React, it features robust form validation and error handling to ensure accurate date inputs. The project focuses on a clean, minimalist UI and responsive design, providing a smooth and accessible experience across all devices.",
    image: "/images/age-calculator.png",
    image2: "/images/age-calc-1.png",
    image3: "/images/age-calc-2.png",
    technologies: ["React", "CSS"],
    liveUrl: "https://age-calculator-ulot2.vercel.app/",
    githubUrl: "https://github.com/ulot2/age-calculator.git",
  },

  {
    id: 7,
    title: "Product Cart",
    description:
      "An interactive product cart site that lets users browse items, add them to their cart, update quantities, and smoothly proceed to checkout.",
    fullDescription: "wow",
    image: "/images/product-cart.png",
    image2: "/images/product-cart-1.png",
    image3: "/images/product-cart-2.png",
    technologies: ["Vite", "React", "CSS"],
    liveUrl: "https://product-cart-bay.vercel.app/",
    githubUrl: "https://github.com/ulot2/product-cart.git",
  },
];
