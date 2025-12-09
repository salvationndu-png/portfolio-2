import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SUMMARY, EDUCATION } from '../constants';
import { User, Code2, Database, Layout, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: <Code2 size={24} />, label: "Laravel Expert", desc: "Robust MVC Architectures" },
    { icon: <Database size={24} />, label: "MySQL", desc: "Complex Schema Design" },
    { icon: <Layout size={24} />, label: "Full Stack", desc: "End-to-end Solutions" },
  ];

  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
            <User className="text-primary-500" />
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary-500 rounded-full mb-8" />
        </div>
        
        <div className="md:col-span-8 space-y-8">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-primary-200 dark:border-primary-900 pl-6">
            {SUMMARY}
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-50 dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.label}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
             <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                   <GraduationCap size={20} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                   <div className="mt-2">
                      <p className="font-semibold text-slate-800 dark:text-slate-200">{EDUCATION.degree}</p>
                      <p className="text-slate-600 dark:text-slate-400">{EDUCATION.school}</p>
                      <div className="flex items-center gap-3 mt-1 text-sm text-slate-500 dark:text-slate-400">
                         <span>{EDUCATION.period}</span>
                         <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                         <span className="text-primary-600 dark:text-primary-400 font-medium">{EDUCATION.grade}</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
