"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
 * 自动打开操作面板
 */
var AutoOpenPanel = (function () {
    function AutoOpenPanel() {
        this.openPanel = new core_1.EventEmitter();
    }
    AutoOpenPanel.prototype.openSettingMenu = function (event) {
        if (event.button == 2) {
            this.openPanel.emit(this.panel);
        }
        event.preventDefault();
    };
    __decorate([
        core_1.Input('auto-open-panel'), 
        __metadata('design:type', Object)
    ], AutoOpenPanel.prototype, "panel", void 0);
    __decorate([
        core_1.Output('openPanel'), 
        __metadata('design:type', Object)
    ], AutoOpenPanel.prototype, "openPanel", void 0);
    __decorate([
        core_1.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], AutoOpenPanel.prototype, "openSettingMenu", null);
    AutoOpenPanel = __decorate([
        core_1.Directive({
            selector: '[auto-open-panel]'
        }), 
        __metadata('design:paramtypes', [])
    ], AutoOpenPanel);
    return AutoOpenPanel;
}());
exports.AutoOpenPanel = AutoOpenPanel;

//# sourceMappingURL=auto-open-panel.js.map
