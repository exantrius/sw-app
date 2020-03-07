import { NgModule } from '@angular/core';

import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people_list/people_list.component';

/** A module of shared components. */
@NgModule({
  declarations: [
    PeopleComponent,
    PeopleListComponent,
  ],
  exports: [
    PeopleComponent,
    PeopleListComponent,
  ],
})
export class SharedComponentsModule {
}
