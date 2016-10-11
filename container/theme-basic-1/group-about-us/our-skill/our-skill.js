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
var Basic1AboutUsOurSkill = (function () {
    function Basic1AboutUsOurSkill() {
        this.data = {
            content: {
                title: 'Team of Corlate',
                subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore\n                    magna aliqua. Ut enim ad minim veniam",
                persons: [{
                        name: 'JHON DOE',
                        picture: 'http://shapebootstrap.net/demo/html/corlate/images/man1.jpg',
                        goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                        contactLinks: [],
                        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    },
                    {
                        name: 'JHON DOE',
                        picture: 'http://shapebootstrap.net/demo/html/corlate/images/man2.jpg',
                        goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                        contactLinks: [],
                        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    }, {
                        name: 'JHON DOE',
                        picture: 'http://shapebootstrap.net/demo/html/corlate/images/man3.jpg',
                        goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                        contactLinks: [],
                        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
                    }, {
                        name: 'JHON DOE',
                        picture: 'http://shapebootstrap.net/demo/html/corlate/images/man2.jpg',
                        goodats: ['WEB', 'UI', 'UX', 'PHOTOSHOP'],
                        contactLinks: [],
                        info: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }
                ]
            }
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Basic1AboutUsOurSkill.prototype, "data", void 0);
    Basic1AboutUsOurSkill = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'basic1-about-us-our-skill',
            templateUrl: './our-skill.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Basic1AboutUsOurSkill);
    return Basic1AboutUsOurSkill;
}());
exports.Basic1AboutUsOurSkill = Basic1AboutUsOurSkill;

//# sourceMappingURL=our-skill.js.map
