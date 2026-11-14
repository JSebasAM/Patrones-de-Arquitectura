import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PatternsList } from './patterns-list';

describe('PatternsList', () => {
  let fixture: ComponentFixture<PatternsList>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternsList],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PatternsList);
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;
  });

  it('debería renderizar el título del catálogo y el campo de búsqueda', () => {
    expect(el.querySelector('.catalog__title')?.textContent).toContain(
      'Explorador de Patrones de Arquitectura',
    );
    expect(el.querySelector('.search-box__input')).toBeTruthy();
  });

  it('debería renderizar los chips de categorías', () => {
    const chips = el.querySelectorAll('.chip');
    expect(chips.length).toBeGreaterThanOrEqual(4);
    expect(chips[0].textContent?.trim()).toBe('Todas');
  });

  it('debería renderizar las tarjetas de patrones', () => {
    const cards = el.querySelectorAll('app-pattern-card');
    expect(cards.length).toBeGreaterThanOrEqual(10);
  });

  it('debería actualizar el filtrado al escribir en la caja de búsqueda', () => {
    const input = el.querySelector<HTMLInputElement>('.search-box__input');
    expect(input).toBeTruthy();

    if (input) {
      input.value = 'clean';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      const cards = el.querySelectorAll('app-pattern-card');
      expect(cards.length).toBeGreaterThanOrEqual(1);
      expect(el.textContent).toContain('Clean Architecture');
    }
  });

  it('debería mostrar mensaje de estado vacío cuando no hay coincidencias', () => {
    const input = el.querySelector<HTMLInputElement>('.search-box__input');
    if (input) {
      input.value = 'termino-absolutamente-inexistente';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(el.querySelector('.empty-state')).toBeTruthy();
      expect(el.textContent).toContain('No se encontraron patrones');
    }
  });
});
