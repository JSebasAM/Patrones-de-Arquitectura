import { Injectable, computed, signal } from '@angular/core';
import { PATTERNS_DATA } from '../data/patterns.data';
import { Pattern } from '../models/pattern.model';

const FAVORITES_KEY = 'arch_patterns_favorites';
const THEME_KEY = 'arch_patterns_dark_mode';

/**
 * Servicio reactivo para la gestión y exploración del catálogo de patrones de arquitectura.
 *
 * @remarks
 * Utiliza Signals de Angular 20 para el estado reactivo (búsqueda, filtros, favoritos, modo oscuro)
 * e interactúa con `localStorage` de forma segura mediante bloques try/catch.
 */
@Injectable({
  providedIn: 'root',
})
export class PatternsService {
  /** Colección base de patrones de arquitectura. */
  readonly patterns = signal<Pattern[]>(PATTERNS_DATA);

  /** Criterio de búsqueda ingresado por el usuario. */
  readonly searchQuery = signal<string>('');

  /** Categoría seleccionada para filtrar ('Todas' por defecto). */
  readonly selectedCategory = signal<string>('Todas');

  /** Indica si solo deben mostrarse los patrones marcados como favoritos. */
  readonly onlyFavorites = signal<boolean>(false);

  /** Identificadores de los patrones marcados como favoritos. */
  readonly favorites = signal<string[]>(this.loadFavorites());

  /** Estado del modo oscuro. */
  readonly darkMode = signal<boolean>(this.loadDarkMode());

  /** Lista de categorías disponibles más la opción 'Todas'. */
  readonly categories = computed<string[]>(() => {
    const set = new Set(this.patterns().map((p) => p.categoria));
    return ['Todas', ...Array.from(set)];
  });

  /** Conteo reactivo de favoritos. */
  readonly favoritesCount = computed<number>(() => this.favorites().length);

  /** Lista filtrada según búsqueda, categoría y filtro de favoritos. */
  readonly filteredPatterns = computed<Pattern[]>(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const cat = this.selectedCategory();
    const favsOnly = this.onlyFavorites();
    const favs = new Set(this.favorites());

    return this.patterns().filter((p) => {
      const matchesCategory = cat === 'Todas' || p.categoria === cat;
      const matchesFav = !favsOnly || favs.has(p.id);
      const matchesSearch =
        !q ||
        p.nombre.toLowerCase().includes(q) ||
        p.resumen.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q) ||
        p.descripcion.toLowerCase().includes(q);

      return matchesCategory && matchesFav && matchesSearch;
    });
  });

  constructor() {
    this.applyTheme(this.darkMode());
  }

  /**
   * Actualiza el término de búsqueda.
   */
  setSearchQuery(query: string): void {
    this.searchQuery.set(query);
  }

  /**
   * Actualiza la categoría activa.
   */
  setCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  /**
   * Alterna el filtro para visualizar únicamente favoritos.
   */
  toggleOnlyFavorites(): void {
    this.onlyFavorites.update((prev) => !prev);
  }

  /**
   * Determina si un patrón está marcado como favorito.
   */
  isFavorite(id: string): boolean {
    return this.favorites().includes(id);
  }

  /**
   * Agrega o remueve un patrón de la lista de favoritos de forma segura.
   */
  toggleFavorite(id: string): void {
    const current = this.favorites();
    const updated = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];

    this.favorites.set(updated);
    this.saveFavorites(updated);
  }

  /**
   * Obtiene un patrón por su identificador único.
   */
  getPatternById(id: string): Pattern | undefined {
    return this.patterns().find((p) => p.id === id);
  }

  /**
   * Alterna entre modo claro y modo oscuro.
   */
  toggleDarkMode(): void {
    const next = !this.darkMode();
    this.darkMode.set(next);
    this.saveDarkMode(next);
    this.applyTheme(next);
  }

  // --- Manejo seguro de localStorage con try/catch ---

  private loadFavorites(): string[] {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(FAVORITES_KEY);
        if (item) {
          const parsed = JSON.parse(item);
          if (Array.isArray(parsed)) return parsed;
        }
      }
    } catch (e) {
      console.warn('No se pudieron leer los favoritos desde localStorage', e);
    }
    return [];
  }

  private saveFavorites(favs: string[]): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
      }
    } catch (e) {
      console.warn('No se pudieron guardar los favoritos en localStorage', e);
    }
  }

  private loadDarkMode(): boolean {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(THEME_KEY);
        if (item !== null) return item === 'true';
      }
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch (e) {
      console.warn('No se pudo leer la preferencia de tema', e);
    }
    return false;
  }

  private saveDarkMode(value: boolean): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(THEME_KEY, String(value));
      }
    } catch (e) {
      console.warn('No se pudo guardar la preferencia de tema', e);
    }
  }

  private applyTheme(dark: boolean): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (dark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }
}
