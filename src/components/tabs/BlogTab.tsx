/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export default function BlogTab() {
  return (
    <motion.div
      key="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-20 text-center space-y-6"
    >
      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-4 animate-pulse">
        <Terminal className="text-white/20 w-10 h-10" />
      </div>
      <h4 className="text-2xl font-bold text-white uppercase tracking-widest">Blog Coming Soon</h4>
      <p className="text-zinc-500 max-w-md">I am currently building this section to share my insights and experiences. Stay tuned!</p>
    </motion.div>
  );
}
