import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Reaction} from '../models/reaction';

/**
 * CRUD service for reactions.
 */
@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private http: HttpClient,
              private api: ApiService) {
  }

  /**
   * Get the reaction with the given ID.
   *
   * @param reactionId ID of the reaction to look up.
   */
  getReaction(reactionId: number): Observable<Reaction> {
    return this.http.get(this.api.reactions.getDetail(reactionId))
      .pipe(map(Reaction.deserialize));
  }

  /**
   * Get a list of reactions for the given ecNumber.
   *
   * @param ecNumber ecNumber to look up reactions for.
   */
  getReactionList(ecNumber: string): Observable<Reaction[]> {
    return this.http.get(this.api.reactions.getList(ecNumber))
      .pipe(map((reactionListResult: any) => reactionListResult.map(Reaction.deserialize)));
  }

}
