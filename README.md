# TRF Casa de Bolsa · Landing Page Redesign

**Grupo Empresarial Trafalgar · Casa de Bolsa · Regulada por CNBV**

Rediseño de la landing page de TRF Casa de Bolsa con dirección editorial sofisticada, minimalista y dark luxury, alineada al brandbook oficial.

---

## Inicio rápido

```bash
# Ver el sitio localmente (sin instalación)
open index.html

# Con servidor local (recomendado para fonts)
python3 -m http.server 3000
# → http://localhost:3000

# O con Node
npx serve .
# → http://localhost:3000
```

---

## Estructura del proyecto

```
trafalgar-landing/
├── index.html          ← Página principal (HTML5 semántico)
├── styles.css          ← Estilos con design tokens en :root
├── CLAUDE.md           ← Instrucciones para Claude Code
├── MEMORY.md           ← Decisiones de diseño y restricciones
├── README.md           ← Este archivo
└── assets/             ← (crear cuando se tengan los assets)
    ├── logo/
    │   ├── imagotipo-vertical.svg
    │   ├── imagotipo-horizontal.svg
    │   └── isotipo.svg
    └── img/
        └── (fotografías estilo brandbook: arquitectura B&W)
```

---

## Stack tecnológico

| Capa | Tecnología | Motivo |
|------|-----------|--------|
| Markup | HTML5 semántico | Sin framework, máximo control |
| Estilos | CSS vanilla + custom properties | Design tokens, sin dependencias |
| Tipografía | Google Fonts (Mulish + IM Fell English) | Brandbook: Mulish primaria, Perpetua secundaria |
| Build | Ninguno (por ahora) | Static file, listo para cualquier hosting |

---

## Brandbook — fuente de verdad visual

Archivo: `Trafalgar-CB-Brandbook.pdf`

| Sección | Página | Contenido |
|---------|--------|-----------|
| Identidad primaria | 3–6 | Imagotipo, Isotipo, Logotipo |
| Área de protección | 7–10 | Espaciado mínimo del logo |
| Medidas mínimas | 11–15 | Tamaños de reproducción |
| Paleta de color | 16–17 | 6 colores oficiales + degradados |
| Tipografía | 18–21 | Mulish (primaria) + Perpetua (secundaria) |
| Iconografía | 22–23 | Set de íconos de línea |
| Estilo fotográfico | 24–26 | Guilloché, proporción áurea, arquitectura B&W |
| Aplicaciones | 27–30 | Papelería, tarjetas, mockup web |

### Paleta oficial (brandbook p.17)
```
Amarillo:     #fec02e  (RGB 254·192·46)
Naranja:      #f37036  (RGB 243·112·54)
Verde claro:  #29a737  (RGB 41·167·55)
Verde oscuro: #005c3b  (RGB 0·92·59)
Negro:        #000000
Blanco:       #ffffff
```

---

## Accesibilidad

Este proyecto cumple con **WCAG 2.1 Nivel AAA** en contraste de texto.

### Reglas estrictas
- Fuente mínima: **16px** en todo el documento
- Texto principal `#F5F0E8` sobre `#080806` → **17.2:1** (AAA ✓)
- Texto cuerpo `#C8BFB0` sobre `#080806` → **8.1:1** (AAA ✓)
- El naranja `#f37036` **nunca se usa como color de texto** — solo decorativo
- El verde `#29a737` **nunca se usa como texto** — solo puntos decorativos

### Herramientas para verificar
- https://webaim.org/resources/contrastchecker/
- https://www.tpgi.com/color-contrast-checker/
- Chrome DevTools → Accessibility panel

---

## Trabajar con Claude Code

Este proyecto incluye `CLAUDE.md` con instrucciones completas para Claude Code.

```bash
# Iniciar Claude Code en este directorio
claude

# Claude Code leerá automáticamente CLAUDE.md al iniciar
```

Archivos clave para Claude Code:
- **`CLAUDE.md`** — reglas, restricciones, patrones de código
- **`MEMORY.md`** — historial de decisiones y versiones anteriores
- **`styles.css`** — design tokens en `:root` (usar siempre variables, no valores hardcoded)

---

## Convenciones de código

### CSS
```css
/* ✅ Siempre usar variables */
color: var(--text-primary);
background: var(--color-naranja);

/* ❌ Nunca hardcodear colores */
color: #F5F0E8;
background: #f37036;
```

### HTML
```html
<!-- ✅ Semántico con ARIA -->
<section aria-labelledby="heading-id">
  <h2 id="heading-id">Título</h2>
</section>

<!-- ✅ Decorativo marcado como tal -->
<div aria-hidden="true">···</div>

<!-- ❌ Div soup -->
<div class="section">
  <div class="title">Título</div>
</div>
```

---

## Deployment

El proyecto es HTML/CSS estático — compatible con cualquier hosting:

```bash
# Netlify (drag & drop la carpeta)
# Vercel
vercel deploy

# GitHub Pages
# Subir carpeta al repo, activar Pages en Settings

# Cualquier servidor web
# Copiar archivos a /var/www/html o equivalente
```

---

## Roadmap

### v4 — Estado actual ✅
- [x] Estructura completa de landing
- [x] Design tokens CSS
- [x] Accesibilidad AAA
- [x] Brandbook aplicado
- [x] Responsive básico

### v5 — Próximos pasos
- [ ] SVG del isotipo oficial (exportar del brandbook)
- [ ] Sección `/inversion` con productos detallados
- [ ] Formulario de contacto accesible con validación
- [ ] Animaciones de scroll con `prefers-reduced-motion`
- [ ] Nav mobile (hamburger accesible)
- [ ] Meta tags OG + Twitter Card
- [ ] Favicon con isotipo

### v6 — Futuro
- [ ] Decidir framework (React/Next.js o seguir estático)
- [ ] CMS para contenido dinámico (premios, productos)
- [ ] Versión en inglés

---

## Contacto

Sitio actual: https://www.trafalgar.mx/#/
Brandbook: `Trafalgar-CB-Brandbook.pdf`
