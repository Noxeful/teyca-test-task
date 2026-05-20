import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TeycaSearchComponent } from '@shared/components';
import { ChangeDetectorRef } from '@angular/core';

describe('TeycaSearchComponent', () => {
  let component: TeycaSearchComponent;
  let fixture: ComponentFixture<TeycaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeycaSearchComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: TeycaSearchComponent,
          multi: true,
        },
        ChangeDetectorRef, // инжектится в компоненте
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TeycaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // запуск обнаружения изменений
  });

  it('должен создаться', () => {
    expect(component).toBeTruthy();
  });
});
