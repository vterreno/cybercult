# CyberCult

**CyberCult** es un espacio dedicado a la ciberseguridad y los desafíos CTF (Capture The Flag). Este sitio está construido con Astro y adaptado del [Hugo Terminal Theme](https://github.com/panr/hugo-theme-terminal) para mantener una estética retro de terminal.

## 🎯 ¿Qué es CyberCult?

CyberCult es una plataforma para compartir:
- **Writeups de CTF** — Soluciones detalladas de desafíos de PicoCTF y otras plataformas
- **Recursos de aprendizaje** — Herramientas, técnicas y documentación útil
- **Conocimiento técnico** — Posts sobre ciberseguridad, hacking ético y análisis forense

## ✨ Características

- **Sistema de soluciones PicoCTF** — Cargar automáticamente writeups desde Markdown con frontmatter
- **Filtrado avanzado** — Buscar por nombre, categoría (Web Exploitation, Cryptography, Forensics, etc.) y dificultad
- **Paginación client-side** — Navegación fluida por las soluciones (6 items por página)
- **Badges de categoría** — Visualización con colores distintivos para cada tipo de desafío
- **Esquemas de colores personalizables** — Compatible con [Terminal.css](https://panr.github.io/terminal-css/)
- **Syntax highlighting** — Resaltado de código con Shiki
- **Totalmente responsive** — Funciona perfecto en móvil y desktop
- **RSS feed** — Feed automático para seguir nuevas publicaciones

## 🚀 Requisitos

- Astro v5.0.0 o superior
- Node.js 18 o superior

## 📦 Instalación

### Clonar el repositorio

```bash
git clone https://github.com/vterreno/cybercult.git
cd cybercult
npm install
```

## 🛠️ Cómo usar

### Desarrollo local

```bash
npm run dev
```

### Build de producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

## 📝 Crear writeups de PicoCTF

Los writeups se crean como archivos Markdown en `src/content/picoctf/<categoria>/nombre-del-desafio.md`.

### Formato recomendado

```md
---
title: "Nombre del Desafío"
slug: "nombre-del-desafio"
date: 11/04/2025
category: "Forensics"
difficulty: "Fácil/Medio/Difícil"
summary: "Breve descripción del desafío"
---

# Desafío
Descripción del desafío...

# Herramientas
- exiftool
- strings

## Explicación
Paso a paso de la solución...

# Notas / Post-mortem
Aprendizajes adicionales...

# Referencias
- Enlaces útiles
```

### Categorías disponibles

Los writeups se organizan en carpetas por categoría:
- `cryptography/` — Desafíos de criptografía
- `web-exploitation/` — Vulnerabilidades web
- `forensics/` — Análisis forense
- `binary-exploitation/` — Exploits binarios
- `reverse-engineering/` — Ingeniería inversa

## 📂 Estructura del proyecto

```
cybercult/
├── public/
│   ├── fonts/
│   └── styles/themes/
├── src/
│   ├── components/
│   │   ├── FormattedDate.astro
│   │   └── PostCard.astro
│   ├── content/
│   │   ├── picoctf/
│   │   │   ├── cryptography/
│   │   │   ├── forensics/
│   │   │   ├── web-exploitation/
│   │   │   ├── binary-exploitation/
│   │   │   ├── reverse-engineering/
│   │   │   └── FORMAT.md
│   │   └── posts/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── ctf/
│   │   │   ├── picocctf/
│   │   │   │   ├── [slug].astro     # Páginas dinámicas de soluciones
│   │   │   │   └── soluciones.astro # Listado con filtros y paginación
│   │   │   └── recursos.astro
│   │   ├── posts/
│   │   ├── about.astro
│   │   └── index.astro
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## 🤝 Contribuir

Si encuentras bugs o tienes ideas para mejoras:
1. Abre un issue describiendo el problema o sugerencia
2. Crea un fork del repositorio
3. Implementa tus cambios
4. Envía un pull request

## 📄 Licencia

Este proyecto está basado en el [Hugo Terminal Theme](https://github.com/panr/hugo-theme-terminal) creado por [panr](https://github.com/panr), bajo licencia MIT.

🔐 Hecho con ❤️ para la comunidad de ciberseguridad
