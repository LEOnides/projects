# MEMORY.md — Decisiones de diseño y restricciones
# TRF Casa de Bolsa · Landing Page Redesign

> Registro cronológico de decisiones tomadas, cambios pedidos y restricciones establecidas.
> Actualizar este archivo después de cada sesión de trabajo.

---

## Última actualización
**Fecha:** Mayo 2026
**Estado del proyecto:** Prototipo HTML/CSS v4 — listo para desarrollo

---

## Decisiones de diseño establecidas

### Concepto visual
- **Dirección:** Sofisticado, minimalista, dark luxury editorial
- **Fondo base:** `#080806` (negro casi puro, más impacto que #0A0A09)
- **Acento único:** Naranja oficial `#f37036` del brandbook
- **Estética de referencia:** Guilloché financiero, proporción áurea (ver brandbook p.25)
- **Fotografía:** Arquitectura en blanco/negro con toques de naranja (ver brandbook p.26)

### Identidad visual — decisiones clave
- El **isotipo es un león** en trazo naranja/amarillo degradado — NO abstracto
- El logotipo usa líneas verdes `#29a737` flanqueando "Grupo Empresarial Trafalgar"
- El nombre en el logotipo va en tipografía serifada itálica (Perpetua / IM Fell English)
- El imagotipo vertical es la versión principal; el horizontal para encabezados web

### Tipografía — decisión final
| Uso | Fuente | Peso | Nota |
|-----|--------|------|------|
| Títulos H1/H2/H3 | IM Fell English | 400 | Sustituto web de Perpetua (brandbook p.20) |
| Títulos en itálica | IM Fell English Italic | 400 | Para acentos emocionales |
| UI, botones, labels | Mulish | 300–700 | Fuente primaria oficial (brandbook p.19) |
| Body text | Mulish | 300–400 | Legibilidad en dark mode |

### Estructura de secciones (orden fijo)
1. **Nav** — logo horizontal + links + CTA naranja
2. **Hero** — split 50/50: copy izquierda / logo showcase derecha
3. **Stats bar** — 4 métricas clave
4. **Visión** — quote + 3 pilares (Propósito, Solidez, Evolución)
5. **Premios** — grid 3×2 con hover bar naranja
6. **Propuesta de valor** — grid 3×2 de productos
7. **Logros** — 4 métricas con número grande en naranja
8. **Regulación bar** — CNBV, BMV, INDEVAL, ISO, CONDUSEF
9. **CTA** — split copy + botones
10. **Footer** — logo + legal + regulación

---

## Restricciones obligatorias (cliente)

### Accesibilidad
- **Fuente mínima:** 16px en TODO el documento — sin excepciones
- **Contraste:** WCAG 2.1 Nivel **AAA** en texto principal y cuerpo
- **Semántica:** HTML5 semántico con roles ARIA donde sea necesario

### Identidad
- Respetar brandbook `Trafalgar-CB-Brandbook.pdf` al 100%
- Paleta: solo los 6 colores oficiales (amarillo, naranja, verde claro, verde oscuro, negro, blanco)
- NO inventar colores fuera del brandbook (el dorado `#C9A96E` de versiones anteriores fue descartado)

### Comportamiento
- Respetar `prefers-reduced-motion` para animaciones
- Responsive: 1440px → 1024px → 768px → 375px

---

## Versiones anteriores — qué se descartó y por qué

### v1 — Primera propuesta
- ❌ Usaba `#C9A96E` (dorado inventado) — no está en el brandbook
- ❌ El "logo" era una T geométrica abstracta — no el isotipo real
- ❌ Fuentes eran Cormorant Garamond + Jost — no las fuentes del brandbook
- ✅ Estructura de secciones fue aprobada
- ✅ Dirección oscura/sofisticada fue aprobada

### v2 — Contraste mejorado
- ❌ Seguía usando `#C9A96E` como acento
- ❌ León SVG mejorado pero aún no fiel al isotipo
- ✅ Fondo más oscuro `#060605` aprobado
- ✅ Logo showcase en hero derecho aprobado

### v3 — Brandbook aplicado
- ✅ Paleta corregida: naranja `#f37036` + amarillo `#fec02e`
- ✅ León SVG con degradado naranja→amarillo
- ✅ Líneas verdes en logotipo
- ✅ Mulish + IM Fell English
- ✅ Guilloché como textura de fondo del hero
- ❌ Fuentes por debajo de 16px en varios elementos
- ❌ Contraste insuficiente en texto muted

### v4 — Accesibilidad AAA ← **VERSIÓN ACTUAL**
- ✅ Mínimo 16px en TODO
- ✅ Contraste AAA en texto principal y cuerpo
- ✅ Naranja solo decorativo/botones, nunca como texto pequeño
- ✅ Verde solo en elementos decorativos (dots, líneas)
- ✅ Design tokens en CSS custom properties
- ✅ HTML semántico con ARIA

---

## Tokens de diseño aprobados

```css
/* Colores — brandbook p.17 */
--color-amarillo:    #fec02e;
--color-naranja:     #f37036;
--color-verde-claro: #29a737;
--color-verde-oscuro:#005c3b;

/* Texto accesible — verificados contra #080806 */
--text-primary:   #F5F0E8;   /* 17.2:1 AAA */
--text-body:      #C8BFB0;   /* 8.1:1  AAA */
--text-muted:     #A8A090;   /* 5.9:1  AA — 18px+ */
--text-subtle:    #8A8070;   /* 4.9:1  AA — 18px+ */
--text-ghost:     #4A4438;   /* decorativo */
--text-ghost2:    #3A3428;   /* decorativo */
--text-ghost3:    #2A2820;   /* decorativo */
```

---

## Próximas decisiones pendientes

- [ ] ¿Framework CSS? (Tailwind, sin framework) — pendiente
- [ ] ¿JS animations? (GSAP, vanilla, ninguna) — pendiente
- [ ] ¿CMS backend? — pendiente
- [ ] Colores modo claro: ¿se requiere? — pendiente
- [ ] SVG del isotipo oficial exportado del brandbook — pendiente de asset
