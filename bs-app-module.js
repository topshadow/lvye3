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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var all_1 = require('@angular2-material/all');
var routes_1 = require('./bs-app/routes');
var bs_app_1 = require('./bs-app/bs-app');
var sign_in_1 = require('./bs-app/sign-in');
var page_1 = require('./bs-app/page');
var button_panel_1 = require('./panel/button-panel/button-panel');
var bs_button_1 = require('./panel/button-panel/bs-button');
var container_1 = require('container');
var core_2 = require('core');
var BsAppModule = (function () {
    function BsAppModule(appRef, resolver) {
        this.appRef = appRef;
        this.resolver = resolver;
    }
    BsAppModule.prototype.ngDoBootstrap = function () {
        this.appRef.bootstrap(bs_app_1.DemoApp);
    };
    BsAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                router_1.RouterModule.forRoot(routes_1.BS_APP_ROUTES),
                all_1.MaterialModule.forRoot(),
            ],
            declarations: [
                bs_app_1.Home,
                bs_app_1.DemoApp,
                sign_in_1.SignIn,
                page_1.EveryPage,
                button_panel_1.ButtonPanel,
                bs_button_1.BsButton,
                core_2.AutoInjectStyle,
                core_2.AutoOpenPanel, container_1.BsCarousel,
                core_2.PassSafeResouceUrlPipe,
                core_2.BackgroundImageDirective,
                core_2.LabelForDirective,
                container_1.BsFeatures,
                container_1.RecentWorks,
                container_1.OurService,
                container_1.OurSkill,
                container_1.Bottom,
                container_1.Footer,
                container_1.AboutUs,
                container_1.Navbar,
                container_1.Basic1AboutUsOurSkill
            ],
            providers: [core_2.UserService, core_2.DocService, core_2.WebsiteService, core_2.PublishService],
            bootstrap: [bs_app_1.DemoApp],
            entryComponents: [
                container_1.BsCarousel,
                page_1.EveryPage]
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef, core_1.ComponentFactoryResolver])
    ], BsAppModule);
    return BsAppModule;
}());
exports.BsAppModule = BsAppModule;

//# sourceMappingURL=bs-app-module.js.map
