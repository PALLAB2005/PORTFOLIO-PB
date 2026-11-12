/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence } from "motion/react";
import AboutTab from "./tabs/AboutTab";
import ResumeTab from "./tabs/ResumeTab";
import WorkTab from "./tabs/WorkTab";
import BlogTab from "./tabs/BlogTab";
import ContactTab from "./tabs/ContactTab";

export default function MainContent({ activeTab }: { activeTab: string }) {
  return (
    <main className="lg:ml-[280px] xl:mr-32 pt-12 pb-32 sm:pb-16 px-4 sm:px-6 z-10 relative min-h-screen">
      <AnimatePresence mode="wait">
        {activeTab === "about" && <AboutTab />}
        {activeTab === "resume" && <ResumeTab />}
        {activeTab === "work" && <WorkTab />}
        {activeTab === "blog" && <BlogTab />}
        {activeTab === "contact" && <ContactTab />}
      </AnimatePresence>
    </main>
  );
}
