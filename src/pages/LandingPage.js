import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../data/mockData';

const LandingPage = () => {

  return (
    <div className="landing-page">
      {/* Section 1: Hero — Clear Identity & Slogan */}
      <section className="relative pt-24 sm:pt-28 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden bg-[#FCFDFE] isolate">
        <div className="absolute inset-0 -z-10 overflow-hidden animate-hero-bg" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white"></div>
          <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")` }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.055] animate-contour" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 700" preserveAspectRatio="none">
            <g fill="none" stroke="#0F172A" strokeWidth="1">
              <path d="M -100 120 C 220 80, 480 180, 720 110 S 1120 60, 1540 140" />
              <path d="M -100 200 C 280 150, 520 260, 760 190 S 1080 120, 1540 220" />
              <path d="M -100 280 C 300 220, 560 340, 800 270 S 1100 180, 1540 300" />
              <path d="M -100 360 C 320 300, 600 420, 860 350 S 1140 260, 1540 380" />
              <path d="M -100 440 C 340 380, 640 500, 900 430 S 1160 340, 1540 460" />
              <path d="M -100 520 C 360 460, 680 580, 940 510 S 1180 420, 1540 540" />
            </g>
            <g fill="none" stroke="#0EA5E9" strokeWidth="0.75" opacity="0.45">
              <path d="M -100 160 C 240 120, 500 220, 740 150 S 1100 90, 1540 180" />
              <path d="M -100 320 C 310 260, 580 380, 830 310 S 1120 220, 1540 340" />
              <path d="M -100 480 C 350 420, 660 540, 920 470 S 1170 380, 1540 500" />
            </g>
          </svg>
          <div className="absolute -top-32 right-[-8%] w-[760px] h-[760px] bg-gradient-to-br from-sky-100/50 via-teal-50/35 to-transparent rounded-full blur-[90px] opacity-60 animate-ambient-slow"></div>
          <div className="absolute top-[18%] left-[-6%] w-[560px] h-[560px] bg-gradient-to-tr from-slate-100/70 to-transparent rounded-full blur-[70px] opacity-70 animate-ambient-slower"></div>
          <div className="absolute bottom-[-10%] right-[20%] w-[520px] h-[520px] bg-gradient-to-t from-teal-50/25 to-transparent rounded-full blur-[80px] opacity-50 animate-ambient-slow"></div>
          <div className="absolute inset-0 opacity-[0.012]" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 0)`, backgroundSize: '32px 32px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px]">
            <div className="animate-hero-title mb-3 sm:mb-4 text-[10px] sm:text-[11.5px] font-semibold tracking-[0.16em] uppercase text-slate-500">
              FPIK • Laboratory of Marine Technology
            </div>
            <h1 className="animate-hero-title text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-navy leading-[0.96] tracking-[-0.03em] mb-4 sm:mb-5 break-words">
              Integrated Solutions in Marine Technology, AI, and Environmental Science.
            </h1>
            <p className="animate-hero-sub text-[15px] sm:text-[16px] text-slate-600 leading-relaxed max-w-[640px] mb-6 sm:mb-8 font-normal">
              FPIK Marine Technology Laboratory. We deliver Pertek and environmental modeling, YOLO and drone vision, IoT sensors, ship prototyping, and full stack web development on martech-server.my.id.
            </p>
            <p className="animate-hero-sub text-[14px] text-slate-500 leading-relaxed max-w-[640px] mb-8 sm:mb-10">
              Built by our lab web team, this site is Marine Tech official profile and open Digital Research Hub. Explore services or browse theses.
            </p>
            <div className="animate-hero-cta flex flex-col sm:flex-row flex-wrap gap-3">
              <Link to="/research" className="w-full sm:w-auto justify-center px-5 sm:px-7 py-3 sm:py-[13px] bg-navy text-white text-[14px] font-medium rounded-lg hover:bg-navy-light transition-colors inline-flex items-center gap-2.5 shadow-sm hover:shadow-md hover:translate-y-px active:translate-y-0 duration-200">
                <span>Explore Research</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/services" className="w-full sm:w-auto justify-center px-5 sm:px-7 py-3 sm:py-[13px] bg-white border border-slate-200 text-navy text-[14px] font-medium rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:shadow-sm duration-200">
                Our Services
              </Link>
            </div>
          </div>

          <div className="animate-hero-stats mt-14 sm:mt-20">
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200/70"></div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400">Impact</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200/70"></div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-0">
              <div className="text-center px-4 sm:px-6 py-2 lg:py-1 relative flex flex-col items-center">
                <div className="text-[36px] sm:text-[44px] lg:text-[52px] font-[700] tracking-[-0.04em] leading-none bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]/70 bg-clip-text text-transparent">{companyData.researchTheses}</div>
                <div className="mt-3 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-slate-400">Theses Published</div>
                <div className="hidden lg:block absolute top-1/2 -right-px h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-slate-200/70 to-transparent"></div>
                <div className="lg:hidden absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent translate-y-4"></div>
              </div>
              <div className="text-center px-4 sm:px-6 py-2 lg:py-1 relative flex flex-col items-center">
                <div className="text-[36px] sm:text-[44px] lg:text-[52px] font-[700] tracking-[-0.04em] leading-none bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]/70 bg-clip-text text-transparent">{companyData.prototypes}</div>
                <div className="mt-3 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-slate-400">Prototypes Built</div>
                <div className="hidden lg:block absolute top-1/2 -right-px h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-slate-200/70 to-transparent"></div>
                <div className="lg:hidden absolute bottom-0 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-200/60 to-transparent translate-y-4"></div>
              </div>
              <div className="text-center px-4 sm:px-6 py-2 lg:py-1 relative flex flex-col items-center">
                <div className="text-[36px] sm:text-[44px] lg:text-[52px] font-[700] tracking-[-0.04em] leading-none bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]/70 bg-clip-text text-transparent">{companyData.researchers}</div>
                <div className="mt-3 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-slate-400">Researchers</div>
                <div className="hidden lg:block absolute top-1/2 -right-px h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-slate-200/70 to-transparent"></div>
              </div>
              <div className="text-center px-4 sm:px-6 py-2 lg:py-1 relative flex flex-col items-center">
                <div className="text-[36px] sm:text-[44px] lg:text-[52px] font-[700] tracking-[-0.04em] leading-none bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]/70 bg-clip-text text-transparent">{companyData.founded}</div>
                <div className="mt-3 text-[10.5px] font-semibold tracking-[0.18em] uppercase text-slate-400">Founded</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </section>

      {/* Section 2: Core Expertise & Services */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-600 text-[11px] sm:text-[12.5px] font-medium tracking-wide uppercase rounded-full mb-4">
              Core Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-navy tracking-[-0.02em] leading-tight mb-3">What we do</h2>
            <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed max-w-[640px] mx-auto">
              Eight services across three focused areas. Lab built, tested in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all flex flex-col">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707" /></svg>
              </div>
              <h3 className="text-[16px] font-semibold text-navy mb-2">Environmental Consulting / Pertek</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4">Regulatory and modeling for compliant operations.</p>
              <ul className="space-y-2 text-[13px] text-slate-600">
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>Pertek & AMDAL documentation</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>River water quality modeling</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>Spatial & general modeling</li>
              </ul>
            </div>

            <div className="p-6 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all flex flex-col">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m18 0h-2M7 12a5 5 0 0010 0 5 5 0 00-10 0z M12 7v5l3 3" /></svg>
              </div>
              <h3 className="text-[16px] font-semibold text-navy mb-2">Hardware & IoT</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4">Field hardware from lab to sea trial.</p>
              <ul className="space-y-2 text-[13px] text-slate-600">
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>IoT sensor fabrication</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>Ship & vessel prototyping</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>Calibration & sea trials</li>
              </ul>
            </div>

            <div className="p-6 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all flex flex-col">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.5 12a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.5 5.5l1.5 1.5 M17 17l1.5 1.5 M17 5.5l1.5-1.5 M5.5 18.5l1.5-1.5" /></svg>
              </div>
              <h3 className="text-[16px] font-semibold text-navy mb-2">Software & AI</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed mb-4">Web and intelligence on martech-server.my.id.</p>
              <ul className="space-y-2 text-[13px] text-slate-600">
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>YOLO & drone vision</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>Monitoring dashboards</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0"></span>Web development & provisioning</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-[13px] font-medium rounded-lg hover:bg-navy-light transition-colors">
              View all services
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Research & Innovation Hub */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] sm:text-[12.5px] font-medium tracking-wide uppercase rounded-full mb-4">
              Research & Innovation Hub
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-navy tracking-[-0.02em] leading-tight mb-3">Open research, peer reviewed</h2>
            <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed">
              Explore our laboratory theses and research outcomes. 50+ papers, open access, built on field data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
            <div className="p-5 bg-white rounded-xl border border-slate-200/70 text-center">
              <div className="text-2xl font-semibold text-navy">{companyData.researchTheses}</div>
              <div className="text-[11px] font-medium tracking-wide uppercase text-slate-500 mt-1">Theses & Papers</div>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200/70 text-center">
              <div className="text-2xl font-semibold text-navy">Open</div>
              <div className="text-[11px] font-medium tracking-wide uppercase text-slate-500 mt-1">Access Repository</div>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200/70 text-center">
              <div className="text-2xl font-semibold text-navy">Peer Reviewed</div>
              <div className="text-[11px] font-medium tracking-wide uppercase text-slate-500 mt-1">Field Validated</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/research" className="inline-flex items-center gap-2 px-7 py-3 bg-white border border-slate-200 text-navy text-[14px] font-medium rounded-lg hover:bg-slate-50 transition-colors">
              Browse Research Portal
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Infrastructure */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-[#0A1628] isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1F3A] to-[#0B2A45]"></div>
          <div className="absolute -top-32 right-[-6%] w-[480px] h-[480px] bg-teal/15 rounded-full blur-[80px] opacity-40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] font-semibold tracking-[0.14em] uppercase backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Featured Infrastructure
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-[-0.02em] leading-tight mt-4 text-white">
                martech-server.my.id
              </h2>
              <p className="text-[14px] sm:text-[15px] text-slate-200 leading-relaxed mt-3 max-w-[560px]">
                Dedicated hosting for portals, telemetry, and research systems. High availability, hardened, researcher operated.
              </p>
              <ul className="mt-4 space-y-2 text-[13px] text-slate-300">
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal-300 mt-2 shrink-0"></span>IoT telemetry & monitoring dashboards</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal-300 mt-2 shrink-0"></span>Desa Wisata & company profiles</li>
                <li className="flex gap-2"><span className="w-1 h-1 rounded-full bg-teal-300 mt-2 shrink-0"></span>Research portals & data APIs</li>
              </ul>
              <div className="mt-7">
                <a href="https://martech-server.my.id/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy text-[14px] font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.22)] hover:-translate-y-px active:translate-y-0 duration-200">
                  Visit Martech Server
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            </div>
            <div className="relative">
              {/* premium glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/20 via-sky-500/10 to-transparent rounded-[28px] blur-2xl opacity-60 pointer-events-none"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-[0_16px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)]">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/[0.04]">
                  <span className="w-3 h-3 rounded-full bg-red-400/90 shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400/90 shadow-sm"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400/90 shadow-sm"></span>
                  <span className="ml-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] text-white/70 font-mono">
                    <svg className="w-3 h-3 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3-3 6-3 6s-3-3-3-6a3 3 0 116 0z" /></svg>
                    martech-server.my.id
                  </span>
                  <span className="ml-auto flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
                    Live
                  </span>
                </div>
                {/* Dashboard preview */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm"><div className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">Nodes</div><div className="text-lg font-semibold text-navy leading-none mt-1">24</div><div className="text-[10px] text-emerald-600 font-medium mt-1">● active</div></div>
                    <div className="rounded-xl bg-white p-3 text-center shadow-sm"><div className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">Streams</div><div className="text-lg font-semibold text-navy leading-none mt-1">1.2k</div><div className="text-[10px] text-slate-400 mt-1">per min</div></div>
                    <div className="rounded-xl bg-navy p-3 text-center shadow-sm border border-white/10"><div className="text-[10px] font-semibold tracking-widest uppercase text-white/60">Latency</div><div className="text-lg font-semibold text-white leading-none mt-1">18ms</div><div className="text-[10px] text-emerald-300 mt-1">p95</div></div>
                  </div>
                  {/* Abstract chart card */}
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[11px] font-semibold text-navy">Telemetry Stream — Buoy 07</div>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-medium">Live sync</span>
                    </div>
                    <svg viewBox="0 0 320 72" className="w-full h-[72px]" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0 52 C 24 44, 40 60, 64 42 S 96 12, 128 28 S 168 54, 192 36 S 232 18, 260 26 S 296 48, 320 30 L 320 72 L 0 72 Z" fill="url(#grad)" />
                      <path d="M0 52 C 24 44, 40 60, 64 42 S 96 12, 128 28 S 168 54, 192 36 S 232 18, 260 26 S 296 48, 320 30" fill="none" stroke="#0EA5E9" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="64" cy="42" r="3" fill="white" stroke="#0EA5E9" strokeWidth="1.6" />
                      <circle cx="192" cy="36" r="3" fill="white" stroke="#0EA5E9" strokeWidth="1.6" />
                      <circle cx="260" cy="26" r="3" fill="white" stroke="#0284C7" strokeWidth="1.6" />
                    </svg>
                    <div className="grid grid-cols-7 gap-1.5 mt-3">
                      <div className="h-7 rounded bg-slate-100" style={{ height: '18px' }}></div>
                      <div className="h-7 rounded bg-teal/20" style={{ height: '26px' }}></div>
                      <div className="h-7 rounded bg-slate-100" style={{ height: '22px' }}></div>
                      <div className="h-7 rounded bg-navy" style={{ height: '30px' }}></div>
                      <div className="h-7 rounded bg-teal/30" style={{ height: '20px' }}></div>
                      <div className="h-7 rounded bg-slate-100" style={{ height: '24px' }}></div>
                      <div className="h-7 rounded bg-slate-200" style={{ height: '16px' }}></div>
                    </div>
                  </div>
                  {/* Terminal / API log */}
                  <div className="rounded-xl bg-[#0F172A] border border-white/10 p-3 font-mono text-[11px] leading-[1.6] overflow-hidden">
                    <div className="flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase mb-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> API — ingestion</div>
                    <div className="text-slate-300"><span className="text-white/40">14:42:11</span> <span className="text-emerald-300">POST</span> /api/telemetry — <span className="text-white">201</span> <span className="text-white/50">18ms</span></div>
                    <div className="text-slate-300"><span className="text-white/40">14:42:12</span> <span className="text-sky-300">WS</span> push buoy:07 — <span className="text-white">ok</span></div>
                    <div className="text-slate-400"><span className="text-white/40">14:42:13</span> cron research-sync — <span className="text-emerald-300">done</span></div>
                  </div>
                </div>
              </div>
              {/* floating accent */}
              <div className="absolute -bottom-3 -right-3 hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] border border-slate-200/70 text-[11px] font-medium text-navy">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Hardened • HA • Researcher operated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Leadership & Team */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center px-3 py-1 bg-white border border-slate-200 text-slate-600 text-[11px] sm:text-[12.5px] font-medium tracking-wide uppercase rounded-full mb-4">
              Leadership & Team
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-navy tracking-[-0.02em] leading-tight mb-3">Led by faculty, built by the lab</h2>
            <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed">
              Two supervisors and seven researchers. Supervisors lead, team delivers — from field work to web.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
            <div className="p-5 bg-white rounded-xl border border-slate-200/70 text-center">
              <div className="w-8 h-8 rounded-full bg-navy mx-auto flex items-center justify-center text-white text-[11px] font-semibold mb-3">RR</div>
              <div className="text-[13px] font-semibold text-navy">Rizqi Rizaldi Hidayat, S.I.K., M.Si.</div>
              <div className="text-[11px] text-slate-500">Supervisor</div>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200/70 text-center">
              <div className="w-8 h-8 rounded-full bg-navy mx-auto flex items-center justify-center text-white text-[11px] font-semibold mb-3">AT</div>
              <div className="text-[13px] font-semibold text-navy">Agung Tri Nugroho, S.I.K., M.Si.</div>
              <div className="text-[11px] text-slate-500">Supervisor</div>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200/70 text-center flex flex-col items-center justify-center">
              <div className="text-2xl font-semibold text-navy">7</div>
              <div className="text-[11px] font-medium tracking-wide uppercase text-slate-500">Researchers</div>
              <div className="text-[11px] text-slate-400 mt-1">S.Kel qualified</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-[14px] font-medium rounded-lg hover:bg-navy-light transition-colors">
              Meet the Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
