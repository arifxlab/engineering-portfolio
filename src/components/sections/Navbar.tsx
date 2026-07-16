import { FaGithub, FaLinkedin } from "react-icons/fa";

import { navigation } from "../../constants/navigation";
import { social } from "../../data/social";
import { Container } from "../ui/Container";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-cyan-400"
        >
          AK
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-cyan-400"
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
            className="text-zinc-400 transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-cyan-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
