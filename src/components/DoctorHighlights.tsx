"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rajesh Patel",
    role: "Lead Implantologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    experience: "12+ Years",
  },
  {
    name: "Dr. Rahul Sharma",
    role: "Cosmetic Dentist",
    image: "/Rahul.png?q=80&w=800&auto=format&fit=crop",
    experience: "10+ Years",
  },
  {
    name: "Dr. Priya Desai",
    role: "Orthodontist Specialist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    experience: "15+ Years",
  },
];

  export function DoctorHighlights() {
    return (
      <section className="w-full bg-white p-4 md:p-8">
        <div 
          className="relative mx-auto max-w-[1400px] rounded-[40px] overflow-hidden flex flex-col p-12 md:p-24 bg-dental-dark border border-white/5 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold tracking-widest uppercase text-sm mb-6"
              >
                Master Clinicians
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-medium text-white leading-tight mb-8"
              >
                The Hands <br />
                <span className="text-white/40 italic">Behind the Smiles</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-xl leading-relaxed max-w-lg mb-12"
              >
                Our doctors are not just practitioners; they are artisans of oral health, combining decades of experience with a passion for aesthetic perfection.
              </motion.p>
              <Button asChild className="rounded-full bg-primary hover:bg-accent text-white px-10 h-16 text-lg group">
                <Link href="/doctors" className="flex items-center gap-3">
                  Meet the Team <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.slice(0, 2).map((doctor, index) => (
                <motion.div
                  key={doctor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[32px]">
                    <Image 
                      src={doctor.image} 
                      alt={doctor.name} 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dental-dark via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{doctor.role}</p>
                      <h3 className="text-2xl font-medium text-white">{doctor.name}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
