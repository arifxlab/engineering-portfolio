import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer
      className="border-t border-zinc-800 py-10"
      role="contentinfo"
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Arif Khan. All rights reserved.
          </p>

          <p className="text-sm text-zinc-600">
            Built with React • TypeScript • Tailwind CSS • Vite
          </p>
        </div>
      </Container>
    </footer>
  );
}
