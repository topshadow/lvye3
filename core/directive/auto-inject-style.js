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
var AutoInjectStyle = (function () {
    function AutoInjectStyle(el, render) {
        this.el = el;
        this.render = render;
    }
    // @HostBinding('style.color')
    // get color(): string {
    //     return this.styles.color;
    // }
    // @HostBinding('style.backgroundColor')
    // get backgroundColor() {
    //     return this.styles.backgroundColor;
    // }
    // @HostBinding('style.font-size')
    // get fontSize(): string {
    //     return this.styles.fontSize + 'px';
    // }
    /**
     * 如果不是以url(开头,则补全
     */
    // @HostBinding('style.backgroundImage')
    // get backgroundImage() {
    //     return this.styles.backgroundImage =
    //         this.styles.backgroundImage.indexOf('url(') == -1
    //             ? 'url(' + this.backgroundImage + ')'
    //             : this.styles.backgroundImage;
    // }
    AutoInjectStyle.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.styles);
        Object.keys(this.styles).forEach(function (item, index, array) {
            _this.render.setElementStyle(_this.el.nativeElement, item, _this.styles[item]);
        });
    };
    __decorate([
        core_1.Input('auto-inject-style'), 
        __metadata('design:type', Object)
    ], AutoInjectStyle.prototype, "styles", void 0);
    AutoInjectStyle = __decorate([
        core_1.Directive({
            selector: '[auto-inject-style]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], AutoInjectStyle);
    return AutoInjectStyle;
}());
exports.AutoInjectStyle = AutoInjectStyle;

//# sourceMappingURL=auto-inject-style.js.map
