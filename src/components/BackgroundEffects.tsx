/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Top left blue glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -left-[20%] w-[400px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full"
      />

      {/* Bottom right red glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] right-[10%] w-[500px] h-[500px] bg-rose-900/20 blur-[150px] rounded-full"
      />

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}
