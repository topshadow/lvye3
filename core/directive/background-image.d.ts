import { ElementRef, AfterViewInit } from '@angular/core';
export declare class BackgroundImageDirective implements AfterViewInit {
    el: ElementRef;
    constructor(el: ElementRef);
    backgroundImage: string;
    ngAfterViewInit(): void;
}
