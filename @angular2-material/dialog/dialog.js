var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Injector, Injectable } from '@angular/core';
import { Overlay, OverlayModule, PortalModule, OverlayState, ComponentPortal, OVERLAY_PROVIDERS } from '@angular2-material/core';
import { MdDialogRef } from './dialog-ref';
import { DialogInjector } from './dialog-injector';
import { MdDialogContainer } from './dialog-container';
export { MdDialogConfig } from './dialog-config';
export { MdDialogRef } from './dialog-ref';
// TODO(jelbourn): add shortcuts for `alert` and `confirm`.
// TODO(jelbourn): add support for opening with a TemplateRef
// TODO(jelbourn): add `closeAll` method
// TODO(jelbourn): add backdrop
// TODO(jelbourn): default dialog config
// TODO(jelbourn): focus trapping
// TODO(jelbourn): potentially change API from accepting component constructor to component factory.
/**
 * Service to open Material Design modal dialogs.
 */
export var MdDialog = (function () {
    function MdDialog(_overlay, _injector) {
        this._overlay = _overlay;
        this._injector = _injector;
    }
    /**
     * Opens a modal dialog containing the given component.
     * @param component Type of the component to load into the load.
     * @param config
     */
    MdDialog.prototype.open = function (component, config) {
        var overlayRef = this._createOverlay(config);
        var dialogContainer = this._attachDialogContainer(overlayRef, config);
        return this._attachDialogContent(component, dialogContainer, overlayRef);
    };
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param dialogConfig The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */
    MdDialog.prototype._createOverlay = function (dialogConfig) {
        var overlayState = this._getOverlayState(dialogConfig);
        return this._overlay.create(overlayState);
    };
    /**
     * Attaches an MdDialogContainer to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    MdDialog.prototype._attachDialogContainer = function (overlay, config) {
        var containerPortal = new ComponentPortal(MdDialogContainer, config.viewContainerRef);
        var containerRef = overlay.attach(containerPortal);
        containerRef.instance.dialogConfig = config;
        return containerRef.instance;
    };
    /**
     * Attaches the user-provided component to the already-created MdDialogContainer.
     * @param component The type of component being loaded into the dialog.
     * @param dialogContainer Reference to the wrapping MdDialogContainer.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @returns A promise resolving to the MdDialogRef that should be returned to the user.
     */
    MdDialog.prototype._attachDialogContent = function (component, dialogContainer, overlayRef) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var dialogRef = new MdDialogRef(overlayRef);
        // When the dialog backdrop is clicked, we want to close it.
        overlayRef.backdropClick().subscribe(function () { return dialogRef.close(); });
        // We create an injector specifically for the component we're instantiating so that it can
        // inject the MdDialogRef. This allows a component loaded inside of a dialog to close itself
        // and, optionally, to return a value.
        var dialogInjector = new DialogInjector(dialogRef, this._injector);
        var contentPortal = new ComponentPortal(component, null, dialogInjector);
        var contentRef = dialogContainer.attachComponentPortal(contentPortal);
        dialogRef.componentInstance = contentRef.instance;
        return dialogRef;
    };
    /**
     * Creates an overlay state from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */
    MdDialog.prototype._getOverlayState = function (dialogConfig) {
        var state = new OverlayState();
        state.hasBackdrop = true;
        state.positionStrategy = this._overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        return state;
    };
    MdDialog = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Overlay, Injector])
    ], MdDialog);
    return MdDialog;
}());
export var MdDialogModule = (function () {
    function MdDialogModule() {
    }
    MdDialogModule.forRoot = function () {
        return {
            ngModule: MdDialogModule,
            providers: [MdDialog, OVERLAY_PROVIDERS],
        };
    };
    MdDialogModule = __decorate([
        NgModule({
            imports: [OverlayModule, PortalModule],
            exports: [MdDialogContainer],
            declarations: [MdDialogContainer],
            entryComponents: [MdDialogContainer],
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialogModule);
    return MdDialogModule;
}());

//# sourceMappingURL=dialog.js.map
