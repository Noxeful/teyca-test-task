import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconConfig } from '@shared/models/icon-models';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  private readonly icons: IconConfig[] = [
    { name: 'teycaLogo', path: 'assets/icons/teyca-logo.svg' },
    { name: 'beenHere', path: 'assets/icons/promotion-logos/beenhere.svg' },
    { name: 'discount', path: 'assets/icons/promotion-logos/discount.svg' },
    { name: 'fire', path: 'assets/icons/promotion-logos/fire.svg' },
    { name: 'ping', path: 'assets/icons/promotion-logos/ping.svg' },
    { name: 'chevronLeft', path: 'assets/icons/chevrons/chevron-left.svg' },
    { name: 'chevronRight', path: 'assets/icons/chevrons/chevron-right.svg' },
    { name: 'knowledge', path: 'assets/icons/clients/knowledge.svg' },
    { name: 'apple', path: 'assets/icons/clients/apple.svg' },
    { name: 'download', path: 'assets/icons/clients/download.svg' },
    { name: 'push', path: 'assets/icons/clients/push.svg' },
    { name: 'telegram', path: 'assets/icons/clients/telegram.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  public registerIcons(): void {
    this.icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path),
      );
    });
  }
}
