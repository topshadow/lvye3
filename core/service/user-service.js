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
var UserService = (function () {
    function UserService() {
        this.firebase = core_2.firebase;
    }
    Object.defineProperty(UserService.prototype, "user", {
        get: function () {
            return window['user'];
        },
        set: function (user) {
            window['user'] = user;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.getUserByUsername = function (username, successMethod) {
        this.firebase.database().ref("users/" + username).once('value').then(function (snapshot) {
            successMethod(snapshot.val());
        });
    };
    UserService.prototype.addUser = function (user) {
        this.firebase.database().ref("users/" + user.username).set(user);
    };
    UserService.prototype.saveUser = function (user) {
        this.firebase.database().ref("users/" + user.username).set(user);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=user-service.js.map
