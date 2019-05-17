import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Client } from "./client";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClientsListService {
  private clientsUrl = "http://localhost:50555/api/IndividualClient";

  constructor(private http: HttpClient) {}

  getClientsList(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl).pipe(
      tap(data => {
        debugger;
        console.log("All: " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
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
