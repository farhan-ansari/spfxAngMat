import { Component, OnInit } from '@angular/core';
import { IWebPartContext } from '@microsoft/sp-webpart-base';

@Component({
  selector: 'spfx-app',
  template: `
  <h1 class="ms-font-su">{{ title }}</h1>
  <div class="ms-fontSize-xl">{{ name }}</div>
  <mat-form-field class="example-full-width">
  <input matInput placeholder="Favorite food" value="Sushi">
</mat-form-field>

  <spfx-list listName="Cities"></spfx-list>
  `
})
export class AppComponent implements OnInit {

  public name: string = '';
  public title : string = 'Hallo Angular';
  public context: IWebPartContext;

  constructor() {
  }

  public ngOnInit() {
    this.context = window["webPartContext"];
    this.name = this.context.pageContext.user.displayName;
  }

}
