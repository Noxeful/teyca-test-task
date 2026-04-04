import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginator } from '@angular/material/paginator';
import { MatCheckbox } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginator,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckbox,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginator,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCheckbox,
  ],
})
export class MaterialModule {}
