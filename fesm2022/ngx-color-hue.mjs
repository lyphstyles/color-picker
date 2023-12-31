import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { forwardRef, Component, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';
import * as i1 from 'ngx-color';
import { ColorWrap, toState, HueModule } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class HuePickerComponent extends ColorWrap {
    /** Pixel value for picker width */
    width = 316;
    /** Pixel value for picker height */
    height = 16;
    radius = 2;
    direction = 'horizontal';
    hidePointer = false;
    pointer = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -2px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    };
    constructor() {
        super();
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
        }
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange({ a: 1, h: data.h, l: 0.5, s: 1 }, $event);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HuePickerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.1", type: HuePickerComponent, selector: "color-hue-picker", inputs: { width: "width", height: "height", radius: "radius", direction: "direction", hidePointer: "hidePointer" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => HuePickerComponent),
                multi: true,
            },
            {
                provide: ColorWrap,
                useExisting: forwardRef(() => HuePickerComponent),
            },
        ], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: `
  <div class="hue-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height"
  >
    <color-hue [hsl]="hsl" [pointer]="pointer"
      [direction]="direction" [radius]="radius"
      [hidePointer]="hidePointer"
      (onChange)="handlePickerChange($event)"
    ></color-hue>
  </div>
  `, isInline: true, styles: [".hue-picker{position:relative}\n"], dependencies: [{ kind: "component", type: i1.HueComponent, selector: "color-hue", inputs: ["hsl", "pointer", "radius", "shadow", "hidePointer", "direction"], outputs: ["onChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: HuePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'color-hue-picker', template: `
  <div class="hue-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height"
  >
    <color-hue [hsl]="hsl" [pointer]="pointer"
      [direction]="direction" [radius]="radius"
      [hidePointer]="hidePointer"
      (onChange)="handlePickerChange($event)"
    ></color-hue>
  </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => HuePickerComponent),
                            multi: true,
                        },
                        {
                            provide: ColorWrap,
                            useExisting: forwardRef(() => HuePickerComponent),
                        },
                    ], styles: [".hue-picker{position:relative}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], height: [{
                type: Input
            }], radius: [{
                type: Input
            }], direction: [{
                type: Input
            }], hidePointer: [{
                type: Input
            }] } });
class ColorHueModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorHueModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.1", ngImport: i0, type: ColorHueModule, declarations: [HuePickerComponent], imports: [CommonModule, HueModule], exports: [HuePickerComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorHueModule, imports: [CommonModule, HueModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorHueModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HuePickerComponent],
                    exports: [HuePickerComponent],
                    imports: [CommonModule, HueModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorHueModule, HuePickerComponent };
//# sourceMappingURL=ngx-color-hue.mjs.map
