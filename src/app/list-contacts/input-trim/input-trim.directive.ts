import {
  Directive,
  HostBinding,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appInputTrim]',
})
export class InputTrimDirective implements OnInit, OnDestroy {
  @HostBinding('value') mValue: string = ''; //must assign initial value so that you don't get an error
  sub: Subscription;
  constructor(private ngControl: NgControl) {}

  ngOnInit(): void {
    /**
     * Using valueChanges to update the ngModel value is more faster than
     * HostListener. We trim whiteSpaces from the controlled input as the
     * user types
     */
    this.sub = this.ngControl.valueChanges.subscribe((value: string) => {
      this.ngControl.control.setValue(value.trim(), { emitEvent: false });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * We update the raw DOM value attribute as the user types.
   * This will work if the user decides to use our attribute
   * directory in an uncontrolled input(input not controlled by a component state)
   */
  @HostListener('keyup', ['$event.target'])
  onKeyup(target: HTMLInputElement): void {
    const value = target.value;
    this.mValue = value.trim();
    // this.ngControl.control.setValue(value.trim(), { emitEvent: false });
  }
}
