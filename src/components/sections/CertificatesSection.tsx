import { Container } from "../ui/Container";
import { Card } from "../ui/Card";
import { certificates } from "../../data/certificates";

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-24">
      <Container>
        <h2 className="text-4xl font-bold text-white">Certificates</h2>

        <div className="mt-10 grid gap-4">
          {certificates.map((certificate) => (
            <Card key={certificate}>
              <p className="text-white">{certificate}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
