import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-baseline group mb-4">
              <span className="text-[18px] font-extrabold tracking-[-0.035em] bg-gradient-to-r from-navy via-[#0F172A] to-teal bg-clip-text text-transparent">Marine</span>
              <span className="text-[18px] font-light tracking-[-0.02em] text-slate-700 ml-[1px]">Tech</span>
              <span className="ml-2 text-[12px] font-mono font-medium tracking-widest text-teal/70 group-hover:text-teal transition-colors">{'//'}</span>
              <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(14,165,233,0.5)] group-hover:shadow-[0_0_12px_rgba(14,165,233,0.7)] transition-shadow"></span>
            </Link>
            <p className="text-slate-600 text-sm max-w-md leading-relaxed">
              Pioneering sustainable solutions for the world's oceans through cutting-edge technology, data-driven insights, and collaborative research.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-sm text-slate-600 hover:text-teal transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="text-sm text-slate-600 hover:text-teal transition-colors">Services</Link></li>
              <li><Link to="/research" className="text-sm text-slate-600 hover:text-teal transition-colors">Research</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@marinetech.com" className="text-sm text-slate-600 hover:text-teal transition-colors">Contact Us</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-teal transition-colors">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-teal transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200">
          <p className="text-center text-sm text-slate-600">&copy; 2026 Marine Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
