import { TestBed } from '@angular/core/testing';
import { PatternsService } from './patterns.service';

describe('PatternsService', () => {
  let service: PatternsService;

  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    try {
      localStorage.clear();
    } catch {
      // Ignorar si no está disponible
    }

    TestBed.configureTestingModule({});
    service = TestBed.inject(PatternsService);
  });

  afterEach(() => {
    try {
      localStorage.clear();
      document.documentElement.classList.remove('dark');
    } catch {
      // Ignorar
    }
  });

  it('debería inicializarse con al menos 10 patrones de arquitectura', () => {
    expect(service.patterns().length).toBeGreaterThanOrEqual(10);
    expect(service.filteredPatterns().length).toBe(service.patterns().length);
  });

  it('debería filtrar por término de búsqueda insensible a mayúsculas/minúsculas', () => {
    service.setSearchQuery('clean');
    expect(service.filteredPatterns().length).toBeGreaterThanOrEqual(1);
    expect(service.filteredPatterns().some((p) => p.id === 'clean-architecture')).toBe(true);

    service.setSearchQuery('inexistente-xyz-999');
    expect(service.filteredPatterns().length).toBe(0);

    service.setSearchQuery('');
    expect(service.filteredPatterns().length).toBe(service.patterns().length);
  });

  it('debería filtrar patrones por categoría taxonómica', () => {
    service.setCategory('Arquitectura Web');
    const filtered = service.filteredPatterns();
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((p) => p.categoria === 'Arquitectura Web')).toBe(true);

    service.setCategory('Todas');
    expect(service.filteredPatterns().length).toBe(service.patterns().length);
  });

  it('debería combinar búsqueda y categoría simultáneamente', () => {
    service.setCategory('Arquitectura Web');
    service.setSearchQuery('microfrontends');
    expect(service.filteredPatterns().length).toBe(1);
    expect(service.filteredPatterns()[0].id).toBe('microfrontends');
  });

  it('debería alternar favoritos y persistirlos en localStorage', () => {
    expect(service.isFavorite('ssg')).toBe(false);

    service.toggleFavorite('ssg');
    expect(service.isFavorite('ssg')).toBe(true);
    expect(service.favoritesCount()).toBe(1);

    // Comprobar persistencia
    const stored = localStorage.getItem('arch_patterns_favorites');
    expect(stored).toContain('ssg');

    // Remover favorito
    service.toggleFavorite('ssg');
    expect(service.isFavorite('ssg')).toBe(false);
    expect(service.favoritesCount()).toBe(0);
  });

  it('debería filtrar únicamente patrones favoritos cuando onlyFavorites está activo', () => {
    service.toggleFavorite('ssg');
    service.toggleFavorite('clean-architecture');

    service.toggleOnlyFavorites();
    expect(service.onlyFavorites()).toBe(true);
    expect(service.filteredPatterns().length).toBe(2);

    service.toggleOnlyFavorites();
    expect(service.onlyFavorites()).toBe(false);
    expect(service.filteredPatterns().length).toBe(service.patterns().length);
  });

  it('debería manejar excepciones de localStorage sin fallar (try/catch)', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError simulado');
    });

    expect(() => service.toggleFavorite('mvc')).not.toThrow();
    expect(service.isFavorite('mvc')).toBe(true);

    setItemSpy.mockRestore();
  });

  it('debería alternar el modo oscuro y aplicar la clase dark al elemento html', () => {
    const initial = service.darkMode();
    service.toggleDarkMode();
    expect(service.darkMode()).toBe(!initial);

    if (!initial) {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    } else {
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    }
  });

  it('debería obtener un patrón por su id', () => {
    const pattern = service.getPatternById('clean-architecture');
    expect(pattern).toBeDefined();
    expect(pattern?.nombre).toBe('Clean Architecture');

    const notFound = service.getPatternById('id-no-existente');
    expect(notFound).toBeUndefined();
  });
});
