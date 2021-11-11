import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Enzyme} from '../models/enzyme';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';

/**
 * Adapter for the enzyme endpoint.
 */
@Injectable({
  providedIn: 'root'
})
export class EnzymeService {

  constructor(private http: HttpClient,
              private api: ApiService) {
  }

  /**
   * Searches for enzymes with the given query.
   *
   * @param query Enzyme search query.
   */
  searchEnzymes(query: string): Observable<Enzyme[]> {
    return this.http.get(this.api.enzymes.search(query))
      .pipe(map((enzymeList: any) => enzymeList.map(Enzyme.fromBrendaResult)));
  }


}
