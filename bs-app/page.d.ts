import { OnInit, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdSidenav } from '@angular2-material/sidenav';
import { Panels, WebsiteService } from 'core';
/**
 * 将json解析成对应的页面组件,并挂载到当前页面,当从编辑模式进入该页面的时候,则可以按Ctrl键呼出左侧的菜单面板
 */
export declare class EveryPage implements OnInit, AfterViewInit {
    el: ElementRef;
    websiteService: WebsiteService;
    route: ActivatedRoute;
    panels: typeof Panels;
    page: Page;
    path: string;
    themes: ({
        name: string;
        templates: ({
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    logo: string;
                    pages: {
                        pageName: string;
                        path: string;
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    sliders: {
                        title1: string;
                        title2: string;
                        lgImage: string;
                        smImage: string;
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    title1: string;
                    title2: string;
                    featureItems: {
                        icon: string;
                        summary: string;
                        detail: string;
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    title: string;
                    subTitle: string;
                    products: {
                        title: string;
                        subTitle: string;
                        link: string;
                        picture: string;
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    title: string;
                    subTitle: string;
                    backgroundImage: string;
                    services: {
                        picture: string;
                        title: string;
                        subTitle: string;
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    title: string;
                    subTitle: string;
                    rightTitle: string;
                    skills: {
                        title: string;
                        percent: string;
                    }[];
                    advantages: {
                        title: string;
                        subTitle: string;
                        detail: string;
                        picture: string;
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    linkSets: {
                        title: string;
                        links: ({
                            title: string;
                            href: string;
                        } | {
                            title: string;
                        })[];
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    companyName: string;
                    links: {
                        title: string;
                        href: string;
                    }[];
                };
            };
        })[];
    } | {
        name: string;
        templates: ({
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    title: string;
                    subTitle: string;
                    sliders: {
                        picture: string;
                    }[];
                };
            };
        } | {
            name: string;
            picture: string;
            data: {
                selector: string;
                content: {
                    title: string;
                    subTitle: string;
                    persons: {
                        name: string;
                        picture: string;
                        goodats: string[];
                        contactLinks: any[];
                        info: string;
                    }[];
                };
            };
        })[];
    })[];
    user: any;
    sidenavs: QueryList<MdSidenav>;
    leftSidenav: MdSidenav;
    rightSidenav: MdSidenav;
    ngAfterViewInit(): void;
    addNavbar(): void;
    savePage(): void;
    constructor(el: ElementRef, websiteService: WebsiteService, route: ActivatedRoute);
    fullScreen(): void;
    ngOnInit(): void;
    addPart(part: any): void;
    clearWebsite(): void;
}
