import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-black focus:outline-none"
      >
        Skip to content
      </a>

      <main id="hero">
        <HomePage />
      </main>
    </>
  );
}
