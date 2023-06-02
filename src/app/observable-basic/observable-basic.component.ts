import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, of, from } from 'rxjs';

@Component({
  selector: 'app-observable-basic',
  templateUrl: './observable-basic.component.html',
  styleUrls: ['./observable-basic.component.css']
})
export class ObservableBasicComponent implements OnInit, OnDestroy {
  sequence;
  constructor(){
    /* These are the same way to create an observable. */
    this.sequence = new Observable(this.sequenceSubscriber);
    //this.sequence = of(1,2,3);
    //this.sequence = from([7,8,9]);
  }
  sequenceSubscriber(observer: Observer<number>) {
    // synchronously deliver 1, 2, and 3, then complete
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  
    // unsubscribe function doesn't need to do anything in this
    // because values are delivered synchronously
    return {unsubscribe() {}};
  }

  ngOnInit() {
    this.sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });
  }
  ngOnDestroy(){
    //if (this.sequence) this.sequence.unsubscribe();
  }
}
