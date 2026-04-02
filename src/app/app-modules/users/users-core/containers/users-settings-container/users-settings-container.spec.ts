import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSettingsContainer } from './users-settings-container';

describe('UsersSettingsContainer', () => {
  let component: UsersSettingsContainer;
  let fixture: ComponentFixture<UsersSettingsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersSettingsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersSettingsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
