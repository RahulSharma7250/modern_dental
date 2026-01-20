"use client";

import { motion } from "framer-motion";
import { ServicesSection } from "@/components/ServicesSection";
import { CTASection } from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-40 md:pt-32 lg:pt-40 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 lg:mb-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-primary text-xs md:text-sm font-black uppercase tracking-widest mb-6 md:mb-8"
          >
            Our Capabilities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-dental-dark leading-[1.1] md:leading-[0.9] tracking-tight mb-6 md:mb-10"
          >
            Comprehensive <br className="hidden sm:block" />
            <span className="italic opacity-40">Dental Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-dental-dark/50 leading-relaxed max-w-2xl mx-auto font-light px-4 sm:px-0"
          >
            We offer a full spectrum of world-class dental treatments, powered by technology and delivered with a human touch.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Technology Section */}
      <div className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            {/* Video Container */}
            <div className="relative order-2 lg:order-1 aspect-video rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-xl lg:shadow-2xl border border-slate-200">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/o2z16Oz-B7g" 
                title="Technology at Denta"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Content Container */}
            <div className="order-1 lg:order-2 px-4 sm:px-6 lg:px-0">
              <div className="h-px w-12 bg-primary mb-6 md:mb-8" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-dental-dark mb-6 md:mb-8 tracking-tight leading-tight">
                Advanced Technology
              </h2>
              <p className="text-lg md:text-xl text-dental-dark/50 mb-8 md:mb-10 leading-relaxed font-light">
                From digital impressions to AI-driven treatment planning, we use the most advanced tools available to ensure your comfort and the precision of your results.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  "Intraoral 3D Scanning",
                  "Digital X-Rays",
                  "Guided Surgery",
                  "Laser Dentistry"
                ].map((tech, i) => (
                  <li 
                    key={i} 
                    className="flex items-center gap-3 font-bold text-dental-dark p-3 md:p-4 bg-white rounded-xl md:rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}