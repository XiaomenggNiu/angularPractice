import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  public getEmployees(){
    return [
      {name:'Tom', age: 26, email:"tom@company.com"},
      {name:'Jerry', age: 32, email:"jerry@company.com"},
      {name:'Alice', age: 30, email:"alice@company.com"},
    ]
  }
}
