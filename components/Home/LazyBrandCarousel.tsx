"use client";

import dynamic from "next/dynamic";

const sectionLoading = () => <div className="w-100 py-5" aria-hidden />;

export default dynamic(() => import("./BrandCarousel"), {
  loading: sectionLoading,
  ssr: false,
});
