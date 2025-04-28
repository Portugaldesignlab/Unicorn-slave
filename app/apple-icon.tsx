import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 120,
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ff4500", // Primary color from the theme
        fontWeight: "bold",
        borderRadius: "20px",
      }}
    >
      U
    </div>,
    {
      ...size,
    },
  )
}
