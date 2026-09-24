import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { TikTokIcon } from "../ui/SocialIcons";
import { business } from "../../data/site";

const videos = [
  "7206811120298904837",
  "7686561093702946070",
  "7627977483467410710",
];

export function TikTokShowcase() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-10">
        <a
          href={business.social.tiktok}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5"
        >
          <TikTokIcon className="h-5 w-5 text-ink-900" />
          <span className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Δείτε μας στο TikTok
          </span>
          <ArrowUpRight className="h-5 w-5 text-ink-400 transition group-hover:text-brand-600" />
        </a>

        <div className="grid w-full gap-6 sm:grid-cols-3">
          {videos.map((id) => (
            <blockquote
              key={id}
              className="tiktok-embed mx-auto w-full"
              cite={`https://www.tiktok.com/@pure_clean_skg/video/${id}`}
              data-video-id={id}
              style={{ maxWidth: "100%", minWidth: 0 }}
            >
              <section>
                <a
                  href={`https://www.tiktok.com/@pure_clean_skg/video/${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @pure_clean_skg
                </a>
              </section>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
