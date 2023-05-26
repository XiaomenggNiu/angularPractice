import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {
  quotes: any = [];
  
  constructor(private quotesServive: QuotesService) { }

  ngOnInit(): void {
    this.quotesServive.getQuotes().subscribe((res) =>{
      
      this.quotes = res.quotes;
      console.log(this.quotes);
    })
  }
  

}
