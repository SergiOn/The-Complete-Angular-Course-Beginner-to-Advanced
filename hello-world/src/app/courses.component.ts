import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <img [src]="imageUrl" />
    <table>
      <tr>
        <!--<td [colspan]="colSpan"></td>-->
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    
    <input type="text" (keyup.enter)="onKeyUp()" />
    <input type="text" #email (keyup.enter)="onKeyUp(email.value)" />
    
    <button class="btn badge-primary" [class.active]="activated">Save</button>
    <button [style.backgroundColor]="activated ? 'blue' : 'white'">Save</button>
  `
})
export class CoursesComponent {
  imageUrl = '';
  colSpan = 2;

  activated = true;

  onKeyUp(email) {
    console.log('ENTER was pressed', email);
  }
}
