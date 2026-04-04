import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTopBar } from './clients-top-bar';

describe('ClientsTopBar', () => {
  let component: ClientsTopBar;
  let fixture: ComponentFixture<ClientsTopBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsTopBar],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsTopBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
