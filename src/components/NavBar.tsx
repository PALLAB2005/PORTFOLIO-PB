/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { User, FileText, Briefcase, BookOpen, Mail } from "lucide-react";

const navItems = [
  { id: "about", icon: User, label: "About" },
  { id: "resume", icon: FileText, label: "Resume" },
  { id: "work", icon: Briefcase, label: "Work" },
  { id: "blog", icon: BookOpen, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function NavBar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (id: string) => void }) {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:block">
        <div className="w-[70px] h-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-around py-8 shadow-2xl relative">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative group p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "text-neon-pink bg-neon-pink/10 shadow-[0_0_15px_rgba(255,77,77,0.3)]" 
                    : "text-zinc-500 hover:text-white"
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <item.icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white">{item.label}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 xl:hidden w-[calc(100%-3rem)] max-w-md">
        <div className="glass p-2 flex items-center justify-around shadow-2xl border-white/10">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative p-3 rounded-2xl transition-all duration-300 flex flex-col items-center gap-1 ${
                  isActive ? "text-neon-pink" : "text-white/40"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabMobile"
                    className="absolute inset-0 bg-neon-pink/10 rounded-2xl border border-neon-pink/20"
                  />
                )}
                <item.icon className="w-5 h-5 relative z-10" />
                <span className="text-[8px] uppercase tracking-tighter font-bold relative z-10">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
