import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map, switchMap, catchError } from 'rxjs/operators';

import Character from '@app/model/character';

import {StarwarsPeopleService} from './starwars_people_service';
import {StarwarsPeopleData} from './starwars_people_data';

/** Implementation of starwars people data service. */
@Injectable()
export class StarwarsPeopleDataImpl implements StarwarsPeopleData {

  // Testing;
  private characters: Character[] = [
    { name: 'test', birth_year: '1Y', gender: 'male'},
    { name: 'test2', birth_year: '2Y', gender: 'male'},
    { name: 'test3', birth_year: '2Y', gender: 'male'},
    { name: 'test', birth_year: '1Y', gender: 'male'},
    { name: 'test2', birth_year: '2Y', gender: 'male'},
    { name: 'test3', birth_year: '2Y', gender: 'male'},
];

  private readonly refreshSubject = new Subject<void>();
  private readonly filterByGenderSubject = new Subject<string>();
  private readonly searchSubject = new Subject<string>();

  private filterByGenderString: string;
  private searchString: string;

  private readonly subscription: Subscription;

  get data(): Character[] {
    return this.characters;
  }

  constructor(private readonly starwarsPeopleService: StarwarsPeopleService) {}

  refresh(): void {
    this.refreshSubject.next();
  }

  getGenderList(): string[] {
    return [];
  }

  set filterByGender(gender: string) {
    this.filterByGenderString = gender;
    this.filterByGenderSubject.next(gender);
  }

  get filterByGender(): string {
    return this.filterByGenderString;
  }

  set search(name: string) {
    this.searchString = name;
    this.searchSubject.next(name);
  }

  get search(): string {
    return this.searchString;
  }

  dispose(): void {
    return this.subscription && this.subscription.unsubscribe();
  }
}
