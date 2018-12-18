var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { GetSPListService } from './../services/getsplistitem.service';
var ListComponent = (function () {
    function ListComponent(listService) {
        this.listService = listService;
    }
    ListComponent.prototype.ngOnInit = function () {
        //this.listService.GetDataAsync(this.listName).then(data => this.items = data);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ListComponent.prototype, "listName", void 0);
    ListComponent = __decorate([
        Component({
            selector: 'spfx-list',
            template: "\n    <div class=\"\" *ngIf=\"!items\">No items found or list '{{ listName }}' does not exists</div>\n    <table class=\"TFtable\" border=1 width=100% style=\"border-collapse: collapse;\" *ngIf=\"items\">\n      <th>Title</th><th>Name</th>\n      <tr *ngFor=\"let item of items\">\n        <td>{{ item.Title }}</td>\n        <td>{{ item.Title }}</td>\n      </tr>\n    </table>\n  "
        }),
        __metadata("design:paramtypes", [GetSPListService])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };

//# sourceMappingURL=list.component.js.map
