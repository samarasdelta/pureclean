import pureCleanLogo from "../../assets/brand/pureclean-logo.png";

export function BrandMark({ size = "md" }: { size?: "sm" | "md" }) {
  const height = size === "sm" ? "h-10" : "h-12";

  return <img src={pureCleanLogo} alt="PureClean" className={`w-auto object-contain ${height}`} />;
}
