import { NgModule } from '@angular/core';
import { containers } from '@auth/auth-core/containers';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '@auth/auth-routing.module';
import { MaterialModule } from '@material/material.module';
import { components } from '@auth/auth-core/components';
import { services } from '@auth/auth-core/services';
import { guards } from '@auth/auth-core/guards';

@NgModule({
  declarations: [...containers, ...components],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, MaterialModule],
  providers: [...services, ...guards],
  exports: [],
})
export class AuthModule {}
