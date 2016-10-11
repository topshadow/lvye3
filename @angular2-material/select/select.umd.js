(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global.md = global.md || {}, global.md.select = global.md.select || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MdSelect = (function () {
    function MdSelect() {
    }
    MdSelect = __decorate$1([
        _angular_core.Component({selector: 'md-select',
            template: "I'm a select!",
            styles: [" /*# sourceMappingURL=select.css.map */ "],
            encapsulation: _angular_core.ViewEncapsulation.None
        }), 
        __metadata$1('design:paramtypes', [])
    ], MdSelect);
    return MdSelect;
}());

var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MdSelectModule = (function () {
    function MdSelectModule() {
    }
    MdSelectModule.forRoot = function () {
        return {
            ngModule: MdSelectModule,
            providers: []
        };
    };
    MdSelectModule = __decorate([
        _angular_core.NgModule({
            imports: [],
            exports: [MdSelect],
            declarations: [MdSelect],
        }), 
        __metadata('design:paramtypes', [])
    ], MdSelectModule);
    return MdSelectModule;
}());

exports.MdSelectModule = MdSelectModule;
exports.MdSelect = MdSelect;

Object.defineProperty(exports, '__esModule', { value: true });

})));