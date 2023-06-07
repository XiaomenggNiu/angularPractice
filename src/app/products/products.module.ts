import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MyFirstDirective } from './my-first.directive';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing/product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    MyFirstDirective,
    SearchPipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
