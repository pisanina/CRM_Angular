import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { Action } from "./action";
import { catchError, tap } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class ActionService {
  private actionUrl = "http://localhost:50555/api/Action";
  constructor(private http: HttpClient) {}

  getActionList(): Observable<Action[]> {
    return this.http.get<Action[]>(this.actionUrl).pipe(
      tap(data => {
        debugger;
        console.log("All: " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  getActionforClient(id: number): Observable<Action[]> {
    return this.http.get<Action[]>(this.actionUrl + "/" + id).pipe(
      tap(data => {
        debugger;
        console.log("All: " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  addAction(action: Action): Observable<Action> {
    debugger;
    return this.http.post<Action>(this.actionUrl, action, httpOptions).pipe(
      tap(data => {
        debugger;
        console.log("All: " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    debugger;
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "An error occurred: ${err.error.message}";
    } else
      errorMessage =
        "Server returned code: ${err.status}, error message is: ${err.message}";

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
