import { ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';
export declare class BsFeatures implements OnInit {
    private el;
    private webService;
    private router;
    optionFeatureItems: string[];
    intervalId: number;
    data: any;
    constructor(el: ElementRef, webService: WebsiteService, router: Router);
    openPanelOnDesktop(): void;
    openPanelOnMobile(): void;
    ngOnInit(): void;
    openPanel(): void;
    showModal(event: any): void;
    deleteMe(): void;
}
