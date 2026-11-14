# Patrones de Arquitectura · Explorador Interactivo

[![Deploy Angular to GitHub Pages](https://github.com/JSebasAM/Patrones-de-Arquitectura/actions/workflows/deploy.yml/badge.svg)](https://github.com/JSebasAM/Patrones-de-Arquitectura/actions/workflows/deploy.yml)

Catálogo interactivo y educativo de **patrones de arquitectura de software** desarrollado por **José Sebastián Arenas Moncada** para la asignatura de Arquitectura de Software (UCEVA).

**Demo en GitHub Pages:** https://JSebasAM.github.io/Patrones-de-Arquitectura/

> Captura de pantalla: pendiente de agregar en `docs/screenshot.png` (`![Captura](docs/screenshot.png)`).

---

## Características principales

- **Catálogo tipado de 10 patrones:** Clean Architecture, Microfrontends, Cliente-Servidor, SSG, SPA, MVC, Arquitectura Hexagonal, Microservicios, Event-Driven Architecture y Arquitectura en Capas.
- **Filtros dinámicos y búsqueda interactiva:** búsqueda reactiva instantánea y filtrado por categorías taxonómicas (Estructural, Arquitectura Web, Sistemas Distribuidos, Patrones de Dominio, Interacción y Presentación).
- **Vista de detalle completa:** descripción técnica profunda, listas de ventajas, desventajas, recomendaciones de cuándo aplicarlo y enlaces a repositorios prácticos del portafolio.
- **Favoritos persistentes:** guarda tus patrones predilectos en `localStorage` con tolerancia a fallos mediante bloques `try/catch`.
- **Modo oscuro nativo:** selector de tema claro/oscuro persistente y adaptado a las preferencias del sistema.
- **Enrutamiento por Hash:** compatible con GitHub Pages (`withHashLocation()` y `withComponentInputBinding()`).

---

## Tecnologías utilizadas

- **Framework:** Angular 20 (componentes standalone, Signals reactivas, Router con binding de inputs)
- **Lenguaje:** TypeScript 5.9
- **Estilos:** SCSS nativo con variables CSS para temas claro y oscuro
- **Pruebas:** Jest (`jest-preset-angular`) con 100% de suites en verde
- **Documentación de código:** Compodoc
- **Calidad de código:** ESLint (`angular-eslint`) y Prettier
- **CI/CD:** GitHub Actions y GitHub Pages

---

## Instalación y ejecución local

```bash
# Instalar dependencias
npm ci --legacy-peer-deps

# Iniciar servidor de desarrollo en http://localhost:4200
npm start

# Compilar para producción
npm run build
```

---

## Scripts disponibles

| Script                  | Descripción                                     |
| ----------------------- | ----------------------------------------------- |
| `npm start`             | Inicia servidor de desarrollo Angular           |
| `npm run build`         | Compila la aplicación para producción           |
| `npm test`              | Ejecuta la suite de pruebas unitarias con Jest  |
| `npm run test:watch`    | Ejecuta Jest en modo interactivo/observador     |
| `npm run test:coverage` | Genera reporte de cobertura de código           |
| `npm run compodoc`      | Genera la documentación técnica de arquitectura |
| `npm run lint`          | Análisis estático con ESLint                    |
| `npm run format`        | Formatea el código fuente con Prettier          |
| `npm run format:check`  | Verifica que el código cumpla la guía de estilo |

---

## Estructura del proyecto

```
src/app/
├── components/
│   ├── navbar/               # Barra superior con favoritos y selector de modo oscuro
│   └── pattern-card/         # Tarjeta interactiva con insignia, resumen y favorito
├── data/
│   └── patterns.data.ts      # Catálogo estático de los 10 patrones con tipado estricto
├── models/
│   └── pattern.model.ts      # Interfaces Pattern, PatternCategory y RelatedProject
├── pages/
│   ├── pattern-detail/       # Vista de detalle con ventajas, desventajas y proyecto
│   └── patterns-list/        # Vista principal con barra de búsqueda, chips y cuadrícula
├── services/
│   └── patterns.service.ts   # Servicio reactivo con Signals y manejo seguro de localStorage
└── app.routes.ts             # Enrutamiento con rutas por hash
```

---

## Pipeline de Despliegue

El archivo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) define la integración continua y el despliegue automático en GitHub Pages:

1. **build**: verifica lint, formato, ejecuta las pruebas Jest, genera la documentación con Compodoc y compila con `--base-href /Patrones-de-Arquitectura/`.
2. **deploy**: despliega la carpeta `./dist/arch-patterns-explorer/browser` en GitHub Pages.
3. **verify**: realiza sondeos `curl` con reintentos automáticos verificando respuesta HTTP 200 y presencia del marcador `<app-root`.

---

## Contribuir

Las contribuciones siguen la convención de [Conventional Commits](CONTRIBUTING.md).
