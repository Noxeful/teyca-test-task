import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPushModalComponent } from './client-push-modal.component';

describe('ClientPushModalComponent', () => {
  let component: ClientPushModalComponent;
  let fixture: ComponentFixture<ClientPushModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientPushModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientPushModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
