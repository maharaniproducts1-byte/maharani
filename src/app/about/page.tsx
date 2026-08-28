"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Heart, Globe, Shield, CheckCircle, Droplets, Flame, Wind, PackageCheck } from "lucide-react";

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

const productionSteps = [
  { id: 1, title: "Selection of Mature Coconuts", desc: "Mature coconuts (around 3-5 months old) are selected for higher oil and lower water content.", icon: CheckCircle },
  { id: 2, title: "Dehusking", desc: "The outer husk of the coconut is removed either manually or mechanically.", icon: Shield },
  { id: 3, title: "De-shelling", desc: "The hard shell is separated from the coconut kernel using a de-shelling machine or manually.", icon: Globe },
  { id: 4, title: "Removal of Testa (Brown Skin)", desc: "The brown skin (testa) of the kernel is removed to achieve the desired white color of the powder.", icon: Heart },
  { id: 5, title: "Washing", desc: "The de-shelled and de-skinned coconut is washed thoroughly to remove any impurities or contaminants.", icon: Droplets },
  { id: 6, title: "Cutting/Shredding", desc: "The coconut kernel is then cut or shredded into small pieces to prepare it for drying.", icon: CheckCircle },
  { id: 7, title: "Blanching", desc: "The shredded coconut is blanched in hot water to reduce microbial load, prevent spoilage, and maintain color.", icon: Flame },
  { id: 8, title: "Drying & Cooling", desc: "Dried in hot air driers (90°-95°C) bringing moisture down to 1.8%. Cooled to prevent condensation and clumping.", icon: Wind },
  { id: 9, title: "Packing", desc: "Packed in moisture-proof packaging to preserve freshness and prevent moisture absorption.", icon: PackageCheck },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-12">
      {/* 1. What We Are & 2. Our Story */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/40 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="space-y-10"
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-4">
                What We Are
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                The True Essence of <br />
                <span className="text-red-600">Kerala Coconut</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base text-gray-700 mt-6 font-medium leading-relaxed">
                Maharani is a premium brand dedicated to preserving and delivering the authentic taste of pure Kerala coconuts. Made from the flesh of matured coconuts that are grated, dried, and ground into a fine powder untouched by human hands.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base text-gray-700 mt-4 font-medium leading-relaxed">
                We procure coconuts from the Kuttiyadi belt which is considered to be the best in the world. Coconut offers about 68% minimum fat content which makes our brand the most premium in the country. This process retains the natural oils and nutrients of the coconut, making it a rich and flavourful ingredient.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-red-900/5 p-12 relative group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none rounded-[2.5rem]"></div>
              <Image src="/logo-shield-v2.png" alt="Maharani Logo" width={240} height={300} className="object-contain drop-shadow-md mx-auto group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Quality Indicators */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-gray-900">Choosing Premium Desiccated Coconut</motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-white border-[6px] border-red-600 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl font-black text-gray-900">99%</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Aroma & Flavor</h3>
              <p className="text-sm text-gray-600 font-medium">The fresh coconut scent and rich, natural taste.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-white border-[6px] border-red-600 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl font-black text-gray-900">98%</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Texture</h3>
              <p className="text-sm text-gray-600 font-medium">Granules being uniform in size for your recipes.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-20 h-20 rounded-full bg-white border-[6px] border-red-600 flex items-center justify-center mb-6 shadow-sm">
                <span className="text-xl font-black text-gray-900">99%</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Consistency</h3>
              <p className="text-sm text-gray-600 font-medium">High-quality powder provides better quality control.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Process Timeline */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">Production Process</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 mt-4 font-medium">From Kuttiyadi farms to your kitchen.</motion.p>
          </motion.div>

          <div className="space-y-8">
            {productionSteps.map((step, idx) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">
                    <span className="text-red-600 mr-2">{step.id}.</span>{step.title}
                  </h3>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Vision & 6. Mission */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="bg-gray-800/50 p-10 rounded-[2rem] border border-gray-700 hover:bg-gray-800 transition-colors"
          >
            <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center text-sm">V</span>
              Our Vision
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed text-sm">
              To make Maharani the defining symbol of authentic Kerala coconut excellence, celebrated by families and culinary professionals across India and globally for quality, purity, and tradition.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 p-10 rounded-[2rem] border border-gray-700 hover:bg-gray-800 transition-colors"
          >
            <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center text-sm">M</span>
              Our Mission
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed text-sm">
              To transform Kerala's finest coconuts into premium food products that seamlessly combine traditional authenticity with modern culinary convenience, creating lasting value through uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
