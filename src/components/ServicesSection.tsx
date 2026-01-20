"use client";

import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Smile, ShieldCheck, Microscope, HeartPulse, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Dental Implants",
    description: "Premium titanium and ceramic implants for a permanent, natural-looking smile restoration.",
    icon: Stethoscope,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and contouring to create the aesthetic balance you've always desired.",
    icon: Sparkles,
  },
  {
    title: "Teeth Whitening",
    description: "Advanced laser technology for immediate, dramatic whitening results in a single session.",
    icon: Smile,
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical care including extractions and bone grafting with minimal downtime.",
    icon: ShieldCheck,
  },
  {
    title: "Diagnostics",
    description: "Next-gen 3D imaging and AI-assisted diagnostics for pinpoint accuracy in treatment.",
    icon: Microscope,
  },
  {
    title: "Preventive Care",
    description: "Comprehensive cleanings and check-ups to maintain your oral health for a lifetime.",
    icon: HeartPulse,
  },
];

  export function ServicesSection() {
    return (
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
            <div className="max-w-2xl">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
              >
                Our Expertise
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-medium text-dental-dark leading-tight"
              >
                Advanced Dental <br />
                <span className="text-dental-dark/40 italic">Solutions for You</span>
              </motion.h2>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <p className="text-dental-dark/60 max-w-[300px] text-sm leading-relaxed">
                We combine artistic vision with medical excellence to provide results that are as functional as they are beautiful.
              </p>
            </motion.div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-slate-50/50 rounded-[40px] p-10 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,163,196,0.1)] flex flex-col gap-8 border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white shadow-sm">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="h-10 w-10 rounded-full border border-dental-dark/10 flex items-center justify-center transition-all duration-500 group-hover:bg-dental-dark group-hover:text-white group-hover:-rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-medium text-dental-dark">{service.title}</h3>
                    <p className="text-dental-dark/50 leading-relaxed text-lg font-light">
                      {service.description}
                    </p>
                  </div>
  
                  <div className="mt-auto h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex justify-center"
            >
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-accent text-white px-10 h-16 text-lg font-bold group">
                <Link href="/services" className="flex items-center gap-3">
                  View All Services <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      );
    }
