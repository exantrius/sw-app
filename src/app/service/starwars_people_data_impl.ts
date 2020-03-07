import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { filter, map, switchMap, catchError } from 'rxjs/operators';

import Character from '@app/model/character';

import {StarwarsPeopleService} from './starwars_people_service';
import {StarwarsPropleData} from './starwars_people_data';

/** Implementation of starwars people data service. */
@Injectable()
export class StarwarsPeopleDataImpl implements StarwarsPropleData {

  private characters: Character[] = [];

  private readonly refreshSubject = new Subject<void>();
  private readonly filterByGenderSubject = new Subject<string>();
  private readonly searchSubject = new Subject<string>();

  private filterByGenderString: string;
  private searchString: string;

  private readonly subscription: Subscription;

  get data(): Character[] {
    return this.data;
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
