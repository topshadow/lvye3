(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs/Observable'), require('@angular2-material/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', 'rxjs/Observable', '@angular2-material/core'], factory) :
    (factory((global.md = global.md || {}, global.md.buttonToggle = global.md.buttonToggle || {}),global.ng.core,global.ng.forms,global.Rx,global.md.core));
}(this, (function (exports,_angular_core,_angular_forms,rxjs_Observable,_angular2Material_core) { 'use strict';

var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (window && window.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (window && window.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows md-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
var MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return MdButtonToggleGroup; }),
    multi: true
};
var _uniqueIdCounter = 0;
/** A simple change event emitted by either MdButtonToggle or MdButtonToggleGroup. */
var MdButtonToggleChange = (function () {
    function MdButtonToggleChange() {
    }
    return MdButtonToggleChange;
}());
/** Exclusive selection button toggle group that behaves like a radio-button group. */
var MdButtonToggleGroup = (function () {
    function MdButtonToggleGroup() {
        /** The value for the button toggle group. Should match currently selected button toggle. */
        this._value = null;
        /** The HTML name attribute applied to toggles in this group. */
        this._name = "md-radio-group-" + _uniqueIdCounter++;
        /** Disables all toggles in the group. */
        this._disabled = null;
        /** The currently selected button toggle, should match the value. */
        this._selected = null;
        /** Whether the button toggle group is initialized or not. */
        this._isInitialized = false;
        /** The method to be called in order to update ngModel. */
        this._controlValueAccessorChangeFn = function (value) { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = function () { };
        /** Event emitted when the group's value changes. */
        this._change = new _angular_core.EventEmitter();
        /** Child button toggle buttons. */
        this._buttonToggles = null;
    }
    Object.defineProperty(MdButtonToggleGroup.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdButtonToggleGroup.prototype.ngAfterViewInit = function () {
        this._isInitialized = true;
    };
    Object.defineProperty(MdButtonToggleGroup.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this._updateButtonToggleNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            if (this._value != newValue) {
                this._value = newValue;
                this._updateSelectedButtonToggleFromValue();
                // Only emit a change event if the view is completely initialized.
                // We don't want to emit a change event for the initial values.
                if (this._isInitialized) {
                    this._emitChangeEvent();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            if (selected && !selected.checked) {
                selected.checked = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdButtonToggleGroup.prototype._updateButtonToggleNames = function () {
        var _this = this;
        if (this._buttonToggles) {
            this._buttonToggles.forEach(function (toggle) {
                toggle.name = _this._name;
            });
        }
    };
    // TODO: Refactor into shared code with radio.
    MdButtonToggleGroup.prototype._updateSelectedButtonToggleFromValue = function () {
        var _this = this;
        var isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._buttonToggles != null && !isAlreadySelected) {
            var matchingButtonToggle = this._buttonToggles.filter(function (buttonToggle) { return buttonToggle.value == _this._value; })[0];
            if (matchingButtonToggle) {
                this.selected = matchingButtonToggle;
            }
            else if (this.value == null) {
                this.selected = null;
                this._buttonToggles.forEach(function (buttonToggle) {
                    buttonToggle.checked = false;
                });
            }
        }
    };
    /** Dispatch change event with current selection and group value. */
    MdButtonToggleGroup.prototype._emitChangeEvent = function () {
        var event = new MdButtonToggleChange();
        event.source = this._selected;
        event.value = this._value;
        this._controlValueAccessorChangeFn(event.value);
        this._change.emit(event);
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', rxjs_Observable.Observable)
    ], MdButtonToggleGroup.prototype, "change", null);
    __decorate([
        _angular_core.ContentChildren(_angular_core.forwardRef(function () { return MdButtonToggle; })), 
        __metadata('design:type', _angular_core.QueryList)
    ], MdButtonToggleGroup.prototype, "_buttonToggles", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], MdButtonToggleGroup.prototype, "name", null);
    __decorate([
        _angular_core.Input(),
        _angular2Material_core.BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggleGroup.prototype, "disabled", null);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], MdButtonToggleGroup.prototype, "value", null);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], MdButtonToggleGroup.prototype, "selected", null);
    MdButtonToggleGroup = __decorate([
        _angular_core.Directive({
            selector: 'md-button-toggle-group:not([multiple])',
            providers: [MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
            host: {
                'role': 'radiogroup',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], MdButtonToggleGroup);
    return MdButtonToggleGroup;
}());
/** Multiple selection button-toggle group. */
var MdButtonToggleGroupMultiple = (function () {
    function MdButtonToggleGroupMultiple() {
        /** Disables all toggles in the group. */
        this._disabled = null;
    }
    Object.defineProperty(MdButtonToggleGroupMultiple.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggleGroupMultiple.prototype, "disabled", null);
    MdButtonToggleGroupMultiple = __decorate([
        _angular_core.Directive({
            selector: 'md-button-toggle-group[multiple]',
        }), 
        __metadata('design:paramtypes', [])
    ], MdButtonToggleGroupMultiple);
    return MdButtonToggleGroupMultiple;
}());
var MdButtonToggle = (function () {
    function MdButtonToggle(toggleGroup, toggleGroupMultiple, buttonToggleDispatcher) {
        var _this = this;
        this.buttonToggleDispatcher = buttonToggleDispatcher;
        /** Whether or not this button toggle is checked. */
        this._checked = false;
        /** Whether or not this button toggle is disabled. */
        this._disabled = null;
        /** Value assigned to this button toggle. */
        this._value = null;
        /** Whether or not the button toggle is a single selection. */
        this._isSingleSelector = null;
        /** Event emitted when the group value changes. */
        this._change = new _angular_core.EventEmitter();
        this.buttonToggleGroup = toggleGroup;
        this.buttonToggleGroupMultiple = toggleGroupMultiple;
        if (this.buttonToggleGroup) {
            buttonToggleDispatcher.listen(function (id, name) {
                if (id != _this.id && name == _this.name) {
                    _this.checked = false;
                }
            });
            this._type = 'radio';
            this.name = this.buttonToggleGroup.name;
            this._isSingleSelector = true;
        }
        else {
            // Even if there is no group at all, treat the button toggle as a checkbox so it can be
            // toggled on or off.
            this._type = 'checkbox';
            this._isSingleSelector = false;
        }
    }
    Object.defineProperty(MdButtonToggle.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MdButtonToggle.prototype.ngOnInit = function () {
        if (this.id == null) {
            this.id = "md-button-toggle-" + _uniqueIdCounter++;
        }
        if (this.buttonToggleGroup && this._value == this.buttonToggleGroup.value) {
            this._checked = true;
        }
    };
    Object.defineProperty(MdButtonToggle.prototype, "inputId", {
        get: function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggle.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (newCheckedState) {
            if (this._isSingleSelector) {
                if (newCheckedState) {
                    // Notify all button toggles with the same name (in the same group) to un-check.
                    this.buttonToggleDispatcher.notify(this.id, this.name);
                }
            }
            this._checked = newCheckedState;
            if (newCheckedState && this._isSingleSelector && this.buttonToggleGroup.value != this.value) {
                this.buttonToggleGroup.selected = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggle.prototype, "value", {
        /** MdButtonToggleGroup reads this to assign its own value. */
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value != value) {
                if (this.buttonToggleGroup != null && this.checked) {
                    this.buttonToggleGroup.value = value;
                }
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Dispatch change event with current value. */
    MdButtonToggle.prototype._emitChangeEvent = function () {
        var event = new MdButtonToggleChange();
        event.source = this;
        event.value = this._value;
        this._change.emit(event);
    };
    Object.defineProperty(MdButtonToggle.prototype, "disabled", {
        get: function () {
            return this._disabled || (this.buttonToggleGroup != null && this.buttonToggleGroup.disabled) ||
                (this.buttonToggleGroupMultiple != null && this.buttonToggleGroupMultiple.disabled);
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Toggle the state of the current button toggle. */
    MdButtonToggle.prototype._toggle = function () {
        this.checked = !this.checked;
    };
    /** Checks the button toggle due to an interaction with the underlying native input. */
    MdButtonToggle.prototype._onInputChange = function (event) {
        event.stopPropagation();
        if (this._isSingleSelector) {
            // Propagate the change one-way via the group, which will in turn mark this
            // button toggle as checked.
            this.checked = true;
            this.buttonToggleGroup.selected = this;
            this.buttonToggleGroup.onTouched();
        }
        else {
            this._toggle();
        }
        // Emit a change event when the native input does.
        this._emitChangeEvent();
    };
    /** TODO: internal */
    MdButtonToggle.prototype._onInputClick = function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    __decorate([
        _angular_core.HostBinding(),
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], MdButtonToggle.prototype, "id", void 0);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', String)
    ], MdButtonToggle.prototype, "name", void 0);
    __decorate([
        _angular_core.Output(), 
        __metadata('design:type', rxjs_Observable.Observable)
    ], MdButtonToggle.prototype, "change", null);
    __decorate([
        _angular_core.HostBinding('class.md-button-toggle-checked'),
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggle.prototype, "checked", null);
    __decorate([
        _angular_core.Input(), 
        __metadata('design:type', Object)
    ], MdButtonToggle.prototype, "value", null);
    __decorate([
        _angular_core.HostBinding('class.md-button-toggle-disabled'),
        _angular_core.Input(), 
        __metadata('design:type', Boolean)
    ], MdButtonToggle.prototype, "disabled", null);
    MdButtonToggle = __decorate([
        _angular_core.Component({selector: 'md-button-toggle',
            template: "<label [attr.for]=\"inputId\" class=\"md-button-toggle-label\"> <input #input class=\"md-button-toggle-input md-visually-hidden\" [type]=\"_type\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled\" [name]=\"name\" (change)=\"_onInputChange($event)\" (click)=\"_onInputClick($event)\"> <div class=\"md-button-toggle-label-content\"> <ng-content></ng-content> </div> </label> ",
            styles: ["md-button-toggle-group { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); position: relative; display: inline-flex; border-radius: 3px; cursor: pointer; white-space: nowrap; } .md-button-toggle-disabled .md-button-toggle-label-content { cursor: default; } md-button-toggle { white-space: nowrap; } .md-button-toggle-label-content { display: inline-block; line-height: 36px; padding: 0 16px; cursor: pointer; } .md-button-toggle-label-content > * { vertical-align: middle; } /*# sourceMappingURL=button-toggle.css.map */ "],
            encapsulation: _angular_core.ViewEncapsulation.None,
        }),
        __param(0, _angular_core.Optional()),
        __param(1, _angular_core.Optional()), 
        __metadata('design:paramtypes', [MdButtonToggleGroup, MdButtonToggleGroupMultiple, _angular2Material_core.MdUniqueSelectionDispatcher])
    ], MdButtonToggle);
    return MdButtonToggle;
}());
var MdButtonToggleModule = (function () {
    function MdButtonToggleModule() {
    }
    MdButtonToggleModule.forRoot = function () {
        return {
            ngModule: MdButtonToggleModule,
            providers: [_angular2Material_core.MdUniqueSelectionDispatcher]
        };
    };
    MdButtonToggleModule = __decorate([
        _angular_core.NgModule({
            imports: [_angular_forms.FormsModule],
            exports: [MdButtonToggleGroup, MdButtonToggleGroupMultiple, MdButtonToggle],
            declarations: [MdButtonToggleGroup, MdButtonToggleGroupMultiple, MdButtonToggle],
        }), 
        __metadata('design:paramtypes', [])
    ], MdButtonToggleModule);
    return MdButtonToggleModule;
}());

exports.MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
exports.MdButtonToggleChange = MdButtonToggleChange;
exports.MdButtonToggleGroup = MdButtonToggleGroup;
exports.MdButtonToggleGroupMultiple = MdButtonToggleGroupMultiple;
exports.MdButtonToggle = MdButtonToggle;
exports.MdButtonToggleModule = MdButtonToggleModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));