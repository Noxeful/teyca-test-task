import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'login-container',
  templateUrl: './login-container.html',
  styleUrl: './login-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LoginContainer {}
