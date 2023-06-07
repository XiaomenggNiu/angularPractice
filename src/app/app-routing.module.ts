import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ProductComponent } from './products/product/product.component';
import { ErrorComponent } from './error/error/error.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"home", component: HomeComponent, canActivate: [AuthGuard]},
  {path:'contact', component: ContactUsComponent, canActivate:[AuthGuard]},
  // {path:'products', component: ProductComponent,
  // children: [
  //   {path:'details', component: ProductDetailComponent}
  // ]},
  {path:'products', loadChildren: ()=> import('./products/products.module').then(
    (m) => m.ProductsModule
  )},
  {path:"", component: LoginComponent},
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
