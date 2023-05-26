import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass'],
  providers:[
    EmployeesService
  ]
})
export class EmployeeListComponent implements OnInit {

  @Input() fromParent: string = "";

  @Output() toParentEvent: EventEmitter<string> = new EventEmitter;

  employeeList: any[] = [];

  constructor(private employees: EmployeesService) { }

  ngOnInit(): void {
    this.employeeList = this.employees.getEmployees();
    console.log(this.employeeList);
  }

  onChange(event: Event){
    let str = (<HTMLInputElement>event.target).value;
    this.toParentEvent.emit(str);
  }
}
