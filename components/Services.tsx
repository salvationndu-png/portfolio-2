import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <SectionWrapper id="services">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-4">
            <Sparkles size={16} />
            What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Solutions for your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">
              Digital Growth.
            </span>
          </h2>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          I don't just write code; I provide complete technical solutions. From the first line of backend logic to the final pixel on the screen, I ensure your project is built to scale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700/60 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-primary-50 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
              <service.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
