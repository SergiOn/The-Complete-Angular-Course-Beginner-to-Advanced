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

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors|null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Mosh') {
          resolve({ shouldBeUnique: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

}
