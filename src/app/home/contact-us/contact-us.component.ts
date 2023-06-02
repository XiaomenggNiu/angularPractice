import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, 
  FormArray, Validators, ValidatorFn } from '@angular/forms';
import { EmployeesService } from './employee-list/employees.service';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass'],
})
export class ContactUsComponent implements OnInit {
  toChild = '';
  fromChild = '';

  // // FormControls
  // username = new FormControl('');
  // email = new FormControl('');
  // // FormGroup
  // contactForm: FormGroup = new FormGroup({
  //   'username': this.username,
  //   'email': this.email,
  //   'message': new FormControl('You opinion')
  // })
  employeeList: any[] = [];
  userList =[
    "user1", "user2","user3","user4"
  ];
  messageForm: any;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees();
    // create form controls based on the data
    const controls = this.employeeList.map((val) => new FormControl(''));
    // FormBuilder
    this.messageForm = this.fb.group({
      username: ['', Validators.required , this.nameExists()],
      email: ['', [Validators.required, Validators.email]],
      message: ['Your opinion', [Validators.minLength(5)]],
      employees: this.fb.array(controls, this.minSelected(2))
    });
    // console.log(this.username);
    // console.log(this.messageForm);
    // this.username.setValue("HEllo");
  }

  // Getter method to get the form array
  get employees() {
    return this.messageForm.controls.employees;
  }

  onClick(){
    console.log(this.messageForm)
    if(this.messageForm.invalid){
      Object.keys(this.messageForm.controls).forEach((key)=>{
        console.log(this.messageForm.get(key));
        let error: ValidationErrors = this.messageForm.get(key).errors;
        if (error != null) {
          console.log("Error in "+key+": ", error);
        }
      })
    }else{
      console.log(this.messageForm.value);
    }
    
  }

  // customized validators
  minSelected(min = 1): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{
      const controlsFormArray = control as FormArray;
      const total = controlsFormArray.controls.map(
        (control)=>control.value).reduce(
          (prev, next) => (next ? prev + next : prev),0
        );
        return total >= min ? null : {notEnough: "not enough"};
    }
  }
  // Async validators
  nameExists():AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> =>{
      return of(this.userList.includes(control.value)).pipe(
        map((usernameExists) => {
          // Return an error if username doesn't exist
          return usernameExists ? null : { userDoesNotExist: true };
        })
      )
    }
  }
  



  onInput(message: HTMLInputElement): void {
    // this.toChild = (<HTMLInputElement>event.target).value;
    this.toChild = message.value;
  }

  onChildEvent(message: string) {
    this.fromChild = message;
    console.log(message);
  }
}
