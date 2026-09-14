import Image from "next/image";
import Link from "next/link";
import { Pinstripe } from "@/components/Pinstripe";
import { pageMetadata } from "@/lib/seo";
import { sectors } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Sectors",
  description:
    "Aadya Ventures invests in information technology, real estate, oil and energy, and selected adjacent sectors from Dubai, UAE.",
  path: "/sectors",
  image: "/images/handshake-deal.png",
});

export default function SectorsPage() {
  return (
    <>
      <section className="bg-navy-900">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-14 lg:pb-20 lg:pt-40">
          <h1 className="text-[clamp(2.2rem,5.2vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.04em]">
            Sectors We Focus On
          </h1>
          <p className="max-w-md text-[17px] leading-7 text-white/55 lg:justify-self-end">
            Aadya Ventures focuses on industries where innovation, real assets,
            and energy demand create significant growth opportunities from a
            Dubai base.
          </p>
        </div>
        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative min-h-[340px] lg:min-h-[620px]">
            <Image
              src="/images/handshake-deal.png"
              alt="A partnership handshake in a modern Dubai office."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          </div>
          <div className="bg-paper px-5 py-10 text-ink sm:px-10 lg:px-16 lg:py-16">
            <ul>
              {sectors.map((sector) => (
                <li
                  key={sector.slug}
                  className="grid gap-2 border-b border-ink/15 py-7 first:pt-0 last:border-b-0 md:grid-cols-[0.42fr_0.58fr] md:gap-8"
                >
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="text-[18px] font-medium hover:opacity-70"
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

      <Pinstripe className="bg-navy-950">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14">
          <h2 className="max-w-3xl text-[clamp(1.5rem,3vw,2.4rem)] font-medium tracking-[-0.03em]">
            Four books. One underwriting standard.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/sectors/${sector.slug}`}
                className="group relative min-h-[280px] overflow-hidden"
              >
                <Image
                  src={sector.image}
                  alt={sector.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="relative flex h-full min-h-[280px] flex-col justify-end p-7">
                  <h3 className="text-[22px] font-medium">{sector.name}</h3>
                  <p className="mt-2 max-w-md text-[14px] text-white/65">
                    {sector.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Pinstripe>
    </>
  );
}
