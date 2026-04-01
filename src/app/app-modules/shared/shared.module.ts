import { NgModule } from '@angular/core';
import { services } from '@shared/services';

@NgModule({
  imports: [],
  exports: [],
  providers: [...services],
})
export class SharedModule {}
