"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Rehydration Guide", href: "/rehydration-guide" },
    { name: "Retail Pack", href: "/retail-pack" },
    { name: "Recipes", href: "/recipes" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-red-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between lg:justify-center relative">
        <Link href="/" passHref className="lg:absolute lg:left-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <Image 
              src="/logo-shield-v2.png" 
              alt="Maharani Official Logo" 
              width={60} 
              height={76} 
              className="object-contain drop-shadow-sm h-12 md:h-16 w-auto group-hover:scale-105 transition-transform duration-300" 
              priority 
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-sm font-bold text-gray-700">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link key={item.name} href={item.href} className={`relative hover:text-red-600 transition-colors py-2 group ${isActive ? "text-red-600" : ""}`}>
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className={`block py-2 text-lg font-black transition-colors ${isActive ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
