import React, { useState, useEffect } from 'react';
import { categories, loadResearchData, saveResearchData, sortByNewest } from '../data/researchData';

const AdminDashboard = () => {
  const [researchList, setResearchList] = useState(() => loadResearchData());
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    institution: '',
    year: new Date().getFullYear().toString(),
    category: 'Marine Biology',
    summary: '',
    tags: '',
    imageUrl: '',
    externalLink: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    saveResearchData(researchList);
  }, [researchList]);

  useEffect(() => {
    const handleExternalUpdate = () => {
      const latest = loadResearchData();
      setResearchList(latest);
    };
    window.addEventListener('marinetech_research_updated', handleExternalUpdate);
    window.addEventListener('storage', handleExternalUpdate);
    return () => {
      window.removeEventListener('marinetech_research_updated', handleExternalUpdate);
      window.removeEventListener('storage', handleExternalUpdate);
    };
  }, []);

  const sortedResearchList = sortByNewest(researchList);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    
    if (editingId) {
      const original = researchList.find(item => item.id === editingId);
      const updatedList = researchList.map(item => 
        item.id === editingId 
          ? { ...formData, id: editingId, tags: tagsArray, createdAt: original?.createdAt || new Date().toISOString() }
          : item
      );
      setResearchList(sortByNewest(updatedList));
    } else {
      const newResearch = {
        ...formData,
        id: Date.now(),
        tags: tagsArray,
        createdAt: new Date().toISOString()
      };
      setResearchList(prev => sortByNewest([newResearch, ...prev]));
    }
    
    resetForm();
  };

  const handleEdit = (research) => {
    setFormData({
      ...research,
      tags: research.tags.join(', ')
    });
    setEditingId(research.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this research entry?')) {
      setResearchList(researchList.filter(item => item.id !== id));
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      author: '',
      institution: '',
      year: new Date().getFullYear().toString(),
      category: 'Marine Biology',
      summary: '',
      tags: '',
      imageUrl: '',
      externalLink: ''
    });
    setEditingId(null);
    setIsFormOpen(false);
  };

  return (
    <div className="admin-dashboard min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-1 sm:mb-2 break-words">Admin Dashboard</h1>
            <p className="text-sm sm:text-base text-slate-600">Manage research repository entries</p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="w-full sm:w-auto justify-center px-5 sm:px-6 py-3 bg-navy text-white text-sm sm:text-base font-medium rounded-lg hover:bg-navy-light transition-colors inline-flex items-center gap-2 shrink-0"
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add New Research</span>
          </button>
        </div>



        {/* Form Modal */}
        {isFormOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-navy">
                  {editingId ? 'Edit Research Entry' : 'Add New Research Entry'}
                </h2>
                <button onClick={resetForm} className="text-slate-400 hover:text-slate-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 p-6">
                {/* Form Section */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Title *</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Author *</label>
                        <input
                          type="text"
                          name="author"
                          value={formData.author}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy mb-2">Year *</label>
                        <input
                          type="text"
                          name="year"
                          value={formData.year}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Institution *</label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      >
                        {categories.filter(c => c !== 'All Categories').map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Summary *</label>
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Tags (comma separated)</label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="e.g., coral reefs, climate change, biodiversity"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">Image URL</label>
                      <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">External Link</label>
                      <input
                        type="url"
                        name="externalLink"
                        value={formData.externalLink}
                        onChange={handleInputChange}
                        placeholder="https://example.com/full-thesis"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-navy text-white font-medium rounded-lg hover:bg-navy-light transition-colors"
                      >
                        {editingId ? 'Update' : 'Create'}
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>



                {/* Live Preview Section */}
                <div>
                  <div className="sticky top-20">
                    <h3 className="text-lg font-semibold text-navy mb-4 flex items-center space-x-2">
                      <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Live Preview</span>
                    </h3>
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                      <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          {formData.category && (
                            <span className="px-3 py-1 bg-teal/10 text-teal-dark text-sm font-medium rounded-full">
                              {formData.category}
                            </span>
                          )}
                          {formData.year && (
                            <span className="text-slate-500 text-sm">{formData.year}</span>
                          )}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-navy mb-2">
                          {formData.title || 'Research Title'}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-slate-600 mb-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span className="font-medium">{formData.author || 'Author Name'}</span>
                          {formData.institution && (
                            <>
                              <span className="text-slate-400">•</span>
                              <span className="text-sm">{formData.institution}</span>
                            </>
                          )}
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {formData.summary || 'Research summary will appear here...'}
                        </p>
                        
                        {formData.tags && (
                          <div className="flex flex-wrap gap-2">
                            {formData.tags.split(',').map((tag, index) => (
                              tag.trim() && (
                                <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-md">
                                  #{tag.trim()}
                                </span>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Research List, sorted newest first */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-4 sm:px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-lg sm:text-xl font-semibold text-navy break-words">All Research Entries ({researchList.length})</h2>
            <span className="text-xs font-medium tracking-wide uppercase text-slate-500 shrink-0">Sorted • Newest first</span>
          </div>
          <div className="divide-y divide-slate-200">
            {sortedResearchList.map((research) => (
              <div key={research.id} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <span className="px-2.5 sm:px-3 py-1 bg-teal/10 text-teal-dark text-xs font-medium rounded-full">
                        {research.category}
                      </span>
                      <span className="text-slate-500 text-xs sm:text-sm">{research.year}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-navy mb-1 break-words leading-snug">{research.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-2 break-words">
                      {research.author} • {research.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">{research.summary}</p>
                  </div>
                  <div className="flex flex-row sm:flex-col md:flex-row lg:flex-col gap-2 shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => handleEdit(research)}
                      className="flex-1 sm:flex-none px-4 py-2.5 text-teal hover:bg-teal/10 border border-teal/20 sm:border-0 rounded-lg transition-colors text-sm font-medium text-center"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(research.id)}
                      className="flex-1 sm:flex-none px-4 py-2.5 text-red-600 hover:bg-red-50 border border-red-200 sm:border-0 rounded-lg transition-colors text-sm font-medium text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
