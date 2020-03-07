import { Component, Input } from '@angular/core';

import Character from '@app/model/character';

/** Starwars people cart component. */
@Component({
  selector: 'app-people-cart',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  @Input() character!: Character;

}
