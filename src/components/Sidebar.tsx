/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Instagram, Phone, Mail, MapPin, Download } from "lucide-react";
import profileImage from "../assets/PB img.png";
import resumePdf from "../assets/PALLAB BAG RESUME.pdf";

export default function Sidebar() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/PALLAB2005", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_pallab_7890/", label: "Instagram" },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:fixed lg:top-6 lg:left-6 lg:bottom-6 lg:w-[280px] w-full mb-8 lg:mb-0 z-20"
    >
      <div className="glass-card h-full p-6 lg:p-8 flex flex-col space-y-6 lg:space-y-8 overflow-y-auto custom-scrollbar shadow-2xl">
        {/* Profile Section - Responsive Layout */}
        <div className="flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-8">
          <div className="relative group shrink-0">
            <div className="relative w-24 h-24 lg:w-[220px] lg:h-[220px] rounded-2xl overflow-hidden bg-[#111] border border-white/10 transition-all duration-500 group-hover:border-neon-pink/30">
              {/* Profile Image - Replaced PB placeholder with image container */}
              <img 
                src={profileImage}
                alt="Pallab Bag"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            <div className="absolute -bottom-2 lg:-bottom-2 -right-1 lg:-right-2 px-2 lg:px-3 py-1 bg-neon-pink text-[8px] lg:text-[10px] font-bold uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(255,77,77,0.5)] z-10">Founder</div>
          </div>

          <div className="text-left lg:text-center space-y-1 w-full">
            <h1 className="text-xl lg:text-2xl font-black tracking-tight text-white uppercase leading-none">PALLAB BAG</h1>
            <div className="h-0.5 w-8 bg-neon-pink mt-2 lg:hidden" />
            <p className="text-[10px] lg:text-[11px] text-zinc-500 leading-relaxed font-bold uppercase tracking-widest pt-1">
              Creative Developer<br className="hidden lg:block"/>
              <span className="lg:hidden text-neon-pink"> • </span>
              <span className="text-white/40">Designer & Founder</span>
            </p>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full" />

        {/* Contact Info */}
        <div className="space-y-4 text-zinc-300">
          <ContactItem icon={Phone} label="Phone" value="+91 9674154722" iconColor="text-neon-blue" />
          <ContactItem icon={Mail} label="Email" value="pallabbag001@gmail.com" iconColor="text-rose-400" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-between items-center pt-2">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/5 group"
            >
              <social.icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Download CV */}
        <motion.a
          href={resumePdf}
          download="PALLAB BAG RESUME.pdf"
          whileHover={{ scale: 1.02, brightness: 1.1 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full mt-auto py-4 text-center bg-gradient-to-r from-neon-pink to-[#ff2d92] rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,77,77,0.3)] transition-all duration-300"
        >
          Download My CV
        </motion.a>
      </div>
    </motion.aside>
  );
}

function ContactItem({ icon: Icon, label, value, iconColor }: { icon: any, label: string, value: string, iconColor: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
        <Icon className={`w-4 h-4 ${iconColor} transition-transform group-hover:scale-110`} />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">{label}</span>
        <span className="text-xs font-medium transition-colors group-hover:text-white">{value}</span>
      </div>
    </div>
  );
}
