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
    title: "Product Cart",
    description:
      "An interactive product cart site that lets users browse items, add them to their cart, update quantities, and smoothly proceed to checkout.",
    fullDescription: "wow",
    image: "/images/product-cart.png",
    image2: "/images/promptnest-2.png",
    image3: "/images/promptnest-3.png",
    technologies: ["Vite", "React", "CSS"],
    liveUrl: "https://product-cart-bay.vercel.app/",
    githubUrl: "https://github.com/ulot2/product-cart.git",
  },
  {
    id: 3,
    title: "Age Calculator",
    description:
      "A simple age calculator application that determines someone’s age precisely from their date of birth, offering accuracy, simplicity, and ease.",
    fullDescription: "wow",
    image: "/images/age-calculator.png",
    image2: "/images/promptnest-1.png",
    image3: "/images/promptnest-3.png",
    technologies: ["React", "CSS"],
    liveUrl: "https://age-calculator-ulot2.vercel.app/",
    githubUrl: "https://github.com/ulot2/age-calculator.git",
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
    image2: "/images/promptnest-2.png",
    image3: "/images/promptnest-3.png",
    technologies: ["React", "CSS"],
    liveUrl: "https://the-b2-foundation2.vercel.app/",
    githubUrl: "https://github.com/ulot2/the-b2-foundation.git",
  },
  {
    id: 6,
    title: "Weather app",
    description:
      "A weather application that provides real-time updates and detailed forecasts, helping users stay informed about current conditions with ease.",
    fullDescription: "wow",
    image: "/images/weather.png",
    image2: "/images/promptnest-2.png",
    image3: "/images/promptnest-3.png",
    technologies: ["React", "CSS", "OpenWeather API"],
    liveUrl: "https://weather-app-tolu.vercel.app/",
    githubUrl: "https://github.com/ulot2/weather-app.git",
  },
];
