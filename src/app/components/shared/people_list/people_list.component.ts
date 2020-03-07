import { Component, Input } from '@angular/core';

import Character from '@app/model/character';

/** List of starwars people carts component. */
@Component({
  selector: 'app-people-list',
  templateUrl: './people_list.component.html',
  styleUrls: ['./people_list.component.scss'],
})
export class PeopleListComponent {

  @Input() characters: Character[];
}
