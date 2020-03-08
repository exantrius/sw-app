import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    FormsModule,
  ]
})
export class SharedComponentsModule {
}
