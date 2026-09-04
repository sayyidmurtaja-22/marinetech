import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/mockData';

const marinePillar = servicesData.slice(0, 4);
const softwarePillar = servicesData.slice(4, 8);

const extendedCopy = {
  1: {
    lede: 'AMDAL with calibrated river models for defensible approvals.',
    detail: 'Field sampling plus hydrodynamic and pollutant-transport simulation for compliance dossiers and mitigation plans.',
    edge: 'FPIK-calibrated, peer-reviewed methodology.',
  },
  2: {
    lede: 'Custom IoT sensor instruments, end to end.',
    detail: 'PCB, enclosure, firmware, and calibration for brackish, turbid, and deep-water deployment, lab-calibrated, field-validated.',
    edge: 'Electronics, mechanics, and data in one lab.',
  },
  3: {
    lede: 'Naval architecture to sea trials under one roof.',
    detail: 'CFD hull optimization, composite construction, and integrated propulsion from design to deployment.',
    edge: 'Design and build co-located for speed and accuracy.',
  },
  4: {
    lede: 'Spatial and environmental modeling at high resolution.',
    detail: 'Remote sensing, GIS, and ML for hydrodynamic forecasting, habitat and change mapping.',
    edge: 'Published stack, not generic GIS exports.',
  },
  5: {
    lede: 'Dedicated infrastructure on martech-server.my.id.',
    detail: 'Bare-metal for telemetry, portals, and data APIs, hardened, low-latency, researcher-operated.',
    edge: 'We operate the metal our sensors rely on.',
  },
  6: {
    lede: 'Operational dashboards from live telemetry and vision.',
    detail: 'Sensor streams, YOLO and drone vision unified into threshold alerts and low-bandwidth views.',
    edge: 'Built by the sensor team, for operators.',
  },
  7: {
    lede: 'Desa Wisata platforms for community tourism.',
    detail: 'Destination profiles, UMKM marketplace, and management dashboards for sustainable local growth.',
    edge: 'Research-informed, community-centered.',
  },
  8: {
    lede: 'Company profiles with editorial design and sub-second performance.',
    detail: 'Design system, SEO, and CMS, credible, fast, and owner-controlled after launch.',
    edge: 'Analytical IA, not template themes.',
  },
};

const iconMap = {
  amdal: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z M9 3.5a2.5 2.5 0 012.5 2.5v2a2.5 2.5 0 005 0v-2A2.5 2.5 0 0119 3.5" />,
  sensor: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m18 0h-2M7 12a5 5 0 0010 0 5 5 0 00-10 0z M12 7v5l3 3" />,
  vessel: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l1.5-1.5L8 13l3 3 3-3 3.5 2.5L19 17l-2 3H5l-2-3z M8 13V7h8v6 M12 7V3" />,
  modeling: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.5-5.5a2 2 0 010-2.8L10 5l6 6-5.5 5.5a2 2 0 01-2.8 0z M14 7l3-3 3 3-3 3-3-3z M3 20h18" />,
  server: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 7h14a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1z M5 15h14a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3a1 1 0 011-1z M8 10h.01 M8 18h.01" />,
  dashboard: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h18M3 7h18a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z M7 16l3-3 2 2 4-4" />,
  desa: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1V9.5z M12 3v5 M9 14h6" />,
  profile: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 21V7a1 1 0 011-1h14a1 1 0 011 1v14H4z M8 10h8 M8 14h8 M8 18h5 M4 7l2-2 M20 7l-2-2" />,
};

