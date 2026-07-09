export interface ProConItem {
  title: string;
  content: string;
}

export interface TechnologyPageData {
  type: "technology";
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  header: {
    title: string;
    breadcrumb: string;
    poster: string;
    video: string;
  };
  about: {
    heading: string;
    image: string;
    imageAlt: string;
    summary: string;
    details: string;
    ctaText: string;
  };
  proCons: {
    prosHeading: string;
    consHeading: string;
    prosIntro: string;
    consIntro: string;
    pros: ProConItem[];
    cons: ProConItem[];
  };
}

export interface DomainOfferingItem {
  title: string;
  image: string;
  imageAlt: string;
  summary: string;
  details: string;
  reversed: boolean;
}

export interface DomainPageData {
  type: "domain";
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  header: {
    title: string;
    tagline: string;
    titleClass: string;
    image: string;
    imageAlt: string;
    imageClass: string;
    intro: string;
    hasIntroSection: boolean;
  };
  offeringsHeading: string;
  offerings: DomainOfferingItem[];
}

export type OfferingPageData = TechnologyPageData | DomainPageData;

export interface TechnologyNavItem {
  slug: string;
  label: string;
}
