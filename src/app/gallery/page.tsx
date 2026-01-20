"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CTASection } from "@/components/CTASection";

const cases = [
  {
    id: 1,
    category: "implants",
    title: "Full Arch Reconstruction",
    description: "A complete restoration using advanced titanium implants and zirconia bridge.",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "cosmetic",
    title: "Porcelain Veneers",
    description: "Custom-crafted veneers to correct alignment and enhance aesthetic brightness.",
    before: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "ortho",
    title: "Invisalign Transformation",
    description: "12-month treatment plan for overcrowding and bite correction.",
    before: "https://images.unsplash.com/photo-1513412803932-49f9004246a4?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1513412803932-49f9004246a4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "implants",
    title: "Single Tooth Implant",
    description: "Natural-looking replacement with immediate functionality.",
    before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "cosmetic",
    title: "Teeth Whitening",
    description: "Professional-grade whitening for a brighter, more confident smile.",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "ortho",
    title: "Braces Treatment",
    description: "Comprehensive orthodontic correction for perfect alignment.",
    before: "https://images.unsplash.com/photo-1513412803932-49f9004246a4?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  }
];

function ComparisonCard({ item }: { item: typeof cases[0] }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {/* Image Comparison Container */}
      <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl group cursor-ew-resize hover:shadow-2xl transition-shadow duration-300">
        {/* After Image (Full Background) */}
        <Image 
          src={item.after} 
          alt={`${item.title} after`} 
          fill 
          className="object-cover"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
        />
        
        {/* Before Image (Clipped Area) */}
        <div 
          className="absolute inset-0" 
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image 
            src={item.before} 
            alt={`${item.title} before`} 
            fill 
            className="object-cover grayscale"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
          />
        </div>
        
        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-white z-20"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg sm:shadow-xl flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-1.5 sm:h-2 bg-primary rounded-full" />
              <div className="w-0.5 h-1.5 sm:h-2 bg-primary rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Slider Input */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPos} 
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label={`Compare before and after for ${item.title}`}
        />
        
        {/* Labels - Matches previous pages font style */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 bg-black/60 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-[9px] xs:text-[10px] sm:text-xs text-white font-black uppercase tracking-widest">
          Before
        </div>
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 bg-primary/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-[9px] xs:text-[10px] sm:text-xs text-white font-black uppercase tracking-widest">
          After
        </div>
      </div>
      
      {/* Content - Matches previous pages font style */}
      <div className="px-1 sm:px-2">
        <h3 className="text-lg sm:text-xl md:text-xl font-medium text-dental-dark leading-tight sm:leading-tight tracking-tight">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-dental-dark/50 mt-1.5 sm:mt-2 leading-relaxed font-light">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-40 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 mb-20">
        {/* Hero Section - Matches Services and Doctors page exactly */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-primary text-xs md:text-sm font-black uppercase tracking-widest mb-6 md:mb-8"
          >
            Clinical Portfolio
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-dental-dark leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-10 px-2 sm:px-0"
          >
            The Art of <br className="hidden xs:block" />
            <span className="italic opacity-40">Transformation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-dental-dark/50 leading-relaxed max-w-2xl mx-auto font-light px-4 sm:px-6 md:px-0"
          >
            Explore our portfolio of clinical excellence and aesthetic transformations where precision meets artistry.
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 overflow-x-auto pb-2">
            <TabsList className="bg-slate-50 p-1 sm:p-1.5 rounded-full shadow-sm border border-slate-100 h-12 sm:h-14 md:h-16 flex flex-nowrap">
              <TabsTrigger 
                value="all" 
                className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 h-10 sm:h-12 md:h-14 data-[state=active]:bg-primary data-[state=active]:text-white text-xs sm:text-sm font-bold transition-all whitespace-nowrap"
              >
                All Cases
              </TabsTrigger>
              <TabsTrigger 
                value="implants" 
                className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 h-10 sm:h-12 md:h-14 data-[state=active]:bg-primary data-[state=active]:text-white text-xs sm:text-sm font-bold transition-all whitespace-nowrap"
              >
                Implants
              </TabsTrigger>
              <TabsTrigger 
                value="cosmetic" 
                className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 h-10 sm:h-12 md:h-14 data-[state=active]:bg-primary data-[state=active]:text-white text-xs sm:text-sm font-bold transition-all whitespace-nowrap"
              >
                Cosmetic
              </TabsTrigger>
              <TabsTrigger 
                value="ortho" 
                className="rounded-full px-4 sm:px-6 md:px-8 lg:px-10 h-10 sm:h-12 md:h-14 data-[state=active]:bg-primary data-[state=active]:text-white text-xs sm:text-sm font-bold transition-all whitespace-nowrap"
              >
                Ortho
              </TabsTrigger>
            </TabsList>
          </div>

          {/* All Cases Tab */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {cases.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ComparisonCard item={item} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Category Tabs */}
          {["implants", "cosmetic", "ortho"].map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {cases
                  .filter(i => i.category === cat)
                  .map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <ComparisonCard item={item} />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action Section - Matches previous pages style */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 md:mt-32 px-4"
        >
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-primary/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-dental-dark mb-4 sm:mb-6 tracking-tight">
              Start Your Transformation Journey
            </h3>
            <p className="text-dental-dark/50 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
              Every smile has a story. Let us help write yours with personalized care and exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-primary/90 transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="bg-white text-dental-dark border border-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-50 transition-colors duration-300">
                View More Cases
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
      <CTASection />
    </div>
  );
}