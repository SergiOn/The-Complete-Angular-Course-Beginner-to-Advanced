import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from "@angular/core";

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const directive = new InputFormatDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
