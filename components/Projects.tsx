import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-4">
            <FolderGit2 size={16} />
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Selected Works
          </h2>
        </div>
        <a 
          href="https://github.com/salvationndu-png" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          View GitHub Profile
          <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-primary-900/20"
          >
            {/* Fake Browser Header */}
            <div className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-600" />
               </div>
               <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.category}</div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex items-center gap-3">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 mb-8">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-semibold uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
