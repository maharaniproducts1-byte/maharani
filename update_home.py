import re

with open("src/app/page.tsx", "r") as f:
    content = f.read()

# 1. Update Hero Copy
old_hero_p = "Crafted from select Kerala coconuts with natural coconut oils intact.\\n              Zero added preservatives, zero cholesterol, and 100% pure culinary convenience for modern kitchens."
new_hero_p = "Maharani Desiccated Coconut Powder is made by drying shredded coconut after removing the brown skin.\\n              Widely used in confectioneries, puddings, and other dishes as a perfect, uncompromised substitute for raw grated coconut."
content = content.replace(old_hero_p, new_hero_p)

# 2. Prepare the new sections to be injected before Trust & Purity Matrix
clients_and_certs = """
      {/* Clients Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            <motion.h3 variants={fadeUp} className="text-xl font-bold text-gray-400 uppercase tracking-widest">
              Those We Serve
            </motion.h3>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black text-gray-900 tracking-tighter">SYMEGA</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">India</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black text-red-600 tracking-tighter">Tasty Foods</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">U.A.E</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black text-gray-900 tracking-tighter">Shakthi Group</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">U.S.A</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black text-gray-800 tracking-tighter">GCR GROUP</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">U.A.E</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black text-gray-900 tracking-tighter">ORKLA</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">India & U.A.E</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-gray-900 tracking-tight">Our Certifications</motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-12 pt-4">
              <div className="w-24 h-24 rounded-full border border-gray-200 bg-white flex flex-col items-center justify-center shadow-sm">
                <span className="font-black text-red-700 text-lg">GMP</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">Certified</span>
              </div>
              <div className="w-24 h-24 rounded-full border border-gray-200 bg-white flex flex-col items-center justify-center shadow-sm">
                <span className="font-black text-green-600 text-lg">HACCP</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase">Certified</span>
              </div>
              <div className="w-24 h-16 border border-gray-200 bg-white flex flex-col items-center justify-center shadow-sm rounded-lg">
                <span className="font-black text-blue-800 text-2xl tracking-tighter">LMS</span>
              </div>
              <div className="w-24 h-16 border border-gray-200 bg-white flex flex-col items-center justify-center shadow-sm rounded-lg">
                <span className="font-black text-gray-700 text-xl tracking-widest">eiaci</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
"""

content = content.replace("      {/* Trust & Purity Matrix Section */}", clients_and_certs + "\n      {/* Trust & Purity Matrix Section */}")

with open("src/app/page.tsx", "w") as f:
    f.write(content)
