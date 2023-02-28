import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvGrid1Component } from './tv-grid1/tv-grid1.component';
import { ApiKeyComponent } from './api-key/api-key.component';

@NgModule({
  declarations: [
    AppComponent,
    TvGrid1Component,
    ApiKeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
