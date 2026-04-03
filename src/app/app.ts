import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { IconRegistryService } from '@shared/services/icon-registry-service/icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class App implements OnInit {
  protected readonly title = signal('teyca-test-task');

  constructor(private iconRegistry: IconRegistryService) {}

  public ngOnInit(): void {
    this.iconRegistry.registerIcons();
  }
}
