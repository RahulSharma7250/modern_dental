"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 sm:pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 bg-white">
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
        {/* Hero Section - Matches previous pages */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-primary text-xs md:text-sm font-black uppercase tracking-widest mb-6 md:mb-8"
          >
            Contact Us
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-dental-dark leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-10 px-2 sm:px-0"
          >
            Get in <br className="hidden xs:block" />
            <span className="italic opacity-40">Touch</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-dental-dark/50 leading-relaxed max-w-2xl mx-auto font-light px-4 sm:px-6 md:px-0"
          >
            We're here to answer your questions and help you start your journey toward a perfect smile.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-32 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 sm:space-y-10 md:space-y-12 px-4 sm:px-0"
          >
            <div>
              <div className="h-px w-12 bg-primary mb-6 md:mb-8" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-dental-dark mb-4 md:mb-6 tracking-tight">
                How to Reach Us
              </h2>
              <p className="text-lg sm:text-xl text-dental-dark/50 leading-relaxed font-light">
                Choose the most convenient way to connect with our team.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {[
                { 
                  icon: Phone, 
                  title: "Phone", 
                  content: "+91 (98) 1234-5678",
                  subcontent: "Available 10AM-8PM, Mon-Sat"
                },
                { 
                  icon: Mail, 
                  title: "Email", 
                  content: "hello@dentalclinic.in",
                  subcontent: "Response within 24 hours"
                },
                { 
                  icon: MapPin, 
                  title: "Location", 
                  content: "Premium Dental Care, Connaught Place",
                  subcontent: "New Delhi - 110001, India"
                },
                { 
                  icon: Clock, 
                  title: "Hours", 
                  content: "Mon - Sat: 10:00 AM - 8:00 PM",
                  subcontent: "Sun: 11:00 AM - 5:00 PM"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 sm:gap-6 items-start group hover:bg-slate-50 p-4 rounded-2xl transition-colors duration-300"
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-dental-dark text-base sm:text-lg md:text-xl mb-1 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-dental-dark font-bold text-sm sm:text-base md:text-lg mb-1">
                      {item.content}
                    </p>
                    {item.subcontent && (
                      <p className="text-dental-dark/50 text-xs sm:text-sm font-light">
                        {item.subcontent}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-10"
            >
              <div className="bg-slate-50 rounded-2xl sm:rounded-3xl aspect-video overflow-hidden border border-slate-100 shadow-sm">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-dental-dark/30 mx-auto mb-4" />
                    <p className="text-dental-dark/50 font-light">Interactive Map Location</p>
                    <p className="text-dental-dark/30 text-sm mt-2">Click to view directions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-lg sm:shadow-xl md:shadow-2xl border border-slate-100"
          >
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-dental-dark mb-3 sm:mb-4 tracking-tight">
                Send a Message
              </h2>
              <p className="text-dental-dark/50 text-sm sm:text-base font-light">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-dental-dark font-bold text-sm sm:text-base">First Name</Label>
                  <Input 
                    id="first-name" 
                    placeholder="John" 
                    className="h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-dental-neutral/50 border-none focus-visible:ring-primary text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-dental-dark font-bold text-sm sm:text-base">Last Name</Label>
                  <Input 
                    id="last-name" 
                    placeholder="Doe" 
                    className="h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-dental-neutral/50 border-none focus-visible:ring-primary text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-dental-dark font-bold text-sm sm:text-base">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-dental-neutral/50 border-none focus-visible:ring-primary text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-dental-dark font-bold text-sm sm:text-base">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+91 (98) 1234-5678" 
                  className="h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-dental-neutral/50 border-none focus-visible:ring-primary text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service" className="text-dental-dark font-bold text-sm sm:text-base">Interested Service</Label>
                <Input 
                  id="service" 
                  placeholder="Dental Implants, Teeth Whitening, etc." 
                  className="h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-dental-neutral/50 border-none focus-visible:ring-primary text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-dental-dark font-bold text-sm sm:text-base">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help you achieve your perfect smile..." 
                  className="min-h-[120px] sm:min-h-[150px] rounded-xl sm:rounded-2xl bg-dental-neutral/50 border-none focus-visible:ring-primary text-sm sm:text-base resize-none"
                />
              </div>
              
              <Button className="w-full h-10 sm:h-12 md:h-14 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-lg sm:shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300 mt-4">
                Send Message
              </Button>
              
              <p className="text-center text-xs text-dental-dark/50 pt-2">
                By submitting, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        {/* <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4"
        >
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center border border-primary/20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-dental-dark mb-4 sm:mb-6 tracking-tight">
              Prefer to Call?
            </h3>
            <p className="text-dental-dark/50 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
              Speak directly with our patient care coordinator for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a 
                href="tel:+15550001234" 
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-primary/90 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <Phone size={20} /> Call Now: +1 (555) 000-1234
              </a>
              <button className="bg-white text-dental-dark border border-slate-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-slate-50 transition-colors duration-300">
                Schedule a Tour
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}