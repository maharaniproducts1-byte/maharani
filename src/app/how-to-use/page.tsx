"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { howToUseData } from "@/data/how-to-use";
import { Droplets, Clock, Flame, Info } from "lucide-react";
import { siteConfig } from "@/config/site";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function HowToUsePage() {
  const [coconutGrams, setCoconutGrams] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<"rehydrate" | "milk">("rehydrate");
  
  // Logic: For grated substitute (1:0.5 ratio approx), for milk (1:1.5 ratio)
  const warmWaterMl = activeTab === "rehydrate" ? Math.round(coconutGrams * 0.5) : Math.round(coconutGrams * 1.5);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);

  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-12 pb-24">
      {/* Intro Section - Suitable for QR Landing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-4">
              <Info className="w-4 h-4" /> Usage Guide
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Instant Rehydration
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base text-gray-700 mt-6 font-medium leading-relaxed max-w-2xl mx-auto">
              Maharani Desiccated Coconut Powder is crafted to perfectly substitute freshly grated coconut. 
              By following our precise rehydration method, you will restore the natural texture, aroma, and rich oils required for traditional cooking.
            </motion.p>

          </motion.div>
        </div>
      </section>

      {/* Practical Usage & Applications */}
      {/* Culinary Uses */}
      <section className="pb-24">
         <div className="max-w-6xl mx-auto px-6">
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
               className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
               <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Baking</h3>
                  <p className="text-sm text-gray-600 font-medium">Adds flavor and texture to cakes, cookies, muffins, and other baked goods.</p>
               </motion.div>
               <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                     <Flame className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Cooking</h3>
                  <p className="text-sm text-gray-600 font-medium">Enhances flavor and adds creaminess to curries, chutneys, and porridge.</p>
               </motion.div>
               <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                     </svg>
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">Toppings and Fillers</h3>
                  <p className="text-sm text-gray-600 font-medium">Sprinkle it on yogurt, oatmeal, or desserts for added crunch and flavor.</p>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="bg-gray-50 p-1.5 rounded-2xl border border-gray-200 flex gap-1 shadow-inner">
              <button
                onClick={() => setActiveTab("rehydrate")}
                className={`px-6 md:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "rehydrate"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Grated Substitute
              </button>
              <button
                onClick={() => setActiveTab("milk")}
                className={`px-6 md:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "milk"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Coconut Milk
              </button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="space-y-10">
              <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">1</span>
                Interactive Calculator
              </h3>
              
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase text-gray-500 tracking-wider">
                  Amount of Powder (Grams)
                </label>
                <div className="relative pt-2 pb-6">
                  <input 
                    type="range" 
                    min="20" 
                    max="250" 
                    step="10"
                    value={coconutGrams}
                    onChange={(e) => setCoconutGrams(Number(e.target.value) || 20)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-400 mt-3">
                    <span>20g</span>
                    <motion.div 
                      key={coconutGrams}
                      initial={{ scale: 1.2, color: "#DC2626" }}
                      animate={{ scale: 1, color: "#1F2937" }}
                      className="absolute left-1/2 -translate-x-1/2 top-8 text-xl font-black text-gray-900"
                    >
                      {coconutGrams} g
                    </motion.div>
                    <span>250g</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Warm Water Required</span>
                  <motion.span 
                    key={warmWaterMl}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-red-600 text-3xl font-black"
                  >
                    {warmWaterMl} ml
                  </motion.span>
                </div>
                <div className="h-px w-full bg-red-100"></div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-gray-500 flex items-center gap-2"><Clock className="w-4 h-4"/> Resting Time</span>
                  <span className="font-bold text-gray-900 bg-white px-3 py-1 rounded-lg border border-gray-100">10 – 15 Mins</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:pl-12 md:border-l border-gray-100 h-full">
              <h4 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">2</span>
                 Step-by-Step Guide
              </h4>
              
              <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                {howToUseData.map((lang, idx) => (
                  <button
                    key={lang.languageCode}
                    onClick={() => setSelectedLanguageIndex(idx)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                      selectedLanguageIndex === idx
                        ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                        : "bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {lang.languageName}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedLanguageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {howToUseData[selectedLanguageIndex].steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                      <span className="w-6 h-6 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">{idx + 1}</span>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h5>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
             className="mt-16 text-center space-y-6"
          >
             <h3 className="text-2xl font-black text-gray-900">Ready to Try Maharani?</h3>
             <a href={siteConfig.amazon1kgUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-1 transition-all group">
                <span className="sr-only">Buy on Amazon</span>
                Buy on 
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                  alt="Amazon" 
                  className="h-6 w-auto brightness-0 invert mt-1 group-hover:scale-105 transition-transform" 
                />
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
             </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
