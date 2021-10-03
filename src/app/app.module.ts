import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HushedItemComponent } from './hushed-item/hushed-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HushedItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
