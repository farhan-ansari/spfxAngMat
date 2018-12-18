var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import 'zone.js';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
//Include Polyfills for unsupported browsers (if using Angular Elements)
import "@webcomponents/custom-elements/src/native-shim";
import "core-js/es7/reflect";
//import 'reflect-metadata';
require('zone.js');
require('../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css');
import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import * as strings from 'HelloAngularWebPartStrings';
var HelloAngularWebPart = (function (_super) {
    __extends(HelloAngularWebPart, _super);
    function HelloAngularWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloAngularWebPart.prototype.render = function () {
        // forward the context globally
        window['webPartContext'] = this.context;
        // default UI
        this.domElement.innerHTML = '<div class="container"><spfx-app></spfx-app></div>';
        // init angular
        platformBrowserDynamic().bootstrapModule(AppModule);
    };
    Object.defineProperty(HelloAngularWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloAngularWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloAngularWebPart;
}(BaseClientSideWebPart));
export default HelloAngularWebPart;

//# sourceMappingURL=HelloAngularWebPart.js.map
