(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular2-material/button-toggle'), require('@angular2-material/button'), require('@angular2-material/checkbox'), require('@angular2-material/radio'), require('@angular2-material/select'), require('@angular2-material/slide-toggle'), require('@angular2-material/slider'), require('@angular2-material/sidenav'), require('@angular2-material/list'), require('@angular2-material/grid-list'), require('@angular2-material/card'), require('@angular2-material/icon'), require('@angular2-material/progress-circle'), require('@angular2-material/progress-bar'), require('@angular2-material/input'), require('@angular2-material/tabs'), require('@angular2-material/toolbar'), require('@angular2-material/tooltip'), require('@angular2-material/core'), require('@angular2-material/menu'), require('@angular2-material/dialog')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular2-material/button-toggle', '@angular2-material/button', '@angular2-material/checkbox', '@angular2-material/radio', '@angular2-material/select', '@angular2-material/slide-toggle', '@angular2-material/slider', '@angular2-material/sidenav', '@angular2-material/list', '@angular2-material/grid-list', '@angular2-material/card', '@angular2-material/icon', '@angular2-material/progress-circle', '@angular2-material/progress-bar', '@angular2-material/input', '@angular2-material/tabs', '@angular2-material/toolbar', '@angular2-material/tooltip', '@angular2-material/core', '@angular2-material/menu', '@angular2-material/dialog'], factory) :
    (factory((global.md = global.md || {}, global.md.all = global.md.all || {}),global.ng.core,global.md.buttonToggle,global.md.button,global.md.checkbox,global.md.radio,global.md.select,global.md.slideToggle,global.md.slider,global.md.sidenav,global.md.list,global.md.gridList,global.md.card,global.md.icon,global.md.progressCircle,global.md.progressBar,global.md.input,global.md.tabs,global.md.toolbar,global.md.tooltip,global.md.core,global.md.menu,global.md.dialog));
}(this, (function (exports,_angular_core,_angular2Material_buttonToggle,_angular2Material_button,_angular2Material_checkbox,_angular2Material_radio,_angular2Material_select,_angular2Material_slideToggle,_angular2Material_slider,_angular2Material_sidenav,_angular2Material_list,_angular2Material_gridList,_angular2Material_card,_angular2Material_icon,_angular2Material_progressCircle,_angular2Material_progressBar,_angular2Material_input,_angular2Material_tabs,_angular2Material_toolbar,_angular2Material_tooltip,_angular2Material_core,_angular2Material_menu,_angular2Material_dialog) { 'use strict';

var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MATERIAL_MODULES = [
    _angular2Material_button.MdButtonModule,
    _angular2Material_buttonToggle.MdButtonToggleModule,
    _angular2Material_card.MdCardModule,
    _angular2Material_checkbox.MdCheckboxModule,
    _angular2Material_dialog.MdDialogModule,
    _angular2Material_gridList.MdGridListModule,
    _angular2Material_icon.MdIconModule,
    _angular2Material_input.MdInputModule,
    _angular2Material_list.MdListModule,
    _angular2Material_menu.MdMenuModule,
    _angular2Material_progressBar.MdProgressBarModule,
    _angular2Material_progressCircle.MdProgressCircleModule,
    _angular2Material_radio.MdRadioModule,
    _angular2Material_core.MdRippleModule,
    _angular2Material_select.MdSelectModule,
    _angular2Material_sidenav.MdSidenavModule,
    _angular2Material_slider.MdSliderModule,
    _angular2Material_slideToggle.MdSlideToggleModule,
    _angular2Material_tabs.MdTabsModule,
    _angular2Material_toolbar.MdToolbarModule,
    _angular2Material_tooltip.MdTooltipModule,
    _angular2Material_core.OverlayModule,
    _angular2Material_core.PortalModule,
    _angular2Material_core.RtlModule,
];
var MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    MaterialRootModule = __decorate([
        _angular_core.NgModule({
            imports: [
                _angular2Material_button.MdButtonModule.forRoot(),
                _angular2Material_card.MdCardModule.forRoot(),
                _angular2Material_checkbox.MdCheckboxModule.forRoot(),
                _angular2Material_gridList.MdGridListModule.forRoot(),
                _angular2Material_input.MdInputModule.forRoot(),
                _angular2Material_list.MdListModule.forRoot(),
                _angular2Material_progressBar.MdProgressBarModule.forRoot(),
                _angular2Material_progressCircle.MdProgressCircleModule.forRoot(),
                _angular2Material_core.MdRippleModule.forRoot(),
                _angular2Material_select.MdSelectModule.forRoot(),
                _angular2Material_sidenav.MdSidenavModule.forRoot(),
                _angular2Material_tabs.MdTabsModule.forRoot(),
                _angular2Material_toolbar.MdToolbarModule.forRoot(),
                _angular2Material_core.PortalModule.forRoot(),
                _angular2Material_core.RtlModule.forRoot(),
                // These modules include providers.
                _angular2Material_buttonToggle.MdButtonToggleModule.forRoot(),
                _angular2Material_dialog.MdDialogModule.forRoot(),
                _angular2Material_icon.MdIconModule.forRoot(),
                _angular2Material_menu.MdMenuModule.forRoot(),
                _angular2Material_radio.MdRadioModule.forRoot(),
                _angular2Material_slider.MdSliderModule.forRoot(),
                _angular2Material_slideToggle.MdSlideToggleModule.forRoot(),
                _angular2Material_tooltip.MdTooltipModule.forRoot(),
                _angular2Material_core.OverlayModule.forRoot(),
            ],
            exports: MATERIAL_MODULES,
            providers: [_angular2Material_core.MdLiveAnnouncer]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialRootModule);
    return MaterialRootModule;
}());
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.forRoot = function () {
        return { ngModule: MaterialRootModule };
    };
    MaterialModule = __decorate([
        _angular_core.NgModule({
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES,
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialModule);
    return MaterialModule;
}());

exports.MaterialRootModule = MaterialRootModule;
exports.MaterialModule = MaterialModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));