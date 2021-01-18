import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private _http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');

  }//End

  fatchUserData(user) {
    return this._http.get('https://jsonplaceholder.typicode.com/users?username=' + user)
                      .pipe(catchError(this.handleError));
  }

  fatchData() {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
                      .pipe(catchError(this.handleError));
  }

}
