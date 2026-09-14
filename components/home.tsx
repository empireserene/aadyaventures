import Image from "next/image";
import Link from "next/link";
import { Pinstripe } from "./Pinstripe";
import {
  criteria,
  framework,
  pillars,
  partnershipProcess,
  sectors,
  site,
  trustStrip,
} from "@/lib/site";

export function Hero() {
  return (
    <Pinstripe className="min-h-screen bg-navy-900">
        <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-5 pb-16 pt-24 sm:px-8 lg:px-14 lg:pb-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <h1 className="reveal font-medium tracking-[-0.04em] text-white text-[clamp(2.8rem,6.6vw,5.75rem)] leading-[0.95]">
            Aadya Ventures
          </h1>
          <p className="reveal max-w-md text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-snug text-white/55 lg:justify-self-end lg:pb-3">
            Backing operators.
            <br />
            Building scalable companies.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-6 lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[12px] tracking-[0.04em] text-white/45">
            Investing from Dubai across global opportunities
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] font-semibold tracking-[0.12em] text-white/80">
            {trustStrip.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Pinstripe>
  );
}

export function Thesis() {
  return (
    <Pinstripe className="bg-navy-950">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <h2 className="max-w-5xl text-[clamp(1.7rem,4vw,3.35rem)] font-medium leading-[1.18] tracking-[-0.03em] text-white">
          Aadya Ventures collaborates with early and growth-stage companies
          that demonstrate{" "}
          <span className="text-white/45">
            strong market potential, scalable business models, and capable
            founding teams.
          </span>
        </h2>

        <div className="mt-20 grid border-t border-white/15 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`py-8 lg:px-10 lg:py-10 ${index === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/15"}`}
            >
              <h3 className="max-w-xs text-[17px] font-medium leading-snug text-white">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-sm text-[14px] leading-6 text-white/50">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Pinstripe>
  );
}

export function SectorsBand() {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-14 lg:py-20">
        <h2 className="text-[clamp(2rem,5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
          Sectors We Focus On
        </h2>
        <p className="max-w-md text-[17px] leading-7 text-white/55 lg:justify-self-end">
          Aadya Ventures focuses on industries where capital, operators, and
          scalable demand create significant growth opportunities.
        </p>
      </div>
      <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
        <div className="relative min-h-[320px] lg:min-h-[560px]">
          <Image
            src="/images/handshake-deal.png"
            alt="Professionals concluding a partnership with a handshake in a Dubai office."
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="bg-paper px-5 py-10 text-ink sm:px-10 lg:px-16 lg:py-16">
          <ul>
            {sectors.map((sector) => (
              <li
                key={sector.slug}
                className="grid gap-2 border-b border-ink/15 py-6 first:pt-0 last:border-b-0 md:grid-cols-[0.42fr_0.58fr] md:gap-8"
              >
                <Link
                  href={`/sectors/${sector.slug}`}
                  className="text-[17px] font-medium tracking-[-0.01em] hover:opacity-70"
                >
                  {sector.name}
                </Link>
                <p className="text-[15px] leading-6 text-ink/60">
                  {sector.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FrameworkBand() {
  return (
    <section className="relative bg-paper text-ink">
      <div className="pointer-events-none absolute inset-0 pinstripe-light" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <h2 className="max-w-xl text-[clamp(1.8rem,3.8vw,3.3rem)] font-medium leading-[1.12] tracking-[-0.03em]">
            Aadya Ventures applies a{" "}
            <span className="text-navy-600">structured framework</span> when
            evaluating startup opportunities.
          </h2>
          <p className="max-w-sm text-[16px] leading-7 text-ink/45 lg:justify-self-end lg:pt-3">
            This framework ensures our investments are based on data, market
            analysis, and execution capability.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {framework.map((card) => (
            <article
              key={card.title}
              className="relative min-h-[340px] overflow-hidden bg-navy-900 text-white"
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/55 to-navy-950/20" />
              <div className="relative flex h-full min-h-[340px] flex-col justify-end p-7">
                <h3 className="text-[22px] font-medium">{card.title}</h3>
                <ul className="mt-5 space-y-2 text-[14px] text-white/75">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessBand() {
  return (
    <section className="bg-[#121212] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <h2 className="max-w-md text-[clamp(2rem,4.5vw,3.8rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            Our Venture Partnership Process
          </h2>
          <p className="max-w-sm text-[16px] leading-7 text-white/45 lg:justify-self-end">
            Supporting companies through scaling and future funding rounds.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {partnershipProcess.map((item, index) => (
            <article
              key={item.step}
              className={`border border-white/10 bg-[#1a1a1a] p-8 ${
                index === 1 || index === 3 ? "md:mt-10" : ""
              }`}
            >
              <p className="text-[42px] font-medium leading-none tracking-[-0.04em] text-white/90">
                {item.step.replace("0", "")}
                <span className="ml-4 text-[20px] tracking-normal">
                  {item.title}
                </span>
              </p>
              <div className="mt-6 h-px w-16 bg-white/20" />
              <p className="mt-5 max-w-sm text-[14px] leading-6 text-white/50">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CriteriaBand() {
  return (
    <Pinstripe className="bg-navy-800">
      <div className="relative mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <h2 className="max-w-xl text-[clamp(1.7rem,3.6vw,3.1rem)] font-medium leading-[1.15] tracking-[-0.03em] text-white">
          Aadya Ventures collaborates{" "}
          <span className="text-white/50">
            with founders building scalable companies and preparing for their
            next stage of growth.
          </span>
        </h2>

        <div className="relative arc-rings min-h-[360px] py-8 pl-4 lg:pl-16">
          <ul className="relative z-10 space-y-16">
            {criteria.map((item) => (
              <li key={item.title} className="flex items-start gap-5">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-white/80" />
                <div>
                  <p className="max-w-xs text-[18px] font-medium leading-snug text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-sm text-[14px] leading-6 text-white/45">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Pinstripe>
  );
}

export function PartnerBand() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-paper text-ink">
      <Image
        src="/images/dubai-towers.png"
        alt="Looking up at glass towers in Dubai, representing partnership with Aadya Ventures."
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-paper/55" />
      <div className="relative mx-auto flex min-h-[720px] max-w-[1440px] flex-col justify-between px-5 py-24 sm:px-8 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
          <h2 className="text-[clamp(2rem,4.2vw,3.6rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            Partner with
            <br />
            Aadya Ventures
          </h2>
          <p className="max-w-sm text-[18px] font-medium leading-7">
            We collaborate with founders building the next generation of
            scalable and impactful companies.
          </p>
          <p className="text-[18px] font-medium text-ink/70 lg:justify-self-end">
            Let&apos;s build the future together.
          </p>
        </div>

        <div className="grid gap-10 border-t border-ink/15 pt-10 md:grid-cols-3">
          <div>
            <p className="text-[13px] font-medium">Contact</p>
            <p className="mt-4 text-[15px] font-medium">Investment Office</p>
            <p className="text-[13px] text-ink/55">
              Aadya Ventures Limited, Dubai
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
              Phone
            </p>
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-3 block text-[15px]"
            >
              {site.phone}
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block text-[15px]"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
                Address
              </p>
              <p className="mt-3 max-w-[16rem] text-[15px] leading-6">
                {site.address.full}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
