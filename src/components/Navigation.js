import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Research', path: '/research' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200' : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/" className="flex items-center group shrink-0">
            <span className="flex items-baseline">
              <span className="text-[17px] sm:text-[19px] font-extrabold tracking-[-0.035em] bg-gradient-to-r from-navy via-[#0F172A] to-teal bg-clip-text text-transparent">Marine</span>
              <span className="text-[17px] sm:text-[19px] font-light tracking-[-0.02em] text-slate-700 ml-[1px]">Tech</span>
              <span className="ml-1.5 sm:ml-2 text-[11px] sm:text-[13px] font-mono font-medium tracking-widest text-teal/70 group-hover:text-teal transition-colors">{'//'}</span>
              <span className="ml-1 sm:ml-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(14,165,233,0.55)] group-hover:shadow-[0_0_14px_rgba(14,165,233,0.8)] transition-shadow"></span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-teal bg-teal/5'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/admin"
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-navy transition-colors"
            >
              Admin
            </Link>
            <Link
              to="/research"
              className="px-5 py-2 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy-light transition-colors"
            >
              Explore Research
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="p-2 -mr-1 text-slate-600 hover:text-navy hover:bg-slate-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2.5 text-[14px] font-medium rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-teal bg-teal/10'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/admin"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 text-[14px] font-medium text-slate-600 hover:text-navy hover:bg-slate-50 rounded-lg transition-colors"
              >
                Admin
              </Link>
              <Link
                to="/research"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2.5 bg-navy text-white text-[14px] font-medium rounded-lg hover:bg-navy-light transition-colors text-center"
              >
                Explore Research
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
