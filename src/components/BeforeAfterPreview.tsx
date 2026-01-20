"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState } from "react";

const results = [
  {
    title: "Smile Makeover",
    description: "Complete smile transformation with porcelain veneers",
    before: "/smile1.jpeg?q=80&w=800&auto=format&fit=crop",
    after: "/smile2.jpeg?q=80&w=800&auto=format&fit=crop",
    treatment: "Porcelain Veneers",
    duration: "2 Weeks",
  },
  {
    title: "Full Arch Implants",
    description: "Complete dental arch restoration with implant-supported bridge",
    before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    treatment: "Dental Implants",
    duration: "6 Months",
  }
];

export function BeforeAfterPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % results.length);
  };

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black tracking-widest uppercase text-xs sm:text-sm mb-4 bg-primary/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
          >
            Clinical Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-dental-dark leading-[1.1] md:leading-tight tracking-tight mb-4 sm:mb-6"
          >
            Real Results<br/>
            <span className="text-dental-dark/40 italic">Proven Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-dental-dark/50 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            See the transformative power of modern dentistry through our patient success stories.
          </motion.p>
        </div>

        {/* Modern Before/After Cards */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile Carousel View */}
          <div className="block lg:hidden">
            <div className="relative">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100"
              >
                <div className="grid grid-cols-1">
                  {/* Before Image */}
                  <div className="relative aspect-[4/3] bg-slate-50">
                    <Image
                      src={results[activeIndex].before}
                      alt={`Before - ${results[activeIndex].title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <span className="text-white text-xs sm:text-sm font-black uppercase tracking-widest">Before</span>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative aspect-[4/3] bg-slate-50">
                    <Image
                      src={results[activeIndex].after}
                      alt={`After - ${results[activeIndex].title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      <span className="text-white text-xs sm:text-sm font-black uppercase tracking-widest">After</span>
                    </div>
                  </div>

                  {/* Content */}
                  {/* <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-dental-dark mb-2 tracking-tight">
                          {results[activeIndex].title}
                        </h3>
                        <p className="text-dental-dark/50 text-sm sm:text-base font-light">
                          {results[activeIndex].description}
                        </p>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-10 w-10 rounded-xl hover:bg-slate-100"
                      >
                        <Maximize2 size={20} />
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4">
                        <p className="text-xs sm:text-sm text-dental-dark/50 font-light mb-1">Treatment</p>
                        <p className="text-sm sm:text-base font-medium text-dental-dark">
                          {results[activeIndex].treatment}
                        </p>
                      </div>
                      <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4">
                        <p className="text-xs sm:text-sm text-dental-dark/50 font-light mb-1">Duration</p>
                        <p className="text-sm sm:text-base font-medium text-dental-dark">
                          {results[activeIndex].duration}
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <Button
                  onClick={prevCase}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-slate-200"
                >
                  <ChevronLeft size={20} />
                </Button>
                <div className="flex gap-2">
                  {results.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeIndex 
                          ? 'w-6 bg-primary' 
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  onClick={nextCase}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-slate-200"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-slate-100"
              >
                {/* Image Comparison Container */}
                <div className="grid grid-cols-2 gap-0">
                  {/* Before Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={result.before}
                      alt={`Before - ${result.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-black uppercase tracking-widest">Before</span>
                    </div>
                  </div>
                  
                  {/* After Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={result.after}
                      alt={`After - ${result.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-6 left-6 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-black uppercase tracking-widest">After</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                {/* <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-medium text-dental-dark mb-2 md:mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {result.title}
                      </h3>
                      <p className="text-dental-dark/50 text-base md:text-lg font-light leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-12 w-12 rounded-2xl hover:bg-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Maximize2 size={24} />
                    </Button>
                  </div> */}
                  
                  {/* Treatment Info */}
                  {/* <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-slate-50 rounded-2xl p-4 md:p-5 group-hover:bg-primary/5 transition-colors duration-300">
                      <p className="text-sm text-dental-dark/50 font-light mb-2">Treatment</p>
                      <p className="text-base md:text-lg font-medium text-dental-dark">
                        {result.treatment}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-4 md:p-5 group-hover:bg-primary/5 transition-colors duration-300">
                      <p className="text-sm text-dental-dark/50 font-light mb-2">Duration</p>
                      <p className="text-base md:text-lg font-medium text-dental-dark">
                        {result.duration}
                      </p>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-20 flex justify-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="rounded-full text-white px-8 sm:px-10 h-12 sm:h-14 md:h-16 text-base sm:text-lg md:text-xl font-bold group shadow-lg hover:shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
          >
            <Link href="/gallery" className="flex items-center gap-3">
              View Full Gallery 
              <ArrowRight className="transition-transform group-hover:translate-x-2" size={20} />
            </Link>
          </Button>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 sm:mt-20 md:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { number: "500+", label: "Smiles Transformed" },
              { number: "98%", label: "Patient Satisfaction" },
              { number: "10+", label: "Years Experience" },
              { number: "50+", label: "Awards Received" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-dental-dark mb-1 sm:mb-2">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-dental-dark/50 font-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}