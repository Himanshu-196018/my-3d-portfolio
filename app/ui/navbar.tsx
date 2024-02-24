"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
        href="/"
      >
        <p className="blue-gradient_text">HK</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/about"
          className={clsx("text-black", {
            "text-blue-500": pathname === "/about",
          })}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={clsx("text-black", {
            "text-blue-500": pathname === "/projects",
          })}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
