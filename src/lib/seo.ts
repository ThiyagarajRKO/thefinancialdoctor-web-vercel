import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";
import type { Faq, Service } from "./content";

const ORG_ID = `${site.url}/#organization`;
const PERSON_ID = `${site.url}/#advisor`;
const WEBSITE_ID = `${site.url}/#website`;

export function buildMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  return {
    title: title ? title : { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}

/** Sitewide entity graph: organisation, advisor and website. Rendered once in the root layout. */
export function siteGraph() {
  const c = site.contact;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FinancialService", "ProfessionalService"],
        "@id": ORG_ID,
        name: site.name,
        legalName: site.legalName,
        description: site.description,
        slogan: site.tagline,
        url: site.url,
        logo: absoluteUrl("/icon.svg"),
        image: absoluteUrl("/opengraph-image"),
        telephone: c.phoneHref,
        email: c.email,
        foundingDate: site.foundingYear,
        priceRange: "Free initial consultation",
        currenciesAccepted: site.currency,
        address: {
          "@type": "PostalAddress",
          streetAddress: c.street,
          addressLocality: c.city,
          addressRegion: c.region,
          postalCode: c.postalCode,
          addressCountry: c.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: c.geo.latitude, longitude: c.geo.longitude },
        areaServed: c.areaServed.map((name) => ({ "@type": "Place", name })),
        openingHours: c.openingHours,
        founder: { "@id": PERSON_ID },
        employee: { "@id": PERSON_ID },
        sameAs: site.social,
        knowsAbout: [
          "Mortgage advice",
          "Refinancing",
          "Life insurance",
          "Disability insurance",
          "Critical illness insurance",
          "Retirement planning",
          "Investment planning",
          "Tax efficient investing",
          "Financial planning",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Financial advice services",
          itemListElement: ["mortgages", "insurance", "investing"].map((slug) => ({
            "@type": "Offer",
            itemOffered: { "@id": `${absoluteUrl(`/services/${slug}`)}#service` },
          })),
        },
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book a free consultation",
          target: { "@type": "EntryPoint", urlTemplate: absoluteUrl("/contact") },
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.advisor.name,
        jobTitle: site.advisor.jobTitle,
        worksFor: { "@id": ORG_ID },
        url: absoluteUrl("/about"),
        sameAs: [site.advisor.linkedin],
        hasCredential: site.advisor.credentials.map((name) => ({
          "@type": "EducationalOccupationalCredential",
          name,
        })),
        knowsAbout: ["Mortgages", "Insurance", "Investing", "Retirement planning"],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": ORG_ID },
        inLanguage: site.locale.replace("_", "-"),
      },
    ],
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  crumbs,
}: {
  path: string;
  name: string;
  description: string;
  type?: string;
  crumbs?: { name: string; path: string }[];
}) {
  const url = absoluteUrl(path);
  const graph: Record<string, unknown>[] = [
    {
      "@type": type,
      "@id": `${url}#webpage`,
      url,
      name,
      description,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORG_ID },
      dateModified: site.lastReviewed,
      inLanguage: site.locale.replace("_", "-"),
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
    },
  ];
  if (crumbs?.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: absoluteUrl(c.path),
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(s: Service) {
  const url = absoluteUrl(`/services/${s.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.inShort,
    url,
    provider: { "@id": ORG_ID },
    areaServed: site.contact.areaServed.map((name) => ({ "@type": "Place", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name,
      itemListElement: s.offerings.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o.title, description: o.body },
      })),
    },
  };
}
