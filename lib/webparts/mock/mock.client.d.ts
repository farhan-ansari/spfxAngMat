import { ISPList } from '../helloAngular/app/models/demo.model';
export default class MockHttpClient {
    private static _items;
    static get(restUrl: string, options?: any): Promise<ISPList[]>;
}
