import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input, NgModule } from '@angular/core';
import { ColorWrap, HueModule, toState } from 'ngx-color';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "ngx-color";
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
export { HuePickerComponent };
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
export { ColorHueModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.1", ngImport: i0, type: ColorHueModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [HuePickerComponent],
                    exports: [HuePickerComponent],
                    imports: [CommonModule, HueModule],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2h1ZS9odWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUUzRyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVuRCxNQWtDYSxrQkFBbUIsU0FBUSxTQUFTO0lBQy9DLG1DQUFtQztJQUMxQixLQUFLLEdBQW9CLEdBQUcsQ0FBQztJQUN0QyxvQ0FBb0M7SUFDM0IsTUFBTSxHQUFvQixFQUFFLENBQUM7SUFDN0IsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNYLFNBQVMsR0FBOEIsWUFBWSxDQUFDO0lBQ3BELFdBQVcsR0FBWSxLQUFLLENBQUM7SUFDdEMsT0FBTyxHQUE0QjtRQUNqQyxLQUFLLEVBQUUsTUFBTTtRQUNiLE1BQU0sRUFBRSxNQUFNO1FBQ2QsWUFBWSxFQUFFLEtBQUs7UUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxlQUFlLEVBQUUsb0JBQW9CO1FBQ3JDLFNBQVMsRUFBRSxpQ0FBaUM7S0FDN0MsQ0FBQztJQUVGO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQzt1R0E3QlUsa0JBQWtCOzJGQUFsQixrQkFBa0IsK0pBWmxCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDakQsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxTQUFTO2dCQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2xEO1NBQ0Ysc0VBOUJTOzs7Ozs7Ozs7O0dBVVQ7O1NBc0JVLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQWxDOUIsU0FBUzsrQkFDRSxrQkFBa0IsWUFDbEI7Ozs7Ozs7Ozs7R0FVVCxtQkFRZ0IsdUJBQXVCLENBQUMsTUFBTSx1QkFDMUIsS0FBSyxhQUNmO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLG1CQUFtQixDQUFDOzRCQUNqRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsU0FBUzs0QkFDbEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUM7eUJBQ2xEO3FCQUNGOzBFQUlRLEtBQUs7c0JBQWIsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSzs7QUF5QlIsTUFLYSxjQUFjO3VHQUFkLGNBQWM7d0dBQWQsY0FBYyxpQkFyQ2Qsa0JBQWtCLGFBbUNuQixZQUFZLEVBQUUsU0FBUyxhQW5DdEIsa0JBQWtCO3dHQXFDbEIsY0FBYyxZQUZmLFlBQVksRUFBRSxTQUFTOztTQUV0QixjQUFjOzJGQUFkLGNBQWM7a0JBTDFCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ2xDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO29CQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDO2lCQUNuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdNb2R1bGUsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2xvcldyYXAsIEh1ZU1vZHVsZSwgdG9TdGF0ZSB9IGZyb20gJ25neC1jb2xvcic7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sb3ItaHVlLXBpY2tlcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJodWUtcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIlxuICA+XG4gICAgPGNvbG9yLWh1ZSBbaHNsXT1cImhzbFwiIFtwb2ludGVyXT1cInBvaW50ZXJcIlxuICAgICAgW2RpcmVjdGlvbl09XCJkaXJlY3Rpb25cIiBbcmFkaXVzXT1cInJhZGl1c1wiXG4gICAgICBbaGlkZVBvaW50ZXJdPVwiaGlkZVBvaW50ZXJcIlxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcbiAgICA+PC9jb2xvci1odWU+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgLmh1ZS1waWNrZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEh1ZVBpY2tlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvbG9yV3JhcCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEh1ZVBpY2tlckNvbXBvbmVudCksXG4gICAgfSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIdWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciB3aWR0aCAqL1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMzE2O1xuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciBoZWlnaHQgKi9cbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAxNjtcbiAgQElucHV0KCkgcmFkaXVzID0gMjtcbiAgQElucHV0KCkgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBoaWRlUG9pbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwb2ludGVyOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICB3aWR0aDogJzE4cHgnLFxuICAgIGhlaWdodDogJzE4cHgnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC05cHgsIC0ycHgpJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LCAyNDgsIDI0OCknLFxuICAgIGJveFNoYWRvdzogJzAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyknLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMucG9pbnRlci50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC0zcHgsIC05cHgpJztcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh0b1N0YXRlKHRoaXMuY29sb3IsIHRoaXMub2xkSHVlKSk7XG4gIH1cbiAgaGFuZGxlUGlja2VyQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSh7IGE6IDEsIGg6IGRhdGEuaCwgbDogMC41LCBzOiAxIH0sICRldmVudCk7XG4gIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbSHVlUGlja2VyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0h1ZVBpY2tlckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh1ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENvbG9ySHVlTW9kdWxlIHt9XG4iXX0=