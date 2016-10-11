import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';
export declare class RecentWorks {
    private el;
    private router;
    private websiteService;
    data: any;
    showPanelOnDesktop(): void;
    showPanelOnMobile(): void;
    showPanel(): void;
    deleteMe(): void;
    constructor(el: ElementRef, router: Router, websiteService: WebsiteService);
}
