"use client";

import { useState, useMemo } from "react";
import { PROJECTS } from "../lib/projects-data"; // Adjust path to your projects data file
import { Navbar } from "../components/navbar";

export default function ProjectsPage() {
  // 1. Keep track of the currently selected category ("All" by default)
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // 2. Extract unique categories from your data file dynamically
  const categories = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS.map((p) => p.category || "Other")));
    return ["All", ...unique]; // Add an "All" option at the beginning
  }, []);

  // 3. Filter the projects list based on the active category tab
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => (p.category || "Other") === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black text-black dark:text-zinc-50 transition-colors duration-200">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex flex-col w-full max-w-4xl py-10 px-4 md:px-16 bg-white dark:bg-black gap-8">
        
        {/* Page Header */}
        <section className="flex flex-col items-start gap-3">
          <h1 className="text-4xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A structured showcase of things I've designed and engineered, filtered by domain.
          </p>
        </section>

        {/* Category Filter Pills Menu */}
        <div className="flex flex-wrap gap-2 py-2 border-b border-zinc-100 dark:border-zinc-900 w-full">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all capitalize cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-black dark:border-zinc-100 shadow-sm"
                    : "bg-transparent text-zinc-600 border-zinc-200 hover:border-zinc-400 dark:text-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Active Project Grid Section */}
        <section className="flex flex-col gap-6 min-h-[300px]">
          {filteredProjects.length === 0 ? (
            <div className="text-sm text-zinc-500 py-12 text-center">
              No projects found in this category.
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between p-5 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 transition-all hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <div className="flex flex-col gap-2">
                    {/* Title and Arrow */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-base leading-snug group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-zinc-500 group-hover:translate-x-0.5 transition-transform text-lg shrink-0 line-none">
                        →
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded bg-zinc-100 dark:bg-zinc-950 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-zinc-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        <hr className="border-zinc-100 dark:border-zinc-900" />

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500 pb-12">
          <p>© {new Date().getFullYear()} Tun Lin. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-800 dark:hover:text-zinc-200"
            >
              Twitter
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
