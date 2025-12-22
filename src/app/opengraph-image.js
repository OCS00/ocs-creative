import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          color: "white",
        }}
      >
        <div style={{ fontSize: 120, fontWeight: "bold", background: "linear-gradient(to right, #818cf8, #c084fc)", backgroundClip: "text", color: "transparent" }}>
          OCS
        </div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#9ca3af" }}>
          Creative Studio
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}