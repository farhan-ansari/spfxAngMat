import { OnInit } from '@angular/core';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
export declare class AppComponent implements OnInit {
    name: string;
    title: string;
    context: IWebPartContext;
    constructor();
    ngOnInit(): void;
}
