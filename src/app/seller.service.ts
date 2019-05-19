import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { Seller } from "./seller";
import { catchError, tap } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class SellerService {
  private sellerUrl = "http://localhost:50555/api/Seller";
  constructor(private http: HttpClient) {}

  addSeller(seller: Seller): Observable<Seller> {
    debugger;
    return this.http.post<Seller>(this.sellerUrl, seller, httpOptions).pipe(
      tap(data => {
        debugger;
        console.log("All: " + JSON.stringify(data));
      }),
      catchError(this.handleError)
    );
  }

  getSellersList(): Observable<Seller[]> {
    return this.http.get<Seller[]>(this.sellerUrl).pipe(
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
