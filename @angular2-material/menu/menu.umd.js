(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular2-material/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular2-material/core'], factory) :
    (factory((global.md = global.md || {}, global.md.menu = global.md.menu || {}),global.ng.core,global.ng.common,global.md.core));
}(this, (function (exports,_angular_core,_angular_common,_angular2Material_core) { 'use strict';

var __extends = (window && window.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Exception thrown when menu trigger doesn't have a valid md-menu instance
 */
var MdMenuMissingError = (function (_super) {
    __extends(MdMenuMissingError, _super);
    function MdMenuMissingError() {
        _super.call(this, "md-menu-trigger: must pass in an md-menu instance.\n\n    Example:\n      <md-menu #menu=\"mdMenu\"></md-menu>\n      <button [md-menu-trigger-for]=\"menu\"></button>\n    ");
    }
    return MdMenuMissingError;
}(_angular2Material_core.MdError));
/**
 * Exception thrown when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
var MdMenuInvalidPositionX = (function (_super) {
    __extends(MdMenuInvalidPositionX, _super);
    function MdMenuInvalidPositionX() {
        _super.call(this, "x-position value must be either 'before' or after'.\n      Example: <md-menu x-position=\"before\" #menu=\"mdMenu\"></md-menu>\n    ");
    }
    return MdMenuInvalidPositionX;
}(_angular2Material_core.MdError));
/**
 * Exception thrown when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
var MdMenuInvalidPositionY = (function (_super) {
    __extends(MdMenuInvalidPositionY, _super);
    function MdMenuInvalidPositionY() {
        _super.call(this, "y-position value must be either 'above' or below'.\n      Example: <md-menu y-position=\"above\" #menu=\"mdMenu\"></md-menu>\n    ");
    }
    return MdMenuInvalidPositionY;
}(_angular2Material_core.MdError));

var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is intended to be used inside an md-menu tag.
 * It exists mostly to set the role attribute.
 */
var MdMenuItem = (function () {
    function MdMenuItem(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    MdMenuItem.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'focus');
    };
    Object.defineProperty(MdMenuItem.prototype, "disabled", {
        // this is necessary to support anchors
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value === false || value === undefined) ? null : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuItem.prototype, "isAriaDisabled", {
        get: function () {
            return String(this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * TODO: internal
     */
    MdMenuItem.prototype._checkDisabled = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    __decorate$2([
        _angular_core.HostBinding('attr.disabled'),
        _angular_core.Input(), 
        __metadata$2('design:type', Boolean)
    ], MdMenuItem.prototype, "disabled", null);
    __decorate$2([
        _angular_core.HostBinding('attr.aria-disabled'), 
        __metadata$2('design:type', String)
    ], MdMenuItem.prototype, "isAriaDisabled", null);
    MdMenuItem = __decorate$2([
        _angular_core.Directive({
            selector: '[md-menu-item]',
            host: {
                'role': 'menuitem',
                '(click)': '_checkDisabled($event)',
                'tabindex': '-1'
            },
            exportAs: 'mdMenuItem'
        }), 
        __metadata$2('design:paramtypes', [_angular_core.Renderer, _angular_core.ElementRef])
    ], MdMenuItem);
    return MdMenuItem;
}());

// TODO(kara): prevent-close functionality
var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MdMenu = (function () {
    function MdMenu(posX, posY) {
        this._showClickCatcher = false;
        this._focusedItemIndex = 0;
        this.positionX = 'after';
        this.positionY = 'below';
        this.close = new _angular_core.EventEmitter;
        if (posX) {
            this._setPositionX(posX);
        }
        if (posY) {
            this._setPositionY(posY);
        }
    }
    Object.defineProperty(MdMenu.prototype, "classList", {
        /**
         * This method takes classes set on the host md-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param classes list of class names
         */
        set: function (classes) {
            this._classList = classes.split(' ').reduce(function (obj, className) {
                obj[className] = true;
                return obj;
            }, {});
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This function toggles the display of the menu's click catcher element.
     * This element covers the viewport when the menu is open to detect clicks outside the menu.
     * TODO: internal
     */
    MdMenu.prototype._setClickCatcher = function (bool) {
        this._showClickCatcher = bool;
    };
    /**
     * Focus the first item in the menu. This method is used by the menu trigger
     * to focus the first item when the menu is opened by the ENTER key.
     * TODO: internal
     */
    MdMenu.prototype._focusFirstItem = function () {
        this.items.first.focus();
    };
    // TODO(kara): update this when (keydown.downArrow) testability is fixed
    // TODO: internal
    MdMenu.prototype._handleKeydown = function (event) {
        if (event.keyCode === _angular2Material_core.DOWN_ARROW) {
            this._focusNextItem();
        }
        else if (event.keyCode === _angular2Material_core.UP_ARROW) {
            this._focusPreviousItem();
        }
        else if (event.keyCode === _angular2Material_core.TAB) {
            this._emitCloseEvent();
        }
    };
    /**
     * This emits a close event to which the trigger is subscribed. When emitted, the
     * trigger will close the menu.
     */
    MdMenu.prototype._emitCloseEvent = function () {
        this._focusedItemIndex = 0;
        this.close.emit(null);
    };
    MdMenu.prototype._focusNextItem = function () {
        this._updateFocusedItemIndex(1);
        this.items.toArray()[this._focusedItemIndex].focus();
    };
    MdMenu.prototype._focusPreviousItem = function () {
        this._updateFocusedItemIndex(-1);
        this.items.toArray()[this._focusedItemIndex].focus();
    };
    /**
     * This method sets focus to the correct menu item, given a list of menu items and the delta
     * between the currently focused menu item and the new menu item to be focused. It will
     * continue to move down the list until it finds an item that is not disabled, and it will wrap
     * if it encounters either end of the menu.
     *
     * @param delta the desired change in focus index
     * @param menuItems the menu items that should be focused
     * @private
       */
    MdMenu.prototype._updateFocusedItemIndex = function (delta, menuItems) {
        if (menuItems === void 0) { menuItems = this.items.toArray(); }
        // when focus would leave menu, wrap to beginning or end
        this._focusedItemIndex = (this._focusedItemIndex + delta + this.items.length)
            % this.items.length;
        // skip all disabled menu items recursively until an active one
        // is reached or the menu closes for overreaching bounds
        while (menuItems[this._focusedItemIndex].disabled) {
            this._updateFocusedItemIndex(delta, menuItems);
        }
    };
    MdMenu.prototype._setPositionX = function (pos) {
        if (pos !== 'before' && pos !== 'after') {
            throw new MdMenuInvalidPositionX();
        }
        this.positionX = pos;
    };
    MdMenu.prototype._setPositionY = function (pos) {
        if (pos !== 'above' && pos !== 'below') {
            throw new MdMenuInvalidPositionY();
        }
        this.positionY = pos;
    };
    __decorate$1([
        _angular_core.ViewChild(_angular_core.TemplateRef), 
        __metadata$1('design:type', _angular_core.TemplateRef)
    ], MdMenu.prototype, "templateRef", void 0);
    __decorate$1([
        _angular_core.ContentChildren(MdMenuItem), 
        __metadata$1('design:type', _angular_core.QueryList)
    ], MdMenu.prototype, "items", void 0);
    __decorate$1([
        _angular_core.Input('class'), 
        __metadata$1('design:type', String), 
        __metadata$1('design:paramtypes', [String])
    ], MdMenu.prototype, "classList", null);
    __decorate$1([
        _angular_core.Output(), 
        __metadata$1('design:type', Object)
    ], MdMenu.prototype, "close", void 0);
    MdMenu = __decorate$1([
        _angular_core.Component({selector: 'md-menu',
            host: { 'role': 'menu' },
            template: "<template> <div class=\"md-menu\" [ngClass]=\"_classList\" (click)=\"_emitCloseEvent()\" (keydown)=\"_handleKeydown($event)\"> <ng-content></ng-content> </div> </template> <div class=\"md-menu-click-catcher\" *ngIf=\"_showClickCatcher\" (click)=\"_emitCloseEvent()\"></div>",
            styles: [".md-menu { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); min-width: 112px; max-width: 280px; max-height: calc(100vh + 48px); overflow: auto; -webkit-overflow-scrolling: touch; padding-top: 8px; padding-bottom: 8px; } [md-menu-item] { cursor: pointer; user-select: none; outline: none; border: none; white-space: nowrap; overflow-x: hidden; text-overflow: ellipsis; display: flex; flex-direction: row; align-items: center; height: 48px; padding: 0 16px; font-size: 16px; font-family: Roboto, \"Helvetica Neue\", sans-serif; text-align: start; text-decoration: none; } [md-menu-item][disabled] { cursor: default; } button[md-menu-item] { width: 100%; } .md-menu-click-catcher { position: fixed; top: 0; left: 0; right: 0; bottom: 0; } /*# sourceMappingURL=menu.css.map */ "],
            encapsulation: _angular_core.ViewEncapsulation.None,
            exportAs: 'mdMenu'
        }),
        __param(0, _angular_core.Attribute('x-position')),
        __param(1, _angular_core.Attribute('y-position')), 
        __metadata$1('design:paramtypes', [String, String])
    ], MdMenu);
    return MdMenu;
}());

var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This directive is intended to be used in conjunction with an md-menu tag.  It is
 * responsible for toggling the display of the provided menu instance.
 */
var MdMenuTrigger = (function () {
    function MdMenuTrigger(_overlay, _element, _viewContainerRef, _renderer) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._menuOpen = false;
        // tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedFromKeyboard = false;
        this.onMenuOpen = new _angular_core.EventEmitter();
        this.onMenuClose = new _angular_core.EventEmitter();
    }
    MdMenuTrigger.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._checkMenu();
        this.menu.close.subscribe(function () { return _this.closeMenu(); });
    };
    MdMenuTrigger.prototype.ngOnDestroy = function () { this.destroyMenu(); };
    Object.defineProperty(MdMenuTrigger.prototype, "menuOpen", {
        get: function () { return this._menuOpen; },
        enumerable: true,
        configurable: true
    });
    MdMenuTrigger.prototype.toggleMenu = function () {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    };
    MdMenuTrigger.prototype.openMenu = function () {
        this._createOverlay();
        this._overlayRef.attach(this._portal);
        this._initMenu();
    };
    MdMenuTrigger.prototype.closeMenu = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this._resetMenu();
        }
    };
    MdMenuTrigger.prototype.destroyMenu = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    };
    MdMenuTrigger.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._element.nativeElement, 'focus');
    };
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    MdMenuTrigger.prototype._initMenu = function () {
        this._setIsMenuOpen(true);
        if (this._openedFromKeyboard) {
            this.menu._focusFirstItem();
        }
    };
    ;
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     */
    MdMenuTrigger.prototype._resetMenu = function () {
        this._setIsMenuOpen(false);
        if (this._openedFromKeyboard) {
            this.focus();
            this._openedFromKeyboard = false;
        }
    };
    // set state rather than toggle to support triggers sharing a menu
    MdMenuTrigger.prototype._setIsMenuOpen = function (isOpen) {
        this._menuOpen = isOpen;
        this.menu._setClickCatcher(isOpen);
        this._menuOpen ? this.onMenuOpen.emit(null) : this.onMenuClose.emit(null);
    };
    /**
     *  This method checks that a valid instance of MdMenu has been passed into
     *  md-menu-trigger-for.  If not, an exception is thrown.
     */
    MdMenuTrigger.prototype._checkMenu = function () {
        if (!this.menu || !(this.menu instanceof MdMenu)) {
            throw new MdMenuMissingError();
        }
    };
    /**
     *  This method creates the overlay from the provided menu's template and saves its
     *  OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    MdMenuTrigger.prototype._createOverlay = function () {
        if (!this._overlayRef) {
            this._portal = new _angular2Material_core.TemplatePortal(this.menu.templateRef, this._viewContainerRef);
            this._overlayRef = this._overlay.create(this._getOverlayConfig());
        }
    };
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayState
     */
    MdMenuTrigger.prototype._getOverlayConfig = function () {
        var overlayState = new _angular2Material_core.OverlayState();
        overlayState.positionStrategy = this._getPosition();
        return overlayState;
    };
    /**
     * This method builds the position strategy for the overlay, so the menu is properly connected
     * to the trigger.
     * @returns ConnectedPositionStrategy
     */
    MdMenuTrigger.prototype._getPosition = function () {
        var positionX = this.menu.positionX === 'before' ? 'end' : 'start';
        var positionY = this.menu.positionY === 'above' ? 'bottom' : 'top';
        return this._overlay.position().connectedTo(this._element, { originX: positionX, originY: positionY }, { overlayX: positionX, overlayY: positionY });
    };
    // TODO: internal
    MdMenuTrigger.prototype._handleKeydown = function (event) {
        if (event.keyCode === _angular2Material_core.ENTER) {
            this._openedFromKeyboard = true;
        }
    };
    __decorate$3([
        _angular_core.Input('md-menu-trigger-for'), 
        __metadata$3('design:type', MdMenu)
    ], MdMenuTrigger.prototype, "menu", void 0);
    __decorate$3([
        _angular_core.Output(), 
        __metadata$3('design:type', Object)
    ], MdMenuTrigger.prototype, "onMenuOpen", void 0);
    __decorate$3([
        _angular_core.Output(), 
        __metadata$3('design:type', Object)
    ], MdMenuTrigger.prototype, "onMenuClose", void 0);
    __decorate$3([
        _angular_core.HostListener('click'), 
        __metadata$3('design:type', Function), 
        __metadata$3('design:paramtypes', []), 
        __metadata$3('design:returntype', void 0)
    ], MdMenuTrigger.prototype, "toggleMenu", null);
    MdMenuTrigger = __decorate$3([
        _angular_core.Directive({
            selector: '[md-menu-trigger-for]',
            host: {
                'aria-haspopup': 'true',
                '(keydown)': '_handleKeydown($event)'
            },
            exportAs: 'mdMenuTrigger'
        }), 
        __metadata$3('design:paramtypes', [_angular2Material_core.Overlay, _angular_core.ElementRef, _angular_core.ViewContainerRef, _angular_core.Renderer])
    ], MdMenuTrigger);
    return MdMenuTrigger;
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
var MdMenuModule = (function () {
    function MdMenuModule() {
    }
    MdMenuModule.forRoot = function () {
        return {
            ngModule: MdMenuModule,
            providers: _angular2Material_core.OVERLAY_PROVIDERS,
        };
    };
    MdMenuModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular2Material_core.OverlayModule, _angular_common.CommonModule],
            exports: [MdMenu, MdMenuItem, MdMenuTrigger],
            declarations: [MdMenu, MdMenuItem, MdMenuTrigger],
        }), 
        __metadata('design:paramtypes', [])
    ], MdMenuModule);
    return MdMenuModule;
}());

exports.MdMenuModule = MdMenuModule;
exports.MdMenu = MdMenu;
exports.MdMenuItem = MdMenuItem;
exports.MdMenuTrigger = MdMenuTrigger;

Object.defineProperty(exports, '__esModule', { value: true });

})));