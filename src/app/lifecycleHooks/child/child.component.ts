import { AfterContentChecked, AfterContentInit, AfterViewChecked, 
  AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, 
  OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit, OnChanges, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck,
OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("Child ngOnInit called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child ngOnChanges called");
  }

  ngDoCheck(): void {
    console.log("Child ngDoCheck called");
  }

  ngAfterContentChecked(): void {
    console.log("Child ngAfterContentChecked called");
  }

  ngAfterContentInit(): void {
    console.log("Child ngAfterContentInit called");
  }

  ngAfterViewInit(): void {
    console.log("Child ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("Child ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    // console.log("Child ngOnDestroy called");
    alert("Child component is going to be destroyed!")
  }

}
