"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { howToUseData } from "@/data/how-to-use";
import { recipesData } from "@/data/recipes";
import { 
  Sparkles, 
  Droplets, 
  ChefHat, 
  QrCode, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Heart,
  Wheat,
  Activity,
  Flame,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronRight
} from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

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

export default function MaharaniLandingPage() {
  const [coconutGrams, setCoconutGrams] = useState<number>(100);
  const [activeTab, setActiveTab] = useState<"rehydrate" | "milk">("rehydrate");
  const warmWaterMl = activeTab === "rehydrate" ? coconutGrams * 0.5 : coconutGrams * 1.5;

  // --- Multilingual How to Use State ---
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);

  // --- Preloader State ---
  const [isPreloading, setIsPreloading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  // --- Canvas Scroll Sequence Logic ---
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameCount = 120;

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // We enable canvas on all devices since image sequence is performant!
    
    // 1. Preload Images optimized for mobile/iPhone
    const preloadImages = () => {
      let loadedCount = 0;
      const initialFramesRequired = 20; // Unblock UI after 20 frames
      
      const loadFrame = (i: number) => {
        const img = new window.Image();
        img.src = `/hero-frames/${i.toString().padStart(4, '0')}.jpg`;
        imagesRef.current[i] = img;
        
        const handleLoad = () => {
          loadedCount++;
          // Only track progress up to the required initial frames to unblock faster
          if (loadedCount <= initialFramesRequired) {
            setLoadProgress(Math.floor((loadedCount / initialFramesRequired) * 100));
          }
          if (loadedCount === initialFramesRequired) {
             setTimeout(() => setIsPreloading(false), 500); 
          }
          if (i === 0) {
             renderFrame(0);
          }
        };

        img.onload = handleLoad;
        img.onerror = handleLoad; 
      };

      // Load initial burst of frames
      for (let i = 0; i < Math.min(initialFramesRequired, frameCount); i++) {
        loadFrame(i);
      }
      
      // Lazy load the remaining frames in the background to prevent network/memory choking on mobile
      setTimeout(() => {
        for (let i = initialFramesRequired; i < frameCount; i++) {
          // Stagger the network requests to avoid connection limits
          setTimeout(() => loadFrame(i), (i - initialFramesRequired) * 15);
        }
      }, 200);
    };

    preloadImages();

    let animationFrameId: number;
    let targetProgress = 0;
    let currentProgress = 0;

    const handleScroll = () => {
      if (!heroContainerRef.current) return;
      
      const { top, height } = heroContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollableDistance = height - windowHeight;
      const scrolled = -top;
      
      let progress = scrolled / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      
      targetProgress = progress;
    };

    const renderFrame = (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      
      // Find nearest loaded frame if target isn't loaded (prevents blank screen if scrolling fast)
      let img = imagesRef.current[index];
      if (!img || !img.complete) {
         for (let i = index - 1; i >= 0; i--) {
            if (imagesRef.current[i] && imagesRef.current[i].complete) {
               img = imagesRef.current[i];
               break;
            }
         }
      }
      
      if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const cw = canvas.clientWidth || window.innerWidth;
      const ch = canvas.clientHeight || window.innerHeight;
      
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      ctx.scale(dpr, dpr);
      
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = cw / ch;
      
      let drawWidth = cw;
      let drawHeight = ch;
      let offsetX = 0;
      let offsetY = 0;
      
      if (imgRatio > canvasRatio) {
        drawWidth = ch * imgRatio;
        offsetX = (cw - drawWidth) / 2;
      } else {
        drawHeight = cw / imgRatio;
        offsetY = (ch - drawHeight) / 2;
      }
      
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    let lastDrawnFrame = -1;

    const updateCanvas = () => {
      if (imagesRef.current.length > 0) {
        // Decrease lerp factor from 0.15 to 0.08 for a smoother, buttery float effect
        currentProgress = currentProgress + (targetProgress - currentProgress) * 0.08;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.floor(currentProgress * frameCount))
        );
        
        // Performance optimization: Only draw if the frame actually changed
        if (frameIndex !== lastDrawnFrame) {
          renderFrame(frameIndex);
          lastDrawnFrame = frameIndex;
        }
      }
      animationFrameId = requestAnimationFrame(updateCanvas);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", () => {
        handleScroll();
        const frameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.floor(currentProgress * frameCount))
        );
        renderFrame(frameIndex);
    });
    
    // Call once to initialize
    handleScroll();
    animationFrameId = requestAnimationFrame(updateCanvas);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-slate-800 font-sans selection:bg-red-600 selection:text-white">
      <AnimatePresence>
        {isPreloading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#FFFDF9] flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mb-8"
            >
              <Image src="/logo-shield-v2.png" alt="Maharani Logo" width={120} height={150} className="object-contain" priority />
            </motion.div>
            <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-4 shadow-inner">
              <motion.div 
                className="h-full bg-red-600 rounded-full shadow-md"
                initial={{ width: 0 }}
                animate={{ width: `${loadProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-500" /> Preparing Freshness... {loadProgress}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-red-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <Image src="/logo-shield-v2.png" alt="Maharani Official Logo" width={60} height={76} className="object-contain drop-shadow-sm h-16 w-auto group-hover:scale-105 transition-transform duration-300" priority />
          </motion.div>

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 text-sm font-bold text-gray-700">
            {["Home", "About", "Rehydration Guide", "Retail Pack", "Recipes"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="relative hover:text-red-600 transition-colors py-2 group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative">
        {/* Scroll Container for Video */}
        <div ref={heroContainerRef} className="relative h-[350vh]">
          <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black">
            {/* Scroll Canvas Sequence */}
            <canvas 
              ref={canvasRef}
              className="absolute top-0 left-0 w-full h-full -z-30"
            />
          </div>
        </div>
        
        {/* Components appearing AFTER the scroll animation finishes */}
        <div className="relative z-10 pb-32 -mt-16 md:-mt-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full bg-white/70 backdrop-blur-xl rounded-[3rem] p-12 border border-white/80 shadow-2xl shadow-red-900/5">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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

              <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter drop-shadow-sm">
                Instant Freshness. <br />
                <span className="text-red-600 bg-clip-text">Pure Kerala Coconut.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg lg:text-xl text-gray-800 leading-relaxed max-w-2xl font-bold drop-shadow-sm">
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
                  href="#rehydration-guide"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                  Interactive How-To-Use <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#retail-pack"
                  className="bg-white border-2 border-gray-200 hover:border-red-600 hover:text-red-600 text-gray-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-md hover:shadow-xl transition-all"
                >
                  View Retail Pack
                </a>
              </motion.div>
            </motion.div>

            {/* Product Render Display Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="lg:col-span-5 relative flex justify-center perspective-1000"
            >
              <div className="w-full bg-gradient-to-br from-red-600 to-red-900 rounded-[2.5rem] p-8 lg:p-10 text-white shadow-2xl shadow-red-900/40 relative overflow-hidden group border border-red-500/30">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                
                <div className="absolute top-0 right-0 bg-white text-red-700 font-black text-[10px] px-5 py-2 rounded-bl-3xl uppercase tracking-widest shadow-lg">
                  New Retail Design
                </div>

                <div className="text-center space-y-6 pt-6 relative z-10">
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }} 
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <Image src="/pouch-250g-front.png" alt="Maharani 250g Pouch Front" width={240} height={300} className="mx-auto drop-shadow-2xl object-contain h-56 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
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

                  <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-left space-y-3 text-xs font-medium shadow-inner">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 drop-shadow-sm" />
                      <span>Replaces Fresh Grated Coconut in 10 Mins</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 drop-shadow-sm" />
                      <span>Contains Natural Coconut Oils</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 drop-shadow-sm" />
                      <span>No Chemicals or Preservatives</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-red-50/40 border-t border-red-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">The <span className="text-red-600">Maharani</span> Heritage</motion.h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-2">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">V</span>
                  Our Vision
                </h3>
                <p className="text-sm">To make Maharani the symbol of authentic Kerala coconut excellence, celebrated by families across India and beyond for quality, purity, and tradition.</p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="flex items-center gap-2 text-lg font-black text-gray-900 mb-2">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">M</span>
                  Our Mission
                </h3>
                <p className="text-sm">To transform Kerala&apos;s finest coconuts into premium food products that combine traditional authenticity with modern convenience. We strive to create lasting value for our customers through uncompromising quality, sustainable practices, and a deep respect for our heritage.</p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-red-900/5 flex flex-col items-center justify-center p-8 group hover:-translate-y-2 transition-transform duration-500 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Image src="/logo-shield-v2.png" alt="Maharani Logo" width={160} height={203} className="object-contain drop-shadow-md h-56 w-auto relative z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Rehydration Calculator */}
      <section id="rehydration-guide" className="py-24 bg-white border-y border-red-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-gray-900 tracking-tight">
              Rehydration Calculator
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 font-medium">
              Select your required quantity below to calculate the exact warm water ratio and preparation time for perfect results every time.
            </motion.p>
          </motion.div>

          {/* Calculator Switcher */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="bg-gray-50 p-1.5 rounded-2xl border border-gray-200 flex gap-1 shadow-inner">
              <button
                onClick={() => setActiveTab("rehydrate")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "rehydrate"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Grated Coconut Substitute
              </button>
              <button
                onClick={() => setActiveTab("milk")}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === "milk"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                Fresh Coconut Milk
              </button>
            </div>
          </motion.div>

          {/* Calculator Box */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
             className="bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="space-y-10">
              <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">1</span>
                {activeTab === "rehydrate" ? "Ratio Calculator" : "Milk Extractor"}
              </h3>
              
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase text-gray-500 tracking-wider">
                  Amount of Powder (Grams)
                </label>
                <div className="relative pt-2 pb-6">
                  <input 
                    type="range" 
                    min="20" 
                    max="250" 
                    step="10"
                    value={coconutGrams}
                    onChange={(e) => setCoconutGrams(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs font-bold text-gray-400 mt-3">
                    <span>20g</span>
                    <motion.div 
                      key={coconutGrams}
                      initial={{ scale: 1.2, color: "#DC2626" }}
                      animate={{ scale: 1, color: "#1F2937" }}
                      className="absolute left-1/2 -translate-x-1/2 top-8 text-xl font-black text-gray-900"
                    >
                      {coconutGrams} g
                    </motion.div>
                    <span>250g (Full Pack)</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-600 uppercase tracking-wide">Warm Water Required</span>
                  <motion.span 
                    key={warmWaterMl}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-red-600 text-3xl font-black"
                  >
                    {warmWaterMl} ml
                  </motion.span>
                </div>
                <div className="h-px w-full bg-red-100"></div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-gray-500">Resting / Soak Time</span>
                  <span className="font-bold text-gray-900 bg-white px-3 py-1 rounded-lg border border-gray-100">10 – 15 Mins</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 md:pl-12 md:border-l border-gray-100 h-full">
              <h4 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                 <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm">2</span>
                 How to Use
              </h4>
              
              {/* Language Selector */}
              <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                {howToUseData.map((lang, idx) => (
                  <button
                    key={lang.languageCode}
                    onClick={() => setSelectedLanguageIndex(idx)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                      selectedLanguageIndex === idx
                        ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                        : "bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {lang.languageName}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedLanguageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {howToUseData[selectedLanguageIndex].steps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                      <span className="w-6 h-6 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">{idx + 1}</span>
                      <div>
                        <h5 className="font-bold text-gray-900 text-sm mb-1">{step.title}</h5>
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Range Section */}
      <section id="retail-pack" className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Product Offerings</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 mt-4 font-medium">Engineered for retail consumers and high-volume commercial catering.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Highlighted 250g Pack */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
               className="group border-2 border-red-600 rounded-[2.5rem] p-10 bg-white shadow-xl hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black uppercase px-6 py-2 rounded-full shadow-lg">
                Flagship Retail Pack
              </div>
              
              <div className="flex gap-4 items-center justify-center mb-8 mt-4 h-56">
                <Image src="/pouch-250g-front.png" alt="250g Pouch Front" width={140} height={180} className="drop-shadow-2xl object-contain h-48 w-auto mix-blend-multiply group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
                <Image src="/pouch-250g-back.png" alt="250g Pouch Back" width={140} height={180} className="drop-shadow-2xl object-contain h-48 w-auto mix-blend-multiply group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
              </div>
              
              <div className="text-center space-y-4 flex-grow">
                <h3 className="text-3xl font-black text-gray-900">250g Retail Pouch</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  Featuring our updated modern design, health certifications, and QR code access to interactive rehydration instructions.
                </p>
                
                <div className="pt-4 pb-6">
                  <ul className="text-sm text-gray-700 space-y-3 font-semibold inline-block text-left">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-600" /> Dairy Free & Gluten Free</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-600" /> Zero Cholesterol & High Fibre</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-red-600" /> Natural Oil Intact</li>
                  </ul>
                </div>
              </div>
              
              <a href="#contact" className="w-full bg-red-50 hover:bg-red-600 text-red-700 hover:text-white border border-red-100 px-6 py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 mt-auto">
                Enquire for Retail <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* 1kg Bulk Pack */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
               className="group border border-gray-200 rounded-[2.5rem] p-10 bg-white hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-100 text-gray-500 border border-gray-200 text-xs font-black uppercase px-6 py-2 rounded-full">
                Commercial Pack
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-8 mt-4 h-56">
                <Image src="/1kg-front.jpeg" alt="1kg Bulk Pouch Front" width={180} height={220} className="drop-shadow-md object-contain h-52 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                <Image src="/1kg-back.jpeg" alt="1kg Bulk Pouch Back" width={180} height={220} className="drop-shadow-md object-contain h-52 w-auto mix-blend-multiply group-hover:scale-105 transition-transform duration-500 delay-75" />
              </div>
              
              <div className="text-center space-y-4 flex-grow">
                <h3 className="text-3xl font-black text-gray-900">1kg Bulk / Economy</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  High-capacity packaging perfectly suited for catering, commercial kitchens, and large family occasions.
                </p>
                
                <div className="pt-4 pb-6">
                  <ul className="text-sm text-gray-700 space-y-3 font-semibold inline-block text-left">
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> High yield efficiency</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> Consistent aroma & texture</li>
                    <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-400" /> Export quality standard</li>
                  </ul>
                </div>
              </div>
              
              {siteConfig.amazon1kgUrl ? (
                <a href={siteConfig.amazon1kgUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-gray-900 border border-[#FF9900] px-6 py-4 rounded-xl font-black text-center transition-colors flex items-center justify-center gap-2 mt-auto shadow-md">
                  BUY ON AMAZON <ChevronRight className="w-5 h-5" />
                </a>
              ) : (
                <a href="#contact" className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-6 py-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2 mt-auto">
                  Request Bulk Pricing <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recipes Section - Beyond Baking */}
      <section id="recipes" className="py-24 bg-white border-t border-gray-100">
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
                  {/* Using colored placeholder since we don't have images yet */}
                  <div className="absolute inset-0 bg-red-100/50 flex items-center justify-center">
                    <ChefHat className="w-12 h-12 text-red-200 group-hover:scale-110 transition-transform duration-500" />
                  </div>
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

      {/* Trust & Purity Matrix Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">Uncompromising Purity Since 1981</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg font-medium leading-relaxed">
              Unlike ordinary commercial coconut powders that remove essential oils, Maharani preserves the full integrity, aroma, and fat profile of genuine Kerala coconut.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          >
            {[
              { icon: ShieldCheck, title: "100% Pure & Unmixed", desc: "We never compromise with starch fillers or adulteration. Every pack delivers pure coconut goodness crafted with uncompromising standards." },
              { icon: Droplets, title: "Natural Oil Intact", desc: "Our gentle drying process retains the coconut's natural fat content, producing rich coconut milk and authentic taste when rehydrated." },
              { icon: Clock, title: "Trusted Heritage", desc: "Crafted in Kerala and trusted by families, caterers, and export markets across generations for nearly 50 years." }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-[2rem] border border-gray-700 hover:bg-gray-800 transition-colors">
                <div className="w-16 h-16 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black mb-4">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact & Export/Retail Inquiries Section */}
      <section id="contact" className="py-24 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Contact & Inquiries</motion.h2>
            <motion.p variants={fadeUp} className="text-base text-gray-600 mt-4 font-medium">Dedicated support for retail partnerships, export queries, or customer assistance.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
            {/* Contact Info */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
               className="lg:col-span-4 space-y-10"
            >
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">KSIDC</h4>
                  <p className="text-sm text-gray-600 mt-1 font-medium">Kinalur, Balussery</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">Phone</h4>
                  <p className="text-sm text-gray-600 mt-1 font-medium">
                    <a href="tel:7012618034" className="hover:text-red-600 transition-colors">701 261 8034</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">Email</h4>
                  <p className="text-sm text-gray-600 mt-1 font-medium">
                    <a href="mailto:Mpmaharani@gmail.com" className="hover:text-red-600 transition-colors">Mpmaharani@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-red-50 text-[#25D366] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">WhatsApp</h4>
                  <p className="text-sm text-gray-600 mt-1 font-medium">
                    <a href="https://wa.me/917012618034" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors">Chat with us</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
               className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all font-medium text-gray-900 placeholder-gray-400" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all font-medium text-gray-900 placeholder-gray-400" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Inquiry Type</label>
                  <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all font-medium text-gray-700 appearance-none">
                    <option>Retail Partnership</option>
                    <option>Bulk / Export Inquiry</option>
                    <option>Customer Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/50 focus:border-red-600 transition-all resize-none font-medium text-gray-900 placeholder-gray-400" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-0.5">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
            <div className="bg-white p-4 rounded-2xl inline-block shadow-sm">
              <Image src="/logo-shield-v2.png" alt="Maharani Logo" width={80} height={102} className="object-contain h-16 w-auto" />
            </div>
            <p className="text-sm font-medium">Crafted in Kerala since 1981. <br className="hidden md:block" />The Authentic Taste of Fresh Coconut.</p>
          </div>
          <div className="text-center md:text-right space-y-2">
            <div className="flex gap-4 justify-center md:justify-end mb-4">
               {/* Placeholders for social icons if needed */}
            </div>
            <p className="text-xs font-medium">© {new Date().getFullYear()} Maharani Agro Products. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917012618034" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300 group"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
