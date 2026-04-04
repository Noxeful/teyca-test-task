import { NgModule } from '@angular/core';
import { containers } from '@users/users-core/containers';
import { components } from '@users/users-core/components';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { services } from '@users/users-core/services';
import { UsersRoutingModule } from '@users/users-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...containers, ...components],
  imports: [CommonModule, MaterialModule, UsersRoutingModule, SharedModule],
  providers:[...services],
  exports: [],
})

export class UsersModule {}
