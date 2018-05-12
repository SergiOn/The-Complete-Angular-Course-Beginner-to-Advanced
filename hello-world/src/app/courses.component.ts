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
    <button class="btn badge-primary" [class.active]="activated">Save</button>
    <button [style.backgroundColor]="activated ? 'blue' : 'white'">Save</button>
  `
})
export class CoursesComponent {
  imageUrl = '';
  colSpan = 2;

  activated = true;
}
