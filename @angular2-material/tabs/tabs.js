var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ContentChild, Directive, Component, Input, Output, ViewChildren, NgZone, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular2-material/core';
import { MdTabLabel } from './tab-label';
import { MdTabContent } from './tab-content';
import { MdTabLabelWrapper } from './tab-label-wrapper';
import { MdInkBar } from './ink-bar';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RIGHT_ARROW, LEFT_ARROW, ENTER } from '@angular2-material/core';
/** Used to generate unique ID's for each tab component */
var nextId = 0;
/** A simple change event emitted on focus or selection changes. */
export var MdTabChangeEvent = (function () {
    function MdTabChangeEvent() {
    }
    return MdTabChangeEvent;
}());
export var MdTab = (function () {
    function MdTab() {
        // TODO: Replace this when BooleanFieldValue is removed.
        this._disabled = false;
    }
    Object.defineProperty(MdTab.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value != null && "" + value !== 'false');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ContentChild(MdTabLabel), 
        __metadata('design:type', MdTabLabel)
    ], MdTab.prototype, "label", void 0);
    __decorate([
        ContentChild(MdTabContent), 
        __metadata('design:type', MdTabContent)
    ], MdTab.prototype, "content", void 0);
    __decorate([
        Input('disabled'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdTab.prototype, "disabled", null);
    MdTab = __decorate([
        Directive({
            selector: 'md-tab'
        }), 
        __metadata('design:paramtypes', [])
    ], MdTab);
    return MdTab;
}());
/**
 * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/tabs.html
 */
