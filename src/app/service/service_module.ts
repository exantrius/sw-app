import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import {StarwarsPeopleService} from './starwars_people_service';
import {StarwarsPeopleServiceImpl} from './starwars_people_service_impl';

import {StarwarsPeopleData} from './starwars_people_data';
import {StarwarsPeopleDataImpl} from './starwars_people_data_impl';

/** Services module class. */
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    {provide: StarwarsPeopleService, useClass: StarwarsPeopleServiceImpl},
    {provide: StarwarsPeopleData, useClass: StarwarsPeopleDataImpl},
  ],
})
export class ServiceModule {
}
