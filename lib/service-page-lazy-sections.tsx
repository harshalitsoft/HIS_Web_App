import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const serviceSectionLoading = () => <div className="w-100 py-5" aria-hidden />;

export function lazyServiceAboutSection(
  loader: () => Promise<{ default: ComponentType }>
) {
  return dynamic(loader, { loading: serviceSectionLoading });
}

export const LazyServiceProConsSection = dynamic(
  () => import("@/components/Service/ProConsSection"),
  { loading: serviceSectionLoading }
);

export const LazyServiceHowWeWork = dynamic(
  () => import("@/components/Service/HowWeWork"),
  { loading: serviceSectionLoading }
);

export const LazyYearsOfExperience = dynamic(
  () => import("@/components/Home/YearsOfExperience"),
  { loading: serviceSectionLoading }
);
export const LazyTechnologies = dynamic(() => import("@/components/Home/Technologies"), {
  loading: serviceSectionLoading,
});
export const LazyDomains = dynamic(() => import("@/components/Home/Domains"), {
  loading: serviceSectionLoading,
});
export const LazyInTouchButton = dynamic(() => import("@/components/Home/InTouchButton"), {
  loading: serviceSectionLoading,
});
export const LazyWhyChooseHIS = dynamic(() => import("@/components/Home/WhyChooseHIS"), {
  loading: serviceSectionLoading,
});