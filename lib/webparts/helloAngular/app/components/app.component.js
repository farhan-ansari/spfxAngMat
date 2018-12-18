var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
        this.name = '';
        this.title = 'Hallo Angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.context = window["webPartContext"];
        this.name = this.context.pageContext.user.displayName;
    };
    AppComponent = __decorate([
        Component({
            selector: 'spfx-app',
            template: "\n  <h1 class=\"ms-font-su\">{{ title }}</h1>\n  <div class=\"ms-fontSize-xl\">{{ name }}</div>\n  <mat-form-field class=\"example-full-width\">\n  <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n</mat-form-field>\n\n  <spfx-list listName=\"Cities\"></spfx-list>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };

//# sourceMappingURL=app.component.js.map
