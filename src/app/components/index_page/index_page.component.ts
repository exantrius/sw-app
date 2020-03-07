import { Component, OnDestroy } from '@angular/core';

import {StarwarsPeopleData} from '@app/service/starwars_people_data';
import Character from '@app/model/character';

/** Index page component. */
@Component({
  selector: 'app-index-page',
  templateUrl: './index_page.component.html',
  styleUrls: ['./index_page.component.scss']
})
export class IndexPageComponent implements OnDestroy {

  peopleData: Character[];

  constructor(readonly starwarsPeopleData: StarwarsPeopleData) {
    console.log(starwarsPeopleData.data);
  }

  ngOnDestroy(): void {
    this.starwarsPeopleData.dispose();
  }
}
