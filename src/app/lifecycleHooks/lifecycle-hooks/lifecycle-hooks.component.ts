import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.sass']
})
export class LifecycleHooksComponent implements OnInit, OnChanges, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck,
OnDestroy {

  @Input() num: number = 0 ;
  viewChild: boolean = true;

  constructor() { }

  toggleChildView(){
    if (this.viewChild){
      this.viewChild= false;
    } else {
      this.viewChild = true;
    }
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
}
