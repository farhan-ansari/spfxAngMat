import { ISPLists } from './../models/demo.model';
export declare class GetSPListService {
    private context;
    constructor();
    private _getMockListData();
    private _getListData(listName);
    GetDataAsync(listName: string): Promise<ISPLists>;
}
