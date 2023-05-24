import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MyFirstDirective } from './my-first.directive';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    MyFirstDirective,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
