import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {
  toChild = "";
  fromChild = "";
  constructor() { }

  ngOnInit(): void {
  }
  onInput(message: HTMLInputElement): void{
    // this.toChild = (<HTMLInputElement>event.target).value;
    this.toChild = message.value;
  }

  onChildEvent(message: string){
    this.fromChild = message;
    console.log(message);
  }
}
