import { Container } from "../ui/Container";
import { stats } from "../../data/site";

export function StatsBar() {
  return (
    <section className="bg-ink-50 pb-16 pt-4 sm:pb-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-ink-100 bg-white p-8 shadow-sm sm:grid-cols-4 sm:p-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-ink-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
