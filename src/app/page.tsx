import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { DoctorHighlights } from "@/components/DoctorHighlights";
import { BeforeAfterPreview } from "@/components/BeforeAfterPreview";
import { CTASection } from "@/components/CTASection";
import { TrustStats } from "@/components/TrustStats";
import { Testimonials } from "@/components/Testimonials";
import { ConsultationHighlight } from "@/components/ConsultationHighlight";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      <div className="flex flex-col gap-0 bg-white">
        <TrustStats />
        <ServicesSection />
        <ConsultationHighlight />
        <BeforeAfterPreview />
        <DoctorHighlights />
        <Testimonials />
        <CTASection />
      </div>
    </div>
  );
}
