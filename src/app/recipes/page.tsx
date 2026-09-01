"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ChefHat, Clock } from "lucide-react";
import { recipesData, recipesTranslations } from "@/data/recipes";
import { howToUseData } from "@/data/how-to-use";

const languages = howToUseData.map(d => ({ code: d.languageCode, name: d.languageName }));

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

const uiTranslations: Record<string, any> = {
  en: { title: "Recipe Collection", subtitle: "Discover the incredible versatility of Maharani Desiccated Coconut Powder. From traditional Kerala delicacies to modern baking, explore how our premium product enhances flavor, texture, and convenience in your kitchen.", all: "All", culinary: "Culinary Versatility", prep: "Prep", cook: "Cook", servings: "Servings", view: "View Recipe", empty: "No recipes found in this category." },
  hi: { title: "रेसिपी संग्रह", subtitle: "महारानी नारियल पाउडर की अद्भुत बहुमुखी प्रतिभा की खोज करें। पारंपरिक व्यंजनों से लेकर आधुनिक बेकिंग तक, यह स्वाद और सुविधा दोनों को बढ़ाता है।", all: "सभी", culinary: "पाक कला बहुमुखी प्रतिभा", prep: "तैयारी", cook: "पकाना", servings: "सर्विंग्स", view: "रेसिपी देखें", empty: "इस श्रेणी में कोई रेसिपी नहीं मिली।" },
  ml: { title: "പാചകക്കുറിപ്പുകൾ", subtitle: "മഹാറാണി കോക്കനട്ട് പൗഡറിന്റെ വൈവിധ്യം കണ്ടെത്തുക. പരമ്പരാഗത കേരള വിഭവങ്ങൾ മുതൽ ആധുനിക ബേക്കിംഗ് വരെ, ഇത് നിങ്ങളുടെ അടുക്കളയിൽ രുചിയും സൗകര്യവും നൽകുന്നു.", all: "എല്ലാം", culinary: "പാചക വൈവിധ്യം", prep: "തയ്യാറാക്കാൻ", cook: "പാചകം", servings: "സെർവിംഗ്സ്", view: "റെസിപ്പി കാണുക", empty: "ഈ വിഭാഗത്തിൽ റെസിപ്പികൾ കണ്ടെത്തിയില്ല." },
  ta: { title: "சமையல் குறிப்புகள்", subtitle: "மஹாராணி தேங்காய் பொடியின் பன்முகத்தன்மையை கண்டறியவும். பாரம்பரிய உணவு முதல் நவீன பேக்கிங் வரை, இது உங்கள் சமையலறையில் சுவையையும் வசதியையும் சேர்க்கிறது.", all: "அனைத்தும்", culinary: "சமையல் பன்முகத்தன்மை", prep: "தயாரிப்பு", cook: "சமையல்", servings: "சேவைகள்", view: "செய்முறையைப் பார்க்க", empty: "இந்த பிரிவில் சமையல் குறிப்புகள் இல்லை." },
  te: { title: "వంటకాలు", subtitle: "మహారాణి కొబ్బరి పొడి యొక్క బహుముఖ ప్రజ్ఞను కనుగొనండి. సాంప్రదాయ వంటకాల నుండి ఆధునిక బేకింగ్ వరకు, ఇది మీ వంటగదిలో రుచిని మరియు సౌలభ్యాన్ని పెంచుతుంది.", all: "అన్ని", culinary: "వంటల బహుముఖ ప్రజ్ఞ", prep: "సిద్ధం", cook: "వంట", servings: "వడ్డనలు", view: "వంటకం చూడండి", empty: "ఈ వర్గంలో వంటకాలు కనుగొనబడలేదు." },
  kn: { title: "ಪಾಕವಿಧಾನಗಳು", subtitle: "ಮಹಾರಾಣಿ ತೆಂಗಿನಕಾಯಿ ಪುಡಿಯ ಅದ್ಭುತ ಬಹುಮುಖತೆಯನ್ನು ಅನ್ವೇಷಿಸಿ. ಸಾಂಪ್ರದಾಯಿಕ ಕೇರಳದ ಭಕ್ಷ್ಯಗಳಿಂದ ಹಿಡಿದು ಆಧುನಿಕ ಬೇಕಿಂಗ್‌ವರೆಗೆ, ಇದು ನಿಮ್ಮ ಅಡುಗೆಮನೆಯಲ್ಲಿ ರುಚಿ ಮತ್ತು ಅನುಕೂಲವನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.", all: "ಎಲ್ಲಾ", culinary: "ಪಾಕಶಾಲೆಯ ಬಹುಮುಖತೆ", prep: "ಸಿದ್ಧತೆ", cook: "ಅಡುಗೆ", servings: "ಸರ್ವಿಂಗ್ಸ್", view: "ಪಾಕವಿಧಾನ ವೀಕ್ಷಿಸಿ", empty: "ಈ ವರ್ಗದಲ್ಲಿ ಯಾವುದೇ ಪಾಕವಿಧಾನಗಳು ಕಂಡುಬಂದಿಲ್ಲ." },
};

