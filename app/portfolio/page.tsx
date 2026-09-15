import Image from "next/image";
import Link from "next/link";
import { Pinstripe } from "@/components/Pinstripe";
import { pageMetadata } from "@/lib/seo";
import { mandates } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Thematic investment mandates of Aadya Ventures Limited across technology, real estate, and adjacent platforms.",
  path: "/portfolio",
  image: "/images/sector-real-estate.png",
});

export default function PortfolioPage() {
  return (
    <>
      <Pinstripe className="bg-navy-900">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 lg:px-14 lg:pt-40">
          <p className="text-[12px] tracking-[0.18em] text-white/40">
            PORTFOLIO
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2rem,4.6vw,4rem)] font-medium leading-[1.08] tracking-[-0.04em]">
            The kinds of opportunities we underwrite.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-white/55">
            Individual holdings remain confidential. The profiles below
            describe the mandate types we actively review from Dubai — not
            named portfolio companies.
          </p>
        </div>
      </Pinstripe>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14">
          <div className="grid gap-8">
            {mandates.map((mandate, index) => (
              <article
                key={mandate.title}
                className="grid overflow-hidden border border-ink/10 lg:grid-cols-[0.42fr_0.58fr]"
              >
                <div className="relative min-h-[240px]">
                  <Image
                    src={mandate.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={index === 0}
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <p className="text-[12px] tracking-[0.14em] text-ink/40">
                    {mandate.sector.toUpperCase()} · {mandate.status.toUpperCase()}
                  </p>
                  <h2 className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-medium tracking-[-0.03em]">
                    {mandate.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[16px] leading-7 text-ink/60">
                    {mandate.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-8">
            <p className="max-w-xl text-[15px] leading-7 text-ink/55">
              If an opportunity fits a mandate above, we would rather see a
              short, factual memo than a theatrical deck.
            </p>
            <Link
              href="/contact"
              className="border border-ink/20 px-6 py-3 text-[13px] tracking-[0.08em] hover:bg-ink hover:text-white"
            >
              Submit an opportunity
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
