import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wengdo.vercel.app",
    },
    {
      url: "https://wengdo.vercel.app/about",
    },
    {
      url: "https://wengdo.vercel.app/menu",
    },
    {
      url: "https://wengdo.vercel.app/shop",
    },
    {
      url: "https://wengdo.vercel.app/blog",
    },
    {
      url: "https://wengdo.vercel.app/contact",
    },
  ];
}