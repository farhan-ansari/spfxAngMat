import 'zone.js';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import "@webcomponents/custom-elements/src/native-shim";
import "core-js/es7/reflect";
import 'hammerjs';
export interface IHelloAngularWebPartProps {
    description: string;
}
export default class HelloAngularWebPart extends BaseClientSideWebPart<IHelloAngularWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
