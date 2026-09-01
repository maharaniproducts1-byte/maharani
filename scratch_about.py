with open('src/app/about/page.tsx', 'w') as f:
    f.write("""\"use client\";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Globe, Award, Shield, CheckCircle } from "lucide-react";

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
                Maharani is a premium brand dedicated to preserving and delivering the authentic taste of pure Kerala coconuts. We specialize in producing uncompromised, natural desiccated coconut powder that serves as a perfect, instant substitute for freshly grated coconut in everyday culinary preparations.
              </motion.p>
            </div>

            <div>
              <motion.h3 variants={fadeUp} className="text-2xl font-black text-gray-900 mb-4">Our Story & Background</motion.h3>
              <motion.p variants={fadeUp} className="text-base text-gray-700 font-medium leading-relaxed">
                Born out of a deep respect for traditional South Indian cuisine, our journey began with a simple realization: modern kitchens need convenience, but they shouldn't have to sacrifice authenticity. Unlike mass-market alternatives that strip away essential oils, we committed to a process that retains the natural fat content, rich aroma, and authentic texture of real coconuts.
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

      {/* 3. Our Journey / Experience */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">Our Journey & Experience</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 font-medium leading-relaxed">
              With decades of experience rooted in Kerala's agricultural heritage, we have perfected the art of coconut processing. From our state-of-the-art facility at KSIDC Kinalur, we have supplied premium quality products to retail markets, high-volume commercial catering, and international export partners. Our legacy is built on consistent quality, trusted by generations of families and professional chefs alike since 1981.
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">
              {[
                { label: "Founded", value: "1981" },
                { label: "Origin", value: "Kerala" },
                { label: "Quality", value: "Premium" },
                { label: "Reach", value: "Global" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="text-3xl font-black text-red-600 mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. What We Stand For */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">What We Stand For</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 mt-4 font-medium">Uncompromising principles that guide every pack we produce.</motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Shield, title: "Unmixed Purity", desc: "No starch fillers, no artificial preservatives, and no adulteration. Just pure coconut." },
              { icon: Heart, title: "Natural Integrity", desc: "We retain the natural oils and fat content, ensuring authentic aroma and rich coconut milk extraction." },
              { icon: Globe, title: "Sustainable Sourcing", desc: "Ethically sourced from select Kerala farms, supporting local agriculture and traditional practices." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
""")