const categoryTranslations: Record<string, Record<string, string>> = {
  hi: { "Traditional Kerala": "पारंपरिक केरल", "Curries & Savoury": "करी और नमकीन", "Breakfast & Snacks": "नाश्ता और स्नैक्स", "Sweets & Desserts": "मिठाइयाँ", "Baking": "बेकिंग" },
  ml: { "Traditional Kerala": "പരമ്പരാഗത കേരളം", "Curries & Savoury": "കറികളും മറ്റും", "Breakfast & Snacks": "പ്രഭാതഭക്ഷണവും സ്നാക്സും", "Sweets & Desserts": "മധുരപലഹാരങ്ങൾ", "Baking": "ബേക്കിംഗ്" },
  ta: { "Traditional Kerala": "பாரம்பரிய கேரளா", "Curries & Savoury": "கறிகள் மற்றும் காரம்", "Breakfast & Snacks": "காலை உணவு மற்றும் சிற்றுண்டி", "Sweets & Desserts": "இனிப்புகள்", "Baking": "பேக்கிங்" },
  te: { "Traditional Kerala": "సాంప్రదాయ కేరళ", "Curries & Savoury": "కూరలు & కారం", "Breakfast & Snacks": "అల్పాహారం & స్నాక్స్", "Sweets & Desserts": "స్వీట్లు", "Baking": "బేకింగ్" },
  kn: { "Traditional Kerala": "ಸಾಂಪ್ರದಾಯಿಕ ಕೇರಳ", "Curries & Savoury": "ಕರಿಗಳು ಮತ್ತು ಖಾರ", "Breakfast & Snacks": "ಉಪಾಹಾರ ಮತ್ತು ತಿಂಡಿಗಳು", "Sweets & Desserts": "ಸಿಹಿತಿಂಡಿಗಳು", "Baking": "ಬೇಕಿಂಗ್" },
};

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLanguage, setActiveLanguage] = useState("en");

  const getTranslated = (recipe: any) => {
    if (activeLanguage === "en") return recipe;
    const translation = recipesTranslations?.[activeLanguage]?.[recipe.slug];
    return { ...recipe, ...translation };
  };

  const filteredRecipes = activeCategory === "All" 
    ? recipesData.map(getTranslated)
    : recipesData.filter(recipe => recipe.category === activeCategory).map(getTranslated);

  const ui = uiTranslations[activeLanguage] || uiTranslations.en;
  
  const getTranslatedCategory = (cat: string) => {
    if (cat === "All") return ui.all;
    if (activeLanguage === "en") return cat;
    return categoryTranslations[activeLanguage]?.[cat] || cat;
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen pt-12">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-4">
              <ChefHat className="w-4 h-4" /> {ui.culinary}
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              {ui.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-700 mt-6 font-medium leading-relaxed max-w-2xl mx-auto">
              {ui.subtitle}
            </motion.p>
          </motion.div>

          {/* Filter Bar */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setActiveLanguage(lang.code)}
                  className={`px-4 py-1.5 rounded-full font-bold text-xs transition-all duration-300 ${
                    activeLanguage === lang.code
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
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
                {getTranslatedCategory(category)}
              </button>
            ))}
            </div>
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
                      {getTranslatedCategory(recipe.category)}
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
                      href={`/recipes/${recipe.slug}?lang=${activeLanguage}`}
                      className="mt-auto w-full bg-white border border-gray-200 group-hover:bg-red-50 group-hover:border-red-200 text-gray-800 group-hover:text-red-600 py-3 rounded-xl font-bold text-sm text-center transition-all shadow-sm"
                    >
                      {ui.view}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-500 font-medium">{ui.empty}</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
