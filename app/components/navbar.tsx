import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full max-w-4xl border-b border-zinc-300 bg-white/70 backdrop-blur-md dark:border-zinc-900 dark:bg-black/70 px-6 md:px-16">
      <div className="flex h-16 items-center justify-between">
        {/* Left: Logo / Branding */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          <div className="relative w-7.5 h-7.5 overflow-hidden rounded-full dark:bg-zinc-100">
            <Image
              src="/2090.jpg"
              alt="Profile"
              fill
              sizes="22px"
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href="/"
            className="hover:text-black dark:hover:text-zinc-50 transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-black dark:hover:text-zinc-50 transition-colors"
          >
            Projects
          </Link>
          <a
            href="mailto:lintun2003@gmail.com"
            className="hover:text-black dark:hover:text-zinc-50 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right: Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
