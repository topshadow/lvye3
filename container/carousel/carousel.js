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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var core_2 = require('core');
// http://shapebootstrap.net/demo/html/corlate/
var BsCarousel = (function () {
    function BsCarousel(el, security, websiteService, router) {
        this.el = el;
        this.security = security;
        this.websiteService = websiteService;
        this.router = router;
        this.newSlider = {};
    }
    BsCarousel.prototype.openPanelOnDesktop = function (event) {
        window['$'](this.el.nativeElement).find('.modal').modal('show');
    };
    BsCarousel.prototype.openPanelOnMobile = function (event) {
        window['$'](this.el.nativeElement).find('.modal').modal('show');
    };
    BsCarousel.prototype.ngOnInit = function () {
        window['$'](this.el.nativeElement).find('#carouselModal').carousel({ interval: 4000 });
    };
    BsCarousel.prototype.showModal = function (event) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    };
    BsCarousel.prototype.uploadImage = function (data) {
        var url = window.URL.createObjectURL(data.file);
        data.previewImage.src = url;
    };
    BsCarousel.prototype.addNewSlider = function (slider) {
        console.log(slider);
        this.data.content.sliders.push(slider);
    };
    BsCarousel.prototype.upSlider = function (slider) {
        var index = this.data.content.sliders.indexOf(slider);
        var before = this.data.content.sliders[index - 1];
        this.data.content.sliders.splice(index - 1, 2, slider, before);
    };
    BsCarousel.prototype.downSlider = function (slider) {
        var index = this.data.content.sliders.indexOf(slider);
        var after = this.data.content.sliders[index + 1];
        this.data.content.sliders.splice(index, 2, after, slider);
    };
    BsCarousel.prototype.deleteSlider = function (slider) {
        var index = this.data.content.sliders.indexOf(slider);
        this.data.content.sliders.splice(index, 1);
    };
    BsCarousel.prototype.deleteMe = function () {
        var page = this.websiteService.findPage(this.router.url);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BsCarousel.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('dblclick', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], BsCarousel.prototype, "openPanelOnDesktop", null);
    __decorate([
        core_1.HostListener('touchstart', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], BsCarousel.prototype, "openPanelOnMobile", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], BsCarousel.prototype, "showModal", null);
    BsCarousel = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-carousel',
            templateUrl: './carousel.html',
            styleUrls: ['./carousel.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, platform_browser_1.DomSanitizer, core_2.WebsiteService, router_1.Router])
    ], BsCarousel);
    return BsCarousel;
}());
exports.BsCarousel = BsCarousel;

//# sourceMappingURL=carousel.js.map
