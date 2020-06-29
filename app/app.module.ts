import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SurveyjsComponent } from './surveyjs.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SurveyjsComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
