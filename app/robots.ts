import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: "/" }], sitemap: "https://rs4dstudio.vercel.app/sitemap.xml" }; }
