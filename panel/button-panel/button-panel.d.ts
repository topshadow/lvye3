import { EventEmitter, OnInit } from '@angular/core';
export declare class ButtonPanel implements OnInit {
    button: Button;
    closeButtonPanel: EventEmitter<{}>;
    defaultButton: Button;
    constructor();
    ngOnInit(): void;
    closePanel(): void;
    changeButtonType(type: any): void;
}
