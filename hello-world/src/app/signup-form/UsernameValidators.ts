import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static canNotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).includes(' ')) {
      return {
        cannotContainSpace: true
      };
    }
    return null;
  }

}
