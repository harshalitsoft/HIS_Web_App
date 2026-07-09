import dynamic from "next/dynamic";
import Header from "@/components/Header";
import TechCards from "@/components/Home/TechCards";

import LazyBrandCarousel from "@/components/Home/LazyBrandCarousel";
import { LazyDomains, LazyInTouchButton, LazyTechnologies, LazyWhyChooseHIS, LazyYearsOfExperience } from "@/lib/service-page-lazy-sections";

 


export default function Home() {
  return (
      
 <>
      <Header />
      <TechCards /> 
      <LazyBrandCarousel />
      <LazyYearsOfExperience />
      <LazyTechnologies />
      <LazyDomains />
      <LazyInTouchButton />
      <LazyWhyChooseHIS />
      {/* <NewCarousel /> */}

        
    </>
  );
}
