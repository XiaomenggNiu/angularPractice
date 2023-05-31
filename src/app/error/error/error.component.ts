import { Component, OnInit,OnDestroy } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription, fromEvent, observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit, OnDestroy {
  // quotes: any = [];
  subscription?: Subscription;
  subject = new Subject();
  // Observable
  quotes$ = this.quoteService.quotes$;
  constructor(private quoteService: QuotesService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes();
    // this.quotes$.subscribe((res)=>{
    //   this.quotes = res;
    // })

    // Observable using new
    const obs = new Observable<number>((observer) => {
      console.log("Start");
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.complete();
      observer.error("Error here")
      
      
    });
    // Obsrevable (producer)
    // Observer/Subscriber (consumer): next, error, complete
    // Subscription: subcribe
    obs.subscribe(
      // (val) => console.log(val),
      // error => console.log(error),
      // () => console.log("complete")
      {
        next: (val) => console.log("observer 1 ",val),
        error: (err)=>{console.log(err)},
        complete: ()=>console.log("complete")
      }
    );
    obs.subscribe((val)=>{
      console.log("observer 2 ", val)
    })

    // fromEvent
    const btn = document.querySelector("#btn");
    if (btn){

      this.subscription = fromEvent(btn, "click").subscribe(
        (res) => {
          console.log("This button is clicked");
        },
        (err) => {
          console.log("there is an error here")
        }
      )
    }
    
    // subscribers to Subject
    this.subject.subscribe((val)=>{
      console.log("Subject observer 1, ", val);
    })
    this.subject.next(1);
    this.subject.next(2);

    this.subject.subscribe((val)=>{
      console.log("Subject observer 2, ", val);
    })

    this.subject.next(3);
    this.subject.complete();
    this.subject.next(4);

    // behavior subject
    const subject1 = new BehaviorSubject(0);
    subject1.subscribe((val)=>{
      console.log("Behavior subscriber 1, ", val);
    })
    subject1.next(1);
    subject1.next(2);

    subject1.subscribe((val)=>{
      console.log("Behavior subscriber 2, ", val);
    })
    subject1.next(3);

    // replay subject
    const subject2 = new ReplaySubject(1);
    subject2.subscribe((val)=>{
      console.log("Replay subscriber 1, ", val);
    })
    subject2.next(1);
    subject2.next(2);

    subject2.subscribe((val)=>{
      console.log("Replay subscriber 2, ", val);
    })
    subject2.next(3);
  }
  
  ngOnDestroy(){
    this.subscription?.unsubscribe();
    // forEach()
  }
}
