/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, X, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import ContactForm from "./components/ContactForm";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative selection:bg-neon-pink/30 selection:text-neon-pink">
      <LoadingScreen />
      <BackgroundEffects />
      
      {/* Layout Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0 mb-16 lg:mb-0">
        <div className="relative">
          <Sidebar />
          <MainContent activeTab={activeTab} />
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      {/* Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-24 sm:bottom-8 right-6 sm:right-8 flex flex-col items-end gap-3 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 origin-bottom-right"
            >
              <ContactForm />
            </motion.div>
          )}

          {showScrollTop && !isChatOpen && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 glass hover:bg-neon-pink group transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] border-white/5"
            >
              <ArrowUp className="w-5 h-5 group-hover:text-white transition-colors" />
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Messenger Button */}
        <motion.button
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-4 rounded-full shadow-[0_0_30px_rgba(255,77,77,0.3)] transition-all duration-300 ${
            isChatOpen ? "bg-zinc-800" : "bg-neon-pink"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isChatOpen ? "close" : "chat"}
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {isChatOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <MessageSquare className="w-6 h-6 text-white" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
