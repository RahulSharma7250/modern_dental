"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Video, ArrowRight, Upload, IndianRupee } from "lucide-react";

  export function ConsultationHighlight() {
    return (
      <section className="w-full bg-white p-4 md:p-8">
        <div 
          className="mx-auto max-w-[1400px] rounded-[48px] overflow-hidden bg-slate-50 border border-slate-100 relative shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-12 md:p-20 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white"
              >
                <Video size={32} />
              </motion.div>
              
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl md:text-6xl font-medium text-dental-dark leading-tight">
                  Online Consultation <br />
                  <span className="text-dental-dark/40 italic">From Anywhere</span>
                </h2>
                <p className="text-dental-dark/60 text-xl leading-relaxed max-w-lg">
                  Can't visit us in person? Get a professional assessment from our lead doctors through our digital portal.
                </p>
              </div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Upload, text: "Upload Photos" },
                  { icon: IndianRupee, text: "₹100 Fee" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <item.icon size={20} className="text-primary" />
                    <span className="text-dental-dark font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
  
              <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-accent px-10 h-16 text-lg font-bold group w-fit">
                <Link href="/consultation" className="flex items-center gap-3">
                  Start Consultation <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
  
            <div className="relative min-h-[400px] lg:min-h-full overflow-hidden bg-dental-dark">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent z-10 lg:block hidden" />
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop" 
                  alt="Digital Health" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="absolute bottom-12 right-12 z-20 flex flex-col gap-4">
                <div className="bg-white/90 backdrop-blur-xl border border-slate-200 p-6 rounded-[32px] flex items-center gap-4 shadow-2xl">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <p className="text-dental-dark font-bold">Fast Response</p>
                    <p className="text-dental-dark/40 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
