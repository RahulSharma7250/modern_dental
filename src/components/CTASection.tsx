"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, Phone } from "lucide-react";

  export function CTASection() {
    return (
      <section className="w-full bg-white p-4 md:p-8">
        <div 
          className="relative mx-auto max-w-[1400px] rounded-[40px] overflow-hidden flex flex-col p-12 md:p-32 bg-gradient-to-br from-primary to-[#006D80] border border-white/10 shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Sparkles size={300} strokeWidth={0.5} className="text-white" />
          </div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
  
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold uppercase tracking-widest border border-white/20 mb-10"
            >
              <Calendar size={16} /> Schedule Your Visit
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-medium text-white leading-[1] mb-12"
            >
              Ready to Start Your <br />
              <span className="italic opacity-80">Smile Journey?</span>
            </motion.h2>
  
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-xl md:text-2xl leading-relaxed mb-16 max-w-2xl mx-auto"
            >
              Book your consultation today and discover why we are the preferred choice for premium dental care.
            </motion.p>
  
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-slate-50 px-12 h-20 text-xl font-medium group shadow-2xl">
                <Link href="/contact" className="flex items-center gap-3">
                  Book Appointment <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/40 text-white hover:bg-white/10 px-12 h-20 text-xl font-medium bg-transparent">
                <Link href="/services" className="flex items-center gap-3">
                  View Services <Phone className="ml-2 h-5 w-5 opacity-50" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
