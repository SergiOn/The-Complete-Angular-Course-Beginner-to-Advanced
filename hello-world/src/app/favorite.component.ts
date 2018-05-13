import {Component, Input} from '@angular/core';

@Component({
  selector: 'favorite',
  template: `
    <!--<div>isFavorite: {{isFavorite | json}}</div>-->
    <div>isFavorite: {{isSelected | json}}</div>
  `,
  // inputs: ['isFavorite']
})
export class FavoriteComponent {
  // @Input() isFavorite: boolean;
  // isFavorite: boolean;
  @Input('isFavorite') isSelected: boolean;


}
