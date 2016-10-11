(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular2-material/core'), require('rxjs/Subject')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular2-material/core', 'rxjs/Subject'], factory) :
    (factory((global.md = global.md || {}, global.md.dialog = global.md.dialog || {}),global.ng.core,global.md.core,global.Rx));
}(this, (function (exports,_angular_core,_angular2Material_core,rxjs_Subject) { 'use strict';

// TODO(jelbourn): resizing
// TODO(jelbourn): afterOpen and beforeClose
/**
 * Reference to a dialog opened via the MdDialog service.
 */
var MdDialogRef = (function () {
    function MdDialogRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new rxjs_Subject.Subject();
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    MdDialogRef.prototype.close = function (dialogResult) {
        this._overlayRef.dispose();
        this._afterClosed.next(dialogResult);
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the dialog is finished closing. */
    MdDialogRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    return MdDialogRef;
}());

/** Custom injector type specifically for instantiating components with a dialog. */
var DialogInjector = (function () {
    function DialogInjector(_dialogRef, _parentInjector) {
        this._dialogRef = _dialogRef;
        this._parentInjector = _parentInjector;
    }
    DialogInjector.prototype.get = function (token, notFoundValue) {
        if (token === MdDialogRef) {
            return this._dialogRef;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return DialogInjector;
}());

var __extends$1 = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
var MdDialogContentAlreadyAttachedError = (function (_super) {
    __extends$1(MdDialogContentAlreadyAttachedError, _super);
    function MdDialogContentAlreadyAttachedError() {
        _super.call(this, 'Attempting to attach dialog content after content is already attached');
    }
    return MdDialogContentAlreadyAttachedError;
}(_angular2Material_core.MdError));

var __extends = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Internal component that wraps user-provided dialog content.
 */
var MdDialogContainer = (function (_super) {
    __extends(MdDialogContainer, _super);
    function MdDialogContainer() {
        _super.apply(this, arguments);
    }
    /** Attach a portal as content to this dialog container. */
    MdDialogContainer.prototype.attachComponentPortal = function (portal) {
        if (this._portalHost.hasAttached()) {
            throw new MdDialogContentAlreadyAttachedError();
        }
        return this._portalHost.attachComponentPortal(portal);
    };
    MdDialogContainer.prototype.attachTemplatePortal = function (portal) {
        throw Error('Not yet implemented');
    };
    __decorate$1([
        _angular_core.ViewChild(_angular2Material_core.PortalHostDirective), 
        __metadata$1('design:type', _angular2Material_core.PortalHostDirective)
    ], MdDialogContainer.prototype, "_portalHost", void 0);
    MdDialogContainer = __decorate$1([
        _angular_core.Component({selector: 'md-dialog-container',
            template: "<template portalHost></template> ",
            styles: ["md-dialog-container { box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); display: block; overflow: hidden; padding: 24px; } /*# sourceMappingURL=dialog-container.css.map */ "],
            host: {
                'class': 'md-dialog-container',
                '[attr.role]': 'dialogConfig?.role'
            },
            encapsulation: _angular_core.ViewEncapsulation.None,
        }), 
        __metadata$1('design:paramtypes', [])
    ], MdDialogContainer);
    return MdDialogContainer;
}(_angular2Material_core.BasePortalHost));

/**
 * Configuration for opening a modal dialog with the MdDialog service.
 */
var MdDialogConfig = (function () {
    function MdDialogConfig() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
    }
    return MdDialogConfig;
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
var MdDialog = (function () {
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
        var containerPortal = new _angular2Material_core.ComponentPortal(MdDialogContainer, config.viewContainerRef);
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
        var contentPortal = new _angular2Material_core.ComponentPortal(component, null, dialogInjector);
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
        var state = new _angular2Material_core.OverlayState();
        state.hasBackdrop = true;
        state.positionStrategy = this._overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        return state;
    };
    MdDialog = __decorate([
        _angular_core.Injectable(), 
        __metadata('design:paramtypes', [_angular2Material_core.Overlay, _angular_core.Injector])
    ], MdDialog);
    return MdDialog;
}());
var MdDialogModule = (function () {
    function MdDialogModule() {
    }
    MdDialogModule.forRoot = function () {
        return {
            ngModule: MdDialogModule,
            providers: [MdDialog, _angular2Material_core.OVERLAY_PROVIDERS],
        };
    };
    MdDialogModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular2Material_core.OverlayModule, _angular2Material_core.PortalModule],
            exports: [MdDialogContainer],
            declarations: [MdDialogContainer],
            entryComponents: [MdDialogContainer],
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialogModule);
    return MdDialogModule;
}());

exports.MdDialog = MdDialog;
exports.MdDialogModule = MdDialogModule;
exports.MdDialogConfig = MdDialogConfig;
exports.MdDialogRef = MdDialogRef;

Object.defineProperty(exports, '__esModule', { value: true });

})));