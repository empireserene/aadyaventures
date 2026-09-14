import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: `Website terms of use for ${site.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="bg-paper text-ink">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-[-0.03em]">
          Terms of Use
        </h1>
        <p className="mt-4 text-[14px] text-ink/45">Last updated: 14 September 2026</p>
        <div className="mt-10 space-y-6 text-[16px] leading-8 text-ink/70">
          <p>
            By using this website you agree to these terms. The site is
            operated by {site.name}, {site.address.full}.
          </p>
          <h2 className="pt-4 text-[22px] font-medium text-ink">Content</h2>
          <p>
            Materials on this site are for general information. They do not
            constitute an offer to sell, or a solicitation to buy, any
            security, or an invitation to engage in any investment activity.
          </p>
          <h2 className="pt-4 text-[22px] font-medium text-ink">Liability</h2>
          <p>
            We take care to keep the site accurate, but we do not warrant that
            it is complete or current. To the fullest extent permitted by UAE
            law, we exclude liability for loss arising from use of the site.
          </p>
          <h2 className="pt-4 text-[22px] font-medium text-ink">Governing law</h2>
          <p>
            These terms are governed by the laws of the United Arab Emirates,
            and the courts of Dubai have jurisdiction, without prejudice to any
            DIFC courts that may apply to a particular matter.
          </p>
        </div>
      </div>
    </article>
  );
}
