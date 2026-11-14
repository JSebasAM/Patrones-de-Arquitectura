# Guía de contribución

## Convención de commits

Este repositorio utiliza [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/).

```
<tipo>(<ámbito opcional>): <descripción en imperativo y en español>

[cuerpo opcional]
```

### Tipos de commit principales:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de un error
- `docs`: Modificaciones exclusivamente en documentación
- `ci`: Cambios en la configuración o workflows de GitHub Actions
- `test`: Incorporación o corrección de pruebas unitarias
- `chore`: Tareas de mantenimiento, dependencias o configuración
- `refactor`: Cambios de código que no corrigen bugs ni agregan funcionalidades
- `style`: Ajustes de formato o estilos visuales sin impacto lógico

---

## Flujo de trabajo recomendado

1. Crea una rama descriptiva a partir de `develop` (o `master`):
   ```bash
   git checkout -b feat/nombre-funcionalidad
   ```
2. Realiza tus cambios y verifica la calidad localmente:
   ```bash
   npm run lint
   npm run format:check
   npm test
   ```
3. Realiza commits atómicos con mensajes en español y la convención.
4. Sube la rama y genera el pull request correspondiente.
