/**
 * 模块发布服务
 */
export declare class PublishService {
    private publishRef;
    private userService;
    /**
     * publish navbar
     *
     */
    publishNavbar(navbar: Navbar, commet: string): void;
    /**
     * 获取发布的导航列表,传入回调函数
     *
     */
    getNavbarList(callback: (navbarList: Navbar[]) => void): void;
}
