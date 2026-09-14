import Image from "next/image";
import Link from "next/link";
import { Pinstripe } from "@/components/Pinstripe";
import { insights } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Perspectives from Aadya Ventures Limited on Dubai as an investment hub, multi-sector allocation, and how we evaluate opportunities.",
  path: "/insights",
  image: "/images/insight-dubai.png",
});

export default function InsightsPage() {
  return (
    <>
      <Pinstripe className="bg-navy-900">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 lg:px-14 lg:pt-40">
          <p className="text-[12px] tracking-[0.18em] text-white/40">
            INSIGHTS
          </p>
          <h1 className="mt-5 max-w-3xl text-[clamp(2rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.04em]">
            Notes from the investment office.
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/55">
            How we read Dubai, our sectors, and the files that cross the desk.
          </p>
        </div>
      </Pinstripe>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-3">
            {insights.map((insight) => (
              <article key={insight.slug} className="flex flex-col">
                <Link
                  href={`/insights/${insight.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={insight.image}
                    alt={insight.imageAlt}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </Link>
                <p className="mt-5 text-[12px] tracking-[0.14em] text-ink/40">
                  {insight.category.toUpperCase()} · {insight.readTime}
                </p>
                <h2 className="mt-3 text-[22px] font-medium leading-snug tracking-[-0.02em]">
                  <Link href={`/insights/${insight.slug}`} className="hover:opacity-70">
                    {insight.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-ink/60">
                  {insight.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
