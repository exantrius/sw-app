import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Character from '@app/model/character';
import {StarwarsPeopleService} from './starwars_people_service';

interface Result {
  results: Character[];
}

/** external api url. */
const SERVICE_URL = 'https://swapi.co/api/people';

/** Implementation of Starwars people service. */
@Injectable()
export class StarwarsPeopleServiceImpl implements StarwarsPeopleService {

  constructor(private readonly httpClient: HttpClient) {}

  getPersons(): Observable<Character[]> {
    return this.httpClient.get<Result>(SERVICE_URL)
      .pipe(map((r: Result) => r.results));
  }

  searchPersons(name: string): Observable<Character[]> {
    return this.httpClient.get<Result>(`${SERVICE_URL}?search=${name}`)
      .pipe(map((r: Result) => r.results));
  }

}