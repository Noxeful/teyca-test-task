import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'promotion-block-item',
  templateUrl: './promotion-block-item.component.html',
  styleUrl: './promotion-block-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PromotionBlockItemComponent {
  public iconName: InputSignal<string> = input('')
  public text: InputSignal<string> = input('')

  constructor() {

  }


}
