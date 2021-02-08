import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  seasonId: number;

  errorMessage = '';

  //Get all seasons to populate dropdownlist
  getSeasons(): Observable<any> {
    const url = `${environment.api.baseUrl}${environment.api.endpoints.getSeasons}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //Get simple games data for simple table
  getSimpleGamesBySeasonId(seasonId: number): Observable<any> {
    const url = `${environment.api.baseUrl}${environment.api.endpoints.getSimpleGamesBySeasonId}/${seasonId}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //Get all games data for complex table
  getComplexGamesBySeasonId(seasonId: number): Observable<any> {
    const url = `${environment.api.baseUrl}${environment.api.endpoints.getAllGamesBySeasonId}/${seasonId}`;
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  setGameNote(game, note): Observable<any> {

    let request = {
      SeasonId: game.SeasonId,
      Date: game.Date,
      HomeTeam: game.HomeTeam,
      AwayTeam: game.AwayTeam,
      Referee: game.Referee,
      Note: note
    };

    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json; charset=utf-8');

    const url = `${environment.api.baseUrl}${environment.api.endpoints.setGameNote}`;
    return this.http.post(url, request, { headers: header })
  }

  // Basic error handling (Not my first choice but does the job, much more clean intuitive and efficient ways to do this)
  handleError(error) {

    if (error.error instanceof ErrorEvent) {
      // client-side error
      this.errorMessage = `Error: ${error.error.message}`;

    } else {
      // server-side error
      this.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }
    window.alert(this.errorMessage);

    return throwError(this.errorMessage);

  }

}
