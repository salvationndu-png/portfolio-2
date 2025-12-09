import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact">
      <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's work together</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md">
              Available for freelance opportunities and full-time roles. I build scalable backend systems that drive business growth.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">{CONTACT_INFO.email}</span>
              </a>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span className="text-lg">{CONTACT_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">{CONTACT_INFO.location}</span>
              </div>
              
              <a 
                href={`https://github.com/${CONTACT_INFO.github}`}
                target="_blank"
                rel="noreferrer" 
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                  <Github size={20} />
                </div>
                <span className="text-lg">github.com/{CONTACT_INFO.github}</span>
              </a>
            </div>
          </div>

          <form className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
