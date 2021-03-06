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
var OurService = (function () {
    function OurService(el) {
        this.el = el;
    }
    OurService.prototype.openPanelOnDesktop = function (event) {
        this.openPanel();
    };
    OurService.prototype.openPanelOnMobile = function (event) {
        this.openPanel();
    };
    OurService.prototype.openPanel = function () {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OurService.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('dblclick', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], OurService.prototype, "openPanelOnDesktop", null);
    __decorate([
        core_1.HostListener('touchstart', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], OurService.prototype, "openPanelOnMobile", null);
    OurService = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'our-service',
            templateUrl: './our-service.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OurService);
    return OurService;
}());
exports.OurService = OurService;

//# sourceMappingURL=our-service.js.map
