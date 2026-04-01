import { NgModule } from '@angular/core';
import { containers } from '@auth/auth-core/containers';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { MatButton } from '@angular/material/button';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [...containers],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AuthRoutingModule, MaterialModule],
  providers: [],
  exports: [],
})
export class AuthModule {}
