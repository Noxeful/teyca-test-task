import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'users-settings-container',
  standalone: false,
  templateUrl: './users-settings-container.html',
  styleUrl: './users-settings-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersSettingsContainer {}
