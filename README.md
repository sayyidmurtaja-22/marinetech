# Marine Tech - Premium Corporate Website

A modern, clean, and sophisticated company profile website with an integrated research repository platform.

## 🎨 Design Philosophy

**Premium, Not Flashy** - Inspired by high-end corporate websites like Stripe and Vercel
- Ultra-clean minimalist layout with generous whitespace
- Sophisticated navy and teal color palette
- Subtle oceanic accents
- Professional typography with Inter font

## 🌊 Color Palette

```
Primary Navy: #0F172A
Teal: #0EA5E9
White: #FFFFFF
Slate Grays for backgrounds and text
```

Clean, modern design with blue accent colors mixed with teal for oceanic feel.

## ✨ Key Features

### 1. Premium Landing Page (PRIMARY)
- Hero Section with compelling brand introduction
- Dynamic Services Section (4 core services with icons)
- About Us section with company credentials
- Stats Display (Employees, Projects, Countries)
- Research Portal Teaser

### 2. Research Repository (SECONDARY)
A "GitHub for Academic Research" platform:
- Browse marine research papers and theses
- Advanced search and category filtering
- Clean card-based layout

### 3. Admin Dashboard (CRUD + Live Preview)
- ✅ Create, Read, Update, Delete research entries
- 🎯 LIVE PREVIEW: Real-time preview of research cards
- Form fields: Title, Author, Institution, Year, Category, Summary, Tags, Image URL, External Link

## 🚀 Getting Started

```bash
npm install
npm start
```

Open `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/       # Navigation, Footer
├── pages/           # LandingPage, ResearchPage, AdminDashboard
├── data/            # mockData.js, researchData.js
└── App.js           # Main routing
```

## 🎯 Navigation

- **/** - Landing Page (Company Profile)
- **/research** - Research Repository
- **/admin** - Admin Dashboard

## 📊 Data Management

### Services & Company Data
`src/data/mockData.js` - Dynamically rendered services and company info

### Research Data
`src/data/researchData.js` - Initial mock research entries, manageable via Admin Dashboard

## 🛠️ Tech Stack

- React.js + React Router
- Tailwind CSS
- JavaScript (ES6+)

## 🎨 Design Principles

1. Clean, Not Cluttered
2. Sophisticated, Not Generic (avoiding "AI slop")
3. Corporate Professionalism
4. Subtle Oceanic Accents
5. Accessibility First
6. Mobile Responsive

## 🔑 Customization

Edit `src/data/mockData.js` for services and company info
Edit `src/data/researchData.js` for research categories

## 🎯 Future Enhancements

- Backend API integration
- User authentication
- Image upload functionality
- PDF viewer for research papers
- Advanced analytics

---

**Marine Tech** - Pioneering the Future of Ocean Technology 🌊
