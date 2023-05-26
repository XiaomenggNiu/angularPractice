import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeeListComponent } from './contact-us/employee-list/employee-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    ContactUsComponent
  ],
})
export class HomeModule { }
