import React from 'react';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-4">
            <Briefcase size={16} />
            Career Path
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Professional Experience
          </h2>
        </div>

        <div className="relative space-y-12">
          {/* Timeline Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:hidden" />

          {EXPERIENCES.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-slate-900 shadow-sm -translate-x-1/2 mt-6 z-10" />

              <div className="flex-1 ml-12 md:ml-0">
                <div className={`p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow relative ${
                  idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  {/* Arrow for Desktop */}
                  <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white dark:bg-slate-800 border-t border-l border-slate-100 dark:border-slate-700 transform rotate-45 ${
                    idx % 2 === 0 ? '-left-2' : '-right-2'
                  }`} />

                  <span className={`inline-block px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold mb-4 ${
                     idx % 2 !== 0 && 'md:ml-auto'
                  }`}>
                    {job.period}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {job.role}
                  </h3>
                  
                  <div className={`flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium mb-6 ${
                     idx % 2 !== 0 ? 'md:justify-end' : ''
                  }`}>
                    <Building2 size={14} />
                    <span>{job.company}</span>
                    <span>•</span>
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>

                  <ul className={`space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${
                     idx % 2 !== 0 ? 'md:items-end' : ''
                  }`}>
                    {job.achievements.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 ${
                        idx % 2 !== 0 ? 'md:flex-row-reverse md:text-right' : ''
                      }`}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
