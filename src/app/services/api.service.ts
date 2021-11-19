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

  public reactions = {
    getDetail: (reactionId: number): string => `${this.apiHost}db-query/reaction?reactionId=${reactionId}`,
    getList: (ecNumber: string): string => `${this.apiHost}db-query/reaction/list?ecNumber=${ecNumber}`,
  };

  private apiHost = 'https://biocathub.net/api/';

}
