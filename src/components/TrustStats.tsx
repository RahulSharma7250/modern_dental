"use client";

import { motion } from "framer-motion";
import { Users, Award, Zap } from "lucide-react";

const stats = [
  {
    label: "Happy Patients",
    value: "15k+",
    icon: Users,
    description: "Trusting us with their smiles"
  },
  {
    label: "Experience",
    value: "25+",
    icon: Award,
    description: "Years of clinical excellence"
  },
  {
    label: "Advanced Tech",
    value: "100%",
    icon: Zap,
    description: "Digital & AI diagnostics"
  }
];

  export function TrustStats() {
    return (
      <section className="w-full bg-white p-4 md:p-8">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-12 flex flex-col gap-6 group hover:bg-slate-100 transition-colors"
            >
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-5xl font-medium text-dental-dark mb-2">{stat.value}</p>
                <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">{stat.label}</p>
                <p className="text-dental-dark/40 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
