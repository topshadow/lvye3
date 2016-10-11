/**
* 右侧面板内容
*/
export declare enum Panels {
    BsGridLayoutPanel = 0,
    BsListLayoutPanel = 1,
    BsNavbar = 2,
    BsProductList = 3,
}
declare var firebase: any;
export { firebase };
export declare class Firebase {
    private firebase;
    database(): any;
    construtor(): void;
}
export declare class User {
    password: string;
    username: string;
    constructor();
    website: Website;
}
export declare class Data {
    user: User;
}
export declare var user: User;
export declare var defaultWebsite: Website;
/**
 * 对象转数组,可以放入core库中
 */
export declare function objectToArray(obj: Object): any[];
