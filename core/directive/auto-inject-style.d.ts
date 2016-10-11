import { OnInit, ElementRef, Renderer } from '@angular/core';
export declare class AutoInjectStyle implements OnInit {
    private el;
    private render;
    styles: Styles;
    constructor(el: ElementRef, render: Renderer);
    /**
     * 如果不是以url(开头,则补全
     */
    ngOnInit(): void;
}
