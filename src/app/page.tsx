"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Droplets, 
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
  Clock
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
    if (mediaQuery.matches) {
      setIsPreloading(false);
      return;
    }
    
    // 1. Preload Images optimized for mobile/iPhone
    const preloadImages = () => {
      let loadedCount = 0;
      const initialFramesRequired = 20; // Unblock UI after 20 frames
      
      const loadFrame = (i: number) => {
        const img = new window.Image();
        // ffmpeg extracts 1-indexed (0001.jpg), so add 1 to i
        img.src = `/hero-frames/${(i + 1).toString().padStart(4, '0')}.jpg`;
        imagesRef.current[i] = img;
        
        const handleLoad = () => {
          loadedCount++;
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

      for (let i = 0; i < Math.min(initialFramesRequired, frameCount); i++) {
        loadFrame(i);
      }
      
      setTimeout(() => {
        for (let i = initialFramesRequired; i < frameCount; i++) {
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
      
      let img = imagesRef.current[index];
      if (!img || !img.complete) {
         for (let i = index - 1; i >= 0; i--) {
            if (imagesRef.current[i] && imagesRef.current[i].complete) {
               img = imagesRef.current[i];
               break;
            }
         }
      }
      
      if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0) return false;

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
      return true;
    };

    let lastDrawnFrame = -1;

    const updateCanvas = () => {
      if (imagesRef.current.length > 0) {
        currentProgress = currentProgress + (targetProgress - currentProgress) * 0.08;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.max(0, Math.floor(currentProgress * frameCount))
        );
        
        if (frameIndex !== lastDrawnFrame) {
          const success = renderFrame(frameIndex);
          if (success) {
            lastDrawnFrame = frameIndex;
          }
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
        lastDrawnFrame = -1; // Force next rAF to redraw
    });
    
    handleScroll();
    animationFrameId = requestAnimationFrame(updateCanvas);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-[#FFFDF9] text-slate-800 selection:bg-red-600 selection:text-white">
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

      {/* Hero Section */}
      <section id="home" className="relative">
        <div ref={heroContainerRef} className="relative h-[350vh]">
          <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black -mt-[76px]">
            <canvas 
              ref={canvasRef}
              className="absolute top-0 left-0 w-full h-full object-cover -z-30 opacity-80"
            />
          </div>
        </div>
        
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

              <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter drop-shadow-sm">
                Instant Freshness. <br />
                <span className="text-red-600 bg-clip-text">Pure Kerala Coconut.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-2xl font-bold drop-shadow-sm">
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
                  href="/rehydration-guide"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                  Interactive How-To-Use <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/retail-pack"
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
                </div>
              </div>
            </motion.div>
          </div>
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

      {/* Contact Section */}
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
                  <p className="text-sm text-gray-600 font-medium">Kerala, India</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">Call Us</h4>
                  <p className="text-sm text-gray-600 mt-1 font-medium">+91 9544 330 066</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">Email</h4>
                  <p className="text-sm text-gray-600 mt-1 font-medium">info@maharaniproducts.in</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
               className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-900" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Inquiry Type</label>
                  <select className="w-full bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer">
                    <option>Retail Partnership</option>
                    <option>Bulk / Catering Order</option>
                    <option>Export Inquiry</option>
                    <option>General Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 rounded-xl px-5 py-4 outline-none transition-all font-medium text-gray-900 resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-gray-900 hover:bg-black text-white px-8 py-5 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex justify-center items-center gap-2 group">
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Image src="/logo-shield-v2.png" alt="Maharani Official Logo" width={60} height={76} className="h-16 w-auto" />
            <p className="text-sm text-gray-500 font-medium max-w-xs">Pioneering pure Kerala coconut products since 1981. Uncompromised quality for the modern kitchen.</p>
          </div>
          <div>
            <h5 className="font-black text-gray-900 mb-6">Explore</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="/about" className="hover:text-red-600 transition-colors">Our Heritage</a></li>
              <li><a href="/retail-pack" className="hover:text-red-600 transition-colors">Retail Products</a></li>
              <li><a href="/rehydration-guide" className="hover:text-red-600 transition-colors">How to Use</a></li>
              <li><a href="/recipes" className="hover:text-red-600 transition-colors">Recipes</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-gray-900 mb-6">Legal</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black text-gray-900 mb-6">Connect With Us</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 hover:border-green-200 transition-all">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400 font-medium mt-6">
              © {new Date().getFullYear()} Maharani Agro Products. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
