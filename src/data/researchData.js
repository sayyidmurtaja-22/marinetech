export const STORAGE_KEY = 'marinetech_research_v2';

export const initialResearchData = [
  {
    id: 1,
    title: 'Impact of Ocean Acidification on Coral Reef Ecosystems',
    author: 'Dr. Sarah Martinez',
    institution: 'Marine Institute of Technology',
    year: '2024',
    category: 'Marine Biology',
    summary: 'This thesis examines the effects of decreasing pH levels on coral reef biodiversity in Southeast Asian waters, presenting a 5-year longitudinal study across 12 reef systems.',
    tags: ['coral reefs', 'climate change', 'biodiversity'],
    imageUrl: '',
    externalLink: '',
    createdAt: '2024-03-20T10:00:00.000Z'
  },
  {
    id: 2,
    title: 'Advanced Sonar Mapping Techniques for Deep Sea Exploration',
    author: 'Prof. James Chen',
    institution: 'Oceanic Research University',
    year: '2023',
    category: 'Oceanography',
    summary: 'Development of novel sonar algorithms for high-resolution mapping of underwater topography at depths exceeding 6000 meters.',
    tags: ['sonar', 'deep sea', 'mapping'],
    imageUrl: '',
    externalLink: '',
    createdAt: '2023-08-10T10:00:00.000Z'
  },
  {
    id: 3,
    title: 'Sustainable Aquaculture Systems in Coastal Communities',
    author: 'Maria Rodriguez',
    institution: 'Coastal Development Institute',
    year: '2024',
    category: 'Fisheries Science',
    summary: 'Analysis of integrated multi-trophic aquaculture (IMTA) systems and their socio-economic impact on coastal communities.',
    tags: ['aquaculture', 'sustainability', 'coastal communities'],
    imageUrl: '',
    externalLink: '',
    createdAt: '2024-02-05T10:00:00.000Z'
  },
  {
    id: 4,
    title: 'Machine Learning Applications in Marine Species Recognition',
    author: 'Dr. Alex Kim',
    institution: 'Technology & Marine Science Institute',
    year: '2023',
    category: 'Marine Engineering',
    summary: 'Development of deep learning models for automated identification and classification of marine species using underwater camera systems.',
    tags: ['AI', 'machine learning', 'species recognition'],
    imageUrl: '',
    externalLink: '',
    createdAt: '2023-11-18T10:00:00.000Z'
  }
];

export const sortByNewest = (arr) => [...arr].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

export const loadResearchData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const migrated = parsed.map((item) => {
          if (!item.createdAt) {
            const fallback = item.year ? new Date(`${item.year}-06-15T10:00:00.000Z`).toISOString() : new Date().toISOString();
            return { ...item, createdAt: fallback };
          }
          return item;
        });
        return sortByNewest(migrated);
      }
    }
  } catch (e) {
    console.warn('Failed to load research data from localStorage', e);
  }
  return sortByNewest(initialResearchData);
};

export const saveResearchData = (data) => {
  try {
    const sorted = sortByNewest(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
    window.dispatchEvent(new Event('marinetech_research_updated'));
  } catch (e) {
    console.warn('Failed to save research data', e);
  }
};

export const categories = [
  'All Categories',
  'Marine Biology',
  'Oceanography',
  'Fisheries Science',
  'Marine Engineering',
  'Environmental Science'
];
