import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { quote } from '../quotes.model';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.sass']
})
export class NewQuoteComponent implements OnInit {
  newQuote: string = "";
  constructor(private quoteService: QuotesService) { }

  ngOnInit(): void {
  }
  onClick(){
    console.log(this.newQuote);
    let quote: quote = {
      author:"user",
      quote: this.newQuote
    }
    this.quoteService.addQuotes(quote);
    this.newQuote="";
  }
}
