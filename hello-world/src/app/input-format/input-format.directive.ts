import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input()
  format: string;

  @Input()
  appInputFormat: string;

  @HostListener('focus')
  onFocus() {
    console.log('on focus');
    console.log('format:', this.format);
    console.log('appInputFormat:', this.appInputFormat);
  }

  @HostListener('blur')
  onBlur() {
    console.log('on blur');

    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLocaleLowerCase();
  }

  constructor(private el: ElementRef) { }

}
