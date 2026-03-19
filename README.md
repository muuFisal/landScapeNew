# MDO Landscape Landscape Studio

Premium **React + TypeScript + Tailwind CSS** website starter for a bilingual landscape, garden, and outdoor living brand.

## Features

- React + TypeScript + Vite
- Tailwind CSS
- English / Arabic with RTL support
- Light / Dark mode with localStorage persistence
- Centralized theme tokens in `src/theme/tokens.ts`
- Translation files served from `public/locales/en/common.json` and `public/locales/ar/common.json`
- Responsive pages for mobile, tablet, and desktop
- Home page with varied section animations
- Mobile-optimized horizontal sliders for featured projects and home gallery
- Dedicated gallery page with lightbox preview
- Projects filtering + slug-based project details
- About, Contact, Terms, and Privacy pages
- Floating WhatsApp button
- Basic SEO meta updates per page
- Clean component-based structure for easier maintenance and customization

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Customize brand styles

Update the design system here:

```text
src/theme/tokens.ts
```

This file controls:
- Colors
- Fonts
- Shadows
- Radii

## Project structure

```text
src/
  components/
    home/
    gallery/
    layout/
    ui/
  context/
  data/
  pages/
  theme/
  utils/
public/
  locales/
    ar/
    en/
```

## Notes

- Contact form is static UI only.
- Images and project content are demo placeholders and can be swapped easily.
- All primary text content is wired through translation JSON files for easier localization.

## 📡 API Integration Prep

The application includes a centralized API layer ready for future backend integration. 

- **Location:** The API client is located at `src/lib/api/client.ts`. It exports `apiClient` which has methods like `apiClient.get()`, `apiClient.post()`.
- **Base URL:** It dynamically reads `VITE_API_BASE_URL` from the environment (`.env` or `.env.example`).
- **Headers:** 
  - It automatically applies `Accept: application/json` to all requests.
  - It automatically determines the application's current language (`i18n.language`) and dynamically applies an `Accept-Language` header to ensure consistent localization between frontend and backend. 

---

## 👨‍💻 Developed By

**Mohamed Fisal**  
Senior Backend Engineer | Laravel Architect

Mohamed Fisal is a senior backend engineer specializing in building scalable web platforms, SaaS systems, and enterprise-grade applications using Laravel and modern web technologies.  
He has extensive experience designing high-performance APIs, ERP systems, eCommerce platforms, and full production architectures used by real businesses.

His work focuses on:
- Scalable backend architecture
- Laravel ecosystem development
- Payment gateway integrations
- ERP / SaaS system design
- Performance optimization
- Clean and maintainable codebases

Mohamed also develops modern frontend solutions when needed using technologies like **React, TypeScript, and Tailwind**, allowing him to deliver complete, production-ready platforms from backend architecture to user experience.

### 📬 Contact

📱 Phone: **+20-1140158807**  
📧 Email: **[fisalmhmd56@gmail.com](mailto:fisalmhmd56@gmail.com)**  
🌍 Portfolio: **[https://mohamed-fisal.com/](https://mohamed-fisal.com/)**  
🔗 LinkedIn: **[https://www.linkedin.com/in/mohamed-fisal-45769421a/](https://www.linkedin.com/in/mohamed-fisal-45769421a/)**  
🐙 GitHub: **[https://github.com/muuFisal](https://github.com/muuFisal)**

---
