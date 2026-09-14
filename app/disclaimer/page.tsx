import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Investment Disclaimer",
  description: `Important legal disclaimer for ${site.name}.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <article className="bg-paper text-ink">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8 lg:pt-40">
        <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-medium tracking-[-0.03em]">
          Investment Disclaimer
        </h1>
        <p className="mt-4 text-[14px] text-ink/45">Last updated: 14 September 2026</p>
        <div className="mt-10 space-y-6 text-[16px] leading-8 text-ink/70">
          <p>
            The content of this website is provided by {site.name} for general
            informational purposes only. It does not constitute investment,
            legal, tax, or other professional advice, and it is not an offer of
            securities in any jurisdiction.
          </p>
          <p>
            Past performance, illustrative mandate profiles, and sector
            commentary are not a reliable indicator of future results.
            Investment in private companies and real assets involves a risk of
            loss, including loss of principal. Any engagement with Aadya
            Ventures is subject to separate documentation, eligibility, and
            applicable regulation in the United Arab Emirates.
          </p>
          <p>
            Nothing on this site should be relied upon as a representation that
            we are authorised to conduct a particular regulated activity. Where
            a licence or exemption is required, it will be obtained or relied
            upon before the relevant activity is carried out.
          </p>
        </div>
      </div>
    </article>
  );
}
