import {Component, EventEmitter, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {Enzyme} from '../../../../models/enzyme';
import {EnzymeService} from '../../../../services/enzyme.service';

/**
 * Component that lets a user search for enzymes via the db-query service.
 */
@Component({
  selector: 'bch-enzyme-search',
  templateUrl: './enzyme-search.component.html',
  styleUrls: ['./enzyme-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EnzymeSearchComponent implements OnDestroy {

  @Output() selectEnzyme: EventEmitter<Enzyme> = new EventEmitter<Enzyme>();

  public open = false;
  public searchQuery = '';
  public enzymes: Enzyme[] = [];
  public searchSubscription: Subscription;

  constructor(private brendaService: EnzymeService) {
  }

  /**
   * Opens the dropdown menu to show search results.
   */
  openDropdown() {
    this.open = true;
  }

  /**
   * Fetches search results from the db-query service.
   */
  searchEnzymes() {
    if (this.searchQuery === '') {
      return;
    }
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    this.searchSubscription = this.brendaService.searchEnzymes(this.searchQuery).subscribe(enzymes => {
      this.open = true;
      this.enzymes = enzymes;
    });
  }

  /**
   * Selects the given result enzyme.
   *
   * @param enzyme Enzyme to select.
   */
  selectResult(enzyme: Enzyme) {
    this.selectEnzyme.emit(enzyme);
    this.enzymes = [];
    this.open = false;
    this.searchQuery = '';
  }

  /**
   * Unsubscribes from subscriptions.
   */
  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

}
