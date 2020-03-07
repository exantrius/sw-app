import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Character from '@app/model/character';

/** Http starwars people service. */
export abstract class StarwarsPeopleService {

  /** Returns all starwars persons.  */
  abstract getPersons(): Observable<Character[]>;

  /** Searches the starwars persons by given name. */
  abstract searchPersons(name: string): Observable<Character[]>;
}
