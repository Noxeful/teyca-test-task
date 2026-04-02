import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsTable } from './clients-table.component';

describe('UsersTable', () => {
  let component: ClientsTable;
  let fixture: ComponentFixture<ClientsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
