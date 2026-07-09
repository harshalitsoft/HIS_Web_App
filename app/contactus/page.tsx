import dynamic from "next/dynamic";
import AddressSection from "@/components/ContactUs/AddressSection";
import ContactSection from "@/components/ContactUs/ContactSection";

const mapLoading = () => (
  <div className="container google-map-container py-5" style={{ minHeight: 400 }} aria-hidden />
);

const MapSection = dynamic(() => import("@/components/ContactUs/MapSection"), {
  loading: mapLoading,
});

export default function ContactUs() {
  return (
    <>
    <div style={{marginTop: '100px'}}>
      <ContactSection />
      <AddressSection />
      <MapSection />
        </div>
        </>
  );
}
