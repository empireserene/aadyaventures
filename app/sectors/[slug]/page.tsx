import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pinstripe } from "@/components/Pinstripe";
import { pageMetadata } from "@/lib/seo";
import { sectors } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find((item) => item.slug === slug);
  if (!sector) return {};
  return pageMetadata({
    title: sector.name,
    description: sector.description,
    path: `/sectors/${sector.slug}`,
    image: sector.image,
  });
}

export default async function SectorDetailPage({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find((item) => item.slug === slug);
  if (!sector) notFound();

  const others = sectors.filter((item) => item.slug !== sector.slug);

  return (
    <>
      <Pinstripe className="bg-navy-900">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-32 sm:px-8 lg:px-14 lg:pt-40">
          <p className="text-[12px] tracking-[0.18em] text-white/40">
            SECTORS / {sector.shortName.toUpperCase()}
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2.1rem,5vw,4.4rem)] font-medium leading-[1.05] tracking-[-0.04em]">
            {sector.name}
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-white/55">
            {sector.description}
          </p>
        </div>
      </Pinstripe>

      <section className="relative min-h-[420px]">
        <Image
          src={sector.image}
          alt={sector.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-14">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.3rem)] font-medium tracking-[-0.03em]">
              Where we look
            </h2>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {sector.bullets.map((bullet) => (
                <li key={bullet} className="py-4 text-[16px] leading-7">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.3rem)] font-medium tracking-[-0.03em]">
              Our thesis
            </h2>
            <p className="mt-8 text-[16px] leading-8 text-ink/65">
              {sector.thesis}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block border border-ink/20 px-6 py-3 text-[13px] tracking-[0.08em] hover:bg-ink hover:text-white"
            >
              Discuss an opportunity
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-14">
          <p className="text-[12px] tracking-[0.16em] text-white/40">
            OTHER SECTORS
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/sectors/${item.slug}`}
                className="border border-white/10 p-6 hover:bg-white/5"
              >
                <p className="font-medium">{item.name}</p>
                <p className="mt-2 text-[14px] text-white/50">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
