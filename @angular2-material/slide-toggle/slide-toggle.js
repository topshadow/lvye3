var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer, forwardRef, ChangeDetectionStrategy, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanFieldValue, applyCssTransform } from '@angular2-material/core';
import { Observable } from 'rxjs/Observable';
import { MdGestureConfig } from '@angular2-material/core';
export var MD_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MdSlideToggle; }),
    multi: true
};
// A simple change event emitted by the MdSlideToggle component.
export var MdSlideToggleChange = (function () {
    function MdSlideToggleChange() {
    }
    return MdSlideToggleChange;
}());
// Increasing integer for generating unique ids for slide-toggle components.
var nextId = 0;
export var MdSlideToggle = (function () {
    function MdSlideToggle(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // A unique id for the slide-toggle. By default the id is auto-generated.
        this._uniqueId = "md-slide-toggle-" + ++nextId;
        this._checked = false;
        this._hasFocus = false;
        this._isMousedown = false;
        this._slideRenderer = null;
        this.disabled = false;
        this.name = null;
        this.id = this._uniqueId;
        this.tabIndex = 0;
        this.ariaLabel = null;
        this.ariaLabelledby = null;
        this._change = new EventEmitter();
        this.change = this._change.asObservable();
        // Returns the unique id for the visual hidden input.
        this.getInputId = function () { return ((_this.id || _this._uniqueId) + "-input"); };
    }
    /** TODO: internal */
    MdSlideToggle.prototype.ngAfterContentInit = function () {
        this._slideRenderer = new SlideToggleRenderer(this._elementRef);
    };
    /**
     * The onChangeEvent method will be also called on click.
     * This is because everything for the slide-toggle is wrapped inside of a label,
     * which triggers a onChange event on click.
     */
    MdSlideToggle.prototype._onChangeEvent = function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        // Once a drag is currently in progress, we do not want to toggle the slide-toggle on a click.
        if (!this.disabled && !this._slideRenderer.isDragging()) {
            this.toggle();
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
    };
    MdSlideToggle.prototype._onInputClick = function (event) {
        this.onTouched();
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    MdSlideToggle.prototype._setMousedown = function () {
        var _this = this;
        // We only *show* the focus style when focus has come to the button via the keyboard.
        // The Material Design spec is silent on this topic, and without doing this, the
        // button continues to look :active after clicking.
        // @see http://marcysutton.com/button-focus-hell/
        this._isMousedown = true;
        setTimeout(function () { return _this._isMousedown = false; }, 100);
    };
    MdSlideToggle.prototype._onInputFocus = function () {
        // Only show the focus / ripple indicator when the focus was not triggered by a mouse
        // interaction on the component.
        if (!this._isMousedown) {
            this._hasFocus = true;
        }
    };
    MdSlideToggle.prototype._onInputBlur = function () {
        this._hasFocus = false;
        this.onTouched();
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.writeValue = function (value) {
        this.checked = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    Object.defineProperty(MdSlideToggle.prototype, "checked", {
        get: function () {
            return !!this._checked;
        },
        set: function (value) {
            if (this.checked !== !!value) {
                this._checked = value;
                this.onChange(this._checked);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlideToggle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdSlideToggle.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    MdSlideToggle.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdSlideToggle.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    /** Emits the change event to the `change` output EventEmitter */
    MdSlideToggle.prototype._emitChangeEvent = function () {
        var event = new MdSlideToggleChange();
        event.source = this;
        event.checked = this.checked;
        this._change.emit(event);
    };
    /** TODO: internal */
    MdSlideToggle.prototype._onDragStart = function () {
        this._slideRenderer.startThumbDrag(this.checked);
    };
    /** TODO: internal */
    MdSlideToggle.prototype._onDrag = function (event) {
        this._slideRenderer.updateThumbPosition(event.deltaX);
    };
    /** TODO: internal */
    MdSlideToggle.prototype._onDragEnd = function () {
        var _this = this;
        // Notice that we have to stop outside of the current event handler,
        // because otherwise the click event will be fired and will reset the new checked variable.
        setTimeout(function () {
            _this.checked = _this._slideRenderer.stopThumbDrag();
        }, 0);
    };
    __decorate([
        Input(),
        BooleanFieldValue(), 
        __metadata('design:type', Boolean)
    ], MdSlideToggle.prototype, "disabled", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "name", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "id", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], MdSlideToggle.prototype, "tabIndex", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "ariaLabel", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "ariaLabelledby", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Observable)
    ], MdSlideToggle.prototype, "change", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Object)
    ], MdSlideToggle.prototype, "checked", null);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], MdSlideToggle.prototype, "color", null);
    MdSlideToggle = __decorate([
        Component({
            moduleId: module.id,
            selector: 'md-slide-toggle',
            host: {
                '[class.md-checked]': 'checked',
                '[class.md-disabled]': 'disabled',
                // This md-slide-toggle prefix will change, once the temporary ripple is removed.
                '[class.md-slide-toggle-focused]': '_hasFocus',
                '(mousedown)': '_setMousedown()'
            },
            templateUrl: 'slide-toggle.html',
            styleUrls: ['slide-toggle.css'],
            providers: [MD_SLIDE_TOGGLE_VALUE_ACCESSOR],
            changeDetection: ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [ElementRef, Renderer])
    ], MdSlideToggle);
    return MdSlideToggle;
}());
/**
 * Renderer for the Slide Toggle component, which separates DOM modification in its own class
 */
var SlideToggleRenderer = (function () {
    function SlideToggleRenderer(_elementRef) {
        this._elementRef = _elementRef;
        this._thumbEl = _elementRef.nativeElement.querySelector('.md-slide-toggle-thumb-container');
        this._thumbBarEl = _elementRef.nativeElement.querySelector('.md-slide-toggle-bar');
    }
    /** Whether the slide-toggle is currently dragging. */
    SlideToggleRenderer.prototype.isDragging = function () {
        return !!this._thumbBarWidth;
    };
    /** Initializes the drag of the slide-toggle. */
    SlideToggleRenderer.prototype.startThumbDrag = function (checked) {
        if (!this._thumbBarWidth) {
            this._thumbBarWidth = this._thumbBarEl.clientWidth - this._thumbEl.clientWidth;
            this._checked = checked;
            this._thumbEl.classList.add('md-dragging');
        }
    };
    /** Stops the current drag and returns the new checked value. */
    SlideToggleRenderer.prototype.stopThumbDrag = function () {
        if (this._thumbBarWidth) {
            this._thumbBarWidth = null;
            this._thumbEl.classList.remove('md-dragging');
            applyCssTransform(this._thumbEl, '');
            return this._percentage > 50;
        }
    };
    /** Updates the thumb containers position from the specified distance. */
    SlideToggleRenderer.prototype.updateThumbPosition = function (distance) {
        if (this._thumbBarWidth) {
            this._percentage = this._getThumbPercentage(distance);
            applyCssTransform(this._thumbEl, "translate3d(" + this._percentage + "%, 0, 0)");
        }
    };
    /** Retrieves the percentage of thumb from the moved distance. */
    SlideToggleRenderer.prototype._getThumbPercentage = function (distance) {
        var percentage = (distance / this._thumbBarWidth) * 100;
        // When the toggle was initially checked, then we have to start the drag at the end.
        if (this._checked) {
            percentage += 100;
        }
        return Math.max(0, Math.min(percentage, 100));
    };
    return SlideToggleRenderer;
}());
export var MdSlideToggleModule = (function () {
    function MdSlideToggleModule() {
    }
    MdSlideToggleModule.forRoot = function () {
        return {
            ngModule: MdSlideToggleModule,
            providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: MdGestureConfig }]
        };
    };
    MdSlideToggleModule = __decorate([
        NgModule({
            imports: [FormsModule],
            exports: [MdSlideToggle],
            declarations: [MdSlideToggle],
        }), 
        __metadata('design:paramtypes', [])
    ], MdSlideToggleModule);
    return MdSlideToggleModule;
}());

//# sourceMappingURL=slide-toggle.js.map
