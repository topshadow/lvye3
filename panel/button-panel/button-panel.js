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
var ButtonPanel = (function () {
    function ButtonPanel() {
        this.closeButtonPanel = new core_1.EventEmitter();
        this.defaultButton = {
            type: 'md-raised-button',
            color: 'primary'
        };
        this.button = this.button ? this.button : this.defaultButton;
    }
    ButtonPanel.prototype.ngOnInit = function () {
    };
    ButtonPanel.prototype.closePanel = function () {
        this.closeButtonPanel.emit();
    };
    ButtonPanel.prototype.changeButtonType = function (type) {
        this.button.type = type;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ButtonPanel.prototype, "button", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ButtonPanel.prototype, "closeButtonPanel", void 0);
    ButtonPanel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'button-panel',
            templateUrl: './button-panel.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonPanel);
    return ButtonPanel;
}());
exports.ButtonPanel = ButtonPanel;

//# sourceMappingURL=button-panel.js.map
