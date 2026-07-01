import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rs4dstudio.vercel.app"),
  title: { default: "RS4DStudio | 3D Character Sculptor", template: "%s | RS4DStudio" },
  description: "Premium 3D character sculpting for collectible statues, stylized characters, miniatures, 3D printing, games, and production-ready models.",
  applicationName: "RS4DStudio",
  keywords: ["3D character sculptor", "collectible statue artist", "ZBrush sculptor", "miniature sculpting", "3D printable models", "STL optimization"],
  authors: [{ name: "RS4DStudio" }],
  creator: "RS4DStudio",
  openGraph: { title: "RS4DStudio | Premium 3D Character Sculpting", description: "Stylized and collectible-ready character sculpts for games, 3D printing, toys, Kickstarter campaigns, and production.", url: "https://rs4dstudio.vercel.app", siteName: "RS4DStudio", images: [{ url: "/og.svg", width: 1200, height: 630, alt: "RS4DStudio premium 3D character sculpting" }], locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "RS4DStudio | Premium 3D Character Sculpting", description: "Collectible-ready sculpting for games, statues, miniatures, and 3D printing.", images: ["/og.svg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" }
};

export const viewport: Viewport = { themeColor: "#090909", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body className={`${inter.variable} font-sans antialiased`}>{children}<div className="noise" aria-hidden="true" /></body></html>;
}
