import pureCleanLogo from "../../assets/brand/pureclean-logo.png";

export function BrandMark({ size = "md" }: { size?: "sm" | "md" }) {
  const height = size === "sm" ? "h-10" : "h-12";

  return (
    <span className={`inline-flex items-center rounded-xl bg-white px-2 py-1.5 shadow-md shadow-ink-950/10 ring-1 ring-ink-950/5 ${height}`}>
      <img src={pureCleanLogo} alt="PureClean" className="h-full w-auto object-contain" />
    </span>
  );
}
