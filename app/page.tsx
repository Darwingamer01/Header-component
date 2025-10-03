"use client"

import Header from "@/components/Header/Header"
import { useState } from "react"

export default function Home() {
  const [activeVariant, setActiveVariant] = useState<string>("default")

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Demo Section */}
      <div style={{ marginBottom: "40px" }}>
        {activeVariant === "default" && (
          <Header
            variant="default"
            notificationCount={3}
            onStartSessionClick={() => console.log("Start session clicked")}
          />
        )}
        {activeVariant === "simple" && <Header variant="simple" onMenuClick={() => console.log("Menu clicked")} />}
        {activeVariant === "back-only" && (
          <Header
            variant="back-only"
            onBackClick={() => console.log("Back clicked")}
            onMenuClick={() => console.log("Menu clicked")}
          />
        )}
        {activeVariant === "back-with-title" && (
          <Header
            variant="back-with-title"
            title="Patient Information"
            onBackClick={() => console.log("Back clicked")}
            onMenuClick={() => console.log("Menu clicked")}
          />
        )}
      </div>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
        {/* Variant Selector */}
        <div style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#363335",
              marginBottom: "16px",
            }}
          >
            Select Variant
          </h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["default", "simple", "back-only", "back-with-title"].map((variant) => (
              <button
                key={variant}
                onClick={() => setActiveVariant(variant)}
                style={{
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: activeVariant === variant ? "2px solid #00897b" : "2px solid #e5e7eb",
                  backgroundColor: activeVariant === variant ? "#e6f7f5" : "#ffffff",
                  color: activeVariant === variant ? "#00897b" : "#6b7280",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
