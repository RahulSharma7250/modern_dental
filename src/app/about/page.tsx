"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, Users, Award } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Hero Section - Updated to match Gallery page style */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-primary text-xs md:text-sm font-black uppercase tracking-widest mb-6 md:mb-8"
          >
            Our Legacy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-dental-dark leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-10 px-2 sm:px-0"
          >
            Redefining <br className="hidden xs:block" />
            <span className="italic opacity-40">Dental Excellence</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-dental-dark/50 leading-relaxed max-w-2xl mx-auto font-light px-4 sm:px-6 md:px-0"
          >
            Founded on the principles of precision, aesthetics, and patient-centric care, DENTA has become a sanctuary for those seeking the very best in oral health.
          </motion.p>
        </div>

        {/* Stats Section Below Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24 lg:mb-32 px-4 sm:px-0"
        >
          {[
            { number: "98%", label: "Patient Satisfaction" },
            { number: "25+", label: "Industry Awards" },
            { number: "15+", label: "Years Experience" },
            { number: "10K+", label: "Smiles Transformed" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-slate-50 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-dental-dark mb-1 sm:mb-2">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-dental-dark/50 font-light">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Image & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-2xl sm:rounded-3xl md:rounded-[3rem] overflow-hidden shadow-xl md:shadow-2xl border border-slate-100"
          >
            <Image 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Clinic" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dental-dark/20 via-transparent to-transparent" />
          </motion.div>

          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="px-4 sm:px-0"
          >
            <div className="h-px w-12 bg-primary mb-6 md:mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-dental-dark mb-4 md:mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-dental-dark/50 leading-relaxed mb-6 md:mb-8 font-light">
              To redefine dental care by blending cutting-edge technology with compassionate, personalized treatment for every patient.
            </p>
            <p className="text-base sm:text-lg text-dental-dark/60 leading-relaxed font-light">
              We believe in creating an environment where patients feel heard, understood, and confident in their treatment journey. Our team is dedicated to continuous learning and innovation, ensuring we deliver the highest standard of care possible.
            </p>
          </motion.div>
        </div>

        {/* Mission & Values */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
            <div className="h-px w-12 bg-primary mx-auto mb-6 md:mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-dental-dark mb-4 md:mb-6 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-dental-dark/50 leading-relaxed font-light px-4 sm:px-0">
              The principles that guide every decision and interaction at our practice
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { 
                icon: Target, 
                title: "Precision", 
                desc: "Every procedure is executed with microscopic accuracy." 
              },
              { 
                icon: Shield, 
                title: "Trust", 
                desc: "Building lifelong relationships through transparency." 
              },
              { 
                icon: Users, 
                title: "Empathy", 
                desc: "Understanding the person behind the patient." 
              },
              { 
                icon: Award, 
                title: "Quality", 
                desc: "Only the finest materials and latest technology." 
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* Icon Container */}
                <div className="inline-flex p-3 sm:p-4 bg-primary/10 rounded-2xl mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="text-primary w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-xl font-medium text-dental-dark mb-2 sm:mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-dental-dark/50 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4 sm:px-0 mb-16 sm:mb-20 md:mb-24 lg:mb-32"
        >
          <div className="h-px w-12 bg-primary mx-auto mb-6 md:mb-8" />
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-dental-dark mb-6 md:mb-8 tracking-tight">
            Our Philosophy
          </h2>
          
          {/* Main Paragraph */}
          <p className="text-lg sm:text-xl md:text-2xl text-dental-dark/50 leading-relaxed mb-10 md:mb-12 font-light italic">
            We believe that a smile is more than just teeth—it's an expression of confidence and well-being.
          </p>
          
          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-dental-dark/60 leading-relaxed mb-10 md:mb-12 font-light">
            Our approach integrates the latest digital dentistry workflows with a human touch, ensuring that every patient feels empowered and cared for throughout their journey. From your initial consultation to long-term follow-up, we're committed to delivering exceptional care that exceeds expectations.
          </p>
          
          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16">
            {[
              { number: "50+", label: "Specialized Treatments" },
              { number: "24/7", label: "Patient Support" },
              { number: "100%", label: "Sterilization" },
              { number: "4.9★", label: "Average Rating" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-dental-dark mb-1 sm:mb-2">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm text-dental-dark/50 font-light">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4"
        >
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-primary/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-dental-dark mb-4 sm:mb-6 tracking-tight">
              Experience Excellence Firsthand
            </h3>
            <p className="text-dental-dark/50 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
              Schedule your consultation today and discover why thousands trust us with their smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-primary/90 transition-colors duration-300">
                Book Appointment
              </button>
              <button className="bg-white text-dental-dark border border-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-50 transition-colors duration-300">
                Virtual Tour
              </button>
            </div>
          </div>
        </motion.div> */}
        
      </div>
      <CTASection />
    </div>
  );
}