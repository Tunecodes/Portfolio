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
    title: "Sequelize Activity Seeder",
    description:
      "Structured database seeding system with nested activities and sub-activities using Sequelize ORM.",
    link: "https://github.com/yourname/sequelize-seeder",
    category: "Backend",
    tags: ["Node.js", "Sequelize", "SQLite"],
  },
  {
    title: "FFXIV Helper Tool",
    description:
      "Utility app to track progression and optimize farming routes in Final Fantasy XIV.",
    link: "https://github.com/yourname/ffxiv-tool",
    category: "Game Tools",
    tags: ["React", "Node.js", "API"],
  },
];
