var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import MockHttpClient from '../../../mock/mock.client';
import { SPHttpClient } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { Injectable } from '../../../../../node_modules/@angular/core';
var GetSPListService = (function () {
    function GetSPListService() {
        this.context = window["webPartContext"];
    }
    GetSPListService.prototype._getMockListData = function () {
        return MockHttpClient.get(this.context.pageContext.web.absoluteUrl).then(function () {
            var listData = {
                value: [
                    { title: 'T1', name: 'N1' }
                ]
            };
            return listData;
        });
    };
    GetSPListService.prototype._getListData = function (listName) {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + ("/_api/web/lists/GetByTitle('" + listName + "')/Items"), SPHttpClient.configurations.v1)
            .then(function (response) {
            //debugger;
            return response.json();
        });
    };
    GetSPListService.prototype.GetDataAsync = function (listName) {
        if (Environment.type === EnvironmentType.Local) {
            return this._getMockListData();
        }
        else {
            return this._getListData(listName);
        }
    };
    GetSPListService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], GetSPListService);
    return GetSPListService;
}());
export { GetSPListService };

//# sourceMappingURL=getsplistitem.service.js.map
