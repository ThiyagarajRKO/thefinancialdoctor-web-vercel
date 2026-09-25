"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/**
 * Calendly facade. The scheduler iframe (about 3MB plus third party cookies) only loads
 * when the visitor scrolls it into view or clicks, so it never slows the first paint.
 * No Calendly widget script is used.
 */
/** True while site.calendlyUrl is still the template placeholder. */
const isPlaceholder = /your-handle/i.test(site.calendlyUrl);

export function Calendly() {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || load || isPlaceholder) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -120px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  const params = new URLSearchParams({
    embed_type: "Inline",
    embed_domain: new URL(site.url).host,
    hide_gdpr_banner: "1",
    background_color: "ffffff",
    text_color: "152321",
    primary_color: "0b5d56",
  });

  // Until a real Calendly link is set in src/lib/site.ts, show direct contact options instead of Calendly's 404 page.
  if (isPlaceholder) {
    return (
      <div className="calendly" id="book">
        <div className="calendly-facade">
          <p className="calendly-facade-title">Book your free consultation</p>
          <p>Online booking is coming soon. Call or email and we will find a time that suits you.</p>
          <a className="btn btn-primary" href={`tel:${site.contact.phoneHref}`}>Call {site.contact.phone}</a>
          <a className="link-arrow" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </div>
      </div>
    );
  }

  return (
    <div className="calendly" ref={ref} id="book">
      {load ? (
        <iframe src={`${site.calendlyUrl}?${params.toString()}`} title="Book a free consultation" width="100%" height="720" />
      ) : (
        <div className="calendly-facade">
          <p className="calendly-facade-title">Choose a time that suits you</p>
          <p>Free 30 minute consultation, by video or in person.</p>
          <button type="button" className="btn btn-primary" onClick={() => setLoad(true)}>
            Show available times
          </button>
        </div>
      )}
      <p className="calendly-fallback">
        Calendar not loading? <a href={site.calendlyUrl} target="_blank" rel="noopener">Open it in a new tab</a>.
      </p>
    </div>
  );
}
