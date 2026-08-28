"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ChevronRight, ShoppingBag, Droplets, Leaf, Activity } from "lucide-react";
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

const products = [
  {
    id: "250g-pouch",
    name: "250g Retail Pouch",
    badge: "Flagship Retail Pack",
    badgeColor: "bg-red-600 text-white",
    description: "Desiccated Coconut Powder is made by drying shredded coconut after removing the brown skin. It is widely used in confectioneries, puddings, and other dishes as a substitute for raw grated coconut.",
    images: ["/pouch-250g-front.png", "/pouch-250g-back.png"],
    features: [
      "Dairy Free & Gluten Free",
      "Zero Cholesterol & High Fibre",
      "Natural Oil Intact"
    ],
    actionText: "Enquire for Retail",
    actionLink: "/#contact",
    isPrimary: true
  },
  {
    id: "1kg-bulk",
    name: "1kg Bulk / Economy",
    badge: "Commercial Pack",
    badgeColor: "bg-gray-100 text-gray-600 border border-gray-200",
    description: "High-capacity packaging perfectly suited for catering, commercial kitchens, and large family occasions with consistent export quality.",
    images: ["/1kg-front.jpeg", "/1kg-back.jpeg"],
    features: [
      "High yield efficiency",
      "Consistent aroma & texture",
      "Export quality standard"
    ],
    actionText: siteConfig.amazon1kgUrl ? "Buy on Amazon" : "Request Bulk Pricing",
    actionLink: siteConfig.amazon1kgUrl || "/#contact",
    isPrimary: false
  }
];

const composition = [
  { label: "Nature Composition", value: "1.3 – 2.5%" },
  { label: "Ultraviolet & Sun Screen", value: "6.0 – 6.6%" },
  { label: "Oil", value: "68.0 – 70.0%" },
  { label: "Carbohydrate", value: "8.0 – 20.0%" },
  { label: "Crude Fiber", value: "4.0 – 6.0%" }
];

export default function ProductsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-12">
      {/* Product Catalog */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-4">
              <ShoppingBag className="w-4 h-4" /> Our Catalog
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Premium Coconut Products
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 mt-6 font-medium leading-relaxed">
              Engineered for both retail consumers and high-volume commercial catering. 
              Our product line is designed to scale with your culinary needs, delivering uncompromising quality in every pack.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
            {products.map((product, idx) => (
              <motion.div 
                 key={product.id}
                 initial={{ opacity: 0, y: 30 }} 
                 whileInView={{ opacity: 1, y: 0 }} 
                 viewport={{ once: true }} 
                 transition={{ delay: idx * 0.2 }}
                 className={`group rounded-[2.5rem] p-10 bg-white transition-all duration-500 relative flex flex-col h-full ${
                   product.isPrimary 
                     ? "border-2 border-red-600 shadow-xl hover:shadow-2xl hover:shadow-red-900/10" 
                     : "border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl"
                 }`}
              >
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-black uppercase px-6 py-2 rounded-full ${product.badgeColor} shadow-sm`}>
                  {product.badge}
                </div>
                
                <div className="flex gap-4 items-center justify-center mb-10 mt-6 h-64">
                  {product.images.map((img, i) => (
                    <Image 
                      key={i}
                      src={img} 
                      alt={`${product.name} View ${i + 1}`} 
                      width={160} 
                      height={200} 
                      className={`drop-shadow-2xl object-contain h-56 w-auto mix-blend-multiply transition-transform duration-500 ${
                        i === 0 ? "group-hover:-rotate-3 group-hover:scale-105" : "group-hover:rotate-3 group-hover:scale-105 delay-75"
                      }`} 
                    />
                  ))}
                </div>
                
                <div className="text-center space-y-5 flex-grow">
                  <h3 className="text-3xl font-black text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium px-4">
                    {product.description}
                  </p>
                  
                  <div className="pt-6 pb-8 bg-gray-50/50 rounded-2xl mx-2">
                    <ul className="text-sm text-gray-700 space-y-4 font-semibold inline-block text-left">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${product.isPrimary ? "text-red-600" : "text-gray-400"}`} /> 
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <a 
                  href={product.actionLink} 
                  target={product.actionLink.startsWith("http") ? "_blank" : "_self"}
                  rel={product.actionLink.startsWith("http") ? "noopener noreferrer" : ""}
                  className={`w-full px-6 py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 mt-auto ${
                    product.isPrimary
                      ? "bg-red-50 hover:bg-red-600 text-red-700 hover:text-white border border-red-100"
                      : product.actionLink.startsWith("http") 
                        ? "bg-[#FF9900] hover:bg-[#FF9900]/90 text-gray-900 border border-[#FF9900] shadow-md"
                        : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  {product.actionText} <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Composition & Nutrition */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Composition */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Composition of the Product</h2>
              <p className="text-sm text-gray-500 mt-2 font-medium">Standardized specifications for Maharani Desiccated Coconut Powder.</p>
            </div>
            
            <div className="bg-[#FDFBF7] rounded-[2rem] p-8 border border-gray-200 shadow-sm space-y-6">
              {composition.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-200/60 pb-4 last:border-0 last:pb-0">
                  <span className="font-bold text-gray-700">{item.label}</span>
                  <span className="font-black text-gray-900 bg-white px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Nutritional Benefits */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Nutritional Benefits</h2>
              <p className="text-sm text-gray-500 mt-2 font-medium">Kuttiyadi coconut is rich in essential health components.</p>
            </div>

            <div className="space-y-6">
              <motion.div variants={fadeUp} className="flex gap-4 p-6 rounded-3xl bg-red-50/50 border border-red-100">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">Healthy Fats</h4>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    High in medium chain triglycerides (MCTs), making it a good choice for a keto diet, providing quick energy and supporting weight management. Lauric acid has antiviral, antibacterial, and antiprotozoal properties. Capric acid also has antimicrobial properties. Coconut fat normalizes body lipids, protects against alcohol liver damage, and improves the immune system.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4 p-6 rounded-3xl bg-green-50/50 border border-green-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">Dietary Fiber</h4>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    Coconut is a natural low-carb, high-fiber food ideally suited for low carbohydrate diets. High in fibre, aiding in digestion and promoting a healthy gut.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4 p-6 rounded-3xl bg-blue-50/50 border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-gray-900 mb-2">Vitamins and Minerals</h4>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    Contains essential nutrients such as manganese, copper, selenium, iron, potassium, and magnesium, as well as antioxidants and calories.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
}
