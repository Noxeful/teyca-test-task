import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { App } from './app';
import { AuthInterceptor } from '@auth/auth-core/interceptors/auth/auth.interceptor';

@NgModule({
  exports: [],
  declarations: [App],
  imports: [AppRoutingModule, BrowserModule, CommonModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [App],
})
export class AppModule {}
