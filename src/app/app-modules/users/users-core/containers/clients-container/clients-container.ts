import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'clients-container',
  standalone: false,
  templateUrl: './clients-container.html',
  styleUrl: './clients-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsContainer {}
