import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Marvin Asamoah — Freelance Full-Stack Developer & QA Engineer in Accra, Ghana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const anton = await readFile(join(process.cwd(), "assets/Anton-Regular.ttf"));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fdf5ee", color: "#11150c", padding: 64, fontFamily: "Anton" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", background: "#d4ee3a", border: "4px solid #11150c", borderRadius: 999, padding: "8px 28px", fontSize: 30, letterSpacing: 2 }}>
            FREELANCE · ACCRA, GHANA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.9, textTransform: "uppercase" }}>
          <div style={{ display: "flex", fontSize: 178 }}>Marvin</div>
          <div style={{ display: "flex", fontSize: 178, marginLeft: 80 }}>Asamoah</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 38, textTransform: "uppercase", letterSpacing: 1 }}>
          <div style={{ display: "flex", background: "#11150c", color: "#d4ee3a", padding: "10px 26px", borderRadius: 12 }}>Full-stack developer &amp; QA engineer</div>
          <div style={{ display: "flex" }}>marvin.getrelaytech.com</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }] },
  );
}
