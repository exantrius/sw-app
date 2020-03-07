import Character from '@app/model/character';

/** Service provides a single data source and manipulate with the data. */
export abstract class StarwarsPeopleData {

  /** Readonly data collection. */
  abstract get data(): Character[];

  /** Fetches starwars data from the service. */
  abstract refresh(): void;

  /** Returns list of genders based on data. */
  abstract getGenderList(): string[];

  /** Set up filtering by gender. */
  abstract set filterByGender(value: string);

  /** Get current filter by gender. */
  abstract get filterByGender(): string;

  /** Set up searching by name. */
  abstract set search(name: string);

  /** Get current searching by name. */
  abstract get search(): string;

  abstract dispose(): void;
}
