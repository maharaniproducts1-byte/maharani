import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock, Users, Flame, CheckCircle2, Calculator } from "lucide-react";
import { recipesData, recipesTranslations } from "@/data/recipes";

const uiTranslations: Record<string, any> = {
  en: { back: "Back to Recipes", ingredients: "Ingredients", help: "Need help preparing coconut?", calcText: "Use our interactive rehydration calculator to find the exact powder-to-water ratios.", openCalc: "Open Rehydration Calculator", prepSteps: "Preparation Steps", chefsNotes: "Chef's Notes", tip: "Tip", servingSugg: "Serving Suggestion", prepTime: "Prep Time", cookTime: "Cook Time", servings: "Servings" },
  hi: { back: "रेसिपी पर वापस", ingredients: "सामग्री", help: "नारियल तैयार करने में मदद चाहिए?", calcText: "सटीक अनुपात खोजने के लिए हमारे कैलकुलेटर का उपयोग करें।", openCalc: "कैलकुलेटर खोलें", prepSteps: "तैयारी के कदम", chefsNotes: "शेफ के नोट्स", tip: "सुझाव", servingSugg: "परोसने का सुझाव", prepTime: "तैयारी", cookTime: "पकाना", servings: "सर्विंग्स" },
  ml: { back: "റെസിപ്പികളിലേക്ക് മടങ്ങുക", ingredients: "ചേരുവകൾ", help: "തേങ്ങ തയ്യാറാക്കാൻ സഹായം വേണോ?", calcText: "കൃത്യമായ അനുപാതം കണ്ടെത്താൻ ഞങ്ങളുടെ കാൽക്കുലേറ്റർ ഉപയോഗിക്കുക.", openCalc: "കാൽക്കുലേറ്റർ തുറക്കുക", prepSteps: "തയ്യാറാക്കുന്ന വിധം", chefsNotes: "ഷെഫിന്റെ കുറിപ്പുകൾ", tip: "നുറുങ്ങ്", servingSugg: "സെർവിംഗ് നിർദ്ദേശം", prepTime: "തയ്യാറാക്കാൻ", cookTime: "പാചകം", servings: "സെർവിംഗ്സ്" },
  ta: { back: "சமையல் குறிப்புகளுக்கு திரும்பு", ingredients: "தேவையான பொருட்கள்", help: "தேங்காய் தயாரிக்க உதவி தேவையா?", calcText: "சரியான விகிதத்தைக் கண்டறிய எங்கள் கால்குலேட்டரைப் பயன்படுத்தவும்.", openCalc: "கால்குலேட்டரைத் திற", prepSteps: "தயாரிப்பு படிகள்", chefsNotes: "செஃப் குறிப்புகள்", tip: "குறிப்பு", servingSugg: "பரிமாறும் பரிந்துரை", prepTime: "தயாரிப்பு", cookTime: "சமையல்", servings: "சேவைகள்" },
  te: { back: "వంటకాలకు తిరిగి వెళ్ళు", ingredients: "కావలసినవి", help: "కొబ్బరిని సిద్ధం చేయడంలో సహాయం కావాలా?", calcText: "ఖచ్చితమైన నిష్పత్తిని కనుగొనడానికి మా కాలిక్యులేటర్‌ను ఉపయోగించండి.", openCalc: "కాలిక్యులేటర్ తెరవండి", prepSteps: "తయారీ దశలు", chefsNotes: "చెఫ్ నోట్స్", tip: "చిట్కా", servingSugg: "వడ్డించే సూచన", prepTime: "సిద్ధం", cookTime: "వంట", servings: "వడ్డనలు" },
  kn: { back: "ಪಾಕವಿಧಾನಗಳಿಗೆ ಹಿಂತಿರುಗಿ", ingredients: "ಪದಾರ್ಥಗಳು", help: "ತೆಂಗಿನಕಾಯಿ ತಯಾರಿಸಲು ಸಹಾಯ ಬೇಕೇ?", calcText: "ನಿಖರವಾದ ಅನುಪಾತವನ್ನು ಕಂಡುಹಿಡಿಯಲು ನಮ್ಮ ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಬಳಸಿ.", openCalc: "ಕ್ಯಾಲ್ಕುಲೇಟರ್ ತೆರೆಯಿರಿ", prepSteps: "ತಯಾರಿಯ ಹಂತಗಳು", chefsNotes: "ಬಾಣಸಿಗರ ಟಿಪ್ಪಣಿಗಳು", tip: "ಸುಳಿವು", servingSugg: "ಸೇವೆ ಮಾಡುವ ಸಲಹೆ", prepTime: "ಸಿದ್ಧತೆ", cookTime: "ಅಡುಗೆ", servings: "ಸರ್ವಿಂಗ್ಸ್" },
};

