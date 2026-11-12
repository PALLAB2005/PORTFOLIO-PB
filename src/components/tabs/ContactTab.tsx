/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ChevronRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactTab() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="glass-card p-8 sm:p-12 shadow-2xl relative overflow-hidden bg-[#0c0c0c] border-white/5">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-white font-display font-black text-xl uppercase tracking-wider">GET IN TOUCH</h2>
            <div className="flex items-center gap-1 opacity-40">
              <div className="h-0.5 w-12 bg-white/50" />
              <div className="w-1 h-1 rounded-full bg-white" />
            </div>
          </div>
          
          <h3 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Let's Build Something Great Together
          </h3>
          
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Reach out to discuss your project ideas or to collaborate on innovative mobile solutions.
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-neon-pink/30 transition-all text-white placeholder:text-zinc-600"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-neon-pink/30 transition-all text-white placeholder:text-zinc-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone Number"
              className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-neon-pink/30 transition-all text-white placeholder:text-zinc-600"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-neon-pink/30 transition-all text-white placeholder:text-zinc-600"
            />
          </div>

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={6}
            className="w-full bg-white/[0.02] border border-white/5 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-neon-pink/30 transition-all text-white placeholder:text-zinc-600 resize-none"
          />

          {status === "success" && (
            <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-500/10 p-4 rounded-xl border border-rose-500/20">
              <AlertCircle className="w-5 h-5" />
              Something went wrong. Please try again or email directly.
            </div>
          )}

          <motion.button
            disabled={isSubmitting}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full py-5 bg-neon-pink rounded-full text-white font-bold text-sm shadow-[0_10px_30px_rgba(255,77,77,0.3)] hover:shadow-[0_15px_40px_rgba(255,77,77,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Send Message <ChevronRight className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
