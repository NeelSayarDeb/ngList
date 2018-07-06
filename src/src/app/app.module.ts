import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListComponent, InputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
