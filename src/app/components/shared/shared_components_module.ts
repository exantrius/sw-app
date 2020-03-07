import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter/filter.component';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people_list/people_list.component';

/** A module of shared components. */
@NgModule({
  declarations: [
    FilterComponent,
    PeopleComponent,
    PeopleListComponent,
  ],
  exports: [
    FilterComponent,
    PeopleComponent,
    PeopleListComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedComponentsModule {
}
