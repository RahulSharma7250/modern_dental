"use client";

import { motion } from "framer-motion";
import { Quote, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Patient",
    content: "The precision of the 3D implant procedure was mind-blowing. I felt zero pain and the results are perfectly natural. Truly elite care.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Rajesh Kumar",
    role: "Patient",
    content: "DENTA transformed my smile with veneers. The artistic touch they bring is what sets them apart from every other clinic I visited.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Ananya Verma",
    role: "Patient",
    content: "From the consultation to the final checkup, the experience was seamless and premium. They really listen to your aesthetic goals.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

  export function Testimonials() {
    return (
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex gap-1 text-primary mb-6"
            >
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-medium text-dental-dark mb-6"
            >
              Trusted by the <span className="italic opacity-40">Elite</span>
            </motion.h2>
            <p className="text-dental-dark/50 text-xl max-w-2xl">
              Join thousands of satisfied patients who have experienced the DENTA difference.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] p-10 border border-slate-200 shadow-sm flex flex-col gap-8 relative overflow-hidden"
              >
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-slate-100 -z-0" />
                <div className="relative z-10">
                  <p className="text-dental-dark/80 text-lg leading-relaxed italic mb-8">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all">
                      <Image src={t.avatar} alt={t.name} width={56} height={56} />
                    </div>
                    <div>
                      <h4 className="text-dental-dark font-bold">{t.name}</h4>
                      <p className="text-dental-dark/40 text-sm uppercase tracking-widest font-black text-[10px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-16 flex justify-center"
            >
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-accent text-white px-10 h-16 text-lg font-bold group">
                <Link href="/about" className="flex items-center gap-3">
                  Learn More About Us <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      );
    }
