import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b5d56", position: "relative" }}>
        <div style={{ position: "absolute", left: 73, top: 39, width: 34, height: 102, borderRadius: 8, background: "#ffffff" }} />
        <div style={{ position: "absolute", left: 39, top: 73, width: 102, height: 34, borderRadius: 8, background: "#ffffff" }} />
        <div style={{ position: "absolute", left: 118, top: 118, width: 22, height: 22, borderRadius: 5, background: "#9ee6c6" }} />
      </div>
    ),
    size,
  );
}
