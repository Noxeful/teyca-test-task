import { NgModule } from '@angular/core';
import { services } from '@shared/services';
import { components } from '@shared/components';
import { MaterialModule } from '@material/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...components],
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  exports: [...components],
  providers: [...services],
})
export class SharedModule {}
