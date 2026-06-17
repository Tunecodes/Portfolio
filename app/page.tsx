import Image from "next/image";
import { PROJECTS } from "./lib/projects-data";
import { Navbar } from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-black text-black dark:text-zinc-50 transition-colors duration-200">
      {/*Reuseable Navbar*/}
      <Navbar />
      {/* Main Container */}
      <main className="flex flex-col w-full max-w-4xl py-10 px-4 md:px-16 bg-white dark:bg-black gap-12">
        {/* Profile / Hero Section */}
        <section className="flex flex-col items-start gap-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/api/placeholder/80/80"
              alt="Your Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="text-zinc-600 dark:text-zinc-400">Tun Lin</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
              Developer
            </p>
          </div>

          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            I build accessible, robust web applications using the modern
            JavaScript ecosystem. Currently focusing on crafting clean user
            experiences with Next.js and Tailwind CSS.
          </p>

          <div className="flex gap-4 text-sm font-medium pt-2">
            <a
              className="flex h-10 items-center justify-center rounded-lg bg-zinc-900 px-4 text-zinc-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              href="mailto:lintun2003@gmail.com"
            >
              Contact Me
            </a>
            <Link
              className="flex h-10 items-center justify-center rounded-lg border border-zinc-200 px-4 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
              href="https://github.com/Tunecodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </section>

        <hr className="border-zinc-300 dark:border-zinc-900" />

        {/* Projects Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Selected Work
          </h2>

          <div className="grid gap-6 sm:grid-cols-1">
            {PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="group block p-5 rounded-xl border border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 transition-all hover:border-zinc-200 dark:hover:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-lg group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-zinc-500 group-hover:translate-x-0.5 transition-transform text-xl">
                      →
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded bg-zinc-100 dark:bg-zinc-950 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200/40 dark:border-zinc-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <hr className="border-zinc-100 dark:border-zinc-900" />

        {/* Footer / Connect Section */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500 pb-12">
          <p>
            © {new Date().getFullYear()} Tun Lin Naine. All rights reserved.
          </p>
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
