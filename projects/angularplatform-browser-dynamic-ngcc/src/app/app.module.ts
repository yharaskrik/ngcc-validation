import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
