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
/**
* 右侧面板内容
*/
(function (Panels) {
    Panels[Panels["BsGridLayoutPanel"] = 0] = "BsGridLayoutPanel";
    Panels[Panels["BsListLayoutPanel"] = 1] = "BsListLayoutPanel";
    Panels[Panels["BsNavbar"] = 2] = "BsNavbar";
    Panels[Panels["BsProductList"] = 3] = "BsProductList";
})(exports.Panels || (exports.Panels = {}));
var Panels = exports.Panels;
var firebase = window['firebase'];
exports.firebase = firebase;
// Initialize Firebase
var config = {
    apiKey: 'AIzaSyDRZod_Ur5T8K7V3kCV3rpRP9NjLGkQBAQ',
    authDomain: 'topshadow-accda.firebaseapp.com',
    databaseURL: 'https://topshadow-accda.firebaseio.com',
    storageBucket: 'topshadow-accda.appspot.com',
    messagingSenderId: '1069236481103'
};
firebase.initializeApp(config);
var Firebase = (function () {
    function Firebase() {
    }
    Firebase.prototype.database = function () {
        return this.firebase.database();
    };
    Firebase.prototype.construtor = function () {
        this.firebase = window['firebase'];
    };
    Firebase = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Firebase);
    return Firebase;
}());
exports.Firebase = Firebase;
var User = (function () {
    function User() {
        window['user'] = {};
    }
    Object.defineProperty(User.prototype, "website", {
        get: function () {
            return window['user'].website;
        },
        set: function (website) {
            window['user'].website = website;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
var Data = (function () {
    function Data() {
    }
    Object.defineProperty(Data.prototype, "user", {
        get: function () {
            return window['user'];
        },
        set: function (user) {
            window['user'] = user;
        },
        enumerable: true,
        configurable: true
    });
    return Data;
}());
exports.Data = Data;
exports.user = new User();
exports.defaultWebsite = {
    pages: [{
            path: 'index',
            parts: [
                {
                    type: 'navbar'
                }
            ]
        }]
};
/**
 * 对象转数组,可以放入core库中
 */
function objectToArray(obj) {
    var result = new Array();
    Object.keys(obj).forEach(function (item, index, array) {
        result[index] = obj[item];
    });
    return result;
}
exports.objectToArray = objectToArray;

//# sourceMappingURL=tools.js.map
