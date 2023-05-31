import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { quotes,quote } from './quotes.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private _quotes = new BehaviorSubject<any>(null);
  public quotes$ = this._quotes.asObservable();
  private currentQuotes: quote[] | undefined;
  constructor(private http: HttpClient) { }

  // fetch and promise
  // getQuotes(){
  //   return fetch("api")
  // }
  // Promise: single value, eager, 
  // Observable: a stream of data, lazy,
  getQuotes(){
    return this.http.get<quotes>('https://dummyjson.com/quotes').subscribe(
      (response) => {
        console.log(response.quotes);
        this._quotes.next(response.quotes);
        this.currentQuotes = response.quotes;
      }
    );
  }

  addQuotes(newQuote: quote){
    this.currentQuotes?.unshift(newQuote);
    this._quotes.next(this.currentQuotes);
  }
}
