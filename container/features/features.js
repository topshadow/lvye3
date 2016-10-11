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
var router_1 = require('@angular/router');
var core_2 = require('core');
var BsFeatures = (function () {
    function BsFeatures(el, webService, router) {
        this.el = el;
        this.webService = webService;
        this.router = router;
        this.optionFeatureItems = ['fa fa-bullhorn', 'fa fa-comments',
            'fa fa-cloud-download', 'fa fa-leaf',
            'fa fa-cogs', 'fa fa-heart'];
        this.intervalId = 0;
    }
    BsFeatures.prototype.openPanelOnDesktop = function () {
        this.openPanel();
    };
    BsFeatures.prototype.openPanelOnMobile = function () {
        this.openPanel();
    };
    BsFeatures.prototype.ngOnInit = function () {
        var _this = this;
        var elHammer = new window['Hammer'](this.el.nativeElement);
        elHammer.on('pan', function (ev) {
            clearTimeout(_this.intervalId);
            _this.intervalId = window.setTimeout(function () {
                var page = _this.webService.findPage(_this.router.url);
                switch (ev.additionalEvent) {
                    case 'panup':
                        // var index = page.parts.indexOf(this.data);
                        // page.parts.splice(index - 1, 2, page.parts[index], page.parts[index - 1]);
                        break;
                }
            }, 300);
        });
    };
    BsFeatures.prototype.openPanel = function () {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    };
    BsFeatures.prototype.showModal = function (event) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    };
    BsFeatures.prototype.deleteMe = function () {
        var page = this.webService.findPage(this.router.url);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BsFeatures.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('dblclick', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BsFeatures.prototype, "openPanelOnDesktop", null);
    __decorate([
        core_1.HostListener('touchstart', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BsFeatures.prototype, "openPanelOnMobile", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], BsFeatures.prototype, "showModal", null);
    BsFeatures = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-features',
            templateUrl: './features.html',
            styleUrls: ['./features.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_2.WebsiteService, router_1.Router])
    ], BsFeatures);
    return BsFeatures;
}());
exports.BsFeatures = BsFeatures;

//# sourceMappingURL=features.js.map
