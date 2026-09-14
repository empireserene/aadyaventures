import {
  CriteriaBand,
  FrameworkBand,
  Hero,
  PartnerBand,
  ProcessBand,
  SectorsBand,
  Thesis,
} from "@/components/home";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: site.shortName,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <SectorsBand />
      <FrameworkBand />
      <ProcessBand />
      <CriteriaBand />
      <PartnerBand />
    </>
  );
}
