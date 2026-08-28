import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Clock, Users, Flame, CheckCircle2, Calculator } from "lucide-react";
import { recipesData } from "@/data/recipes";

// Type for Next.js 15 route params (App Router)
// Actually Next.js 13/14 uses `{ params: { slug: string } }`
export function generateStaticParams() {
  return recipesData.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const recipe = recipesData.find((r) => r.slug === resolvedParams.slug);
  if (!recipe) return { title: "Recipe Not Found" };
  
  return {
    title: `${recipe.title} | Maharani Recipes`,
    description: recipe.description,
  };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const recipe = recipesData.find((r) => r.slug === resolvedParams.slug);

  if (!recipe) {
    notFound();
  }

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
            <ChevronLeft className="w-4 h-4" /> Back to Recipes
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
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Prep Time</span>
              <span className="font-black text-gray-900">{recipe.prepTime}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100"><Flame className="w-5 h-5" /></div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Cook Time</span>
              <span className="font-black text-gray-900">{recipe.cookTime}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100"><Users className="w-5 h-5" /></div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Servings</span>
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
            <h3 className="text-2xl font-black text-gray-900 mb-6">Ingredients</h3>
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
                <Calculator className="w-4 h-4 text-red-600" /> Need help preparing coconut?
              </h4>
              <p className="text-xs text-gray-500 mb-4 font-medium leading-relaxed">
                Use our interactive rehydration calculator to find the exact powder-to-water ratios.
              </p>
              <Link href="/how-to-use#calculator" className="inline-block w-full text-center bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors border border-red-100 font-bold text-xs py-2.5 rounded-lg">
                Open Rehydration Calculator
              </Link>
            </div>
          </div>
        </div>

        {/* Preparation Steps */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-8">Preparation Steps</h3>
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
              <h4 className="text-xl font-black text-gray-900 mb-4">Chef&apos;s Notes</h4>
              {recipe.tips?.map((tip, idx) => (
                <p key={idx} className="text-sm font-medium text-gray-700 mb-3">
                  <span className="font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-md text-xs uppercase tracking-wide mr-2">Tip</span> 
                  {tip}
                </p>
              ))}
              {recipe.servingSuggestion && (
                <p className="text-sm font-medium text-gray-700 mt-6 pt-6 border-t border-yellow-200">
                  <span className="font-bold text-yellow-800 bg-yellow-100 px-2 py-0.5 rounded-md text-xs uppercase tracking-wide mr-2">Serving Suggestion</span> 
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
