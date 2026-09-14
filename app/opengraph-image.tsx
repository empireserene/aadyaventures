import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1a2c",
          color: "white",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            opacity: 0.45,
          }}
        >
          <span>A</span>
          <span>Aadya Ventures Limited · All Rights Reserved</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 500, letterSpacing: -2 }}>
            Aadya Ventures
          </div>
          <div
            style={{
              fontSize: 26,
              opacity: 0.55,
              maxWidth: 340,
              lineHeight: 1.35,
            }}
          >
            Backing operators. Building scalable companies.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
