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
