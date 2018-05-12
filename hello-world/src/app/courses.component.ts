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
  `
})
export class CoursesComponent {
  imageUrl = '';
  colSpan = 2;
}
