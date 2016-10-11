import { OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';
/**
 * 下拉选框选择页面
 */
export declare class Navbar implements OnInit {
    el: ElementRef;
    private websiteService;
    private router;
    newPage: any;
    data: any;
    pages: Page[];
    constructor(el: ElementRef, websiteService: WebsiteService, router: Router);
    showPanelOnMobile(): void;
    showPanelOnDesktop(): void;
    ngOnInit(): void;
    addPage(page: {
        parts: Part[];
        path: string;
        pageName: string;
    }): void;
    navigate(path: any): void;
    deleteMe(): void;
}
