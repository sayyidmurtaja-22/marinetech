import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/mockData';

const teamMembers = [
  { name: 'Rizqi Rizaldi Hidayat, S.I.K., M.Si.', label: 'NIP', value: '198803172018031001', role: 'Supervisor', photo: '/rizqi_hidayat-removebg-preview.png' },
  { name: 'Agung Tri Nugroho, S.I.K., M.Si.', label: 'NIP', value: '199508192024061001', role: 'Supervisor', photo: '/agung_tri_nugroho-removebg-preview.png' },
  { name: 'Mario Nabhan, S.Kel', label: 'NIM', value: 'L1C022078', role: 'Team Member', photo: '/mario_nabhan-removebg-preview.png' },
  { name: 'Muhammad Akmal Alfajri, S.Kel', label: 'NIM', value: 'L1C022067', role: 'Team Member', photo: '/akmal_alfajri-removebg-preview.png' },
  { name: 'Muhammad Sayyid Murtaja, S.Kel', label: 'NIM', value: 'L1C022044', role: 'Team Member', photo: '/sayyid_murtaja-removebg-preview.png' },
  { name: 'Sayidquthub shidirabbany, S.Kel', label: 'NIM', value: 'L1C022021', role: 'Team Member', photo: '/sayidquthub-removebg-preview.png' },
  { name: 'Khansa Mumtaz, S.Kel', label: 'NIM', value: 'L1C022098', role: 'Team Member', photo: '/khansa_mumtaz-removebg-preview.png' },
  { name: 'Jumatoro, S.Kel', label: 'NIM', value: 'L1C022006', role: 'Team Member', photo: '/jumatoro-removebg-preview.png' },
  { name: 'Rona Harwaa, S.Kel', label: 'NIM', value: 'L1C022102', role: 'Team Member', photo: '/rona_harwa-removebg-preview.png' },
];

const supervisors = teamMembers.filter((m) => m.label === 'NIP');
const students = teamMembers.filter((m) => m.label === 'NIM');

