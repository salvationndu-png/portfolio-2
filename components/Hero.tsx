import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Server, Database, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, STATS } from '../constants';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Laravel Developer", "Backend Engineer", "API Specialist"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl opacity-60 animate-blob mix-blend-multiply dark:mix-blend-screen filter" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl opacity-60 animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen filter" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-10 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-sm font-semibold mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Freelance Projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
            <span className="block text-slate-400 dark:text-slate-500 text-4xl md:text-5xl font-medium mb-2">I build systems as a</span>
            <div className="h-[1.2em] overflow-hidden">
               <motion.span 
                 key={textIndex}
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -50, opacity: 0 }}
                 transition={{ duration: 0.5 }}
                 className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400"
               >
                 {roles[textIndex]}
               </motion.span>
            </div>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
            I'm <strong>{CONTACT_INFO.name}</strong>, engineering robust Laravel backends and RESTful APIs for mission-critical logistics and wholesale platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
            {STATS.map((stat, idx) => (
              <div key={idx}>
                <h4 className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block perspective-1000 order-1 lg:order-2"
        >
           {/* Image Container with Sophisticated Frame */}
           <div className="relative z-10 w-full max-w-md mx-auto transform transition-transform duration-500 hover:scale-[1.02]">
             
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/30 rounded-full blur-2xl -z-10 translate-x-10 -translate-y-10" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl -z-10 -translate-x-10 translate-y-10" />
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-[2.5rem] transform rotate-6 blur-sm opacity-20 dark:opacity-40 -z-10" />

             {/* Main Card */}
             <div className="relative bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-3 shadow-2xl border border-white/20 dark:border-slate-700/50">
                <div className="rounded-[2rem] overflow-hidden relative aspect-[3/4] shadow-inner group">
                   {/* 
                       Note: Ensure 'profile.jpg' is placed in your public folder 
                   */}
                   <img 
                     src="/profile.jpg" 
                     alt={CONTACT_INFO.name}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   
                   {/* Gradient Overlay for Text Readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60" />

                   {/* Floating Tech Badges */}
                   <motion.div 
                     initial={{ x: 50, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ delay: 0.5 }}
                     className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-lg"
                   >
                      <Server className="text-white w-6 h-6" />
                   </motion.div>

                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.6 }}
                     className="absolute top-24 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-lg"
                   >
                      <Database className="text-white w-6 h-6" />
                   </motion.div>

                   {/* Bottom Card Info */}
                   <motion.div 
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.7 }}
                     className="absolute bottom-6 left-6 right-6"
                   >
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                        <div className="bg-green-500 p-2.5 rounded-xl shadow-lg shadow-green-500/20 text-white">
                           <ShieldCheck size={24} />
                        </div>
                        <div>
                           <p className="text-white font-bold text-base">Backend Architect</p>
                           <p className="text-slate-300 text-xs font-medium">Secure & Scalable Systems</p>
                        </div>
                     </div>
                   </motion.div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth'})}>
        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-medium">Scroll</span>
        <ChevronRight className="rotate-90 text-slate-900 dark:text-white" size={20} />
      </div>
    </section>
  );
};

export default Hero;