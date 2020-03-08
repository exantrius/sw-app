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

  constructor(readonly starwarsPeopleData: StarwarsPeopleData) {}

  ngOnDestroy(): void {
    this.starwarsPeopleData.dispose();
  }

  genderFilter(gender: string): void {
    this.starwarsPeopleData.filterByGender = gender;
  }

  search(name: string): void {
    this.starwarsPeopleData.search = name;
  }

  resetFilter() {
    this.starwarsPeopleData.refresh();
  }
}
