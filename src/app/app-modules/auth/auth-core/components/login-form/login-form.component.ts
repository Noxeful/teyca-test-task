import { ChangeDetectionStrategy, Component, OnInit, output, OutputEmitterRef } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthDTO } from '@auth/auth-core/models/auth-state-models';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LoginFormComponent implements OnInit {
  public submitFormEvent: OutputEmitterRef<AuthDTO> = output<{
    login: string;
    password: string;
  }>();

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public ngOnInit(): void {}

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.submitFormEvent.emit(this.loginForm.value);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  public get loginControl() {
    return this.loginForm.get('login');
  }

  public get passwordControl() {
    return this.loginForm.get('password');
  }
}
