import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthDTO } from '@auth/auth-core/models/auth-state-models';
import { AuthStore } from '@auth/auth-store/auth-store';

@Component({
  selector: 'login-container',
  templateUrl: './login-container.html',
  styleUrl: './login-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LoginContainer {
  readonly authStore = inject(AuthStore);

  constructor() {

  }

  public onSubmit(formValue: AuthDTO): void {
    this.authStore.login(formValue);
  }
}
