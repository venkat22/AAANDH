/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Check, Zap, ShieldCheck, Workflow, Gauge, Bot, Users,
  Landmark, HeartPulse, ShoppingCart, Boxes, Truck, Building2,
  Search, PencilRuler, Activity, Rocket, History, Network,
  Plus, Minus, Mail, MapPin, Phone,
  type LucideIcon,
} from 'lucide-react';
import { CONSULTANTS, COMPETENCIES, INDUSTRIES, PROCESS_PHASES, AI_SERVICES, TECHNOLOGIES } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  Landmark, HeartPulse, ShoppingCart, Boxes, Truck, Building2,
  Search, PencilRuler, Zap, ShieldCheck, Rocket, Activity,
  History, Network, Workflow,
};

function SectionHeading({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mt-3 tracking-tight">{title}</h2>
      <div className={`w-16 h-1 bg-brand-accent rounded-full mt-5 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}

export function HomeView({ onNavigate }: { onNavigate: (v: string) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6 md:px-10">
        <div className="absolute -top-32 -right-24 w-[480px] h-[480px] bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 mb-6 bg-brand-accent/10 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-agent-pulse" />
              <span className="text-[11px] font-bold text-brand-accent-dark uppercase tracking-[0.18em]">Agent Workforce Online</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-brand-ink leading-[1.05] tracking-tight mb-6">
              Ship production software at <span className="accent-gradient-text">agent speed</span>
            </h1>
            <p className="text-lg text-brand-text-secondary leading-relaxed mb-9 max-w-xl">
              We pair senior engineers with an autonomous agent workforce to design, build, and ship enterprise software — accelerating your roadmap without expanding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('contact')} className="btn-primary px-7 py-3.5 text-sm">
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => onNavigate('methodology')} className="btn-ghost px-7 py-3.5 text-sm">
                View Methodology
              </motion.button>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-brand-text-secondary">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> 3x faster delivery</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-accent" /> Senior-led</span>
            </div>
          </motion.div>

          {/* Terminal mock */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="card p-0 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-brand-surface">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs font-mono text-brand-text-secondary">sovereign — delivery pipeline</span>
            </div>
            <div className="p-6 font-mono text-[13px] space-y-3 bg-white">
              {[
                { label: 'agent/scaffold', task: 'generate service skeleton', done: true },
                { label: 'agent/implement', task: 'build auth + billing module', done: true },
                { label: 'agent/test', task: 'write integration suite', running: true },
                { label: 'agent/review', task: 'static analysis + audit', queued: true },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-3">
                  {l.done && <Check className="w-4 h-4 text-brand-accent shrink-0" />}
                  {l.running && <span className="w-3.5 h-3.5 rounded-full bg-brand-accent animate-agent-pulse shrink-0" />}
                  {l.queued && <span className="w-3.5 h-3.5 rounded-full border-2 border-brand-border shrink-0" />}
                  <span className="text-brand-accent-dark">{l.label}</span>
                  <span className="text-brand-text-secondary truncate">{l.task}</span>
                </div>
              ))}
              <div className="pt-3 mt-1 border-t border-brand-border text-brand-text-secondary">
                <span className="text-brand-ink font-semibold">4 agents</span> active · <span className="text-brand-ink font-semibold">12s</span> avg cycle
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-brand-border bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: '3x', label: 'Faster delivery velocity' },
            { stat: '98%', label: 'Automated code accuracy' },
            { stat: '100+', label: 'Agents in the workforce' },
            { stat: '4', label: 'Senior architects leading' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-brand-ink mb-2">{s.stat}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fifty-fifty intro */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow">Why Sovereign Tech</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mt-3 mb-6 tracking-tight leading-tight">
            Engineering velocity without the headcount
          </h2>
          <p className="text-brand-text-secondary text-lg leading-relaxed mb-8">
            Traditional dev shops scale by adding junior engineers and overhead. We scale by orchestrating agents under senior supervision — so you get the speed of a large team with the judgment of a small, elite one.
          </p>
          <ul className="space-y-4">
            {[
              'Create customized solutions tailored to your business',
              'Cut delivery time and operational overhead',
              'Increase output and realize value faster',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-accent" />
                </span>
                <span className="text-brand-text-primary">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {[
            { icon: Zap, title: 'Parallel agents', desc: 'Many tasks executed at once' },
            { icon: ShieldCheck, title: 'Audited output', desc: 'Every change reviewed' },
            { icon: Gauge, title: 'Faster cycles', desc: 'Days, not sprints' },
            { icon: Bot, title: '24/7 workforce', desc: 'Tireless and consistent' },
          ].map((c) => (
            <div key={c.title} className="card p-7">
              <c.icon className="w-8 h-8 text-brand-accent mb-4" />
              <h3 className="font-bold text-brand-ink mb-1.5">{c.title}</h3>
              <p className="text-sm text-brand-text-secondary leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-brand-surface border-y border-brand-border py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Industries" title="Delivered across industries" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => {
              const Icon = iconMap[ind.icon] ?? Workflow;
              return (
                <motion.div key={ind.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="card p-8">
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-ink mb-2">{ind.name}</h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">The Team</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mt-3 tracking-tight">The Sovereign Council</h2>
            <p className="text-brand-text-secondary text-lg mt-4 leading-relaxed">
              Four world-class architects at the intersection of AI orchestration, infrastructure, and secure delivery.
            </p>
          </div>
          <button onClick={() => onNavigate('methodology')} className="text-brand-accent font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all">
            How we work <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONSULTANTS.map((c) => (
            <div key={c.id} className="card overflow-hidden group">
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-surface-light">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-brand-ink">{c.name}</h4>
                <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mt-1 mb-3">{c.role}</p>
                <p className="text-sm text-brand-text-secondary leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-6xl mx-auto rounded-2xl bg-brand-ink text-white px-8 md:px-16 py-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-accent/20 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-5 tracking-tight">Initialize your delivery strategy</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-9">
              Join the teams shipping faster with an expert-led, agent-driven workforce.
            </p>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => onNavigate('contact')} className="btn-primary px-8 py-4 text-sm">
              Request a consultation <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServicesView() {
  const [openId, setOpenId] = useState<string | null>(AI_SERVICES[0].id);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 px-6 md:px-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 bg-brand-accent/10 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-agent-pulse" />
            <span className="text-[11px] font-bold text-brand-accent-dark uppercase tracking-[0.18em]">Capabilities</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-ink leading-[1.05] tracking-tight mb-6">
            Enterprise software, <span className="accent-gradient-text">engineered at scale</span>
          </h1>
          <p className="text-lg text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
            We deploy autonomous coding agents and senior architects to deliver high-performance applications with precision — across the full software lifecycle.
          </p>
        </div>
      </section>

      {/* Core competencies */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPETENCIES.map((item) => {
            const Icon = item.id === 'app-dev' ? Rocket : item.id === 'legacy' ? History : Network;
            return (
              <div key={item.id} className="card p-9 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-brand-ink mb-3">{item.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed mb-6">{item.description}</p>
                <ul className="space-y-2.5 mt-auto pt-6 border-t border-brand-border">
                  {item.tags.map((tag) => (
                    <li key={tag} className="text-sm text-brand-text-primary flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comprehensive services accordion */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Full lifecycle</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-ink mt-3 mb-5 tracking-tight">Our comprehensive services</h2>
            <p className="text-brand-text-secondary leading-relaxed">
              Every aspect of your software is accounted for — from the first line of code to production monitoring and beyond.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-brand-border border-t border-brand-border">
              {AI_SERVICES.map((svc) => {
                const open = openId === svc.id;
                return (
                  <div key={svc.id}>
                    <button
                      onClick={() => setOpenId(open ? null : svc.id)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                    >
                      <span className={`text-lg font-semibold transition-colors ${open ? 'text-brand-accent' : 'text-brand-ink group-hover:text-brand-accent'}`}>
                        {svc.title}
                      </span>
                      <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-brand-accent text-white' : 'bg-brand-surface text-brand-ink'}`}>
                        {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {open && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-brand-text-secondary leading-relaxed pb-6 max-w-2xl"
                      >
                        {svc.description}
                      </motion.p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-brand-surface border-y border-brand-border py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Tech stack" title="The technologies we use" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECHNOLOGIES.map((tech) => (
              <div key={tech.name} className="card p-6">
                <h3 className="font-bold text-brand-ink mb-2">{tech.name}</h3>
                <p className="text-sm text-brand-text-secondary leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function MethodologyView() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 px-6 md:px-10">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 bg-brand-accent/10 px-3.5 py-1.5 rounded-full">
            <span className="text-[11px] font-bold text-brand-accent-dark uppercase tracking-[0.18em]">The Agentic Edge</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-brand-ink leading-[1.05] tracking-tight mb-6">
            4 senior experts. <span className="accent-gradient-text">100+ agents.</span> Unlimited precision.
          </h1>
          <p className="text-lg text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
            We've replaced the bloat of junior-heavy teams with an orchestration layer where elite consultants lead a tireless agentic workforce.
          </p>
        </div>
      </section>

      {/* Orchestration core */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 card p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-4 tracking-tight">The Orchestration Core</h2>
            <p className="text-brand-text-secondary text-lg leading-relaxed mb-8 max-w-xl">
              Four world-class architects don't just write code; they design the system prompts, define constraints, and audit the output of a 24/7 agent workforce.
            </p>
            <div className="flex gap-3">
              {CONSULTANTS.map((c) => (
                <img key={c.id} src={c.image} alt={c.name} className="w-14 h-14 rounded-xl object-cover grayscale hover:grayscale-0 transition-all border border-brand-border" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 card bg-brand-ink text-white flex flex-col items-center justify-center text-center p-10">
            <div className="text-6xl font-black text-brand-accent mb-2">98%</div>
            <div className="text-xs uppercase font-bold tracking-widest text-white/70">Automated code accuracy</div>
          </div>
        </div>
      </section>

      {/* Process phases */}
      <section className="bg-brand-surface border-y border-brand-border py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="The Process" title="A streamlined development approach" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_PHASES.map((p) => {
              const Icon = iconMap[p.icon] ?? Workflow;
              return (
                <div key={p.num} className="card p-8">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-5xl font-black text-brand-accent/15 leading-none">{p.num}</span>
                    <span className="w-11 h-11 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-ink mb-2">Phase {p.num} · {p.title}</h3>
                  <p className="text-sm text-brand-text-secondary leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Shift comparison */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <SectionHeading eyebrow="The Shift" title="Why agent-driven delivery wins" center />
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse card overflow-hidden">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="p-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-text-secondary">Dimension</th>
                <th className="p-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-text-secondary">Traditional Dev Shop</th>
                <th className="p-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-accent-dark bg-brand-accent/5">The Sovereign Edge</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: 'Team Dynamics', trad: '2 seniors + 12 juniors (high overhead)', edge: '4 seniors + an infinite agent workforce' },
                { dim: 'Reliability', trad: 'Varies; manual peer reviews', edge: 'Deterministic prompts; multi-agent validation' },
                { dim: 'Velocity', trad: 'Bi-weekly sprint cycles', edge: 'Daily feature production cycles' },
              ].map((row, i, arr) => (
                <tr key={row.dim} className={i < arr.length - 1 ? 'border-b border-brand-border' : ''}>
                  <td className="p-6 font-bold text-brand-ink">{row.dim}</td>
                  <td className="p-6 text-brand-text-secondary">{row.trad}</td>
                  <td className="p-6 text-brand-ink font-medium bg-brand-accent/5">{row.edge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export function ContactView() {
  const [submitted, setSubmitted] = useState(false);

  const inputClass = 'w-full bg-white border border-brand-border rounded-lg px-4 py-3 text-brand-ink placeholder:text-brand-text-secondary/60 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 outline-none transition';

  return (
    <div className="pt-36 max-w-7xl mx-auto px-6 md:px-10">
      <div className="mb-16 max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-agent-pulse" />
          <span className="eyebrow">Available for Q3 Engagements</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-brand-ink tracking-tight mb-6 leading-[1.05]">
          Let's architect your <span className="accent-gradient-text">next release</span>
        </h1>
        <p className="text-lg text-brand-text-secondary leading-relaxed">
          Connect with our lead consultants to define your project scope, security parameters, and deployment roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
        <div className="lg:col-span-8">
          <div className="card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-brand-ink mb-8">Project inquiry</h2>
            {submitted ? (
              <div className="flex flex-col items-center text-center py-12">
                <span className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-5">
                  <Check className="w-8 h-8 text-brand-accent" />
                </span>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Inquiry received</h3>
                <p className="text-brand-text-secondary max-w-md">
                  Thanks — our team will review your project and respond within one business day.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-ghost px-6 py-3 text-sm mt-7">
                  Submit another
                </button>
              </div>
            ) : (
              <form className="space-y-7" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-ink">Lead contact</label>
                    <input required type="text" placeholder="Full name" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-ink">Enterprise email</label>
                    <input required type="email" placeholder="name@company.com" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-ink">Service track</label>
                    <select className={inputClass}>
                      <option>Custom App Development</option>
                      <option>Legacy Modernization</option>
                      <option>Cloud & Infrastructure</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-ink">Target budget</label>
                    <select className={inputClass}>
                      <option>$50k - $100k</option>
                      <option>$100k - $500k</option>
                      <option>$500k+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-brand-ink">Timeline</label>
                    <select className={inputClass}>
                      <option>Next 30 days</option>
                      <option>Next 3 months</option>
                      <option>Strategic partnership</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-ink">Technical requirements</label>
                  <textarea required placeholder="Briefly describe the challenge..." rows={4} className={`${inputClass} resize-none`} />
                </div>
                <div className="flex justify-end">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="btn-primary px-8 py-3.5 text-sm">
                    Initialize inquiry <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="card p-8 space-y-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-text-secondary">Contact nodes</h3>
            {[
              { icon: MapPin, title: 'HQ — Berlin Hub', detail: 'Torstraße 112, 10119 Berlin' },
              { icon: Mail, title: 'Email', detail: 'hello@sovereigntech.dev' },
              { icon: Phone, title: 'Encrypted comms', detail: 'Signal: +49 176 000 0000' },
            ].map((n) => (
              <div key={n.title} className="flex gap-4">
                <span className="w-11 h-11 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <n.icon className="w-5 h-5 text-brand-accent" />
                </span>
                <div>
                  <p className="font-bold text-brand-ink">{n.title}</p>
                  <p className="text-sm text-brand-text-secondary">{n.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-8 bg-brand-ink text-white">
            <Users className="w-8 h-8 text-brand-accent mb-4" />
            <h3 className="text-lg font-bold mb-2">Need a team, fast?</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Our agent workforce spins up in days, not months. Tell us the deadline and we'll tell you what's possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
