import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

// import catchError for error handling which is required for observables
// import tap for debugging the http response
import { catchError, tap } from "rxjs/operators";

import { IProduct } from "./product";


// This is a service class
@Injectable({
    providedIn: 'root'
})

export class ProductService{

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){

    }

    // Expose this observable for use of any class that needs data
    getProducts(): Observable<IProduct[]> {
        // return this.http.get(this.productUrl); // this will throw an error --> 'Observable<Object>' is not assignable to type 'IProduct[]'.
        // Use generics like <IProduct[]> to specify the response return type
        // This will transform the raw Http response to the specified type
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))), //1st statement success
            catchError(this.handleError) // 2nd statement error
        );
    }

    // HttpErrorResponse automatically contains the error
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        
        if(err.error instanceof ErrorEvent){
            // A client-side or network error occured. Handle it accordingly.
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            // The back-end retured an unsuccessful response code.
            // The response body may contain clues as to what went wrong
            errorMessage = `Server returend code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}