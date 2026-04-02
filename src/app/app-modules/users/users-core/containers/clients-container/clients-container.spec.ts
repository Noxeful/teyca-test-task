import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsContainer } from './clients-container';

describe('ClientsContainer', () => {
  let component: ClientsContainer;
  let fixture: ComponentFixture<ClientsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
