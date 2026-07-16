import type { ReactNode } from "react";

import { Container } from "./Container";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({
                          id,
                          title,
                          subtitle,
                          children,
                        }: SectionProps) {
  return (
    <section
      id={id}
      className="py-28 scroll-mt-24"
    >
      <Container>
        {(title || subtitle) && (
          <div className="mb-14">
            {title && (
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
