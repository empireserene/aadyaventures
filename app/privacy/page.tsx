import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}, a Dubai-based investment company.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="bg-paper text-ink">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-[-0.03em]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[14px] text-ink/45">Last updated: 14 September 2026</p>
        <div className="mt-10 space-y-6 text-[16px] leading-8 text-ink/70">
          <p>
            {site.name} (“we”, “us”) is based in Dubai, United Arab Emirates.
            This policy describes how we collect and use information when you
            visit {site.url} or contact our investment office.
          </p>
          <h2 className="pt-4 text-[22px] font-medium text-ink">
            Information we collect
          </h2>
          <p>
            If you submit an enquiry, we collect the details you provide —
            typically name, organisation, email, telephone number, sector of
            interest, and message. Our servers may also log standard technical
            data such as IP address, browser type, and pages requested.
          </p>
          <h2 className="pt-4 text-[22px] font-medium text-ink">How we use it</h2>
          <p>
            We use contact information to respond to enquiries, evaluate
            potential partnerships, and keep records required for our business
            and legal obligations. We do not sell personal data.
          </p>
          <h2 className="pt-4 text-[22px] font-medium text-ink">Retention</h2>
          <p>
            Enquiry records are kept for as long as needed to handle the
            correspondence and any related investment process, and thereafter
            as required by applicable UAE law.
          </p>
          <h2 className="pt-4 text-[22px] font-medium text-ink">Contact</h2>
          <p>
            Privacy questions may be sent to{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
