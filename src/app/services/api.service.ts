import {Injectable} from '@angular/core';

/**
 * Simple container service holding api route definitions.
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public enzymes = {
    search: (query: string): string => `${this.apiHost}db-query/enzyme/list?enzymeName=${query}`,
  };

  private apiHost = 'https://biocathub.net/api/';

}
