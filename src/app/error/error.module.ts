import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { QuotesService } from './quotes.service';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorComponent
  ],
  providers: [
    QuotesService
  ]
})
export class ErrorModule { }
