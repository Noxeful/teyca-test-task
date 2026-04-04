import { ChangeDetectionStrategy, Component, effect, input, InputSignal } from '@angular/core';

@Component({
  selector: 'clients-top-bar',
  templateUrl: './clients-top-bar.html',
  styleUrl: './clients-top-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ClientsTopBar {
  public userName: InputSignal<string | null> = input<string | null>('');
  public role: InputSignal<string | null> = input<string | null>('');
  public logoSymbol: string = '';

  constructor() {
    effect(() => {
      const name: string | null = this.userName();
      if (name && name.trim() !== '') {
        this.logoSymbol = name[0];
      } else {
        this.logoSymbol = '';
      }
    });
  }
}
