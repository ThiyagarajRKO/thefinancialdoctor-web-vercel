import { generalFaqs, services } from "@/lib/content";
import { absoluteUrl, site, stats, statsAsOf } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt: a plain markdown briefing for AI answer engines (llmstxt.org). Generated from the same config as the site. */
export function GET() {
  const c = site.contact;
  const body = `# ${site.name}

> ${site.description}

${site.name} is an independent financial advice practice led by ${site.advisor.name} (${site.advisor.jobTitle}), serving ${c.areaServed.join(", ")}. Services: mortgage advice, insurance planning and investment planning, coordinated into one written plan. The first consultation is free, lasts 30 minutes and can be held by video or in person.

## Key facts
${stats.map((s) => `- ${s.value} ${s.label.toLowerCase()} (as of ${statsAsOf})`).join("\n")}
- Credentials: ${site.advisor.credentials.join("; ")}
- Contact: ${c.phone}, ${c.email}
- Office: ${c.street}, ${c.city}, ${c.region} ${c.postalCode}, ${c.country}
- Hours: ${c.hours}
- Book a consultation: ${absoluteUrl("/contact")}

## Services
${services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.inShort}`).join("\n")}

## Pages
- [Home](${absoluteUrl("/")})
- [About ${site.advisor.name}](${absoluteUrl("/about")})
- [Frequently asked questions](${absoluteUrl("/faq")})
- [Book a free consultation](${absoluteUrl("/contact")})
- [Disclosures](${absoluteUrl("/disclosures")})

## Frequently asked questions
${[...generalFaqs, ...services.flatMap((s) => s.faqs)].map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
