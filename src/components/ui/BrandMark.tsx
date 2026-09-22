import { business } from "../../data/site";

export function BrandMark({
  textClassName = "text-ink-900",
  size = "md",
}: {
  textClassName?: string;
  size?: "sm" | "md";
}) {
  const badge = size === "sm" ? "h-9 w-9 p-1.5" : "h-11 w-11 p-2";
  const text = size === "sm" ? "text-lg" : "text-xl";

  return (
    <span className="flex items-center gap-2.5">
      <span className={`flex shrink-0 items-center justify-center rounded-xl bg-white shadow-md shadow-ink-950/10 ring-1 ring-ink-950/5 ${badge}`}>
        <img
          src="/brand/pureclean-icon.png"
          alt=""
          className="h-full w-full object-contain"
        />
      </span>
      <span className={`font-display font-bold tracking-tight ${text} ${textClassName}`}>
        {business.name}
      </span>
    </span>
  );
}
