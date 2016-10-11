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
 * 链接点击元素
 */
var LabelForDirective = (function () {
    function LabelForDirective(el) {
        this.el = el;
    }
    LabelForDirective.prototype.labelFor = function () {
        this.element.click();
    };
    __decorate([
        core_1.Input('label-for'), 
        __metadata('design:type', Object)
    ], LabelForDirective.prototype, "element", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], LabelForDirective.prototype, "labelFor", null);
    LabelForDirective = __decorate([
        core_1.Directive({
            selector: '[label-for]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LabelForDirective);
    return LabelForDirective;
}());
exports.LabelForDirective = LabelForDirective;

//# sourceMappingURL=label-for.js.map