// Type for Next.js 15 route params (App Router)
// Actually Next.js 13/14 uses `{ params: { slug: string } }`
export function generateStaticParams() {
  return recipesData.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const rawRecipe = recipesData.find((r) => r.slug === resolvedParams.slug);
  if (!rawRecipe) return { title: "Recipe Not Found" };
  
  // Note: generateMetadata doesn't currently get searchParams in this version signature,
  // so we'll fallback to english for the metadata title.
  return {
    title: `${rawRecipe.title} | Maharani Recipes`,
    description: rawRecipe.description,
  };
}

export default async function RecipePage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams?: Promise<{ lang?: string }> }) {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : { lang: "en" };
  const lang = resolvedSearchParams.lang || "en";
  
  const rawRecipe = recipesData.find((r) => r.slug === resolvedParams.slug);

  if (!rawRecipe) {
    notFound();
  }

  const translation = recipesTranslations?.[lang]?.[rawRecipe.slug];
  const recipe = { ...rawRecipe, ...translation };
  const ui = uiTranslations[lang] || uiTranslations.en;

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 pb-24">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-red-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <Image src="/logo-shield-v2.png" alt="Maharani Official Logo" width={40} height={50} className="object-contain h-10 w-auto" />
            <span className="font-black text-gray-900 hidden sm:block">Maharani Agro Products</span>
          </Link>
          <Link href="/recipes" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-red-600 transition-colors">
            <ChevronLeft className="w-4 h-4" /> {ui.back}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative border-b border-red-100 pb-20 pt-24 min-h-[400px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src={recipe.image} alt={recipe.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FFFDF9]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full shadow-sm border border-red-100">
            {recipe.category || "Heritage Recipe"}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight drop-shadow-sm">{recipe.title}</h1>
          <p className="text-lg text-gray-800 font-bold max-w-2xl mx-auto drop-shadow-sm">{recipe.description}</p>
          
          {/* Main Dish Image */}
          <div className="flex justify-center mt-8 mb-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden">
              <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100"><Clock className="w-5 h-5" /></div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{ui.prepTime}</span>
              <span className="font-black text-gray-900">{recipe.prepTime}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100"><Flame className="w-5 h-5" /></div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{ui.cookTime}</span>
              <span className="font-black text-gray-900">{recipe.cookTime}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100"><Users className="w-5 h-5" /></div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{ui.servings}</span>
              <span className="font-black text-gray-900">{recipe.servings}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Ingredients Sidebar */}
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-xl shadow-gray-200/50 sticky top-24">
            <h3 className="text-2xl font-black text-gray-900 mb-6">{ui.ingredients}</h3>
            <ul className="space-y-4">
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="flex gap-3 text-sm font-medium text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-red-600" /> {ui.help}
              </h4>
              <p className="text-xs text-gray-500 mb-4 font-medium leading-relaxed">
                {ui.calcText}
              </p>
              <Link href="/how-to-use#calculator" className="inline-block w-full text-center bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors border border-red-100 font-bold text-xs py-2.5 rounded-lg">
                {ui.openCalc}
              </Link>
            </div>
          </div>
        </div>

        {/* Preparation Steps */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-8">{ui.prepSteps}</h3>
            <div className="space-y-6">
              {recipe.steps.map((step, idx) => {
                // To safely handle the format "01 — text"
                const hasPrefix = step.includes(" — ");
                const stepParts = step.split(" — ");
                const text = hasPrefix ? stepParts[1] : step;

                return (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <span className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-black shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm">
                        {idx + 1}
                      </span>
                      {idx < recipe.steps.length - 1 && (
                        <div className="w-px h-full bg-gray-200 my-2 group-hover:bg-red-200 transition-colors"></div>
                      )}
                    </div>
                    <div className="pt-2 pb-8">
                      {hasPrefix && (
                        <h4 className="text-lg font-black text-gray-900 mb-1">{stepParts[0].replace(/^[0-9]+ /, '')}</h4>
                      )}
                      <p className="text-gray-800 font-medium leading-relaxed">{text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {(((recipe.tips?.length ?? 0) > 0) || recipe.servingSuggestion) && (
            <div className="bg-yellow-50 p-8 rounded-[2rem] border border-yellow-100 shadow-sm">
              <h4 className="text-xl font-black text-gray-900 mb-4">{ui.chefsNotes}</h4>
              {recipe.tips?.map((tip: string, idx: number) => (
                <p key={idx} className="text-sm font-medium text-gray-700 mb-3">
                  <span className="font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-md text-xs uppercase tracking-wide mr-2">{ui.tip}</span> 
                  {tip}
                </p>
              ))}
              {recipe.servingSuggestion && (
                <p className="text-sm font-medium text-gray-700 mt-6 pt-6 border-t border-yellow-200">
                  <span className="font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-md text-xs uppercase tracking-wide mr-2">{ui.servingSugg}</span> 
                  {recipe.servingSuggestion}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
