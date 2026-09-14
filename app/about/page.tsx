import Image from "next/image";
import Link from "next/link";
import { Pinstripe } from "@/components/Pinstripe";
import { framework, pillars, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Aadya Ventures Limited is a Dubai-based investment company partnering with operators across technology, real estate, oil and energy, and adjacent sectors.",
  path: "/about",
  image: "/images/about-difc.png",
});

export default function AboutPage() {
  return (
    <>
      <Pinstripe className="bg-navy-900">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-8 lg:px-14 lg:pb-28 lg:pt-40">
          <p className="text-[12px] tracking-[0.18em] text-white/40">ABOUT</p>
          <h1 className="mt-6 max-w-4xl text-[clamp(2rem,4.6vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.035em]">
            An investment company built in Dubai for operators creating durable
            value.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-8 text-white/55">
            Aadya — a name that marks a beginning — is how we think about
            capital. We partner early enough to matter, and with enough
            discipline to stay.
          </p>
        </div>
      </Pinstripe>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <Image
            src="/images/about-difc.png"
            alt="Dubai International Financial Centre at dusk, headquarters context for Aadya Ventures Limited."
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="bg-paper px-5 py-14 text-ink sm:px-10 lg:px-16 lg:py-20">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.03em]">
            Based in Dubai. Investing with a regional lens and a global
            standard of underwriting.
          </h2>
          <p className="mt-6 text-[16px] leading-7 text-ink/65">
            {site.name} deploys capital into information technology, real
            estate, oil and energy, and selected adjacent platforms. We work
            from {site.address.line2}, with counterparties across the UAE, the
            wider GCC, and international markets.
          </p>
          <p className="mt-5 text-[16px] leading-7 text-ink/65">
            We are not a spray-and-pray venture fund, and we are not a purely
            financial buyer of assets. We look for operators we can partner
            with — on governance, capital structure, and the unglamorous work
            of scaling.
          </p>
        </div>
      </section>

      <Pinstripe className="bg-navy-950">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <h2 className="max-w-4xl text-[clamp(1.6rem,3.6vw,3rem)] font-medium leading-[1.15] tracking-[-0.03em]">
            What we bring to a partnership
          </h2>
          <div className="mt-14 grid border-t border-white/15 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`py-8 lg:px-10 lg:py-12 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/15"}`}
              >
                <h3 className="max-w-xs text-[18px] font-medium leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-white/50">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Pinstripe>

      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <h2 className="text-[clamp(1.6rem,3.2vw,2.8rem)] font-medium tracking-[-0.03em]">
              A structured framework, applied without theatre.
            </h2>
            <p className="text-[16px] leading-7 text-ink/60">
              Every file — company or asset — is read through the same three
              questions: who is executing, how large and durable is the market,
              and do the fundamentals hold.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {framework.map((card) => (
              <article key={card.title} className="border border-ink/10 p-7">
                <h3 className="text-[18px] font-medium">{card.title}</h3>
                <ul className="mt-5 space-y-2 text-[14px] text-ink/60">
                  {card.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <Link
            href="/approach"
            className="mt-10 inline-block text-[14px] tracking-[0.04em] text-navy-700 hover:opacity-70"
          >
            Read our investment approach →
          </Link>
        </div>
      </section>
    </>
  );
}
