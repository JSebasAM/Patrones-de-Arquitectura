/**
 * Categorías taxonómicas de los patrones de arquitectura.
 */
export type PatternCategory =
  | 'Estructural'
  | 'Arquitectura Web'
  | 'Sistemas Distribuidos'
  | 'Patrones de Dominio'
  | 'Interacción y Presentación';

/**
 * Enlace opcional a un proyecto del estudiante que ejemplifica el patrón.
 */
export interface RelatedProject {
  nombre: string;
  url: string;
}

/**
 * Representa un patrón de arquitectura de software en el catálogo.
 */
export interface Pattern {
  /** Identificador único para rutas amigables (slug). */
  id: string;

  /** Nombre oficial del patrón. */
  nombre: string;

  /** Categoría taxonómica a la que pertenece. */
  categoria: PatternCategory;

  /** Resumen corto de una o dos líneas. */
  resumen: string;

  /** Descripción detallada y fundamentos arquitectónicos. */
  descripcion: string;

  /** Ventajas y beneficios clave de su adopción. */
  ventajas: string[];

  /** Desventajas, riesgos o costos inherentes. */
  desventajas: string[];

  /** Escenarios, criterios y recomendaciones de aplicación. */
  cuandoUsarlo: string;

  /** Proyecto real del portafolio que aplica este patrón (opcional). */
  proyectoRelacionado?: RelatedProject;
}
