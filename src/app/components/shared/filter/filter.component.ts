import { Component, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

/** Filtering starwars people list component. */
@Component({
  selector: 'app-filter-people',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnDestroy {

  @Input() searchString: string;
  @Input() genderList: string[];
  @Input() selectedGender: string;

  @Output() search = new EventEmitter();
  @Output() genderFilter = new EventEmitter();
  @Output() resetFilter = new EventEmitter();

  readonly searchQueryChangedSubscription: Subscription;
  readonly searchQueryChanged: Subject<string> = new Subject<string>();

  constructor() {
    // We are using debounce in 500 ms for make search call.
    this.searchQueryChangedSubscription =
      this.searchQueryChanged
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe(model => {
          this.searchString = model;
          this.search.emit(model);
        });
  }

  ngOnDestroy(): void {
    this.searchQueryChangedSubscription.unsubscribe();
  }

  searchInput(name: string): void {
    this.searchQueryChanged.next(name);
  }

  filterGenderChange(gender: string): void {
    this.genderFilter.next(gender);
  }

  resetClick(): void {
    this.resetFilter.emit();
  }
}
