// src/app/page.tsx
"use client"
import Header from "@/components/Header/Header"

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <Header variant="default" notificationCount={3} />
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#1c3058",
            marginBottom: "16px",
          }}
        >
          Header Component Demo
        </h1>
        <p style={{ fontSize: "16px", color: "#6b7280", marginBottom: "24px" }}>
          The header component is now ready to use. Visit{" "}
          <a href="/examples" style={{ color: "#00897b", textDecoration: "underline" }}>
            /examples
          </a>{" "}
          to see all variants.
        </p>
      </main>
    </div>
  )
}
