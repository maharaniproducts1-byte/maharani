"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ChefHat, Clock } from "lucide-react";
import { recipesData } from "@/data/recipes";

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

const categories = ["All", "Traditional Kerala", "Curries & Savoury", "Breakfast & Snacks", "Sweets & Desserts", "Baking"];

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRecipes = activeCategory === "All" 
    ? recipesData 
    : recipesData.filter(recipe => recipe.category === activeCategory);

  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-12">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-4">
              <ChefHat className="w-4 h-4" /> Culinary Versatility
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Recipe Collection
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-700 mt-6 font-medium leading-relaxed max-w-2xl mx-auto">
              Discover the incredible versatility of Maharani Desiccated Coconut Powder. From traditional Kerala delicacies to modern baking, explore how our premium product enhances flavor, texture, and convenience in your kitchen.
            </motion.p>
          </motion.div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-red-600 text-white shadow-md shadow-red-900/20"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Recipe Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredRecipes.map((recipe) => (
                <motion.div 
                  key={recipe.slug} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 flex flex-col rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                    <Image src={recipe.image} alt={recipe.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase text-gray-800 shadow-sm">
                      {recipe.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="font-black text-gray-900 text-xl mb-2">{recipe.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium mb-4 line-clamp-2">{recipe.description}</p>
                    
                    <div className="flex items-center gap-3 text-xs font-bold text-gray-500 mb-6">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {recipe.prepTime}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{recipe.servings}</span>
                    </div>

                    <Link 
                      href={`/recipes/${recipe.slug}`}
                      className="mt-auto w-full bg-white border border-gray-200 group-hover:bg-red-50 group-hover:border-red-200 text-gray-800 group-hover:text-red-600 py-3 rounded-xl font-bold text-sm text-center transition-all shadow-sm"
                    >
                      View Recipe
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-500 font-medium">No recipes found in this category.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
