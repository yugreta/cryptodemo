import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChineseComponent } from './chinese/chinese.component';
import { DiffieHellmanComponent } from './diffie-hellman/diffie-hellman.component';

@NgModule({
  declarations: [
    AppComponent,
    ChineseComponent,
    DiffieHellmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
