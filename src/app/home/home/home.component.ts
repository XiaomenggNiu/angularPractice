import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  username: string = 'Jerry';
  obj = {
    name: 'Tom'
  }

  demo: string = "Property Binding Demo";

  temp = "<p>Inner HTML</p>";

  value = "";

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    this.username="";
    this.demo = "";
    this.temp = "";
  }

  onInput(event: Event){
    console.log("Input event, ", (<HTMLInputElement>event.target)?.value);
  }
  onChange(event: Event){
    this.value=(event.target as HTMLInputElement).value;
    console.log("Change event, ", (event.target as HTMLInputElement).value);
  }
  onKeyUp(event: Event){
    this.value=(event.target as HTMLInputElement).value;
    console.log("Change event, ", (event.target as HTMLInputElement).value);
  }
}
