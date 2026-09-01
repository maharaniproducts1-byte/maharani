with open('src/app/products/page.tsx', 'r') as f:
    content = f.read()

new_content = """"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, ShoppingBag } from "lucide-react";
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

const products = [
  {
    id: "250g-pouch",
    name: "250g Retail Pouch",
    badge: "Flagship Retail Pack",
    badgeColor: "bg-red-600 text-white",
    description: "Premium desiccated coconut powder featuring our modern design, health certifications, and QR code access to interactive rehydration instructions.",
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

export default function ProductsPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
    </div>
  );
}
"""

with open('src/app/products/page.tsx', 'w') as f:
    f.write(new_content)
