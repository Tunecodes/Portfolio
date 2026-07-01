type Project = {
  title: string;
  description: string;
  link: string;
  category: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Meat Inventory",
    description:
      "A meat inventory system that helps you store, organize, and quickly find the meats you need.",
    link: "https://meat-inventory.onrender.com/",
    category: "Web",
    tags: ["JavaScript", "Scss", "EJS", "Bootstrap", "Express", "Postgresql"],
  },
  {
    title: "FF Shop",
    description:
      "Modern e-commerce frontend focused on clean design and user experience.",
    link: "https://ffshop-top.netlify.app/",
    category: "Frontend",
    tags: ["React", "CSS"],
  },
  {
    title: "Pokimemory",
    description: "Pokemon memory card time to test how good your memory is.",
    link: "https://poki-memory.netlify.app/",
    category: "Frontend",
    tags: ["React", "CSS"],
  },
  {
    title: "Resume Builder",
    description: "A react project that help build your resume.",
    link: "https://resume-builderproject00.netlify.app/",
    category: "Game Tools",
    tags: ["React", "CSS"],
  },
];
