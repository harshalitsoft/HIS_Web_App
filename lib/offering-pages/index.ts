import technologyPagesJson from "./technology-pages.json";
import domainPagesJson from "./domain-pages.json";
import type { DomainPageData, OfferingPageData, TechnologyPageData, TechnologyNavItem } from "./types";

export const technologyPages = technologyPagesJson as Record<string, TechnologyPageData>;
export const domainPages = domainPagesJson as Record<string, DomainPageData>;

export const OFFERING_SLUGS = [
  ...Object.keys(technologyPages),
  ...Object.keys(domainPages),
] as const;

export type OfferingSlug = (typeof OFFERING_SLUGS)[number];

export const TECHNOLOGY_NAV_ITEMS: TechnologyNavItem[] = [
  { slug: "technology-ai-solution", label: "AI Solution" },
  { slug: "technology-angular-js", label: "Angular" },
  { slug: "technology-asp-dot-net", label: "Asp.net" },
  { slug: "technology-asp-dot-net-core", label: "Asp.net core" },
  { slug: "technology-c-sharp", label: "C#" },
  { slug: "technology-express-js", label: "Express JS" },
  { slug: "technology-mongodb", label: "MongoDB" },
  { slug: "technology-dotnet", label: ".Net" },
  { slug: "technology-node-js", label: "Node.js" },
  { slug: "technology-webforms", label: "WebForms" },
  { slug: "technology-winforms", label: "WinForms" },
  { slug: "technology-winui", label: "WinUI" },
  { slug: "technology-wpf", label: "WPF" },
  { slug: "technology-sharepoint", label: "Sharepoint" },
  { slug: "technology-xamarin", label: "Xamarin" },
];

export function getOfferingPage(slug: string): OfferingPageData | undefined {
  if (slug in technologyPages) {
    return technologyPages[slug];
  }
  if (slug in domainPages) {
    return domainPages[slug];
  }
  return undefined;
}

export function isOfferingSlug(slug: string): slug is OfferingSlug {
  return slug in technologyPages || slug in domainPages;
}

export * from "./types";
