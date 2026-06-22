/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/85 backdrop-blur-xl border-b border-brand-border z-50 px-6 md:px-10 py-4 flex justify-between items-center">
      <div
        className="flex items-center gap-2.5 cursor-pointer group"
        onClick={() => onNavigate('home')}
      >
        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-accent/10 group-hover:bg-brand-accent/15 transition-colors">
          <Terminal className="text-brand-accent w-5 h-5" />
        </span>
        <span className="text-lg font-black text-brand-ink tracking-tight">
                Howard<span className="text-brand-accent">Tech</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-9">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-sm font-semibold transition-colors hover:text-brand-accent ${
              currentView === item.id
                ? 'text-brand-accent'
                : 'text-brand-text-secondary'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onNavigate('contact')}
        className="btn-primary px-5 py-2.5 text-sm"
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </header>
  );
}

export function Footer({ onNavigate }: { onNavigate: (view: string) => void }) {
  const columns = [
    {
      heading: 'Navigate',
      links: [
        { label: 'Home', view: 'home' },
        { label: 'Services', view: 'services' },
        { label: 'Methodology', view: 'methodology' },
        { label: 'Contact', view: 'contact' },
      ],
    },
    {
      heading: 'Capabilities',
      links: [
        { label: 'Custom App Development', view: 'services' },
        { label: 'Legacy Modernization', view: 'services' },
        { label: 'Cloud & Infrastructure', view: 'services' },
        { label: 'Automated QA & Testing', view: 'services' },
      ],
    },
  ];

  const offices = ['Chicago', 'Des Moines'];

  return (
    <footer className="w-full bg-brand-ink text-white pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-accent/20">
                <Terminal className="text-brand-accent w-5 h-5" />
              </span>
              <span className="text-lg font-black tracking-tight">
          Howard<span className="text-brand-accent">Tech</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Expert-led, agent-driven software delivery. We pair senior engineers with an autonomous agent workforce to ship production software at a fraction of the time.
            </p>
            <div className="flex gap-3 mt-2">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-brand-accent hover:text-brand-ink text-white/70 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading} className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.view)}
                      className="text-sm text-white/70 hover:text-brand-accent transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 md:col-start-12">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Offices</h4>
            <ul className="space-y-3">
              {offices.map((o) => (
                <li key={o} className="text-sm text-white/70">{o}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <span className="text-xs text-white/40">
            © {new Date().getFullYear()} HowardTech Consultancy. Engineered for precision.
          </span>
          <div className="flex gap-6">
            <button onClick={(e) => { (e.currentTarget as HTMLButtonElement).blur(); }} className="text-xs text-white/40 hover:text-brand-accent transition-colors">Privacy Policy</button>
            <button onClick={(e) => { (e.currentTarget as HTMLButtonElement).blur(); }} className="text-xs text-white/40 hover:text-brand-accent transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
