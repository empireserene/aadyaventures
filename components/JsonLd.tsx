import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        foundingLocation: {
          "@type": "Place",
          name: "Dubai, United Arab Emirates",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.line2}, ${site.address.line3}`,
          addressLocality: site.address.city,
          addressCountry: "AE",
          postalCode: "8867",
        },
        areaServed: ["AE", "GCC"],
        knowsAbout: [
          "Venture capital",
          "Information technology investment",
          "Real estate investment",
          "Dubai",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.shortName,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
