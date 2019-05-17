import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Client } from "./client";
import { catchError, tap } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class AddClientService {
  private clientsUrl = "http://localhost:50555/api/IndividualClient";

  constructor(private http: HttpClient) {}

  addClient(client: Client): Observable<Client> {
    debugger;
    return this.http.post<Client>(this.clientsUrl, client, httpOptions).pipe(
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
