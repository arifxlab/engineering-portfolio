import { FaGithub, FaLinkedin } from "react-icons/fa";

import { navigation } from "../../constants/navigation";
import { social } from "../../data/social";
import { Container } from "../ui/Container";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-cyan-400 transition hover:text-cyan-300"
          aria-label="Go to Hero section"
        >
          AK
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-zinc-400 transition-colors duration-200 hover:text-cyan-400"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
