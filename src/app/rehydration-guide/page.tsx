"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { howToUseData } from "@/data/how-to-use";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function RehydrationGuidePage() {
  const [coconutGrams, setCoconutGrams] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<"rehydrate" | "milk">("rehydrate");
  const warmWaterMl = activeTab === "rehydrate" ? coconutGrams * 0.5 : coconutGrams * 1.5;

  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);

  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-12">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-gray-900 tracking-tight">
              Rehydration Calculator
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 font-medium">
              Select your required quantity below to calculate the exact warm water ratio and preparation time for perfect results every time.
            </motion.p>
          </motion.div>

          {/* Calculator Switcher */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="bg-gray-50 p-1.5 rounded-2xl border border-gray-200 flex gap-1 shadow-inner">
              <button
                onClick={() => setActiveTab("rehydrate")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "rehydrate"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Grated Coconut Substitute
              </button>
              <button
                onClick={() => setActiveTab("milk")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "milk"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Fresh Coconut Milk
              </button>
            </div>
          </motion.div>

          {/* Calculator Box */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
             className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="space-y-10">
              <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">1</span>
                {activeTab === "rehydrate" ? "Ratio Calculator" : "Milk Extractor"}
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
                    onChange={(e) => setCoconutGrams(Number(e.target.value))}
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
                    <span>250g (Full Pack)</span>
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
                  <span className="font-semibold text-gray-500">Resting / Soak Time</span>
                  <span className="font-bold text-gray-900 bg-white px-3 py-1 rounded-lg border border-gray-100">10 – 15 Mins</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:pl-12 md:border-l border-gray-100 h-full">
              <h4 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">2</span>
                 How to Use
              </h4>
              
              {/* Language Selector */}
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
        </div>
      </section>
    </div>
  );
}
