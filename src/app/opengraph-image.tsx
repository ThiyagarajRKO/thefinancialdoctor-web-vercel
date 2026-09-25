import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#062925", color: "#f1f7f5" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: "#9ee6c6", display: "flex", alignItems: "center", justifyContent: "center", color: "#062925", fontSize: 48 }}>+</div>
          <div style={{ fontSize: 36 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2, maxWidth: 960 }}>
            Mortgages, insurance and investing, planned as one.
          </div>
          <div style={{ fontSize: 28, color: "#a9c3bd" }}>Independent advice. Clear numbers. Free first consultation.</div>
        </div>
        <div style={{ display: "flex", height: 10, width: "100%" }}>
          <div style={{ flex: 3, background: "#0b5d56" }} />
          <div style={{ flex: 1, background: "#9ee6c6" }} />
        </div>
      </div>
    ),
    size,
  );
}
