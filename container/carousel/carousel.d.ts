import { OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WebsiteService } from 'core';
export declare class BsCarousel implements OnInit {
    el: ElementRef;
    private security;
    private websiteService;
    private router;
    newSlider: Slider;
    data: any;
    openPanelOnDesktop(event: any): void;
    openPanelOnMobile(event: any): void;
    constructor(el: ElementRef, security: DomSanitizer, websiteService: WebsiteService, router: Router);
    ngOnInit(): void;
    showModal(event: any): void;
    uploadImage(data: {
        file: File;
        previewImage: HTMLImageElement;
    }): void;
    addNewSlider(slider: Slider): void;
    upSlider(slider: Slider): void;
    downSlider(slider: Slider): void;
    deleteSlider(slider: Slider): void;
    deleteMe(): void;
}
