import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/insights";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return pageMetadata({
    title: insight.title,
    description: insight.description,
    path: `/insights/${insight.slug}`,
    image: insight.image,
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const others = insights.filter((item) => item.slug !== insight.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.date,
    image: insight.image,
    author: { "@type": "Organization", name: "Aadya Ventures Limited" },
    publisher: { "@type": "Organization", name: "Aadya Ventures Limited" },
  };

  return (
    <article className="bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-5 pb-10 pt-32 sm:px-8 lg:pt-40">
        <p className="text-[12px] tracking-[0.16em] text-ink/40">
          {insight.category.toUpperCase()} · {insight.readTime}
        </p>
        <h1 className="mt-4 text-[clamp(1.9rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.03em]">
          {insight.title}
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-ink/55">{insight.excerpt}</p>
      </div>
      <div className="relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden">
        <Image
          src={insight.image}
          alt={insight.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        {insight.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mt-6 text-[17px] leading-8 text-ink/75 first:mt-0">
            {paragraph}
          </p>
        ))}
        <p className="mt-12 text-[14px] text-ink/45">
          Published {new Date(insight.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          .
        </p>
      </div>
      <aside className="border-t border-ink/10">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <p className="text-[12px] tracking-[0.16em] text-ink/40">MORE INSIGHTS</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((item) => (
              <Link key={item.slug} href={`/insights/${item.slug}`} className="hover:opacity-70">
                <p className="font-medium">{item.title}</p>
                <p className="mt-2 text-[14px] text-ink/50">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </article>
  );
}
