export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
  paragraphs: string[];
};

export const insights: Insight[] = [
  {
    slug: "dubai-as-a-cross-border-investment-hub",
    title: "Why Dubai is a strategic hub for cross-border investment",
    excerpt:
      "Capital, talent, and operating companies are concentrating in the UAE. For an investment firm allocating across technology, real estate, and energy, Dubai is a practical base — not a slogan.",
    date: "2026-08-12",
    readTime: "6 min read",
    category: "Market",
    image: "/images/insight-dubai.png",
    imageAlt:
      "An investment professional overlooking the Dubai skyline at dusk.",
    description:
      "How Dubai’s legal infrastructure, capital inflows, and sector demand make it a practical headquarters for cross-border investment into technology, real estate, and energy.",
    paragraphs: [
      "Aadya Ventures Limited is based in Dubai because the city now sits at the intersection of three things investors actually need: a predictable operating environment, inbound capital, and real sector demand. Those conditions matter more than any skyline photograph.",
      "The UAE has spent two decades building the legal and financial infrastructure that cross-border capital requires. The Dubai International Financial Centre operates under a common-law framework familiar to international counterparties. Company formation, banking, and professional services are deep. For a firm that underwrites opportunities in more than one sector — and often with partners outside the Emirates — that plumbing is not optional.",
      "Demand is equally important. Technology spending is rising as government and enterprise digitise. Real estate continues to attract residents, family offices, and institutional buyers who want income and optionality in a dollar-linked economy. Energy remains the region’s comparative advantage, even as the mix of conventional, infrastructure, and transition assets evolves.",
      "Dubai also functions as a meeting point. Founders from South Asia, operators from Europe, and capital from the GCC already transact here. An investment office that can underwrite in English, structure in a recognised jurisdiction, and sit within a few hours of Riyadh, Mumbai, and Nairobi has a practical advantage over a purely domestic mandate.",
      "None of this substitutes for underwriting. Jurisdictional convenience does not make a weak team strong, or a crowded market attractive. It does mean that when the market, the model, and the operators line up, Dubai is a rational place from which to partner with them.",
      "That is the lens Aadya Ventures uses. We are not a tourism slogan. We are an investment company using Dubai as a platform to allocate into information technology, real estate, oil and energy, and selected adjacent sectors — with the discipline the city’s sophistication now demands.",
    ],
  },
  {
    slug: "allocating-across-technology-real-estate-and-energy",
    title: "Allocating across technology, real estate, and energy from the UAE",
    excerpt:
      "A multi-sector book is not a lack of focus. It is a recognition that durable value in the GCC is being created in more than one engine of the economy.",
    date: "2026-07-21",
    readTime: "7 min read",
    category: "Strategy",
    image: "/images/insight-energy-tech.png",
    imageAlt:
      "A modern energy operations room with large screens, representing technology meeting energy infrastructure.",
    description:
      "How Aadya Ventures thinks about a multi-sector mandate across information technology, real estate, and oil and energy from a Dubai base.",
    paragraphs: [
      "Single-sector funds can be elegant. They are not always how capital is actually deployed in the GCC. Family offices, operating groups, and regional holding companies have long allocated across real assets, energy, and, increasingly, technology. Aadya Ventures Limited is built for that reality.",
      "Information technology is the growth engine. Enterprise software, digital infrastructure, and applied intelligence are moving from pilot budgets to core spend. We look for products with a real buyer, switching costs that are earned rather than locked, and teams that can sell in this region without treating it as an afterthought.",
      "Real estate is the ballast. Dubai’s residential and commercial markets are cyclical, but they are also deep, transparent relative to many emerging markets, and supported by genuine population and tourism inflows. We underwrite yield, planning, and the operator — and we pass when the only thesis is that prices will keep rising.",
      "Oil and energy remain the cash-flow engine of the broader region. That does not mean every barrel-linked story is investable. We prefer services, midstream, power, and platforms with contracted or highly visible demand, plus selected transition assets where the economics stand without a subsidy narrative.",
      "The three sectors also interact. Data centres consume power. Proptech changes how buildings are operated. Energy companies need software, logistics, and industrial real estate. A firm that can read across those connections is less likely to miss the second-order effects of a deal.",
      "Focus, for us, is a framework rather than a single SIC code. We will not chase every adjacent idea. We will stay inside technology, real estate, energy, and a short list of platforms where the same questions — market, model, team — can be answered with evidence.",
    ],
  },
  {
    slug: "how-we-evaluate-venture-and-asset-opportunities",
    title: "How we evaluate venture and asset opportunities",
    excerpt:
      "Our framework is deliberately simple: founder and team, market opportunity, and business fundamentals. Complexity is added only when the facts require it.",
    date: "2026-06-04",
    readTime: "5 min read",
    category: "Approach",
    image: "/images/insight-evaluation.png",
    imageAlt:
      "An investment memorandum and architectural model on a dark stone desk.",
    description:
      "Aadya Ventures’ structured framework for evaluating startup, growth, and real-asset opportunities from its Dubai investment office.",
    paragraphs: [
      "Investment processes fail in two opposite ways. They can be so light that every introduction becomes a live deal. Or they can be so ornate that nobody can explain why a file was approved. Aadya Ventures uses a three-part framework that fits both companies and assets.",
      "First, founder and team — or, in real assets, the operating partner. We look for execution capability, industry expertise, and leadership that will still be coherent when conditions worsen. Capital cannot compensate for a team that will not report, will not hire, or will not tell you bad news early.",
      "Second, market opportunity. A large addressable market is necessary and insufficient. We want growing demand, a reason the product or location wins, and a path to regional relevance. In Dubai that often means asking whether the opportunity is truly regional or only locally fashionable.",
      "Third, business fundamentals. Unit economics, customer or capital acquisition, occupancy, contracted cash flows, and a viable hold or exit. We will look at early-stage companies, but we will not pretend that a slide is a financial statement. Traction, even modest traction, is a filter.",
      "Around that core we run the usual work: legal and financial diligence, reference calls, site visits, and structure. Structure is where many GCC deals are won or lost — governance, information rights, and alignment on follow-on capital. We would rather write a clear partnership than a clever instrument.",
      "The output of the process is a decision, not a deck. If we partner, we stay involved through growth, refinancing, and follow-on rounds. If we pass, we try to pass quickly. Operators deserve that courtesy, and our own time is better spent on files that can meet the framework.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}
