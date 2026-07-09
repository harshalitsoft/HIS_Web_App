import dynamic from "next/dynamic";
import HeadSection from "@/components/Careers/HeadSection";

const sectionLoading = () => <div className="w-100 py-5" aria-hidden />;

const BenefitsContainer = dynamic(
  () => import("@/components/Careers/BenefitsContainer"),
  { loading: sectionLoading }
);
const ClientTestiSection = dynamic(
  () => import("@/components/Careers/ClientTestiSection"),
  { loading: sectionLoading }
);

export default function Careers() {
  return (
      
 <>
        <HeadSection />
        <BenefitsContainer />
        <ClientTestiSection/>
        
    </>
  );
}
