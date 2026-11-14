import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PatternDetail } from './pattern-detail';

describe('PatternDetail', () => {
  let fixture: ComponentFixture<PatternDetail>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternDetail],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería renderizar los detalles completos de un patrón existente', () => {
    fixture = TestBed.createComponent(PatternDetail);
    fixture.componentRef.setInput('id', 'clean-architecture');
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('.detail__title')?.textContent).toContain('Clean Architecture');
    expect(el.querySelector('.category-chip')?.textContent).toContain('Patrones de Dominio');
    expect(el.querySelector('.section__body')?.textContent).toContain('Robert C. Martin');
    expect(el.querySelectorAll('.pros-box__list li').length).toBeGreaterThan(0);
    expect(el.querySelectorAll('.cons-box__list li').length).toBeGreaterThan(0);
  });

  it('debería mostrar el enlace al proyecto práctico relacionado si existe', () => {
    fixture = TestBed.createComponent(PatternDetail);
    fixture.componentRef.setInput('id', 'clean-architecture');
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;

    const projectLink = el.querySelector<HTMLAnchorElement>('.project-box__link');
    expect(projectLink).toBeTruthy();
    expect(projectLink?.textContent).toContain('Taller Clean Architecture');
    expect(projectLink?.href).toContain('Angular-Clean-Architecture');
  });

  it('debería mostrar mensaje de no encontrado cuando el id es inválido', () => {
    fixture = TestBed.createComponent(PatternDetail);
    fixture.componentRef.setInput('id', 'id-inexistente');
    fixture.detectChanges();
    el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('.not-found')).toBeTruthy();
    expect(el.textContent).toContain('Patrón no encontrado');
  });
});
