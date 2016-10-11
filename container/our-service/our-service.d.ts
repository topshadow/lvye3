import { ElementRef } from '@angular/core';
export declare class OurService {
    private el;
    data: any;
    constructor(el: ElementRef);
    openPanelOnDesktop(event: any): void;
    openPanelOnMobile(event: any): void;
    openPanel(): void;
}
