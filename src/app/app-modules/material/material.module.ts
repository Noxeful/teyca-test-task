import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule {}
