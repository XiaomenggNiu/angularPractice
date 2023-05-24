import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ProductComponent } from './products/product/product.component';
import { ErrorComponent } from './error/error/error.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:'contact', component: ContactUsComponent},
  {path:'products', component: ProductComponent},
  // {path:"", component: HomeComponent},
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
