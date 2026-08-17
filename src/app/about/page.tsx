"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function AboutPage() {
  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-12">
      <section className="py-24 bg-red-50/40 border-t border-red-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">The <span className="text-red-600">Maharani</span> Heritage</motion.h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-2">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">V</span>
                  Our Vision
                </h3>
                <p className="text-sm">To make Maharani the symbol of authentic Kerala coconut excellence, celebrated by families across India and beyond for quality, purity, and tradition.</p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-2">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">M</span>
                  Our Mission
                </h3>
                <p className="text-sm">To transform Kerala&apos;s finest coconuts into premium food products that combine traditional authenticity with modern convenience. We strive to create lasting value for our customers through uncompromising quality, sustainable practices, and a deep respect for our heritage.</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-red-900/5 flex flex-col items-center justify-center p-8 group hover:-translate-y-2 transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image src="/logo-shield-v2.png" alt="Maharani Logo" width={160} height={203} className="object-contain drop-shadow-md h-56 w-auto relative z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
