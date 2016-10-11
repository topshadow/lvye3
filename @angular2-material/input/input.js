var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { forwardRef, Component, HostBinding, Input, Directive, ContentChild, ContentChildren, ViewChild, ElementRef, QueryList, EventEmitter, Output, NgModule, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BooleanFieldValue, MdError } from '@angular2-material/core';
import { Observable } from 'rxjs/Observable';
var noop = function () { };
export var MD_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MdInput; }),
    multi: true
};
// Invalid input type. Using one of these will throw an MdInputUnsupportedTypeError.
var MD_INPUT_INVALID_INPUT_TYPE = [
    'file',
    'radio',
    'checkbox',
];
var nextUniqueId = 0;
export var MdInputPlaceholderConflictError = (function (_super) {
    __extends(MdInputPlaceholderConflictError, _super);
    function MdInputPlaceholderConflictError() {
        _super.call(this, 'Placeholder attribute and child element were both specified.');
    }
    return MdInputPlaceholderConflictError;
}(MdError));
export var MdInputUnsupportedTypeError = (function (_super) {
    __extends(MdInputUnsupportedTypeError, _super);
    function MdInputUnsupportedTypeError(type) {
        _super.call(this, "Input type \"" + type + "\" isn't supported by md-input.");
    }
    return MdInputUnsupportedTypeError;
}(MdError));
export var MdInputDuplicatedHintError = (function (_super) {
    __extends(MdInputDuplicatedHintError, _super);
    function MdInputDuplicatedHintError(align) {
        _super.call(this, "A hint was already declared for 'align=\"" + align + "\"'.");
    }
    return MdInputDuplicatedHintError;
}(MdError));
/**
 * The placeholder directive. The content can declare this to implement more
 * complex placeholders.
 */
