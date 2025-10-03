// app/layout.tsx
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Innovr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#ffffff" }}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
