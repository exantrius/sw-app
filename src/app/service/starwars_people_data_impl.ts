import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, merge } from 'rxjs';
import { filter, map, switchMap, catchError, tap } from 'rxjs/operators';

import Character from '@app/model/character';

import {StarwarsPeopleService} from './starwars_people_service';
import {StarwarsPeopleData} from './starwars_people_data';

/** Implementation of starwars people data service. */
@Injectable()
export class StarwarsPeopleDataImpl implements StarwarsPeopleData {

  private lastFetchedCharacters: Character[] = [];
  private characters: Character[] = [];

  private readonly refreshSubject = new Subject<void>();
  private readonly filterByGenderSubject = new Subject<string>();
  private readonly searchSubject = new Subject<string>();

  private filterByGenderString: string;
  private searchString: string;

  private readonly subscription: Subscription;

  get data(): Character[] {
    return this.characters;
  }

  constructor(private readonly starwarsPeopleService: StarwarsPeopleService) {

    this.subscription = merge(
        this.starwarsPeopleService.getPersons(),
        this.refreshSubject.pipe(
          switchMap(() => this.starwarsPeopleService.getPersons())),
        this.searchSubject.pipe(
          switchMap(name => this.starwarsPeopleService.searchPersons(name))
        ),
        this.filterByGenderSubject.pipe(
          map(() => this.lastFetchedCharacters)
        )
      )
      .pipe(
        tap(characters => {
          this.lastFetchedCharacters = characters;
          return characters;
        }),
        map(characters => {
          return !!this.filterByGenderString
            ? characters.filter(character => character.gender === this.filterByGenderString)
            : characters;
        })
      )
      .subscribe(characters => {
        this.characters = characters;
      });

  }

  refresh(): void {
    this.filterByGenderString = '';
    this.searchString = '';

    this.refreshSubject.next();
  }

  getGenderList(): string[] {
    return [... new Set(this.lastFetchedCharacters.map(entry => entry.gender))].sort();
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
