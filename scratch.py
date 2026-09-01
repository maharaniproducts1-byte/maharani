import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Remove canvas / preloader imports & logic
content = re.sub(r'const \[isPreloading, setIsPreloading\] = useState\(true\);.*?return \(\n    <div className="bg-\[#FFFDF9\] text-slate-800 selection:bg-red-600 selection:text-white">\n      <AnimatePresence>.*?</AnimatePresence>', 'return (\n    <div className="bg-[#FFFDF9] text-slate-800 selection:bg-red-600 selection:text-white">', content, flags=re.DOTALL)

# 2. Replace Hero Section
hero_replacement = """      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={fadeUp}>
              <motion.div 
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 border border-yellow-300 px-5 py-2 rounded-full text-gray-900 text-xs md:text-sm font-black uppercase tracking-widest shadow-xl shadow-yellow-200/50"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" /> Approaching 50 Years of Excellence
              </motion.div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter drop-shadow-sm">
              Instant Freshness. <br />
              <span className="text-red-600 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Pure Kerala Coconut.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-2xl font-bold drop-shadow-sm">
              Crafted from select Kerala coconuts with natural coconut oils intact. 
              Zero added preservatives, zero cholesterol, and 100% pure culinary convenience for modern kitchens.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {[
                { label: "Dairy Free", icon: Heart },
                { label: "Zero Cholesterol", icon: Activity },
                { label: "Gluten Free", icon: Wheat },
                { label: "Rich Fibre", icon: Flame },
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-2 p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-md hover:shadow-lg hover:border-red-100 transition-all group cursor-default">
                  <badge.icon className="w-6 h-6 text-red-500 group-hover:scale-110 group-hover:text-red-600 transition-transform" />
                  <span className="text-xs font-bold text-gray-900 text-center">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-6">
              <a 
                href="/products"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-1 transition-all flex items-center gap-2 group"
              >
                Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/how-to-use"
                className="bg-white border-2 border-gray-200 hover:border-red-600 hover:text-red-600 text-gray-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-md hover:shadow-xl transition-all"
              >
                Interactive How-To-Use
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="lg:col-span-5 relative flex justify-center perspective-1000"
          >
            <div className="w-full bg-gradient-to-br from-red-600 to-red-900 rounded-[2.5rem] p-8 lg:p-10 text-white shadow-2xl shadow-red-900/40 relative overflow-hidden group border border-red-500/30">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
              
              <div className="absolute top-0 right-0 bg-white text-red-700 font-black text-[10px] px-5 py-2 rounded-bl-3xl uppercase tracking-widest shadow-lg">
                Premium Grade
              </div>

              <div className="text-center space-y-6 pt-6 relative z-10">
                <motion.div 
                  animate={{ y: [-5, 5, -5] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <img src="/pouch-250g-front.png" alt="Maharani 250g Pouch Front" className="mx-auto drop-shadow-2xl object-contain h-64 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                </motion.div>
                
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-200/80">
                    Desiccated Coconut Powder
                  </span>
                  <h3 className="text-4xl font-black tracking-tight drop-shadow-sm">250g Pouch</h3>
                </div>
                
                <p className="text-xs text-red-100 leading-relaxed max-w-xs mx-auto opacity-90">
                  Specially packaged for Tier-1 retail markets with instant QR rehydration guide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>"""
content = re.sub(r'      {/\* Hero Section \*/}\n      <section id="home" className="relative">.*?      </section>', hero_replacement, content, flags=re.DOTALL)

# Fix imports: remove { useState, useRef, useEffect } since we don't need them for the hero anymore (if we don't need state)
content = content.replace('import React, { useState, useRef, useEffect } from "react";', 'import React from "react";')

# Also fix the links in Footer
content = content.replace('href="/retail-pack"', 'href="/products"')
content = content.replace('href="/rehydration-guide"', 'href="/how-to-use"')
content = content.replace('View Retail Pack', 'Explore Products')

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
