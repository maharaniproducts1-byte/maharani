"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChefHat, Clock } from "lucide-react";
import { recipesData } from "@/data/recipes";

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

export default function RecipesPage() {
  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-12">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-4">
              <ChefHat className="w-4 h-4" /> Everyday Culinary Versatility
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Kerala Heritage Recipes
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 mt-4 font-medium">
              Maharani is a complete, uncompromised substitute for freshly grated coconut in authentic South Indian cuisine.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {recipesData.map((recipe, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-gray-50 flex flex-col rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden group">
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <Image src={recipe.image} alt={recipe.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-black text-gray-900 text-xl mb-2">{recipe.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium mb-4 line-clamp-2">{recipe.description}</p>
                  
                  <div className="flex items-center gap-3 text-xs font-bold text-gray-500 mb-6">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.prepTime}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{recipe.servings} Servings</span>
                  </div>

                  <Link 
                    href={`/recipes/${recipe.slug}`}
                    className="mt-auto w-full bg-white border border-gray-200 group-hover:border-red-200 text-gray-800 group-hover:text-red-600 py-3 rounded-xl font-bold text-sm text-center transition-all shadow-sm"
                  >
                    View Recipe
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
