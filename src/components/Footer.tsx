import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dental-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                DENTA
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Premium dental care for those who value excellence. Modern
              technology meets compassionate service.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center transition-colors hover:bg-primary hover:border-primary"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-primary transition-colors">Our Doctors</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:text-primary transition-colors">Consultation</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li>Dental Implants</li>
              <li>Cosmetic Dentistry</li>
              <li>Orthodontics</li>
              <li>Teeth Whitening</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-white/60">
              <li>New Delhi, India</li>
              <li>+91 9876543210</li>
              <li>contact@denta.clinic</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2025 DENTA Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