function TeamCard({ member, delay, inView }) {
  const initials = member.name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  const isSupervisor = member.label === 'NIP';
  const [imgError, setImgError] = useState(false);
  const hasPhoto = member.photo && !imgError;

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative bg-white border border-slate-200/70 rounded-xl overflow-visible flex flex-col h-full
        shadow-[0_1px_2px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.10)] hover:border-slate-300 hover:-translate-y-0.5
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className={`relative w-full h-40 sm:h-44 overflow-visible shrink-0 flex items-center justify-center ${hasPhoto ? 'bg-transparent' : (isSupervisor ? 'bg-gradient-to-br from-[#0F172A] via-[#142544] to-[#1C345E]' : 'bg-gradient-to-br from-slate-800 via-[#1C2E4A] to-[#2A3F63]')}`}>
        {hasPhoto ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain object-bottom bg-transparent drop-shadow-xl scale-[1.04] -translate-y-1 transition-transform duration-700 group-hover:scale-[1.08] group-hover:-translate-y-1.5"
            style={{ filter: 'drop-shadow(0 14px 18px rgba(15,23,42,0.32)) drop-shadow(0 4px 8px rgba(15,23,42,0.18))' }}
          />
        ) : (
          <>
            <div className={`absolute inset-0 rounded-t-xl ${isSupervisor ? 'bg-gradient-to-br from-[#0F172A] via-[#142544] to-[#1C345E]' : 'bg-gradient-to-br from-slate-800 via-[#1C2E4A] to-[#2A3F63]'}`} />
            <div className="absolute inset-0 opacity-[0.06] rounded-t-xl" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '16px 16px' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <span className="text-[28px] font-black tracking-[-0.05em] leading-none text-white/95 select-none">{initials}</span>
              <span className="mt-1 text-[9px] font-semibold tracking-[0.14em] uppercase text-white/50">FPIK • MARINE TECH</span>
            </div>
          </>
        )}
        <div className="absolute top-2.5 left-2.5">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase backdrop-blur-md border shadow-sm ${isSupervisor ? 'bg-white text-navy border-white' : 'bg-white/95 text-slate-700 border-white/70'}`}>
            {member.role}
          </span>
        </div>
      </div>

      <div className="p-3.5 flex flex-col flex-1 bg-white rounded-b-xl">
        <h3 className="text-sm font-semibold text-navy leading-snug tracking-[-0.01em] min-h-[36px] flex items-start line-clamp-2">
          {member.name}
        </h3>
        <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex-1 flex items-end">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-200/70 rounded-full max-w-full">
            <span className="text-[9px] font-semibold tracking-widest uppercase text-slate-400 shrink-0">{member.label}</span>
            <span className="text-xs font-medium tracking-wide text-navy tabular-nums truncate">{member.value}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutPage = () => {
  const teamRef = useRef(null);
  const introRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [introInView, setIntroInView] = useState(false);

  useEffect(() => {
    const el = teamRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntroInView(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    const t = setTimeout(() => setIntroInView(true), 300);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFDFE]">
      {/* Intro, Ultra-modern asymmetrical + Bento */}
      <section ref={introRef} className="relative pt-28 md:pt-32 pb-14 md:pb-16 overflow-hidden bg-[#FCFDFE] isolate">
        <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[120px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black tracking-[-0.07em] leading-none text-navy/[0.025]">ABOUT</span>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80" />
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 right-[-8%] w-[640px] h-[640px] bg-teal/5 rounded-full blur-[80px]" />
          <div className="absolute top-[40%] left-[-6%] w-[520px] h-[520px] bg-sky-500/5 rounded-full blur-[70px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-navy text-white text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase mb-5 sm:mb-6 transition-all duration-700 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            FPIK • Marine Technology Laboratory
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div className={`lg:col-span-7 transition-all duration-700 delay-100 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="text-[28px] xs:text-[32px] sm:text-[36px] md:text-[48px] lg:text-[62px] font-black tracking-[-0.035em] leading-[0.88] text-navy break-words">
                Advanced
                <span className="block font-extralight tracking-[-0.04em] text-navy/80">marine</span>
                <span className="block">intelligence,</span>
                <span className="block bg-gradient-to-r from-teal via-sky-500 to-teal bg-clip-text text-transparent">rooted in FPIK.</span>
              </h1>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-16 bg-gradient-to-r from-teal to-transparent" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">Since 2021 • Field-validated</span>
              </div>
            </div>

            <div className={`lg:col-span-5 lg:pt-3 transition-all duration-700 delay-200 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative pl-6 border-l-2 border-teal/15">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-teal shadow-[0_0_10px_rgba(14,165,233,0.6)]" />
                <p className="text-[16px] md:text-[17px] text-slate-700 leading-relaxed font-medium">
                  FPIK Marine Technology Laboratory {companyData.name}, founded {companyData.founded}.
                </p>
                <p className="text-[14px] text-slate-500 leading-relaxed mt-3">
                  Core focus is <span className="font-medium text-navy">ML, YOLO and drone based computer vision</span> for marine systems. Environmental modeling, IoT sensors, vessels and web systems on martech-server.my.id.
                </p>
                <div className="mt-4 rounded-xl bg-white border border-slate-200/70 p-3">
                  <p className="text-[13px] text-slate-600 leading-relaxed"><span className="font-semibold text-navy">This site:</span> Official profile and open Digital Research Hub by our website developers. Eight services, two pillars, plus open theses.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3 mt-6 sm:mt-8">
                <div className="rounded-xl bg-white border border-slate-200/70 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-navy flex items-center justify-center mb-3">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M19.21 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z M15.5 10.5L11 14l-2-2" /></svg>
                  </div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">Origin</div>
                  <div className="text-[13px] font-semibold text-navy leading-tight mt-1">FPIK Lab</div>
                  <div className="text-[11px] text-slate-500 mt-1">Teknologi Kelautan</div>
                </div>
                <div className="rounded-xl bg-white border border-slate-200/70 p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-lg bg-teal flex items-center justify-center mb-3">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 3v18 M3 12h18 M12 7l5 5-5 5 M12 7l-5 5 5 5" opacity={0.9} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                  </div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">Vision</div>
                  <div className="text-[13px] font-semibold text-navy leading-tight mt-1">Deployable R&D</div>
                  <div className="text-[11px] text-slate-500 mt-1">Lab → Sea</div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-navy to-[#0F1F3A] border border-navy-light p-4 shadow-md sm:col-span-1 col-span-1">
                  <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center mb-3">
                    <svg className="w-3.5 h-3.5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9.5 12a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.5 5.5l1.5 1.5 M17 17l1.5 1.5 M17 5.5l1.5-1.5 M5.5 18.5l1.5-1.5" /></svg>
                  </div>
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-white/60">Core Focus</div>
                  <div className="text-[13px] font-semibold text-white leading-tight mt-1">ML &amp; CV</div>
                  <div className="text-[11px] text-white/60 mt-1">Marine systems</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-3 transition-all duration-700 delay-300 ${introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="col-span-12 md:col-span-5 rounded-xl bg-white border border-slate-200/70 p-4 sm:p-5 flex gap-3 items-start">
              <span className="w-1 h-10 rounded-full bg-teal/40 flex-shrink-0 mt-1 hidden sm:block" />
              <div>
                <div className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-slate-400 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Field-validated</div>
                <p className="text-[13px] text-slate-600 leading-relaxed mt-1">Every model and prototype is tested in brackish, turbid and open sea conditions, same team that publishes.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/70 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                <div>
                  <div className="text-[13px] font-semibold text-navy">martech-server.my.id</div>
                  <div className="text-[11px] text-slate-500">Lab-operated dedicated infrastructure</div>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team, Hierarchical Balanced, Compact Uniform */}
      <section className="pb-10 md:pb-12 bg-[#FCFDFE] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />
          <div ref={teamRef} className="scroll-mt-24">
            <div className="text-center mb-5">
              <h2 className="text-[20px] md:text-[22px] font-semibold text-navy tracking-[-0.02em]">Our Structure</h2>
              <p className="text-[13px] text-slate-500 mt-1 tracking-wide">Hierarchical • Supervisors lead, team delivers</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-3 max-w-3xl mx-auto mb-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-navy bg-white border border-slate-200 px-2.5 py-1 rounded-full shadow-sm">
                  <span className="w-1 h-1 rounded-full bg-navy" /> Supervisors • Faculty
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto auto-rows-fr">
                {supervisors.map((member, idx) => (
                  <TeamCard key={member.value} member={member} delay={idx * 100} inView={inView} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 max-w-6xl mx-auto mb-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-slate-400" /> Research Team • Students
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
              </div>
              <div className="max-w-6xl mx-auto space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-fr">
                  {students.slice(0, 4).map((member, idx) => (
                    <TeamCard key={member.value} member={member} delay={200 + idx * 70} inView={inView} />
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-full sm:max-w-[84%] lg:max-w-[76%] mx-auto auto-rows-fr">
                  {students.slice(4).map((member, idx) => (
                    <TeamCard key={member.value} member={member} delay={480 + idx * 70} inView={inView} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/research"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-navy text-white text-[13px] font-medium rounded-lg hover:bg-navy-light transition-colors shadow-sm hover:shadow-md"
            >
              <span>Explore Our Research</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
