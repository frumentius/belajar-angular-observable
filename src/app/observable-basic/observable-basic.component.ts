import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, from } from 'rxjs';

@Component({
  selector: 'app-observable-basic',
  templateUrl: './observable-basic.component.html',
  styleUrls: ['./observable-basic.component.css']
})
export class ObservableBasicComponent implements OnInit {
  sequence;
  constructor() {
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
    return { unsubscribe() { } };
  }

  ngOnInit() {
    this.sequence.subscribe({
      next(num) { console.log(num); },
      error(err) { console.log(err); },
      complete() { console.log('Finished sequence'); }
    });

    //Other ways to write this subscribe function.
    /* this.sequence.subscribe({
      next: (num: number) => console.log('Observer got a next value: ' + num),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    }); */
    //Not the best way to write the function, might be deprecated.
    /* this.sequence.subscribe(
      num => console.log('Observer got a next value: ' + num),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    ); */
  }
}