export var MdTabGroup = (function () {
    function MdTabGroup(_zone) {
        this._zone = _zone;
        this._isInitialized = false;
        this._selectedIndex = 0;
        this._onFocusChange = new EventEmitter();
        this._onSelectChange = new EventEmitter();
        this._focusIndex = 0;
        this._groupId = nextId++;
    }
    Object.defineProperty(MdTabGroup.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            if (value != this._selectedIndex && this.isValidIndex(value)) {
                this._selectedIndex = value;
                if (this._isInitialized) {
                    this._onSelectChange.emit(this._createChangeEvent(value));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    MdTabGroup.prototype.isValidIndex = function (index) {
        if (this._tabs) {
            var tab = this._tabs.toArray()[index];
            return tab && !tab.disabled;
        }
        else {
            return true;
        }
    };
    Object.defineProperty(MdTabGroup.prototype, "_selectedIndexChange", {
        /** Output to enable support for two-way binding on `selectedIndex`. */
        get: function () {
            return this.selectChange.map(function (event) { return event.index; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "focusChange", {
        get: function () {
            return this._onFocusChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "selectChange", {
        get: function () {
            return this._onSelectChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Waits one frame for the view to update, then upates the ink bar
     * Note: This must be run outside of the zone or it will create an infinite change detection loop
     * TODO: internal
     */
    MdTabGroup.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            window.requestAnimationFrame(function () {
                _this._updateInkBar();
            });
        });
        this._isInitialized = true;
    };
    /** Tells the ink-bar to align itself to the current label wrapper */
    MdTabGroup.prototype._updateInkBar = function () {
        this._inkBar.toArray()[0].alignToElement(this._currentLabelWrapper);
    };
    Object.defineProperty(MdTabGroup.prototype, "_currentLabelWrapper", {
        /**
         * Reference to the current label wrapper; defaults to null for initial render before the
         * ViewChildren references are ready.
         */
        get: function () {
            return this._labelWrappers && this._labelWrappers.length
                ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "focusIndex", {
        /** Tracks which element has focus; used for keyboard navigation */
        get: function () {
            return this._focusIndex;
        },
        /** When the focus index is set, we must manually send focus to the correct label */
        set: function (value) {
            if (this.isValidIndex(value)) {
                this._focusIndex = value;
                if (this._isInitialized) {
                    this._onFocusChange.emit(this._createChangeEvent(value));
                }
                if (this._labelWrappers && this._labelWrappers.length) {
                    this._labelWrappers.toArray()[value].focus();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MdTabGroup.prototype._createChangeEvent = function (index) {
        var event = new MdTabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    };
    /** Returns a unique id for each tab label element */
    MdTabGroup.prototype._getTabLabelId = function (i) {
        return "md-tab-label-" + this._groupId + "-" + i;
    };
    /** Returns a unique id for each tab content element */
    MdTabGroup.prototype._getTabContentId = function (i) {
        return "md-tab-content-" + this._groupId + "-" + i;
    };
    MdTabGroup.prototype.handleKeydown = function (event) {
        switch (event.keyCode) {
            case RIGHT_ARROW:
                this.focusNextTab();
                break;
            case LEFT_ARROW:
                this.focusPreviousTab();
                break;
            case ENTER:
                this.selectedIndex = this.focusIndex;
                break;
        }
    };
    /**
     * Moves the focus left or right depending on the offset provided.  Valid offsets are 1 and -1.
     */
    MdTabGroup.prototype.moveFocus = function (offset) {
        if (this._labelWrappers) {
            var tabs = this._tabs.toArray();
            for (var i = this.focusIndex + offset; i < tabs.length && i >= 0; i += offset) {
                if (this.isValidIndex(i)) {
                    this.focusIndex = i;
                    return;
                }
            }
        }
    };
    /** Increment the focus index by 1 until a valid tab is found. */
    MdTabGroup.prototype.focusNextTab = function () {
        this.moveFocus(1);
    };
    /** Decrement the focus index by 1 until a valid tab is found. */
    MdTabGroup.prototype.focusPreviousTab = function () {
        this.moveFocus(-1);
    };
    __decorate([
        ContentChildren(MdTab), 
        __metadata('design:type', QueryList)
    ], MdTabGroup.prototype, "_tabs", void 0);
    __decorate([
        ViewChildren(MdTabLabelWrapper), 
        __metadata('design:type', QueryList)
    ], MdTabGroup.prototype, "_labelWrappers", void 0);
    __decorate([
        ViewChildren(MdInkBar), 
        __metadata('design:type', QueryList)
    ], MdTabGroup.prototype, "_inkBar", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdTabGroup.prototype, "selectedIndex", null);
    __decorate([
        Output('selectedIndexChange'), 
        __metadata('design:type', Observable)
    ], MdTabGroup.prototype, "_selectedIndexChange", null);
    __decorate([
        Output('focusChange'), 
        __metadata('design:type', Observable)
    ], MdTabGroup.prototype, "focusChange", null);
    __decorate([
        Output('selectChange'), 
        __metadata('design:type', Observable)
    ], MdTabGroup.prototype, "selectChange", null);
    MdTabGroup = __decorate([
        Component({
            moduleId: module.id,
            selector: 'md-tab-group',
            templateUrl: 'tab-group.html',
            styleUrls: ['tab-group.css'],
        }), 
        __metadata('design:paramtypes', [NgZone])
    ], MdTabGroup);
    return MdTabGroup;
}());
export var MdTabsModule = (function () {
    function MdTabsModule() {
    }
    MdTabsModule.forRoot = function () {
        return {
            ngModule: MdTabsModule,
            providers: []
        };
    };
    MdTabsModule = __decorate([
        NgModule({
            imports: [CommonModule, PortalModule],
            // Don't export MdInkBar or MdTabLabelWrapper, as they are internal implementatino details.
            exports: [MdTabGroup, MdTabLabel, MdTabContent, MdTab],
            declarations: [MdTabGroup, MdTabLabel, MdTabContent, MdTab, MdInkBar, MdTabLabelWrapper],
        }), 
        __metadata('design:paramtypes', [])
    ], MdTabsModule);
    return MdTabsModule;
}());

//# sourceMappingURL=tabs.js.map
