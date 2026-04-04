import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeycaSearchComponent } from './teyca-search.component';

describe('TeycaSearchComponent', () => {
  let component: TeycaSearchComponent;
  let fixture: ComponentFixture<TeycaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeycaSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeycaSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
