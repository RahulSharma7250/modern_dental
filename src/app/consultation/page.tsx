"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, CheckCircle2, QrCode, Phone, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 sm:pt-28 md:pt-32 flex items-center justify-center px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-6 bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-lg sm:shadow-xl md:shadow-2xl"
        >
          <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 sm:h-12 sm:w-12" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-dental-dark">Application Received!</h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Thank you for your trust. After payment confirmation, our doctor will contact you within 24 hours.
          </p>
          <Button asChild className="w-full rounded-full h-10 sm:h-12">
            <a href="/">Return Home</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-20 bg-dental-neutral/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-3 sm:px-4 py-1 rounded-full text-primary text-xs sm:text-sm font-black uppercase tracking-widest mb-6 sm:mb-8"
            >
              OUR CONSULTANTS
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-dental-dark leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 sm:mb-8 md:mb-10 px-2"
            >
              Online <br className="hidden sm:block" />
              <span className="italic opacity-40">Consultation</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg sm:text-xl md:text-2xl text-dental-dark/50 leading-relaxed max-w-2xl mx-auto font-light px-4 sm:px-0"
            >
              Get expert advice from the comfort of your home. Simple, fast, and professional.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Payment Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-4 sm:space-y-6"
            >
              <Card className="rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-none shadow-lg sm:shadow-xl bg-dental-dark text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/20 rounded-full blur-3xl" />
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <QrCode className="text-primary h-5 w-5 sm:h-6 sm:w-6" /> Payment Details
                  </CardTitle>
                  <CardDescription className="text-white/40 text-sm sm:text-base">
                    Consultation Fee: ₹100
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                  <div className="aspect-square bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex items-center justify-center relative">
                    <div className="text-dental-dark text-center space-y-2">
                      <QrCode className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 mx-auto opacity-20" />
                      <p className="text-xs font-bold text-muted-foreground">SCAN TO PAY</p>
                      <p className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter">CLINIC QR CODE</p>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-sm space-y-1 sm:space-y-2">
                    <p className="text-white/60">1. Scan QR and pay ₹100</p>
                    <p className="text-white/60">2. Take a screenshot of the success screen</p>
                    <p className="text-white/60">3. Upload the screenshot in the form</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] p-4 sm:p-6 border border-primary/20">
                <p className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                  Important Note
                </p>
                <p className="text-sm text-dental-dark/70 leading-relaxed">
                  Our doctor will review your case and contact you via Phone/WhatsApp for a detailed discussion.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <Card className="rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-none shadow-lg sm:shadow-xl md:shadow-2xl p-4 sm:p-6 md:p-8 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <Label htmlFor="name" className="text-dental-dark font-bold ml-1 text-sm sm:text-base">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="rounded-xl sm:rounded-2xl h-10 sm:h-12 bg-dental-neutral/50 border-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <Label htmlFor="phone" className="text-dental-dark font-bold ml-1 text-sm sm:text-base">Phone Number</Label>
                      <Input id="phone" required type="tel" placeholder="+91 00000 00000" className="rounded-xl sm:rounded-2xl h-10 sm:h-12 bg-dental-neutral/50 border-none focus-visible:ring-primary" />
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <Label className="text-dental-dark font-bold ml-1 text-sm sm:text-base flex items-center gap-2">
                      <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5" /> Upload Teeth Image
                    </Label>
                    <div className="border-2 border-dashed border-dental-neutral rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 text-center hover:border-primary/50 transition-colors cursor-pointer group bg-dental-neutral/20">
                      <Upload className="mx-auto mb-3 sm:mb-4 text-muted-foreground group-hover:text-primary transition-colors h-8 w-8 sm:h-10 sm:w-10" />
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground/60 mt-1 sm:mt-2">PNG, JPG up to 10MB</p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <Label className="text-dental-dark font-bold ml-1 text-sm sm:text-base flex items-center gap-2">
                      <QrCode className="h-4 w-4 sm:h-5 sm:w-5" /> Payment Screenshot
                    </Label>
                    <div className="border-2 border-dashed border-dental-neutral rounded-xl sm:rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 text-center hover:border-primary/50 transition-colors cursor-pointer group bg-dental-neutral/20">
                      <Upload className="mx-auto mb-3 sm:mb-4 text-muted-foreground group-hover:text-primary transition-colors h-8 w-8 sm:h-10 sm:w-10" />
                      <p className="text-sm text-muted-foreground">Upload your payment confirmation</p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full rounded-full h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg font-bold shadow-lg sm:shadow-xl shadow-primary/20">
                    Confirm & Submit
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}