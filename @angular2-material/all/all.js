var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdButtonModule } from '@angular2-material/button';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSelectModule } from '@angular2-material/select';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdSliderModule } from '@angular2-material/slider';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdListModule } from '@angular2-material/list';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdInputModule } from '@angular2-material/input';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdLiveAnnouncer, MdRippleModule, RtlModule, PortalModule, OverlayModule } from '@angular2-material/core';
import { MdMenuModule } from '@angular2-material/menu';
import { MdDialogModule } from '@angular2-material/dialog';
var MATERIAL_MODULES = [
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    RtlModule,
];
export var MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    MaterialRootModule = __decorate([
        NgModule({
            imports: [
                MdButtonModule.forRoot(),
                MdCardModule.forRoot(),
                MdCheckboxModule.forRoot(),
                MdGridListModule.forRoot(),
                MdInputModule.forRoot(),
                MdListModule.forRoot(),
                MdProgressBarModule.forRoot(),
                MdProgressCircleModule.forRoot(),
                MdRippleModule.forRoot(),
                MdSelectModule.forRoot(),
                MdSidenavModule.forRoot(),
                MdTabsModule.forRoot(),
                MdToolbarModule.forRoot(),
                PortalModule.forRoot(),
                RtlModule.forRoot(),
                // These modules include providers.
                MdButtonToggleModule.forRoot(),
                MdDialogModule.forRoot(),
                MdIconModule.forRoot(),
                MdMenuModule.forRoot(),
                MdRadioModule.forRoot(),
                MdSliderModule.forRoot(),
                MdSlideToggleModule.forRoot(),
                MdTooltipModule.forRoot(),
                OverlayModule.forRoot(),
            ],
            exports: MATERIAL_MODULES,
            providers: [MdLiveAnnouncer]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialRootModule);
    return MaterialRootModule;
}());
export var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.forRoot = function () {
        return { ngModule: MaterialRootModule };
    };
    MaterialModule = __decorate([
        NgModule({
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES,
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=all.js.map
