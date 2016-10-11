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
/**
 * 下拉选框选择页面
 */
var Navbar = (function () {
    function Navbar(el, websiteService, router) {
        this.el = el;
        this.websiteService = websiteService;
        this.router = router;
        this.newPage = { pageName: '', path: '' };
    }
    // 移动端按住就会显示
    Navbar.prototype.showPanelOnMobile = function () {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    };
    // 桌面端
    Navbar.prototype.showPanelOnDesktop = function () {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    };
    Navbar.prototype.ngOnInit = function () {
        this.pages = this.websiteService.userService.user.website.pages;
        var Hammer = window['Hammer'];
        var elHammer = new Hammer(this.el.nativeElement, {
            recognizers: [
                // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
                [Hammer.Tap],
                [Hammer.Rotate],
                [Hammer.Pinch, { enable: false }, ['rotate']],
                [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }],
            ]
        });
        elHammer.on('tap', function (ev) {
            console.log(ev);
            // if(ev.add)
        });
    };
    Navbar.prototype.addPage = function (page) {
        this.websiteService.userService.user.website.pages
            .push(page);
    };
    Navbar.prototype.navigate = function (path) {
        this.router.navigate([path]);
    };
    Navbar.prototype.deleteMe = function () {
        var page = this.websiteService.findPage(this.router.url);
        console.log(this.router.url, page);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Navbar.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('touchstart', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Navbar.prototype, "showPanelOnMobile", null);
    __decorate([
        core_1.HostListener('dblclick', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Navbar.prototype, "showPanelOnDesktop", null);
    Navbar = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'theme-basic1-navbar',
            templateUrl: './navbar.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_2.WebsiteService, router_1.Router])
    ], Navbar);
    return Navbar;
}());
exports.Navbar = Navbar;

//# sourceMappingURL=navbar.js.map
