import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "UNICORN SLAVE - Racing 78 Performance Edition"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "black",
        backgroundImage: "linear-gradient(to bottom right, #000000, #1a1a1a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        fontFamily: "sans-serif",
      }}
    >
      {/* Racing stripe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "10%",
          width: "15%",
          background: "#ff4500",
          transform: "skewX(-15deg)",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "10%",
          width: "15%",
          background: "#ff4500",
          transform: "skewX(-15deg)",
          opacity: 0.4,
        }}
      />

      {/* Content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
          width: "100%",
          height: "100%",
          padding: "60px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 72, fontWeight: "bold", color: "white", letterSpacing: "-0.025em" }}>UNICORN</div>
          <div style={{ fontSize: 32, color: "#ff4500", letterSpacing: "0.1em", marginTop: -10 }}>SLAVE</div>
        </div>

        {/* Vehicle name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 96, fontWeight: "bold", color: "white", textAlign: "center" }}>RACING 78</div>
          <div style={{ fontSize: 48, color: "#ff4500", textAlign: "center", marginTop: -10 }}>PERFORMANCE EDITION</div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            maxWidth: "800px",
          }}
        >
          <div
            style={{
              background: "rgba(255,69,0,0.8)",
              padding: "12px 24px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>250 kW</div>
            <div style={{ fontSize: 18, color: "white" }}>POWER</div>
          </div>
          <div
            style={{
              background: "rgba(255,69,0,0.8)",
              padding: "12px 24px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>500 Nm</div>
            <div style={{ fontSize: 18, color: "white" }}>TORQUE</div>
          </div>
          <div
            style={{
              background: "rgba(255,69,0,0.8)",
              padding: "12px 24px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>5.8 sec</div>
            <div style={{ fontSize: 18, color: "white" }}>0-100 km/h</div>
          </div>
        </div>
      </div>

      {/* Car silhouette */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70%",
          height: "25%",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "100px 200px 30px 30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          zIndex: 5,
        }}
      />
    </div>,
    {
      ...size,
    },
  )
}
