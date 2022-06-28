import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  ViewContainerRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'ef-number-field',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberFieldDirective),
      multi: true,
    },
  ],
})
export class NumberFieldDirective implements ControlValueAccessor {
  private _value: string | null = null;

  get value () {
    return this._value;
  }

  set value (newValue) {
    if (newValue !== this._value) {
      this._value = newValue;
      this.onChange(this._value);
      this.onTouched();
    }
  }
  constructor(
    readonly elementRef: ElementRef,
    readonly viewContainerRef: ViewContainerRef
  ) { }

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue (value: number): void {
    this.elementRef.nativeElement.value = value;
  }

  registerOnChange (fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched (fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState (isDisabled: boolean): void {
    this.elementRef.nativeElement.disabled = isDisabled;
  }

  @HostListener('value-changed', ['$event.detail.value'])
  listenForValueChange (value: string) {
    this.value = value;
  }
}
