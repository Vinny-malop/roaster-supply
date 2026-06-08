import type { Metadata } from "next";
import "./globals.css";
import "./legacy.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata: Metadata = {
  metadataBase: new URL("https://wholesale.damata.coffee"),
  title: "Damata Coffee Wholesale — Brazilian Specialty Coffee for Operators",
  description:
    "Roast-to-order Brazilian specialty coffee for coffee trucks, short-term rentals, and hospitality operators. Wholesale pricing, private label available, shipped fresh.",
  openGraph: {
    title: "Damata Coffee Wholesale — Brazilian Coffee for Operators",
    description:
      "Roast-to-order Brazilian specialty coffee supply for coffee trucks, short-term rentals, and hospitality businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
