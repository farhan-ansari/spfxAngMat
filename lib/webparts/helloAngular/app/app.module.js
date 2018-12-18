var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from "@angular/elements";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './components/app.component';
import { ListComponent } from './components/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
//import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { GetSPListService } from './services/getsplistitem.service';
var AppModule = (function () {
    function AppModule(injector) {
        this.injector = injector;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        if (!customElements.get('spfx-app')) {
            // define a custom element to get a valid entry point before Angular is fully bootstrapped
            var appElement = createCustomElement(AppComponent, { injector: this.injector });
            customElements.define('spfx-app', appElement);
        }
    };
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatAutocompleteModule, MatInputModule],
            declarations: [AppComponent, ListComponent],
            providers: [GetSPListService],
            bootstrap: [AppComponent]
        }),
        __metadata("design:paramtypes", [Injector])
    ], AppModule);
    return AppModule;
}());
export { AppModule };

//# sourceMappingURL=app.module.js.map