export var MdPlaceholder = (function () {
    function MdPlaceholder() {
    }
    MdPlaceholder = __decorate([
        Directive({
            selector: 'md-placeholder'
        }), 
        __metadata('design:paramtypes', [])
    ], MdPlaceholder);
    return MdPlaceholder;
}());
/** The hint directive, used to tag content as hint labels (going under the input). */
export var MdHint = (function () {
    function MdHint() {
        // Whether to align the hint label at the start or end of the line.
        this.align = 'start';
    }
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdHint.prototype, "align", void 0);
    MdHint = __decorate([
        Directive({
            selector: 'md-hint',
            host: {
                '[class.md-right]': 'align == "end"',
                '[class.md-hint]': 'true'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdHint);
    return MdHint;
}());
/**
 * Component that represents a text input. It encapsulates the <input> HTMLElement and
 * improve on its behaviour, along with styling it according to the Material Design.
 */
export var MdInput = (function () {
    function MdInput() {
        this._focused = false;
        this._value = '';
        /** Callback registered via registerOnTouched (ControlValueAccessor) */
        this._onTouchedCallback = noop;
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop;
        /**
         * Bindings.
         */
        this.align = 'start';
        this.dividerColor = 'primary';
        this.floatingPlaceholder = true;
        this.hintLabel = '';
        this.autofocus = false;
        this.disabled = false;
        this.id = "md-input-" + nextUniqueId++;
        this.list = null;
        this.max = null;
        this.maxlength = null;
        this.min = null;
        this.minlength = null;
        this.placeholder = null;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.step = null;
        this.tabindex = null;
        this.type = 'text';
        this.name = null;
        this._blurEmitter = new EventEmitter();
        this._focusEmitter = new EventEmitter();
    }
    Object.defineProperty(MdInput.prototype, "focused", {
        /** Readonly properties. */
        get: function () { return this._focused; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "empty", {
        get: function () { return (this._value == null || this._value === '') && this.type !== 'date'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "characterCount", {
        get: function () {
            return this.empty ? 0 : ('' + this._value).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "inputId", {
        get: function () { return this.id + "-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "onBlur", {
        get: function () {
            return this._blurEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "onFocus", {
        get: function () {
            return this._focusEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            v = this._convertValueForInputType(v);
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MdInput.prototype, "_align", {
        // This is to remove the `align` property of the `md-input` itself. Otherwise HTML5
        // might place it as RTL when we don't want to. We still want to use `align` as an
        // Input though, so we use HostBinding.
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /** Set focus on input */
    MdInput.prototype.focus = function () {
        this._inputElement.nativeElement.focus();
    };
    MdInput.prototype._handleFocus = function (event) {
        this._focused = true;
        this._focusEmitter.emit(event);
    };
    MdInput.prototype._handleBlur = function (event) {
        this._focused = false;
        this._onTouchedCallback();
        this._blurEmitter.emit(event);
    };
    MdInput.prototype._handleChange = function (event) {
        this.value = event.target.value;
        this._onTouchedCallback();
    };
    MdInput.prototype._hasPlaceholder = function () {
        return !!this.placeholder || this._placeholderChild != null;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    /** TODO: internal */
    MdInput.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._validateConstraints();
        // Trigger validation when the hint children change.
        this._hintChildren.changes.subscribe(function () {
            _this._validateConstraints();
        });
    };
    /** TODO: internal */
    MdInput.prototype.ngOnChanges = function (changes) {
        this._validateConstraints();
    };
    /**
     * Convert the value passed in to a value that is expected from the type of the md-input.
     * This is normally performed by the *_VALUE_ACCESSOR in forms, but since the type is bound
     * on our internal input it won't work locally.
     * @private
     */
    MdInput.prototype._convertValueForInputType = function (v) {
        switch (this.type) {
            case 'number': return parseFloat(v);
            default: return v;
        }
    };
    /**
     * Ensure that all constraints defined by the API are validated, or throw errors otherwise.
     * Constraints for now:
     *   - placeholder attribute and <md-placeholder> are mutually exclusive.
     *   - type attribute is not one of the forbidden types (see constant at the top).
     *   - Maximum one of each `<md-hint>` alignment specified, with the attribute being
     *     considered as align="start".
     * @private
     */
    MdInput.prototype._validateConstraints = function () {
        var _this = this;
        if (this.placeholder != '' && this.placeholder != null && this._placeholderChild != null) {
            throw new MdInputPlaceholderConflictError();
        }
        if (MD_INPUT_INVALID_INPUT_TYPE.indexOf(this.type) != -1) {
            throw new MdInputUnsupportedTypeError(this.type);
        }
        if (this._hintChildren) {
            // Validate the hint labels.
            var startHint_1 = null;
            var endHint_1 = null;
            this._hintChildren.forEach(function (hint) {
                if (hint.align == 'start') {
                    if (startHint_1 || _this.hintLabel) {
                        throw new MdInputDuplicatedHintError('start');
                    }
                    startHint_1 = hint;
                }
                else if (hint.align == 'end') {
                    if (endHint_1) {
                        throw new MdInputDuplicatedHintError('end');
                    }
                    endHint_1 = hint;
                }
            });
        }
    };
    __decorate([
        Input('aria-label'), 
        __metadata('design:type', String)
    ], MdInput.prototype, "ariaLabel", void 0);
    __decorate([
        Input('aria-labelledby'), 
        __metadata('design:type', String)
    ], MdInput.prototype, "ariaLabelledBy", void 0);
    __decorate([
        Input('aria-disabled'),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "ariaDisabled", void 0);
    __decorate([
        Input('aria-required'),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "ariaRequired", void 0);
    __decorate([
        Input('aria-invalid'),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "ariaInvalid", void 0);
    __decorate([
        ContentChild(MdPlaceholder), 
        __metadata('design:type', MdPlaceholder)
    ], MdInput.prototype, "_placeholderChild", void 0);
    __decorate([
        ContentChildren(MdHint), 
        __metadata('design:type', QueryList)
    ], MdInput.prototype, "_hintChildren", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdInput.prototype, "align", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdInput.prototype, "dividerColor", void 0);
    __decorate([
        Input(),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "floatingPlaceholder", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "hintLabel", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "autocomplete", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "autocorrect", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "autocapitalize", void 0);
    __decorate([
        Input(),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "autofocus", void 0);
    __decorate([
        Input(),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "disabled", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "id", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "list", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdInput.prototype, "max", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MdInput.prototype, "maxlength", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdInput.prototype, "min", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MdInput.prototype, "minlength", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "readonly", void 0);
    __decorate([
        Input(),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "required", void 0);
    __decorate([
        Input(),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdInput.prototype, "spellcheck", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MdInput.prototype, "step", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MdInput.prototype, "tabindex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "type", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "name", void 0);
    __decorate([
        Output('blur'), 
        __metadata('design:type', Observable)
    ], MdInput.prototype, "onBlur", null);
    __decorate([
        Output('focus'), 
        __metadata('design:type', Observable)
    ], MdInput.prototype, "onFocus", null);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdInput.prototype, "value", null);
    __decorate([
        HostBinding('attr.align'), 
        __metadata('design:type', Object)
    ], MdInput.prototype, "_align", null);
    __decorate([
        ViewChild('input'), 
        __metadata('design:type', ElementRef)
    ], MdInput.prototype, "_inputElement", void 0);
    MdInput = __decorate([
        Component({
            moduleId: module.id,
            selector: 'md-input',
            templateUrl: 'input.html',
            styleUrls: ['input.css'],
            providers: [MD_INPUT_CONTROL_VALUE_ACCESSOR],
            host: { '(click)': 'focus()' },
            encapsulation: ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], MdInput);
    return MdInput;
}());
export var MdInputModule = (function () {
    function MdInputModule() {
    }
    MdInputModule.forRoot = function () {
        return {
            ngModule: MdInputModule,
            providers: []
        };
    };
    MdInputModule = __decorate([
        NgModule({
            declarations: [MdPlaceholder, MdInput, MdHint],
            imports: [CommonModule, FormsModule],
            exports: [MdPlaceholder, MdInput, MdHint],
        }), 
        __metadata('design:paramtypes', [])
    ], MdInputModule);
    return MdInputModule;
}());

//# sourceMappingURL=input.js.map
