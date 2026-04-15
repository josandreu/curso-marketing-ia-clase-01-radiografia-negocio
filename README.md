# Clase 1 — Radiografía del negocio (presentación en vivo)

> Material educativo desarrollado por **José Antonio Andreu Rubio** © 2026

Aplicación web de **diapositivas interactivas** para la sesión de radiografía de negocio (contexto, empatía con cliente, benchmarking, propuesta de valor y cierre con tareas). Stack: React, Vite, Tailwind CSS, Framer Motion y dependencias del proyecto Base44 según `package.json`. El guion visual está orquestado en `src/pages/Presentation.jsx`.

## Requisitos

- Node.js 18+ (recomendado LTS)
- npm

## Instalación y uso

```bash
npm install
npm run dev
```

- Build: `npm run build` → carpeta `dist/`.
- Previsualizar build: `npm run preview`.
- Opcional: `npm run lint`, `npm run typecheck`.

## Controles en presentación

- **Flecha derecha** o **barra espaciadora**: siguiente diapositiva.
- **Flecha izquierda**: anterior.
- **G**: rejilla con todas las diapositivas.
- **F**: pantalla completa.
- **Escape**: cerrar rejilla o salir de pantalla completa.

## Diapositivas (orden)

1. Portada  
2. El Problema  
3. Demo Contexto  
4. El Secreto  
5. El Funnel  
6. Proyecto Real  
7. Mapa Empatía Intro  
8. Prompt Empatía  
9. Resultado Empatía  
10. Transición  
11. Perplexity vs ChatGPT  
12. Benchmarking  
13. Síntesis Estratégica  
14. Propuesta de Valor Intro  
15. Los 3 Formatos  
16. Resultado Propuesta  
17. Sprint de Trabajo  
18. Revisión Grupal  
19. El Brief  
20. Validación Inversa  
21. Recap  
22. Conexión Sesión 2  
23. Tareas CTA  
24. Cierre  

## Estructura de esta carpeta

```
clase-1-radiografia-negocio/
├── README.md
├── LICENSE
├── package.json
├── vite.config.js
├── index.html
├── dist/                 ← salida de `npm run build`
└── src/
    ├── pages/Presentation.jsx
    ├── components/slides/
    └── …
```

## Uso recomendado

- Proyección en aula o sesión online; también referencia para estudiantes si publicas el build.
- Adaptaciones: **atribución** al autor y copia de la [MIT License](LICENSE).

## Licencia

Este directorio está bajo la [MIT License](LICENSE). Conserva el aviso de copyright y el texto de la licencia en redistribuciones y derivados.
