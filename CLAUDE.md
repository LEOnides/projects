# CLAUDE.md — TRF Casa de Bolsa Landing Page

> Este archivo guía a Claude Code en el desarrollo y mantenimiento de este proyecto.
> Leerlo completo antes de hacer cualquier cambio.

---

## Contexto del proyecto

Rediseño de la landing page de **TRF Casa de Bolsa · Grupo Empresarial Trafalgar**.
Es una **Casa de Bolsa regulada por la CNBV**, parte del Grupo Empresarial Trafalgar.

Fuentes de verdad:
- `Trafalgar-CB-Brandbook.pdf` — identidad visual oficial (paleta, tipografía, logo, isotipo)
- `MEMORY.md` — decisiones de diseño y restricciones del proyecto
- `README.md` — setup técnico y comandos

---

## Stack

- HTML5 semántico (`index.html`)
- CSS vanilla con design tokens en `:root` (`styles.css`)
- Sin frameworks, sin build tools, sin JavaScript por ahora
- Fonts: Google Fonts — Mulish + IM Fell English

---

## Reglas críticas — NO romper nunca

### 1. Tamaño mínimo de fuente: 16px
```css
/* ✅ Correcto */
font-size: 16px;
font-size: 18px;
font-size: 1rem;   /* si root = 16px */

/* ❌ Incorrecto */
font-size: 12px;
font-size: 14px;
font-size: 0.8rem;
```

### 2. Contraste WCAG AAA obligatorio
Usar **únicamente** estas combinaciones de texto aprobadas:

| Token CSS          | Valor     | Ratio  | Nivel | Uso |
|--------------------|-----------|--------|-------|-----|
| `--text-primary`   | `#F5F0E8` | 17.2:1 | AAA ✓ | Títulos, texto principal |
| `--text-body`      | `#C8BFB0` | 8.1:1  | AAA ✓ | Párrafos, descripciones |
| `--text-muted`     | `#A8A090` | 5.9:1  | AA ✓  | Solo 18px+ |
| `--text-subtle`    | `#8A8070` | 4.9:1  | AA ✓  | Solo labels 18px+ |

**El naranja `#f37036` NUNCA se usa como color de texto** sobre fondo oscuro — solo para:
- Botones con texto blanco
- Acentos decorativos (bordes, dots, líneas)
- La barra izquierda hover de cards

**El verde `#29a737` NUNCA se usa como texto** — solo puntos decorativos de 4px.

### 3. HTML semántico accesible
- Todo texto real en etiquetas semánticas (`<p>`, `<h1>`–`<h3>`, `<article>`, etc.)
- Elementos decorativos con `aria-hidden="true"`
- Imágenes y SVGs informativos con `alt` o `aria-label`
- Links con texto descriptivo (no "click aquí")
- Secciones con `aria-labelledby` o `aria-label`

### 4. Identidad visual — respetar el brandbook
- **Tipografía primaria:** Mulish (Bold, SemiBold, Regular, Light)
- **Tipografía secundaria:** IM Fell English (sustituto web de Perpetua)
- **Isotipo:** León en trazo naranja `#f37036` con melena en amarillo `#fec02e`
- **Logotipo:** "TRF CASA DE BOLSA" + líneas verdes + "Grupo Empresarial Trafalgar" en itálica
- **NO** reemplazar el isotipo del león por formas geométricas abstractas

### 5. Paleta — solo colores del brandbook (p.17)
```css
--color-amarillo:    #fec02e;   /* degradado, melena del león */
--color-naranja:     #f37036;   /* acento principal, CTAs */
--color-verde-claro: #29a737;   /* líneas del logotipo, dots regulación */
--color-verde-oscuro:#005c3b;   /* usos secundarios de verde */
```

---

## Arquitectura de archivos

```
trafalgar-landing/
├── index.html          ← Landing principal
├── styles.css          ← Todo el CSS, design tokens en :root
├── CLAUDE.md           ← Este archivo (instrucciones para Claude Code)
├── README.md           ← Setup, comandos, contexto técnico
├── MEMORY.md           ← Decisiones de diseño y restricciones
└── assets/
    ├── logo/           ← SVG del imagotipo (pendiente exportar del brandbook)
    └── fonts/          ← Fallback local si Google Fonts no disponible
```

---

## Cómo trabajar en este proyecto

### Al recibir una tarea de UI:
1. Leer `MEMORY.md` para conocer decisiones previas
2. Verificar que el cambio respeta las 5 reglas críticas de arriba
3. Revisar contraste con las tablas de tokens antes de usar cualquier color
4. Usar siempre variables CSS (`var(--token)`) — nunca colores hardcoded
5. Probar en viewport 1440px, 1024px, 768px y 375px

### Al agregar una nueva sección:
- Seguir el patrón: `<section class="sec" aria-labelledby="...">`
- Incluir `.sec-lbl` como label de sección
- Padding con `var(--section-pad)`
- Border bottom con `var(--border)`

### Al modificar tipografía:
- Títulos display → `font-family: var(--font-secondary)` (IM Fell English)
- UI, labels, cuerpo → `font-family: var(--font-primary)` (Mulish)
- Mínimo siempre 16px

---

## Comandos útiles

```bash
# Ver el sitio localmente
open index.html
# o
python3 -m http.server 3000

# Verificar contraste (herramienta recomendada)
# https://webaim.org/resources/contrastchecker/

# Lint HTML
npx html-validate index.html
```

---

## Pendientes del proyecto

- [ ] Exportar SVG limpio del imagotipo desde el brandbook
- [ ] Agregar sección de productos detallada (`#inversion`)
- [ ] Formulario de contacto accesible
- [ ] Animaciones de scroll (respetar `prefers-reduced-motion`)
- [ ] Versión mobile nav (hamburger menu)
- [ ] Meta OG tags y favicon con isotipo
- [ ] Integrar con CMS o framework (decisión pendiente)

---

## Contacto del proyecto

Brandbook fuente: `Trafalgar-CB-Brandbook.pdf`
Sitio actual de referencia: https://www.trafalgar.mx/#/
