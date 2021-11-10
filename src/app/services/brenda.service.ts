import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Enzyme} from '../models/enzyme';
import {map} from 'rxjs/operators';

// TODO rename to enzyme service
// TODO add api service

@Injectable({
  providedIn: 'root'
})
export class BrendaService {

  constructor(private http: HttpClient) {
  }

  searchEnzymes(name: string): Observable<Enzyme[]> {
    return this.http.get('https://biocathub.net/api/db-query/enzyme/list?enzymeName=' + name)
      .pipe(map((enzymeList: any) => enzymeList.map(Enzyme.fromBrendaResult)));
  }


}
