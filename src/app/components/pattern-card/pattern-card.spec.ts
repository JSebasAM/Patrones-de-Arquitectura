import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Pattern } from '../../models/pattern.model';
import { PatternCard } from './pattern-card';

const PATTERN_MOCK: Pattern = {
  id: 'test-pattern',
  nombre: 'Patrón de Prueba',
  categoria: 'Estructural',
  resumen: 'Resumen conciso para testing',
  descripcion: 'Descripción completa para testing de componentes',
  ventajas: ['Ventaja uno', 'Ventaja dos'],
  desventajas: ['Desventaja uno'],
  cuandoUsarlo: 'Siempre que se ejecuten pruebas unitarias',
  proyectoRelacionado: {
    nombre: 'Proyecto Test',
    url: 'https://github.com/JSebasAM/test',
  },
};

describe('PatternCard', () => {
  let fixture: ComponentFixture<PatternCard>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PatternCard);
    fixture.componentRef.setInput('pattern', PATTERN_MOCK);
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;
  });

  it('debería renderizar el nombre, categoría y resumen del patrón', () => {
    expect(el.querySelector('.card__title')?.textContent).toContain('Patrón de Prueba');
    expect(el.querySelector('.category-chip')?.textContent).toContain('Estructural');
    expect(el.querySelector('.card__summary')?.textContent).toContain(
      'Resumen conciso para testing',
    );
  });

  it('debería mostrar la insignia del proyecto práctico relacionado', () => {
    const badge = el.querySelector('.card__project-name');
    expect(badge?.textContent).toContain('Proyecto Test');
  });

  it('debería tener enlaces al detalle del patrón', () => {
    const links = el.querySelectorAll<HTMLAnchorElement>('a[href*="test-pattern"]');
    expect(links.length).toBeGreaterThanOrEqual(1);
  });

  it('debería alternar favorito al hacer clic en el botón de estrella', () => {
    const btnFav = el.querySelector<HTMLButtonElement>('.btn-fav');
    expect(btnFav).toBeTruthy();

    btnFav?.click();
    fixture.detectChanges();
    expect(btnFav?.classList.contains('btn-fav--active')).toBe(true);

    btnFav?.click();
    fixture.detectChanges();
    expect(btnFav?.classList.contains('btn-fav--active')).toBe(false);
  });
});
