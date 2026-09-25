"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Icon } from "./Icon";

/** True while site.calendlyUrl is still the template placeholder. */
const isPlaceholder = /your-handle/i.test(site.calendlyUrl);

/**
 * Booking card: our own branded header, with Calendly's date and time picker below it.
 * Calendly's header and event panel are hidden so only the picker shows.
 * The iframe (about 3MB plus third party cookies) only loads when the card scrolls
 * into view or the visitor clicks, so it never slows the first paint. No Calendly script is used.
 */
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
    hide_event_type_details: "1",
    hide_landing_page_details: "1",
    hide_gdpr_banner: "1",
    // Applied by Calendly on paid plans; ignored on the free plan.
    background_color: "ffffff",
    text_color: "152321",
    primary_color: "0b5d56",
  });

  const initials = site.advisor.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <div className="booking" ref={ref} id="book">
      <div className="booking-head">
        <span className="booking-av" aria-hidden="true">{initials}</span>
        <div className="booking-who">
          <p className="booking-title">Free consultation</p>
          <p className="booking-sub">with {site.advisor.name}</p>
        </div>
        <ul className="booking-chips" aria-label="Meeting details">
          <li><Icon name="clock" size={14} /> 30 min</li>
          <li><Icon name="calendar" size={14} /> Video or in person</li>
          <li><Icon name="check" size={14} /> No obligation</li>
        </ul>
      </div>

      <div className="booking-body">
        {isPlaceholder ? (
          <div className="booking-facade">
            <p className="booking-facade-title">Online booking is coming soon</p>
            <p>Call or email and we will find a time that suits you.</p>
            <a className="btn btn-primary" href={`tel:${site.contact.phoneHref}`}>Call {site.contact.phone}</a>
            <a className="link-arrow" href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </div>
        ) : load ? (
          <iframe
            src={`${site.calendlyUrl}?${params.toString()}`}
            title="Choose a date and time for your free consultation"
            className="booking-frame"
          />
        ) : (
          <div className="booking-facade">
            <p className="booking-facade-title">Pick a date and time</p>
            <p>Live availability, updated in real time.</p>
            <button type="button" className="btn btn-primary" onClick={() => setLoad(true)}>
              Show available times
            </button>
          </div>
        )}
      </div>

      {!isPlaceholder && (
        <p className="booking-foot">
          <Icon name="shield" size={14} /> Your details are only used to arrange this meeting.
          <a href={site.calendlyUrl} target="_blank" rel="noopener">Open in a new tab</a>
        </p>
      )}
    </div>
  );
}
