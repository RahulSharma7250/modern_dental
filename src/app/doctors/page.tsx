"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const doctors = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Lead Implantologist",
    image: "/doct4.jpeg?q=80&w=600&auto=format&fit=crop",
    experience: "15+ Years",
    bio: "Specializing in advanced dental implants and full-mouth rehabilitation with a focus on minimally invasive techniques and precision placement.",
    education: "BDS, Delhi University",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Cosmetic Dentist",
    image: "/doct.jpeg?q=80&w=600&auto=format&fit=crop",
    experience: "12+ Years",
    bio: "An expert in aesthetic balance, Priya combines artistry with clinical excellence to create naturally beautiful smiles tailored to each patient.",
    education: "BDS, Mumbai University",
  },
  {
    name: "Dr. Rahul Sharma",
    role: "Orthodontist Specialist",
    image: "/Rahul.png?q=80&w=600&auto=format&fit=crop",
    experience: "18+ Years",
    bio: "Anil leads our orthodontics department, specializing in clear aligners and complex bite corrections with proven results across all age groups.",
    education: "MDS, Bangalore Institute of Dental Sciences",
  },
  {
    name: "Dr. Neha Patel",
    role: "Periodontist",
    image: "/derma.jpeg?q=80&w=600&auto=format&fit=crop",
    experience: "10+ Years",
    bio: "Dedicated to gum health and oral foundation, Neha ensures the longevity of every dental procedure with comprehensive periodontal care.",
    education: "BDS, Ahmedabad Medical University",
  },
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen pt-40 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 mb-20">
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-primary text-xs md:text-sm font-black uppercase tracking-widest mb-6 md:mb-8"
          >
            Our Medical Board
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-dental-dark leading-[1.1] md:leading-[0.9] tracking-tight mb-6 md:mb-10 px-2 sm:px-0"
          >
            The Artisans of <br className="hidden xs:block" />
            <span className="italic opacity-40">Modern Dentistry</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-dental-dark/50 leading-relaxed max-w-2xl mx-auto font-light px-4 sm:px-6 md:px-0"
          >
            Our clinicians are more than just dentists; they are specialists, researchers, and artists committed to the highest standards of care.
          </motion.p>
        </div>
        
        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-32">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-center md:items-start px-4 sm:px-0"
            >
              {/* Doctor Image Container */}
              <div className="relative w-full sm:w-4/5 md:w-72 lg:w-80 xl:w-96 aspect-[3/4] md:aspect-[4/5] rounded-3xl sm:rounded-[40px] md:rounded-[48px] overflow-hidden shadow-xl md:shadow-2xl bg-slate-100 border border-slate-100">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Experience Badge for Mobile */}
                <div className="absolute top-4 right-4 md:hidden px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-dental-dark shadow-sm">
                  {doctor.experience}
                </div>
              </div>

              {/* Doctor Info Container */}
              <div className="flex-1 flex flex-col justify-center py-2 md:py-4 w-full">
                <div className="mb-6 md:mb-8">
                  {/* Role Badge */}
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-black uppercase tracking-widest mb-3 md:mb-4"
                  >
                    {doctor.role}
                  </motion.div>
                  
                  {/* Name */}
                  <h3 className="text-3xl sm:text-4xl md:text-4xl font-medium text-dental-dark tracking-tight mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  
                  {/* Education */}
                  <p className="text-dental-dark/40 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 md:mb-0">
                    {doctor.education}
                  </p>
                  
                  {/* Experience for Desktop */}
                  <div className="hidden md:flex items-center gap-2 mt-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-bold text-dental-dark/60">{doctor.experience} Experience</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-dental-dark/60 text-base sm:text-lg md:text-lg leading-relaxed mb-8 md:mb-10 font-light italic">
                  "{doctor.bio}"
                </p>

                {/* Action Buttons - All in one row */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Social Buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    {[Linkedin, Mail].map((Icon, i) => (
                      <Button 
                        key={i} 
                        variant="outline" 
                        size="icon" 
                        className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl sm:rounded-2xl border-slate-200 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 flex-shrink-0"
                        aria-label={i === 0 ? "LinkedIn profile" : "Send email"}
                      >
                        <Icon size={18} className="sm:w-5 sm:h-5" />
                      </Button>
                    ))}
                  </div>
                  
                  {/* Book Visit Button */}
                  <Button 
                    asChild 
                    className="rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 h-10 sm:h-11 md:h-12 bg-dental-dark text-white hover:bg-primary transition-all duration-300 font-bold text-sm sm:text-base flex-1 min-w-[120px] sm:flex-none"
                  >
                    <Link 
                      href="/contact" 
                      className="flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Calendar size={16} className="sm:w-5 sm:h-5 flex-shrink-0" /> 
                      <span>Book Now</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 px-4"
        >
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center border border-primary/20">
            <h4 className="text-xl sm:text-2xl font-medium text-dental-dark mb-3 sm:mb-4">
              Ready to Transform Your Smile?
            </h4>
            <p className="text-dental-dark/60 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Schedule a consultation with one of our specialists and take the first step towards your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button asChild size="lg" className="rounded-xl sm:rounded-2xl bg-primary text-white hover:bg-primary/90 px-8 h-12 text-base font-bold">
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar size={20} /> Book Appointment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl sm:rounded-2xl border-dental-dark text-dental-dark hover:bg-dental-dark hover:text-white px-8 h-12 text-base font-bold">
                <Link href="/contact#call">
                  Call: (555) 123-4567
                </Link>
              </Button>
            </div>
          </div>
        </motion.div> */}
      </div>
      <CTASection />
    </div>
  );
}