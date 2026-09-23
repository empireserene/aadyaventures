export const site = {
  name: "Aadya Ventures Limited",
  shortName: "Aadya Ventures",
  legalName: "Aadya Ventures Limited",
  tagline: "Backing operators.\nBuilding scalable companies.",
  taglineSingle: "Backing operators. Building scalable companies.",
  description:
    "Aadya Ventures Limited is a Dubai-based investment company deploying capital into information technology, real estate, and selected adjacent sectors.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aadyaventures.com",
  locale: "en_AE",
  email: "enquiries@aadyaventures.com",
  phone: "+971 4 368 2140",
  phoneHref: "+97143682140",
  address: {
    line1: "48, Burj Gate - 7th Floor",
    line2: "Sofitel Hotel Downtown, Sheikh Zayed Road",
    line3: "P.O 8867",
    city: "Dubai",
    country: "United Arab Emirates",
    full: "48, Burj Gate - 7th Floor, Sofitel Hotel Downtown, Sheikh Zayed Road, P.O 8867, Dubai, United Arab Emirates",
  },
  hours: "Sunday – Thursday, 9:00 – 18:00 GST",
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/sectors", label: "Sectors" },
  { href: "/approach", label: "Approach" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const pillars = [
  {
    title: "Venture investment and strategic capital",
    body: "Direct equity, structured capital, and partnership capital for companies and assets with durable economics.",
  },
  {
    title: "Access to investor and industry networks",
    body: "Introductions across operators, family offices, and institutional counterparties in the UAE, GCC, and beyond.",
  },
  {
    title: "Guidance on scaling operations and growth",
    body: "Hands-on support on capital structure, market entry, governance, and the next round of expansion.",
  },
];

export const sectors = [
  {
    slug: "technology",
    name: "Information Technology",
    shortName: "Technology",
    summary:
      "Digital products, SaaS platforms, enterprise software, and scalable technology infrastructure.",
    description:
      "We invest in technology businesses that solve operational problems at scale — software platforms, digital infrastructure, applied intelligence, and technology-enabled services serving the GCC and global markets.",
    image: "/images/sector-technology.png",
    imageAlt:
      "Rows of servers in a modern data centre, representing technology and digital infrastructure investments.",
    bullets: [
      "Enterprise software, SaaS, and vertical platforms",
      "Digital infrastructure, data, and applied AI",
      "Fintech and technology-enabled financial services",
      "Cybersecurity and mission-critical systems",
    ],
    thesis:
      "The UAE is becoming a regional platform for software, data centres, and digital public infrastructure. We back teams that can sell into this demand and expand internationally from Dubai.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortName: "Real Estate",
    summary:
      "Income-producing, development, and mixed-use real assets across Dubai and selected markets.",
    description:
      "We allocate to real estate where location, income durability, and development discipline compound. Focus includes commercial, residential, mixed-use, and hospitality assets in Dubai, with selective exposure to other GCC and international markets.",
    image: "/images/sector-real-estate.png",
    imageAlt:
      "Dubai waterfront towers at dusk, representing real estate investment.",
    bullets: [
      "Income-producing commercial and mixed-use assets",
      "Residential, branded living, and hospitality",
      "Development and value-add situations",
      "Land and special situations in the UAE",
    ],
    thesis:
      "Dubai remains a magnet for capital, residents, and tourism. We underwrite assets on cash flow, planning risk, and the quality of the operating partner — not on narrative alone.",
  },
  {
    slug: "adjacent-sectors",
    name: "Emerging & Adjacent Sectors",
    shortName: "Adjacent Sectors",
    summary:
      "Logistics, industrials, and other platforms where capital and operators can unlock durable value.",
    description:
      "Beyond technology and real estate, we consider logistics, industrials, healthcare, education, and selected consumer platforms where the market is large, the model is scalable, and the team can execute.",
    image: "/images/sector-adjacent.png",
    imageAlt:
      "A modern container port at dusk, representing logistics and adjacent sector investments.",
    bullets: [
      "Logistics, ports, and industrial platforms",
      "Healthcare and education infrastructure",
      "Consumer businesses with durable cash flows",
      "Special situations requiring capital and completion",
    ],
    thesis:
      "The best opportunities are sometimes adjacent to our core book. We remain disciplined: if the market, model, and team are not all present, we pass.",
  },
] as const;

export const framework = [
  {
    title: "Founder & Team",
    image: "/images/founder-team.png",
    imageAlt:
      "Investment professionals in a boardroom reviewing an opportunity together.",
    points: [
      "Execution capability",
      "Industry expertise",
      "Leadership potential",
    ],
  },
  {
    title: "Market Opportunity",
    image: "/images/market-opportunity.png",
    imageAlt:
      "Aerial night view of a financial district representing market scale.",
    points: [
      "Large addressable market",
      "Growing demand and strong positioning",
      "Clear path to regional relevance",
    ],
  },
  {
    title: "Business Fundamentals",
    image: "/images/business-fundamentals.png",
    imageAlt:
      "Investment documents and analysis materials on a boardroom table.",
    points: [
      "Viable unit economics",
      "Efficient customer or capital acquisition",
      "Resilient cash flow or a path to it",
    ],
  },
];

export const partnershipProcess = [
  {
    step: "01",
    title: "Opportunity Assessment",
    body: "Market research, operator evaluation, and business-model analysis against our investment framework.",
  },
  {
    step: "02",
    title: "Investment & Alignment",
    body: "Structured capital and a partnership with operators, with incentives, governance, and reporting agreed in writing.",
  },
  {
    step: "03",
    title: "Growth Collaboration",
    body: "Operational support, strategic advice, and network access as the company or asset scales.",
  },
  {
    step: "04",
    title: "Expansion & Follow-On",
    body: "Support through scaling, refinancing, and future funding rounds where the thesis remains intact.",
  },
];

export const criteria = [
  {
    title: "Product or asset solving a real market need",
    body: "Demand is evidenced, not assumed. We look for problems customers already pay to solve.",
  },
  {
    title: "Strong operating team with execution capability",
    body: "Industry knowledge, integrity, and the ability to build organisations — not only raise capital.",
  },
  {
    title: "Early traction or a validated commercial model",
    body: "Revenue, contracted cash flows, occupancy, or a clear route to either within a disciplined horizon.",
  },
];

export const mandates = [
  {
    sector: "Information Technology",
    title: "GCC enterprise software platform",
    status: "Thematic mandate",
    summary:
      "Minority growth capital for a B2B software company with recurring revenue, regional logos, and a path to expand from Dubai into KSA and international markets.",
    image: "/images/sector-technology.png",
  },
  {
    sector: "Real Estate",
    title: "Income-producing mixed-use asset, Dubai",
    status: "Thematic mandate",
    summary:
      "Stabilised or value-add real estate with visible occupancy, professional asset management, and a hold period aligned to cash yield and residual value.",
    image: "/images/sector-real-estate.png",
  },
  {
    sector: "Adjacent",
    title: "Logistics corridor and industrial platform",
    status: "Thematic mandate",
    summary:
      "Infrastructure-adjacent businesses that benefit from UAE trade flows, last-mile density, and professionalisation of family-owned industrial groups.",
    image: "/images/sector-adjacent.png",
  },
];

export const trustStrip = [
  "Information Technology",
  "Real Estate",
  "Adjacent Platforms",
];
