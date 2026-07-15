import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Container } from "./components/ui/Container";

function App() {
  return (
    <Container className="py-20 space-y-8">
      <h1 className="text-5xl font-bold text-white">
        Project Hokage 🚀
      </h1>

      <Card>
        <h2 className="text-2xl font-semibold text-white">
          RAGForge
        </h2>

        <p className="mt-3 text-zinc-400">
          Enterprise AI Knowledge Engine built with
          FastAPI, PostgreSQL, Redis and Qdrant.
        </p>

        <div className="mt-6 flex gap-3">
          <Button>Live Demo</Button>

          <Button variant="outline">
            GitHub
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default App;
