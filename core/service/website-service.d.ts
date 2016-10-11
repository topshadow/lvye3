import { UserService } from 'core';
export declare var defaultNavbar: Navbar;
export declare class WebsiteService {
    firebase: any;
    storageRef: any;
    userService: UserService;
    constructor();
    addPart(path: string, part: Part): void;
    /**
    *根据页面path来查找数据
    *service
    */
    findPage(path: string): Page;
    /**
     * 上传图片接口
     * 使用方法
     * var file = document.getElementById('selectFileInput').files[0];
     * WebsiteService.upload(file);
     */
    upload(file: File): Promise<string>;
    clearWebsite(): void;
    readonly pages: Page[];
}
