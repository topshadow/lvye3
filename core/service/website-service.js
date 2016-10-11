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
exports.defaultNavbar = {
    type: 'navbar'
};
var WebsiteService = (function () {
    function WebsiteService() {
        this.firebase = core_2.firebase;
        this.storageRef = core_2.firebase.storage().ref();
        this.userService = new core_2.UserService();
    }
    WebsiteService.prototype.addPart = function (path, part) {
        var editPage = this.findPage(path);
        if (!editPage.parts) {
            editPage.parts = [];
        }
        editPage.parts.push(part);
    };
    /**
    *根据页面path来查找数据
    *service
    */
    WebsiteService.prototype.findPage = function (path) {
        path = path.startsWith('/') ? path.substring(1) : path;
        path = path.indexOf(';') != -1 ? path.substring(0, path.indexOf(';')) : path;
        return this.userService.user.website.pages
            .find(function (page) { return page.path == path; });
    };
    /**
     * 上传图片接口
     * 使用方法
     * var file = document.getElementById('selectFileInput').files[0];
     * WebsiteService.upload(file);
     */
    WebsiteService.prototype.upload = function (file) {
        var metadata = { 'contentType': file.type };
        return this.storageRef.child('images/' + file.name).put(file, metadata).then(function (snapshot) {
            console.log('Uploaded', snapshot.totalBytes, 'bytes.');
            console.log(snapshot.metadata);
            var url = snapshot.metadata.downloadURLs[0];
            console.log('File available at', url);
            return url;
        });
    };
    WebsiteService.prototype.clearWebsite = function () {
        this.userService.user.website = { pages: [{ path: 'index', parts: [] }] };
    };
    Object.defineProperty(WebsiteService.prototype, "pages", {
        get: function () {
            return this.userService.user.website.pages;
        },
        enumerable: true,
        configurable: true
    });
    WebsiteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WebsiteService);
    return WebsiteService;
}());
exports.WebsiteService = WebsiteService;

//# sourceMappingURL=website-service.js.map
