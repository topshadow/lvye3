import { EventEmitter } from '@angular/core';
/**
 * 自动打开操作面板
 */
export declare class AutoOpenPanel {
    panel: {
        editPanel: any;
        selectedIndex: number;
        data: any;
    };
    openPanel: EventEmitter<{}>;
    openSettingMenu(event: MouseEvent): void;
}
