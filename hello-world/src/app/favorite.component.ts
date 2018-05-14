import {Component, Input} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // inputs: ['isFavorite']
})
export class FavoriteComponent {
  // @Input() isFavorite: boolean;
  // isFavorite: boolean;
  @Input('isFavorite') isSelected: boolean;


}
