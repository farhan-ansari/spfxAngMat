import { NgModule, Injector }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from "@angular/elements";
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule} from "@angular/forms";

import { AppComponent }  from './components/app.component';
import { ListComponent }  from './components/list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatInputModule} from '@angular/material';
//import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

import { GetSPListService } from './services/getsplistitem.service';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatAutocompleteModule, MatInputModule ],
  declarations: [ AppComponent, ListComponent ],
  providers: [ GetSPListService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

  constructor(private injector: Injector) {}

  public ngDoBootstrap() {
      if(!customElements.get('spfx-app'))
      {
         // define a custom element to get a valid entry point before Angular is fully bootstrapped
         const appElement = createCustomElement(AppComponent, {injector : this.injector});
         customElements.define('spfx-app', appElement);
      }
  }

}
