/**
 * SITE CONFIG: the single place to edit business details.
 * Every value marked TODO is a placeholder. Replace it before going live.
 * Changes here flow into every page, the JSON-LD schema, the sitemap and llms.txt.
 */

export const site = {
  name: "The Financial Doctor",
  legalName: "The Financial Doctor", // TODO: registered business name
  tagline: "Mortgages, insurance and investing, planned as one.",
  description:
    "Independent financial advice for families and business owners. Mortgage planning, life and income protection, and long term investing, coordinated into one clear plan.",
  url: "https://www.thefinancialdoctor.com", // TODO: your production domain, no trailing slash
  locale: "en_US", // TODO: e.g. en_CA, en_GB, en_IN, en_AU
  currency: "USD", // TODO
  foundingYear: "2010", // TODO

  advisor: {
    name: "Your Name", // TODO
    firstName: "Your", // TODO
    jobTitle: "Founder and Principal Advisor",
    credentials: [
      "Licensed Mortgage Professional",
      "Licensed Life Insurance Advisor",
      "Registered Investment Representative",
    ], // TODO: your real designations
    photo: "", // TODO: e.g. "/advisor.jpg" (place a 4:5 portrait in /public). Empty shows a monogram.
    linkedin: "https://www.linkedin.com/in/your-profile", // TODO
  },

  contact: {
    phone: "+1 (555) 010-0000", // TODO
    phoneHref: "+15550100000", // TODO: digits only, with country code
    email: "hello@thefinancialdoctor.com", // TODO
    street: "100 Main Street, Suite 200", // TODO
    city: "Your City", // TODO
    region: "State", // TODO
    postalCode: "00000", // TODO
    country: "US", // TODO: ISO country code
    areaServed: ["Your City", "Your Region"], // TODO
    hours: "Mon to Fri, 9:00 to 18:00. Evenings by appointment.",
    openingHours: ["Mo-Fr 09:00-18:00"],
    geo: { latitude: 0, longitude: 0 }, // TODO: office coordinates (improves local search)
  },

  // Profile link: shows all event types. To open one event directly, append its slug (e.g. /30min).
  calendlyUrl: "https://calendly.com/financialdoctorbyann/30min",

  social: [
    "https://www.linkedin.com/in/your-profile", // TODO
  ],

  /** Shown in the footer and on /disclosures. Your regulator will specify exact wording. */
  regulatoryNote:
    "Mortgage, insurance and investment services may be offered through separately licensed entities. Licensing details are available on the Disclosures page.", // TODO

  lastReviewed: "2026-09-25",
} as const;

/**
 * TRUST STATS: placeholders. Replace each value with your verified figure
 * and keep the "asOf" date honest. Regulators may require these to be accurate
 * and substantiated.
 */
export const stats = [
  { value: "15+", label: "Years advising families and business owners" }, // TODO
  { value: "1,200+", label: "Households with a written financial plan" }, // TODO
  { value: "$350M+", label: "In mortgages arranged for clients" }, // TODO
  { value: "96%", label: "Of clients still with us after five years" }, // TODO
] as const;
export const statsAsOf = "September 2026"; // TODO

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const absoluteUrl = (path = "/") =>
  `${site.url}${path === "/" ? "" : path}`;
