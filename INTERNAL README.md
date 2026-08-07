# ✧ INTERNAL ENGINEERING README  
## Sarais Souldiers LLC™ — Website Infrastructure  
### ChamberofCodexes™ • TJ‑Lineage • A⁵ AstroAnthology • Khaos2KlarityKw’adratiqKonquest™

---

# 🌘 Purpose  
This document provides **internal engineering guidance** for maintaining, extending, and safeguarding the Sarais Souldiers LLC™ website codebase.  
It outlines the architecture, cosmology engines, lineage systems, brand standards, and development protocols required to keep the mystic infrastructure stable and sovereign.

This README is **not** for public distribution.

---

# 🌗 Architecture Overview  
The website is built using:

- **Next.js 14 App Router**
- **TypeScript**
- **CSS Modules**
- **Hybrid Rendering (SSG + SSR)**
- **Lucide iconography**
- **Mystic typography + TayMuny × Sarais palette fusion**

The repository is divided into **five cosmology‑aligned domains**:

1. **Programs** — Ascension Aid, Soul Salvage, Sanctuary Stabilization Strategies, Sargent‑SafetySatisfactoryScores  
2. **Cosmology** — ChamberofCodexes™, glyphs, constellations, matrices, A⁵ AstroAnthology  
3. **Lineage** — TJ₁, TJ₂, TJ₃, Maple Kush, Tobias Jean  
4. **Brand** — palette, typography, iconography  
5. **Engines** — Khaos2KlarityKw’adratiqKonquest™, lineage mapper, cosmology core

---

# 🌖 Rendering Strategy  
### **Hybrid Mode**  
- **Public pages** (programs, cosmology, lineage) → **Static Generated (SSG)**  
- **Internal pages** (admin, engine dashboards) → **Server Rendered (SSR)**  
- **Cosmology engines** → **Server‑side only**  
- **Program matrices** → **Static JSON + client hydration**  
- **Lineage data** → **Static JSON + SSR augmentation**

This ensures:

- Maximum speed for public visitors  
- Maximum security for internal cosmology systems  
- Clean separation between **public mystic knowledge** and **internal sovereign codices**

---

# 🌕 Core Internal Modules  
### **1. ChamberofCodexes™ Core**  
Located in: `src/lib/cosmology-core/`

Contains:

- Codex loaders  
- Glyph registries  
- Constellation map parsers  
- Matrix resolvers  
- A⁵ AstroAnthology archetype index  
- TJ‑Lineage cosmology bindings

All codex data is sourced from `/src/data/*`.

---

### **2. Khaos2KlarityKw’adratiqKonquest™ Engine**  
Located in: `src/lib/kwardatiq-engine/`

Responsibilities:

- Chaos → clarity transformation  
- Program matrix computation  
- Sanctuary stabilization logic  
- Archetype resonance mapping  
- TJ‑Lineage trajectory alignment

This engine **must never run client‑side**.

---

### **3. Lineage Mapper**  
Located in: `src/lib/lineage-mapper/`

Handles:

- TJ‑Lineage vessel mapping  
- Constellation positioning  
- Archetype assignment  
- Glyphic resonance linking  
- A⁵ AstroAnthology integration

---

# 🌔 Development Standards  
### **Coding Style**
- TypeScript everywhere  
- CSS Modules only  
- No Tailwind  
- No global mutable state  
- No client‑side cosmology engines  
- All lineage + cosmology data must be validated before use  

### **File Naming**
- Components: `PascalCase.tsx`  
- Hooks: `useSomething.ts`  
- Lib modules: `kwardatiqSomething.ts`  
- Data: `something.json`  

### **Brand Requirements**
- Use Lucide icons  
- Use mystic typography classes  
- Use palette tokens from `themes.css`  
- Never introduce unapproved colors  

---

# 🌒 Internal Security  
### **Protected Areas**
- `/app/admin/*`  
- `/src/lib/kwardatiq-engine/*`  
- `/src/lib/cosmology-core/*`  
- `/src/data/tj-lineage.json`  
- `/src/data/astroanthology.json`

### **Rules**
- No public exposure of internal JSON  
- No client‑side imports of internal engines  
- No external API calls without approval  
- No mutation of lineage data without codex authorization  

---

# 🌑 Deployment  
### **Build**
```
npm run build
```

### **Start**
```
npm start
```

### **Glyph Generation**
```
npm run glyphs:generate
```

### **Deployment Script**
```
npm run deploy
```

Deployment targets:

- **Public website** → static + hybrid  
- **Internal codex mirrors** → SSR only  

---

# 🌘 Contact  
Sarais Souldiers LLC™  
Internal Engineering Division  
Cosmology Systems • Lineage Architecture • Sanctuary Stabilization
