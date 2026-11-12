/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Globe, Palette, Smartphone, Terminal } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building modern responsive websites using React, Next.js, and modern frontend technologies.",
    icon: Globe,
    color: "from-blue-500/20 to-cyan-500/0",
    accent: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/20"
  },
  {
    title: "UI/UX Design",
    description: "Designing premium user interfaces and user experiences with modern design systems and smooth interactions.",
    icon: Palette,
    color: "from-pink-500/20 to-purple-500/0",
    accent: "text-rose-400",
    hoverBorder: "hover:border-rose-500/50",
    iconBg: "bg-rose-500/20"
  },
  {
    title: "App Development",
    description: "Developing high-performance mobile applications with scalable architecture and modern UI.",
    icon: Smartphone,
    color: "from-orange-500/20 to-red-500/0",
    accent: "text-blue-400",
    hoverBorder: "hover:border-blue-500/50",
    iconBg: "bg-blue-500/20"
  },
  {
    title: "Software Development",
    description: "Building scalable software systems, APIs, and digital tools with optimized performance.",
    icon: Terminal,
    color: "from-emerald-500/20 to-teal-500/0",
    accent: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/20"
  }
];

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Years Learning", value: "3+" },
  { label: "Tech Mastered", value: "5+" },
  { label: "Creative Passion", value: "100%" }
];

export default function AboutTab() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-20"
    >
      {/* Header Section */}
      <header className="space-y-4">
        <span className="text-neon-pink font-bold text-xs uppercase tracking-[0.3em] mb-2 block">About Me</span>
        <h3 className="text-5xl sm:text-7xl font-black text-white leading-[1.05]">
          Building Modern<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-rose-400">
            Digital Experiences
          </span>
        </h3>
        <p className="mt-6 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
          I am <span className="text-white font-semibold">Pallab Bag</span>, a visionary full-stack developer and UI/UX designer. At <span className="text-neon-blue">CreatexWebstudio</span>, I craft high-performance digital solutions that bridge the gap between aesthetics and functionality, utilizing cutting-edge tech stacks to build the future of the web.
        </p>
      </header>

      {/* Services Section */}
      <section className="space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group p-6 bg-white/5 border border-white/10 rounded-2xl transition-all relative overflow-hidden ${service.hoverBorder} hover:bg-white/[0.08]`}
            >
              <div className={`w-10 h-10 ${service.iconBg} rounded-lg flex items-center justify-center mb-4 ${service.accent}`}>
                <service.icon className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold mb-2 text-white">{service.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-1 items-center justify-center group">
            <div className="text-center">
              <div className={`text-2xl font-black transition-colors ${index % 2 === 0 ? "text-neon-blue group-hover:text-white" : "text-neon-pink group-hover:text-white"}`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                {stat.label.split(' ')[0]}
              </div>
            </div>
            {index < stats.length - 1 && <div className="w-px h-8 bg-white/10 ml-auto" />}
          </div>
        ))}
      </section>
    </motion.div>
  );
}
