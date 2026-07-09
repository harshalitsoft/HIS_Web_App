import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DomainOfferingPage from "@/components/Offering/DomainOfferingPage";
import TechnologyOfferingPage from "@/components/Offering/TechnologyOfferingPage";
import {
  OFFERING_SLUGS,
  getOfferingPage,
  isOfferingSlug,
} from "@/lib/offering-pages";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return OFFERING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getOfferingPage(slug);

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: page.metadata.title,
    description: page.metadata.description,
  };
}

export default async function OfferingPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isOfferingSlug(slug)) {
    notFound();
  }

  const page = getOfferingPage(slug);
  if (!page) {
    notFound();
  }

  if (page.type === "technology") {
    return <TechnologyOfferingPage page={page} />;
  }

  return <DomainOfferingPage page={page} />;
}
