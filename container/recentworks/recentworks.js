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
var RecentWorks = (function () {
    function RecentWorks(el, router, websiteService) {
        this.el = el;
        this.router = router;
        this.websiteService = websiteService;
    }
    RecentWorks.prototype.showPanelOnDesktop = function () {
        this.showPanel();
    };
    RecentWorks.prototype.showPanelOnMobile = function () {
        this.showPanel();
    };
    RecentWorks.prototype.showPanel = function () {
        window['$'](this.el.nativeElement).find('.modal').modal('toggle');
    };
    RecentWorks.prototype.deleteMe = function () {
        var page = this.websiteService.findPage(this.router.url);
        var index = page.parts.indexOf(this.data);
        page.parts.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], RecentWorks.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('dblclick', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], RecentWorks.prototype, "showPanelOnDesktop", null);
    __decorate([
        core_1.HostListener('touchstrat', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], RecentWorks.prototype, "showPanelOnMobile", null);
    RecentWorks = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recent-works',
            templateUrl: './recentworks.html',
            styleUrls: ['./recentworks.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, core_2.WebsiteService])
    ], RecentWorks);
    return RecentWorks;
}());
exports.RecentWorks = RecentWorks;

//# sourceMappingURL=recentworks.js.map
