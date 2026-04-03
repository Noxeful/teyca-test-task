import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBlockItemComponent } from './promotion-block-item.component';

describe('PromotionBlockItem', () => {
  let component: PromotionBlockItemComponent;
  let fixture: ComponentFixture<PromotionBlockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromotionBlockItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionBlockItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
