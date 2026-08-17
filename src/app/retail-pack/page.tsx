"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

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

export default function RetailPackPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-12">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Product Offerings</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 mt-4 font-medium">Engineered for retail consumers and high-volume commercial catering.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Highlighted 250g Pack */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
               className="group border-2 border-red-600 rounded-[2.5rem] p-10 bg-white shadow-xl hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black uppercase px-6 py-2 rounded-full shadow-lg">
                Flagship Retail Pack
              </div>
              
              <div className="flex gap-4 items-center justify-center mb-8 mt-4 h-56">
                <Image src="/pouch-250g-front.png" alt="250g Pouch Front" width={140} height={180} className="drop-shadow-2xl object-contain h-48 w-auto mix-blend-multiply group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
                <Image src="/pouch-250g-back.png" alt="250g Pouch Back" width={140} height={180} className="drop-shadow-2xl object-contain h-48 w-auto mix-blend-multiply group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
              </div>
              
              <div className="text-center space-y-4 flex-grow">
                <h3 className="text-3xl font-black text-gray-900">250g Retail Pouch</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  Featuring our updated modern design, health certifications, and QR code access to interactive rehydration instructions.
                </p>
                
                <div className="pt-4 pb-6">
                  <ul className="text-sm text-gray-700 space-y-3 font-semibold inline-block text-left">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-600" /> Dairy Free & Gluten Free</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-600" /> Zero Cholesterol & High Fibre</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-600" /> Natural Oil Intact</li>
                  </ul>
                </div>
              </div>
              
              <a href="/#contact" className="w-full bg-red-50 hover:bg-red-600 text-red-700 hover:text-white border border-red-100 px-6 py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 mt-auto">
                Enquire for Retail <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 1kg Bulk Pack */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
               className="group border border-gray-200 rounded-[2.5rem] p-10 bg-white hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-100 text-gray-500 border border-gray-200 text-xs font-black uppercase px-6 py-2 rounded-full">
                Commercial Pack
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-8 mt-4 h-56">
                <Image src="/1kg-front.jpeg" alt="1kg Bulk Pouch Front" width={180} height={220} className="drop-shadow-md object-contain h-52 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                <Image src="/1kg-back.jpeg" alt="1kg Bulk Pouch Back" width={180} height={220} className="drop-shadow-md object-contain h-52 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500 delay-75" />
              </div>
              
              <div className="text-center space-y-4 flex-grow">
                <h3 className="text-3xl font-black text-gray-900">1kg Bulk / Economy</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  High-capacity packaging perfectly suited for catering, commercial kitchens, and large family occasions.
                </p>
                
                <div className="pt-4 pb-6">
                  <ul className="text-sm text-gray-700 space-y-3 font-semibold inline-block text-left">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> High yield efficiency</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> Consistent aroma & texture</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> Export quality standard</li>
                  </ul>
                </div>
              </div>
              
              {siteConfig.amazon1kgUrl ? (
                <a href={siteConfig.amazon1kgUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-gray-900 border border-[#FF9900] px-6 py-4 rounded-xl font-black text-center transition-colors flex items-center justify-center gap-2 mt-auto shadow-md">
                  BUY ON AMAZON <ChevronRight className="w-5 h-5" />
                </a>
              ) : (
                <a href="/#contact" className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-6 py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 mt-auto">
                  Request Bulk Pricing <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
