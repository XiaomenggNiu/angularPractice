import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { QuotesService } from './quotes.service';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ErrorComponent,
    NewQuoteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ErrorComponent
  ],
  providers: [
    QuotesService
  ]
})
export class ErrorModule { }
