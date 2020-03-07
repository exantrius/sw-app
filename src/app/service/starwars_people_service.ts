import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import Character from '@app/model/character';

export abstract class StarwarsPeopleService {

  /** Returns all starwars persons.  */
  abstract getPersons(): Observable<Character[]>;

}
