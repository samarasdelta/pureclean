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

// TikTok's embed script replaces the blockquote with its own fixed-size
// iframe (ignoring our width styles), so shrink it visually with a scale
// transform instead, reserving the already-scaled footprint in the layout.
const NATIVE_WIDTH = 325;
const NATIVE_HEIGHT = 780;
const SCALE = 0.65;

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

        <div className="flex w-full flex-wrap justify-center gap-6">
          {videos.map((id) => (
            <div
              key={id}
              className="overflow-hidden rounded-2xl"
              style={{ width: NATIVE_WIDTH * SCALE, height: NATIVE_HEIGHT * SCALE }}
            >
              <div style={{ width: NATIVE_WIDTH, transform: `scale(${SCALE})`, transformOrigin: "top left" }}>
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@pure_clean_skg/video/${id}`}
                  data-video-id={id}
                  style={{ maxWidth: `${NATIVE_WIDTH}px`, minWidth: `${NATIVE_WIDTH}px` }}
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
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
