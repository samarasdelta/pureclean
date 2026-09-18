type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            light ? "bg-white/10 text-brand-200" : "bg-brand-50 text-brand-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-balance text-lg leading-relaxed ${light ? "text-ink-100/80" : "text-ink-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
