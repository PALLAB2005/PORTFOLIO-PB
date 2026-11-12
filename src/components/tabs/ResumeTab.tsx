/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Code2, Layers } from "lucide-react";

const skills = {
  technical: [
    { category: "Languages", items: ["C", "Python", "JavaScript (ES6+)", "TypeScript"] },
    { category: "Frontend", items: ["React", "React Hooks", "Next.js", "Redux", "Context API", "Tailwind CSS", "Bootstrap"] },
    { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "REST APIs", "GraphQL (basics)"] },
    { category: "Web Dev", items: ["HTML5", "CSS3", "Responsive Design", "AJAX", "Material-UI", "Figma to Code"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Webpack", "Shopify", "Wordpress", "Firebase", "AWS", "Docker (basics)", "Vercel", "Netlify"] },
    { category: "Core", items: ["Data Structures", "Algorithms", "OOP", "Functional Programming", "Software Testing", "Design Patterns"] },
  ],
  professional: [
    "Problem-solving", "Code Review", "Debugging", "Performance Optimization", "API Design", 
    "Testing (Unit & Integration)", "Agile Methodologies", "Cross-browser Compatibility", 
    "Git Workflow", "Documentation", "Team Collaboration", "Self-motivated Learning"
  ]
};

export default function ResumeTab() {
  return (
    <motion.div
      key="resume"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      {/* Header Section */}
      <header className="space-y-4">
        <span className="text-neon-blue font-bold text-xs uppercase tracking-[0.3em] mb-2 block">Resume</span>
        <h3 className="text-5xl font-black text-white">Experience & <span className="text-neon-pink">Skills</span></h3>
      </header>

      {/* Academic Background */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-neon-pink/10 border border-neon-pink/20">
            <GraduationCap className="w-6 h-6 text-neon-pink" />
          </div>
          <h4 className="text-2xl font-bold">Academic Background</h4>
        </div>
        
        <div className="relative pl-8 border-l border-white/10 space-y-8">
          <div className="relative">
            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#050505] border-2 border-neon-pink" />
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h5 className="text-lg font-bold text-white">Bachelor of Computer Application (BCA)</h5>
                <span className="text-xs font-bold text-neon-pink bg-neon-pink/10 px-3 py-1 rounded-full border border-neon-pink/20 uppercase tracking-widest font-mono">2024 - 2027</span>
              </div>
              <p className="text-zinc-400 text-sm mb-2">Maulana Abul Kalam Azad University of Technology, West Bengal</p>
              <p className="text-neon-blue text-xs font-mono font-bold uppercase tracking-widest">(Pursuing)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-neon-blue/10 border border-neon-blue/20">
            <Code2 className="w-6 h-6 text-neon-blue" />
          </div>
          <h4 className="text-2xl font-bold">Technical Skills</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.technical.map((skill, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h6 className="text-[10px] uppercase tracking-[0.2em] font-black text-neon-blue mb-4 font-mono">{skill.category}</h6>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="text-xs py-1.5 px-3 bg-white/5 border border-white/5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Skills */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <Layers className="w-6 h-6 text-orange-400" />
          </div>
          <h4 className="text-2xl font-bold">Professional Skills</h4>
        </div>

        <div className="flex flex-wrap gap-3 bg-white/5 border border-white/10 rounded-2xl p-8">
          {skills.professional.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 group">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-pink group-hover:scale-150 transition-transform" />
              <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{skill}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
