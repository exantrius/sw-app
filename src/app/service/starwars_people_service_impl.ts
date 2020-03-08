import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, startWith, scan, concatMap } from 'rxjs/operators';

import Character from '@app/model/character';
import {StarwarsPeopleService} from './starwars_people_service';

interface ResultRespose {
  count: number;
  next?: string;
  previous?: string;
  results: Character[];
}

type OnePageRequestFunc = (httpClient: HttpClient, url: string) => Observable<ResultRespose>;

/** external api url. */
const SERVICE_URL = 'https://swapi.co/api/people';

/** Implementation of Starwars people service. */
@Injectable()
export class StarwarsPeopleServiceImpl implements StarwarsPeopleService {

  constructor(private readonly httpClient: HttpClient) {}

  /** Requests one page. */
  private static getOnePage(httpClient: HttpClient, url: string): Observable<ResultRespose> {
    return httpClient.get<ResultRespose>(url);
  }

  /** Requests chain of pages. */
  private static batchGet(getter: OnePageRequestFunc, startUrl: string, httpClient: HttpClient): Observable<ResultRespose> {
    return getter(httpClient, startUrl)
      .pipe(concatMap((result: ResultRespose) => {
        return result.next
          ? StarwarsPeopleServiceImpl.batchGet(getter, result.next, httpClient).pipe(startWith(result))
          : of(result);
      }));
  }

  getPersons(): Observable<Character[]> {
    return StarwarsPeopleServiceImpl.batchGet(
              StarwarsPeopleServiceImpl.getOnePage,
              SERVICE_URL,
              this.httpClient)
      .pipe(
        scan((accumulted, newBatch) => {
          if (accumulted) {
            newBatch.results = accumulted.results.concat(newBatch.results);
          }
          return newBatch;
        }),
        map((r: ResultRespose) => r.results));
  }

  searchPersons(name: string): Observable<Character[]> {
    return StarwarsPeopleServiceImpl.batchGet(
              StarwarsPeopleServiceImpl.getOnePage,
              `${SERVICE_URL}?search=${name}`,
              this.httpClient)
      .pipe(
        scan((accumulted, newBatch) => {
          if (accumulted) {
            newBatch.results = accumulted.results.concat(newBatch.results);
          }
          return newBatch;
        }),
        map((r: ResultRespose) => r.results));
  }

}
