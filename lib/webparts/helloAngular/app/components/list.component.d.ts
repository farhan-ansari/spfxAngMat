import { OnInit } from '@angular/core';
import { GetSPListService } from './../services/getsplistitem.service';
import { ISPLists } from '../models/demo.model';
export declare class ListComponent implements OnInit {
    private listService;
    items: ISPLists;
    listName: string;
    constructor(listService: GetSPListService);
    ngOnInit(): void;
}
