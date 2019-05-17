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
export class EditClientService {
  private clientEditUrl = "http://localhost:50555/api/IndividualClient";

  constructor(private http: HttpClient) {}

  editClient(client: Client): Observable<Client> {
    debugger;
    return this.http.put<Client>(this.clientEditUrl, client, httpOptions).pipe(
      tap(data => {
        debugger;
        console.log("All: " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  getClient(clientId: number): Observable<Client> {
    return this.http.get<Client>(this.clientEditUrl + "/" + clientId).pipe(
      tap(data => {
        debugger;
        console.log("All: " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  deleteClient(clientId: number): Observable<Client> {
    return this.http.delete<Client>(this.clientEditUrl + "/" + clientId).pipe(
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
