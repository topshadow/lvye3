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
var core_2 = require('core');
/**
 * 模块发布服务
 */
var PublishService = (function () {
    function PublishService() {
        this.publishRef = core_2.firebase.database().ref('publish');
        this.userService = new core_2.UserService();
    }
    /**
     * publish navbar
     *
     */
    PublishService.prototype.publishNavbar = function (navbar, commet) {
        navbar.publishInfo = { username: this.userService.user.username, commet: commet };
        this.publishRef.push(navbar);
    };
    /**
     * 获取发布的导航列表,传入回调函数
     *
     */
    PublishService.prototype.getNavbarList = function (callback) {
        this.publishRef.on('value', function (snapshot) {
            var navbarList = core_2.objectToArray(snapshot.val());
            callback(navbarList);
        });
    };
    PublishService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PublishService);
    return PublishService;
}());
exports.PublishService = PublishService;

//# sourceMappingURL=publish-service.js.map
