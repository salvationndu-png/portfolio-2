import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TECH_LOGOS } from '../constants';
import { motion, Variants } from 'framer-motion';
import { Cpu, Code2 } from 'lucide-react';

const Skills: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <SectionWrapper id="skills" className="bg-slate-50/50 dark:bg-slate-900/50 relative">
      <div className="text-center mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4"
        >
          <Code2 size={16} />
          <span>Development Arsenal</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
          Technologies I Master
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A curated list of the tools and frameworks I use to build high-performance, scalable applications.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {TECH_LOGOS.map((tech, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700/60 hover:border-primary-500/50 dark:hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
              style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }}
            />
            
            <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
              <img 
                src={tech.url} 
                alt={tech.name} 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            
            <h3 className="relative z-10 font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              {tech.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative dots */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-slate-200/50 dark:bg-slate-800/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary-200/30 dark:bg-primary-900/10 rounded-full blur-3xl -z-10" />
    </SectionWrapper>
  );
};

export default Skills;