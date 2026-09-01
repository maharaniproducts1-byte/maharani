import re

with open("src/app/how-to-use/page.tsx", "r") as f:
    content = f.read()

# We'll use regex to find the section between {/* Practical Usage & Applications */} and {/* Calculator Section */}
old_section = re.search(r'      {/\* Practical Usage & Applications \*/}(.*?)      {/\* Calculator Section \*/}', content, re.DOTALL)

if old_section:
    new_section_content = """
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
      </section>\n
"""
    content = content.replace(old_section.group(1), new_section_content)

with open("src/app/how-to-use/page.tsx", "w") as f:
    f.write(content)
