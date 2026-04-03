import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthDTO } from '@auth/auth-core/models/auth-state-models';
import { AuthStore } from '@auth/auth-store/auth-store';
import { PromotionBlockModel } from '@auth/auth-core/models/promotion-block.models';

@Component({
  selector: 'login-container',
  templateUrl: './login-container.html',
  styleUrl: './login-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LoginContainer {
  readonly authStore = inject(AuthStore);

  public promotionItems: PromotionBlockModel[];

  constructor() {
    this.promotionItems = [
      {
        iconName: 'discount',
        text: 'Бонусные и скидочные программы',
      },
      {
        iconName: 'ping',
        text: 'Приветственные бонусы и уровни',
      },
      {
        iconName: 'fire',
        text: 'Правила сгорания и подтверждения списаний',
      },
      {
        iconName: 'beenHere',
        text: 'Механизмы защиты от злоупотреблений',
      },
    ];
  }

  public onSubmit(formValue: AuthDTO): void {
    this.authStore.login(formValue);
  }
}
