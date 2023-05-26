import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  // fetch and promise
  // getQuotes(){
  //   return fetch("api")
  // }
  // Promise: single value, eager, 
  // Observable: a stream of data, lazy,
  getQuotes(): Observable<any>{
    return this.http.get('https://dummyjson.com/quotes');
  }
}
