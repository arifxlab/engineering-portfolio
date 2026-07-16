interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({
                                 title,
                                 subtitle,
                               }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
