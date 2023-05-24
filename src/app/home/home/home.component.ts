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

  onInput(event: any){
    console.log("Input event, ", event.target.value);
  }
  onChange(event: any){
    this.value=event.target.value;
    console.log("Change event, ", event.target.value);
  }
  onKeyUp(event: any){
    this.value=event.target.value;
    console.log("Key Up event, ", event.target.value);
  }
}
