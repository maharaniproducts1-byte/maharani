"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Register ScrollTrigger outside of the component to ensure it's registered once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// We will fetch the exact frame count based on the extracted frames.
// For now, assume a placeholder total or pass it as a prop.
// The script outputs `frame_0000.webp` etc.
export const ScrollVideoHero = ({ totalFrames = 240 }: { totalFrames?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const currentFrame = (index: number) =>
    `/hero-scroll-frames/frame_${index.toString().padStart(4, "0")}.webp`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    // Set canvas dimensions to match 1080p standard for high quality
    canvas.width = 1920;
    canvas.height = 1080;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const drawImageScaled = (img: HTMLImageElement, ctx: CanvasRenderingContext2D) => {
      // Calculate object-fit: cover equivalent for canvas
      const hRatio = canvas.width / img.width;
      const vRatio = canvas.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.width * ratio) / 2;
      const centerShift_y = (canvas.height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    // Preload logic
    let firstImageLoaded = false;
    const firstImage = new window.Image();
    firstImage.src = currentFrame(0);
    firstImage.onload = () => {
      drawImageScaled(firstImage, context);
      firstImageLoaded = true;
      if (loadedCount === totalFrames) {
        setLoaded(true);
      }
    };

    // Preload all frames
    for (let i = 0; i < totalFrames; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      images.push(img);
      img.onload = () => {
        loadedCount++;
        const prog = Math.floor((loadedCount / totalFrames) * 100);
        setLoadingProgress(prog);
        if (prog === 100 && firstImageLoaded) {
          // Add a small delay for smoother UX once it hits 100%
          setTimeout(() => setLoaded(true), 400);
        }
      };
    }

    // GSAP ScrollTrigger
    const scrollObj = { frame: 0 };
    
    const trigger = gsap.to(scrollObj, {
      frame: totalFrames - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Scroll distance for the animation
        scrub: 1.5,
        pin: true,
      },
      onUpdate: () => {
        const frameIndex = Math.round(scrollObj.frame);
        const img = images[frameIndex];
        if (img && img.complete) {
          drawImageScaled(img, context);
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, [totalFrames]);

  return (
    <section ref={containerRef} id="scroll-video-track" className="relative w-full h-screen bg-black overflow-hidden">
      <AnimatePresence>
        {!loaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFFDF9]"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <Image 
                src="/logo-shield-v2.png" 
                alt="Maharani Logo" 
                width={150} 
                height={200} 
                className="w-32 md:w-48 h-auto drop-shadow-md"
                priority
              />
            </motion.div>
            
            <div className="mt-12 w-64 h-1.5 bg-red-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-red-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ ease: "linear", duration: 0.2 }}
              />
            </div>
            
            <div className="mt-4 font-bold text-red-800/60 tracking-widest text-[10px] uppercase">
              Loading Experience {loadingProgress}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover will-change-transform"
        style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      />
      {/* Optional scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 opacity-50">
        <span className="text-white text-[10px] uppercase tracking-[0.3em]">Scroll Down</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};