function ServiceCard({ service, variant = 'light', span = 'col-span-12' }) {
  const extra = extendedCopy[service.id];
  const isDark = variant === 'dark';
  return (
    <div
      className={`${span} group relative overflow-hidden rounded-xl sm:rounded-2xl border p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
        isDark
          ? 'bg-gradient-to-br from-navy via-[#0F1F3A] to-[#0B1A30] border-white/10 hover:border-teal/30 hover:shadow-[0_16px_40px_rgba(14,165,233,0.18)]'
          : 'bg-white/90 backdrop-blur border-slate-200/70 hover:border-slate-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]'
      }`}
    >
      {isDark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-sky-500/10 opacity-60"></div>
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-teal/15 rounded-full blur-[50px] group-hover:bg-teal/20 transition-colors duration-500"></div>
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '18px 18px' }}></div>
        </>
      )}
      {!isDark && <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-transparent to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}

      <div className="relative">
        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-6 transition-colors duration-300 ${isDark ? 'bg-white/10 border-white/15 group-hover:bg-white group-hover:border-white' : 'bg-slate-50 border-slate-200/70 group-hover:bg-navy group-hover:border-navy'}`}>
          <svg className={`w-5 h-5 transition-colors ${isDark ? 'text-white group-hover:text-navy' : 'text-navy group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {iconMap[service.icon]}
          </svg>
        </div>

        <div className={`text-[11px] font-semibold tracking-[0.14em] uppercase mb-2 ${isDark ? 'text-teal-300' : 'text-teal-dark'}`}>{service.title.includes('martech') ? 'martech-server.my.id' : service.features[0].split(' ')[0]}</div>
        <h3 className={`text-[18px] md:text-[19px] font-semibold tracking-[-0.02em] leading-snug mb-3 ${isDark ? 'text-white' : 'text-navy'}`}>{service.title}</h3>
        <p className={`text-[13.5px] leading-relaxed mb-2 font-medium ${isDark ? 'text-white/90' : 'text-slate-700'}`}>{extra.lede}</p>
        <p className={`text-[13px] leading-[1.65] ${isDark ? 'text-white/60' : 'text-slate-500'}`}>{extra.detail}</p>

        <div className="mt-5 overflow-hidden max-h-0 opacity-0 group-hover:max-h-[220px] group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className={`pt-5 mt-5 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
            <div className={`text-[11px] font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-white/50' : 'text-slate-400'}`}>Capabilities</div>
            <ul className="space-y-2">
              {service.features.map((f) => (
                <li key={f} className={`text-[13px] flex items-start gap-2 ${isDark ? 'text-white/80' : 'text-slate-600'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isDark ? 'bg-teal-300' : 'bg-teal'}`}></span>
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>
            <div className={`mt-4 text-[12px] italic leading-relaxed ${isDark ? 'text-teal-200/80' : 'text-slate-500'}`}>↳ {extra.edge}</div>
          </div>
        </div>

        <div className={`mt-5 flex items-center gap-2 text-[12.5px] font-medium transition-colors ${isDark ? 'text-white/70 group-hover:text-white' : 'text-slate-400 group-hover:text-navy'}`}>
          <span>Hover to reveal details</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
}

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#FCFDFE]">
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 md:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#FCFDFE] isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white"></div>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")` }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1440 600" preserveAspectRatio="none"><g fill="none" stroke="#0F172A" strokeWidth="1"><path d="M -100 120 C 220 80, 480 180, 720 110 S 1120 60, 1540 140" /><path d="M -100 240 C 300 200, 560 320, 800 250 S 1100 160, 1540 300" /><path d="M -100 360 C 320 300, 600 420, 860 350 S 1140 260, 1540 380" /></g><g fill="none" stroke="#0EA5E9" strokeWidth="0.7" opacity="0.4"><path d="M -100 180 C 240 120, 500 220, 740 150 S 1100 90, 1540 180" /></g></svg>
          <div className="absolute -top-24 right-[-6%] w-[680px] h-[680px] bg-gradient-to-br from-sky-100/50 via-teal-50/30 to-transparent rounded-full blur-[80px] opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[520px] h-[520px] bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-[70px] opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 bg-navy text-white text-[11px] font-semibold tracking-[0.14em] uppercase rounded-full mb-6">Services, FPIK Marine Technology Laboratory</div>
            <h1 className="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[52px] font-semibold text-navy leading-[0.96] tracking-[-0.03em] mb-4 sm:mb-5 break-words">
              Two pillars. One lab.
              <span className="block font-extralight text-navy/80">Field-ready intelligence.</span>
            </h1>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-[1.6] sm:leading-[1.7] max-w-[640px]">
              FPIK Marine Technology Laboratory. Research-grade, field-validated services across marine, environmental, and data systems. Hover to reveal method.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pillar-a" className="px-6 py-3 bg-navy text-white text-[13px] font-medium rounded-lg hover:bg-navy-light transition-colors">Explore Marine Engineering →</a>
              <a href="#pillar-b" className="px-6 py-3 bg-white border border-slate-200 text-navy text-[13px] font-medium rounded-lg hover:bg-slate-50 transition-colors">Software &amp; Web Solutions</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar A */}
      <section id="pillar-a" className="py-12 sm:py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] font-semibold tracking-[0.14em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span> Pillar A
              </div>
              <h2 className="text-[26px] md:text-[32px] font-semibold text-navy tracking-[-0.02em] leading-tight mt-4">Marine &amp; Environmental Engineering</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed mt-3">
                Four capabilities: AMDAL, river and spatial modeling, IoT sensors, and vessel prototypes, faculty-led, lab-built.
              </p>
              <div className="mt-5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-1">FPIK Edge</div>
                <p className="text-[12.5px] text-slate-600 leading-relaxed">One lab: field data, ML/CV, and naval systems co-located.</p>
              </div>
              <div className="hidden lg:flex mt-6 items-center gap-2 text-[13px] text-slate-500">
                <span className="w-8 h-px bg-slate-200"></span> Sticky overview, scroll to explore
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-12 gap-4 md:gap-5">
                <ServiceCard service={marinePillar[0]} variant="dark" span="col-span-12 lg:col-span-7" />
                <ServiceCard service={marinePillar[1]} variant="light" span="col-span-12 lg:col-span-5" />
                <ServiceCard service={marinePillar[2]} variant="light" span="col-span-12 lg:col-span-5" />
                <ServiceCard service={marinePillar[3]} variant="dark" span="col-span-12 lg:col-span-7" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      {/* Pillar B */}
      <section id="pillar-b" className="py-12 sm:py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal text-white text-[11px] font-semibold tracking-[0.14em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Pillar B
              </div>
              <h2 className="text-[26px] md:text-[32px] font-semibold text-navy tracking-[-0.02em] leading-tight mt-4">Software &amp; Web Solutions</h2>
              <p className="text-[14px] text-slate-600 leading-relaxed mt-3">
                Four web capabilities: dedicated provisioning, monitoring dashboards, Desa Wisata, and company profiles, performant, secure, owner-controlled.
              </p>
              <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200/70 shadow-sm">
                <div className="text-[10px] font-semibold tracking-widest uppercase text-slate-400 mb-1">martech-server.my.id</div>
                <p className="text-[12.5px] text-slate-600 leading-relaxed">Dedicated lab infrastructure, your code, data, and keys.</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-12 gap-4 md:gap-5">
                <ServiceCard service={softwarePillar[0]} variant="dark" span="col-span-12" />
                <div className="col-span-12 grid grid-cols-12 gap-4 md:gap-5">
                  <ServiceCard service={softwarePillar[1]} variant="light" span="col-span-12 md:col-span-6" />
                  <ServiceCard service={softwarePillar[2]} variant="light" span="col-span-12 md:col-span-6" />
                </div>
                <ServiceCard service={softwarePillar[3]} variant="light" span="col-span-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-navy via-[#0F1F3A] to-[#0B1A30] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-sky-500/10"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal/15 rounded-full blur-[50px]"></div>
            <div className="relative">
              <h3 className="text-[20px] md:text-[22px] font-semibold text-white tracking-[-0.01em]">Start from the lab. Deploy to the field.</h3>
              <p className="text-[13px] text-white/60 mt-1">Tell us about your site, sensor need, or web goal, we’ll map it to a lab-validated path.</p>
            </div>
            <div className="relative flex gap-3">
              <Link to="/research" className="px-6 py-3 bg-white text-navy text-[13px] font-medium rounded-lg hover:bg-slate-100 transition-colors">View Research</Link>
              <a href="mailto:lab@martech-server.my.id" className="px-6 py-3 bg-teal text-white text-[13px] font-medium rounded-lg hover:bg-teal-dark transition-colors">Contact Lab</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
