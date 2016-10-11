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
var sidenav_1 = require('@angular2-material/sidenav');
var core_2 = require('core');
var themes_1 = require('./themes');
/**
 * 将json解析成对应的页面组件,并挂载到当前页面,当从编辑模式进入该页面的时候,则可以按Ctrl键呼出左侧的菜单面板
 */
var EveryPage = (function () {
    function EveryPage(el, websiteService, route) {
        var _this = this;
        this.el = el;
        this.websiteService = websiteService;
        this.route = route;
        this.panels = core_2.Panels;
        this.themes = themes_1.themes;
        this.route.params.forEach(function (params) {
            _this.path = params['path'];
            _this.page = _this.websiteService.findPage(_this.path);
            console.log("\u5F53\u524D\u9875\u9762\u662F" + _this.path + ",\u6570\u636E\u662F" + JSON.stringify(_this.page));
        });
        this.user = this.websiteService.userService.user;
    }
    EveryPage.prototype.ngAfterViewInit = function () {
        this.leftSidenav = this.sidenavs.first;
        this.rightSidenav = this.sidenavs.last;
    };
    EveryPage.prototype.addNavbar = function () {
        this.websiteService.addPart(this.page.path, core_2.defaultNavbar);
    };
    EveryPage.prototype.savePage = function () {
        this.websiteService.userService.saveUser(this.websiteService.userService.user);
    };
    EveryPage.prototype.fullScreen = function () {
        // 若要全屏页面中div，var element= document.getElementById("divID");
        var el = document.documentElement;
        // 切换全屏
        var rfs = el['requestFullScreen'] ||
            el['webkitRequestFullScreen'] ||
            el['mozRequestFullScreen'] || el['msRequestFullscreen'];
        if (typeof rfs != 'undefined' && rfs) {
            rfs.call(el);
        }
        else if (typeof window['ActiveXObject'] != 'undefined') {
            // for Internet Explorer 
            var wscript = new window['ActiveXObject']('WScript.Shell');
            if (wscript != null) {
                wscript.SendKeys('{F11}');
            }
        }
    };
    EveryPage.prototype.ngOnInit = function () {
        var _this = this;
        // 打开欢迎模态框
        window['$'](this.el.nativeElement).find('#welcomeModal').modal('toggle');
        // 消除导航栏上方的空格性问题，否则右边的侧边栏的导航栏会很长
        // 滑动显示左侧边栏
        var Hammer = window['Hammer'];
        var bodyHammer = new Hammer(window['$']('body')[0], {
            recognizers: [
                // RecognizerClass, [options], [recognizeWith, ...], [requireFailure, ...]
                [Hammer.Pan],
                [Hammer.Rotate],
                [Hammer.Pinch, { enable: false }, ['rotate']],
                [Hammer.Swipe, { direction: Hammer.DIRECTION_LEFT }],
            ]
        });
        // 打开左右两侧的侧边栏
        bodyHammer.on('pan', function (ev) {
            switch (ev.additionalEvent) {
                case 'panright':
                    if (_this.rightSidenav._isOpened) {
                        _this.rightSidenav.close();
                        return;
                    }
                    _this.leftSidenav.open();
                    break;
                case 'panleft':
                    if (_this.leftSidenav._isOpened) {
                        _this.leftSidenav.close();
                        return;
                    }
                    _this.rightSidenav.open();
                    break;
            }
        });
    };
    EveryPage.prototype.addPart = function (part) {
        this.websiteService.addPart(this.path, part);
    };
    EveryPage.prototype.clearWebsite = function () {
        this.websiteService.clearWebsite();
    };
    __decorate([
        core_1.ViewChildren(sidenav_1.MdSidenav), 
        __metadata('design:type', core_1.QueryList)
    ], EveryPage.prototype, "sidenavs", void 0);
    EveryPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page',
            templateUrl: './page.html',
            styleUrls: ['./page.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_2.WebsiteService, router_1.ActivatedRoute])
    ], EveryPage);
    return EveryPage;
}());
exports.EveryPage = EveryPage;

//# sourceMappingURL=page.js.map
