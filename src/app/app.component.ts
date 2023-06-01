import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, debounceTime, delay, filter, forkJoin, from, fromEvent, interval, of, switchMap, take, takeUntil, tap, throttleTime } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'angularPractice';
  name = "Jerry";
  age = 13;
  constructor(private router: Router){

  }

  onClick(){
    this.router.navigate(["products"])
  }

  addOne(){
    this.age++;
  }
  // promise.then().then().then()
  ngOnInit(): void {
    // Creation Operators
      const ob1 = of(1,2,3,4,5)
      // .subscribe((res)=>console.log(res));
      const ob2 = from([1,2, 3])
      // .subscribe((res)=>console.log(res));
      // // obs = new Observable(
      // //   (obs) => {
      // //     obs.next(1),
      // //     obs.next(2)
      // //   }
      // // )
      // fromEvent(document,"click").subscribe(()=>console.log("clicked"));
      // interval(500).subscribe((num)=>console.log(num));
      // forkJoin([ob1, ob2]).subscribe((res)=>console.log(res));
      // h1, h2
      // promise.all()

      // Pipeable Operators
    // ob2.pipe(
    //   tap((res)=>console.log(res))
    // ).subscribe()
      // ob1.pipe(
      //   filter(val=> val%2 === 0)
      // ).subscribe((res)=>console.log(res));

      // ob1.pipe(
      //   take(10),
      // ).subscribe((res)=>console.log(res))
      // interval(1000).pipe(
      //   takeUntil(
      //     fromEvent(document,"click")
      //   )
      // ).subscribe((res)=>console.log(res));
      const btn = <HTMLButtonElement>document.querySelector("#btn");
      // fromEvent(btn, "click").pipe(
      //   // debounceTime(1000),
      //   // throttleTime(1000),
      //   // delay(1000),
      // ).subscribe(()=>console.log("clicked"))
      fromEvent(btn, "click").pipe(
        switchMap(()=> interval(1000))
      ).subscribe((val)=>console.log(val))
  }
}
