import { CriteriaBand, FrameworkBand, ProcessBand } from "@/components/home";
import { Pinstripe } from "@/components/Pinstripe";
import { pageMetadata } from "@/lib/seo";
import { partnershipProcess } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Approach",
  description:
    "How Aadya Ventures Limited evaluates opportunities and partners with operators — from assessment through follow-on capital.",
  path: "/approach",
});

export default function ApproachPage() {
  return (
    <>
      <Pinstripe className="bg-navy-900">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-8 lg:px-14 lg:pt-40">
          <p className="text-[12px] tracking-[0.18em] text-white/40">
            APPROACH
          </p>
          <h1 className="mt-5 max-w-4xl text-[clamp(2rem,4.8vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.04em]">
            A structured framework when evaluating opportunities.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-8 text-white/55">
            We invest when evidence, not narrative, supports the file.
            Complexity is added only where the facts require it.
          </p>
        </div>
      </Pinstripe>

      <FrameworkBand />
      <ProcessBand />
      <CriteriaBand />

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-14">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2.3rem)] font-medium tracking-[-0.03em]">
              Partnership, written down.
            </h2>
            <p className="mt-6 text-[16px] leading-8 text-ink/65">
              After assessment, we align on capital, governance, information
              rights, and the work we will actually do together. The four-step
              process is designed so operators know what happens after a yes —
              not only how to get one.
            </p>
          </div>
          <ol className="divide-y divide-ink/10 border-y border-ink/10">
            {partnershipProcess.map((item) => (
              <li key={item.step} className="grid gap-3 py-5 sm:grid-cols-[4rem_1fr]">
                <span className="text-[22px] font-medium text-navy-700">
                  {item.step}
                </span>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="mt-1 text-[14px] leading-6 text-ink/55">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
