import React, { useState, useEffect } from 'react';
import { categories, loadResearchData, sortByNewest } from '../data/researchData';

const ResearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [researchData, setResearchData] = useState(() => loadResearchData());

  useEffect(() => {
    const sync = () => setResearchData(loadResearchData());
    window.addEventListener('marinetech_research_updated', sync);
    window.addEventListener('storage', sync);
    window.addEventListener('focus', sync);
    return () => {
      window.removeEventListener('marinetech_research_updated', sync);
      window.removeEventListener('storage', sync);
      window.removeEventListener('focus', sync);
    };
  }, []);

  const filteredResearch = sortByNewest(
    researchData.filter(research => {
      const matchesSearch = searchQuery === '' || 
        research.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        research.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        research.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All Categories' || research.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
  );

  return (
    <div className="research-page min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-teal/10 text-teal-dark text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
              Innovation Hub
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 sm:mb-4 break-words">Research Repository</h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore cutting-edge marine research, academic theses, and collaborative studies from leading institutions worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b border-slate-200 sticky top-14 sm:top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search by title, author, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-600">
              Showing <span className="font-semibold text-navy">{filteredResearch.length}</span> results
            </p>
          </div>
        </div>
      </div>



      {/* Research Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid gap-4 sm:gap-6">
          {filteredResearch.map((research) => (
            <div key={research.id} className="bg-white rounded-xl border border-slate-200 hover:border-teal hover:shadow-card-hover transition-all p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span className="px-2.5 sm:px-3 py-1 bg-teal/10 text-teal-dark text-xs sm:text-sm font-medium rounded-full">
                      {research.category}
                    </span>
                    <span className="text-slate-500 text-xs sm:text-sm">{research.year}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-2 hover:text-teal cursor-pointer break-words leading-tight">
                    {research.title}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-slate-600 mb-3 text-sm">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-medium break-words">{research.author}</span>
                    </span>
                    <span className="hidden sm:inline text-slate-400">•</span>
                    <span className="text-xs sm:text-sm break-words">{research.institution}</span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">
                    {research.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {research.tags.map((tag, index) => (
                      <span key={index} className="px-2.5 sm:px-3 py-1 bg-slate-100 text-slate-600 text-xs sm:text-sm rounded-md hover:bg-slate-200 cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                 
                <div className="sm:ml-4 flex flex-row sm:flex-col gap-2 shrink-0">
                  <button className="w-full sm:w-auto px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy-light transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredResearch.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No research found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchPage;
