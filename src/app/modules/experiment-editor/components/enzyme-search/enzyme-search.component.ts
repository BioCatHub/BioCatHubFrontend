import {Component, EventEmitter, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {Enzyme} from '../../../../models/enzyme';
import {BrendaService} from '../../../../services/brenda.service';

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

  constructor(private brendaService: BrendaService) {
  }

  openDropdown() {
    this.open = true;
  }

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

  selectResult(enzyme: Enzyme) {
    this.selectEnzyme.emit(enzyme);
    this.enzymes = [];
    this.open = false;
    this.searchQuery = '';
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

}
