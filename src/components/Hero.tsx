"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images for the right column
  const galleryImages = [
    { src: "/derma.jpeg", alt: "Before & After 1" },
    { src: "/doct.jpeg", alt: "Before & After 2" },
    { src: "/doct4.jpeg", alt: "Before & After 3" },
    { src: "/Rahul.png", alt: "Before & After 4" },
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section className="w-full min-h-screen bg-dental-dark">
<div 
  className="relative w-full min-h-screen overflow-hidden flex flex-col p-8 md:p-16 !pt-30"
  style={{ 
    background: "radial-gradient(circle at 50% 70%, #00A3C4 0%, #006D80 30%, #083344 60%, #0F172A 100%)",
  }}
>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none gap-30">
          <Sparkles size={400} strokeWidth={0.5} className="text-white" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 items-center">
          
          {/* Left Column (Text) */}
          <div className="col-span-1 flex flex-col gap-6 md:gap-10 lg:text-left text-center items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full text-white/80 text-xs font-bold uppercase tracking-[0.3em] border border-white/10 w-fit"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Elite Dental Care
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-[0.9] tracking-tighter"
            >
              Modern Care <br />
              for a <span className="italic text-primary font-light">Perfect</span> <br />
              Smile
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-sm"
            >
              Experience a new era of dentistry where advanced 3D technology meets artistic precision for life-changing results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-accent text-white px-8 md:px-10 h-14 md:h-16 text-sm md:text-base font-bold group shadow-[0_20px_40px_-10px_rgba(0,163,196,0.5)] w-full sm:w-auto">
                <Link href="/contact" className="flex items-center gap-3">
                  Book Appointment <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>

              {/* Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 p-3 rounded-[20px] flex flex-col gap-1 shadow-2xl w-fit"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-7 w-7 rounded-full border-1.5 border-dental-dark overflow-hidden bg-zinc-800">
                      <Image src={i === 1 ? "/doct3.jpeg?q=80&w=150&auto=format&fit=crop" : i === 2 ? "/doct.jpeg?q=80&w=150&auto=format&fit=crop" : i === 3 ? "/white2.jpeg?q=80&w=150&auto=format&fit=crop" : "/fix.jpeg?q=80&w=150&auto=format&fit=crop"} alt="User" width={28} height={28} />
                    </div>
                  ))}
                </div>
                <p className="text-white font-bold text-xs">Join 15,000+ Happy Patients</p>
                <div className="flex text-primary gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={10} fill="currentColor" />)}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Center Column (Image - Centered) */}
          <div className="col-span-1 relative flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[550px] aspect-[3/3] flex items-center justify-center"
            >
              {/* Dynamic Glow Layers */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary opacity-30 blur-[150px] rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white opacity-10 blur-[100px] rounded-full" />
              
              <Image
                src="/teeth.png"
                alt="3D Dental Implant"
                width={700}
                height={600}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                priority
              />
            </motion.div>
          </div>

          {/* Right Column (Image Carousel) */}
          <div className="col-span-1 flex flex-col gap-10 items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-[300px] h-[380px] rounded-[20px] overflow-hidden shadow-2xl"
            >
              {/* Gallery Image Container */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={handleNextImage}
              className="group relative w-16 h-16 rounded-full bg-primary hover:bg-accent text-white transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(0,163,196,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(0,163,196,0.7)] flex items-center justify-center"
            >
              <ChevronRight size={28} className="transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {galleryImages.map((_, index) => (
                <motion.div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentImageIndex ? "w-8 bg-primary" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hero Footer */}
        {/* <div className="relative z-30 mt-auto pt-16 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white/5">
          <div className="flex items-center gap-16">
            <div className="flex flex-col gap-1">
              <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Establishment</span>
              <span className="text-white font-bold text-lg">SINCE 1998</span>
            </div>
            <div className="hidden md:flex flex-col gap-1">
              <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Location</span>
              <span className="text-white font-bold text-lg">DELHI • MUMBAI • BANGALORE</span>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="text-right">
              <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">Digital Diagnostics</p>
              <p className="text-white font-bold text-lg tracking-widest uppercase">Precision-AI</p>
            </div>
            <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
              <ChevronRight size={24} />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
