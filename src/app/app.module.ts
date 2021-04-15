import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleTestsComponent } from './simple-tests/simple-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
