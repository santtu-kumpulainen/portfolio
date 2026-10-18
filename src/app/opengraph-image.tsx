import { ImageResponse } from "next/og";

import { siteDescription, siteName, siteRole } from "@/data/site";

export const alt = `${siteName}, ${siteRole}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Colors mirror the design tokens in globals.css; CSS variables are not
// available inside ImageResponse.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0f1113",
          borderTop: "8px solid #3b82f6",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#3b82f6" }}>
          {siteRole}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 80, fontWeight: 600, color: "#f3f4f6" }}>
            {siteName}
          </div>
          <div
            style={{
              marginTop: 24,
              maxWidth: 900,
              fontSize: 32,
              lineHeight: 1.4,
              color: "#a7adb5",
            }}
          >
            {siteDescription}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
