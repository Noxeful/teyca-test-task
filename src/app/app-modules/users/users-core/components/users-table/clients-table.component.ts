import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'clients-table',
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ClientsTable {}
