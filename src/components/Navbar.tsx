"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "Consultation", href: "/consultation" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:px-8`}
    >
        <div 
          className={`mx-auto max-w-[1400px] rounded-[30px] transition-all duration-500 flex items-center justify-between px-8 h-20 ${
            scrolled 
              ? "bg-dental-dark/90 backdrop-blur-xl border border-white/10 shadow-2xl" 
              : isHomePage 
                ? "bg-transparent border border-transparent"
                : "bg-dental-dark/40 backdrop-blur-md border border-white/5"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/20">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-primary" />
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/40" />
                <div className="w-2 h-2 bg-white/40" />
              </div>
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">DENTA</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-white/60 hover:text-white transition-all hover:translate-y-[-2px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-6 h-12 font-bold transition-all">
              <Link href="/contact">Health Check</Link>
            </Button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-xl border border-white/20 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-28 left-4 right-4 bg-dental-dark/95 backdrop-blur-2xl rounded-[30px] border border-white/10 p-8 shadow-2xl lg:hidden flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-white/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild size="lg" className="rounded-2xl bg-primary text-white h-16 text-lg font-bold mt-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Book Appointment</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
}
