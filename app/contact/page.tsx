import { ContactForm } from "@/components/ContactForm";
import { Pinstripe } from "@/components/Pinstripe";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import Image from "next/image";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Partner with Aadya Ventures Limited. Contact our Dubai investment office to discuss technology, real estate, and adjacent opportunities.",
  path: "/contact",
  image: "/images/dubai-towers.png",
});

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-navy-900 text-white">
        <Image
          src="/images/dubai-towers.png"
          alt="Looking up at Dubai towers from street level."
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy-950/45" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-3">
            <h1 className="text-[clamp(2.1rem,4.6vw,4rem)] font-medium leading-[1.05] tracking-[-0.04em]">
              Partner with
              <br />
              Aadya Ventures
            </h1>
            <p className="max-w-sm text-[18px] font-medium leading-7 text-white/80">
              We collaborate with founders building the next generation of
              scalable and impactful companies.
            </p>
            <p className="text-[18px] font-medium text-white/70 lg:justify-self-end">
              Let&apos;s build the future together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-24">
          <div>
            <h2 className="text-[13px] font-medium">Contact</h2>
            <p className="mt-4 text-[20px] font-medium">Investment Office</p>
            <p className="text-[14px] text-ink/50">
              Chief investment correspondence
            </p>

            <dl className="mt-10 space-y-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
                  Email
                </dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
                  Address
                </dt>
                <dd className="mt-2 max-w-sm leading-7">{site.address.full}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-ink/40">
                  Hours
                </dt>
                <dd className="mt-2">{site.hours}</dd>
              </div>
            </dl>
          </div>

          <Pinstripe className="bg-navy-900 p-8 lg:p-12">
            <h2 className="text-[24px] font-medium tracking-[-0.03em] text-white">
              Send an enquiry
            </h2>
            <p className="mt-3 max-w-md text-[14px] leading-6 text-white/50">
              Operators, family offices, and intermediaries may write to us
              here. Please include sector, stage, and a concise description of
              the opportunity.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Pinstripe>
        </div>
      </section>
    </>
  );
}
