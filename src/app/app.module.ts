import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { App } from './app';

@NgModule({
  exports: [],
  declarations: [App],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})

export class AppModule {}
