/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
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
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="w-[320px] sm:w-[380px] bg-[#0c0c0c] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50"
    >
      {/* Header */}
      <div className="bg-neon-pink p-6">
        <h3 className="text-white font-display font-bold text-lg">
          Let&apos;s chat with me? - Online
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6">
        <p className="text-zinc-500 text-sm leading-relaxed text-center">
          Please fill out the form below to start chatting with me directly.
        </p>

        <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-4 p-4 border border-white/5 rounded-2xl bg-white/[0.02]">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-pink/50 transition-colors text-white"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your Email"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-pink/50 transition-colors text-white"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={3}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-pink/50 transition-colors resize-none text-white"
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 text-emerald-400 text-[10px] uppercase font-bold tracking-widest bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              Sent Successfully!
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-rose-400 text-[10px] uppercase font-bold tracking-widest bg-rose-500/10 p-3 rounded-lg border border-rose-500/20">
              <AlertCircle className="w-4 h-4" />
              Failed to send.
            </div>
          )}

          <motion.button
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-neon-pink rounded-xl text-white font-bold text-sm shadow-[0_10px_20px_rgba(255,77,77,0.2)] hover:shadow-[0_10px_25px_rgba(255,77,77,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
