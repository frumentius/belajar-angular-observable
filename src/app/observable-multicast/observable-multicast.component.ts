import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, of, from ,Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-multicast',
  templateUrl: './observable-multicast.component.html',
  styleUrls: ['./observable-multicast.component.css']
})
export class ObservableMulticastComponent implements OnInit, OnDestroy {
  firstSub!: null | Subscription;
  secondSub!: null | Subscription;
  sequence;
  multicastSequence;
  constructor() {
    this.sequence = new Observable(this.sequenceSubscriber);
    this.multicastSequence = new Observable(this.multicastSequenceSubscriber());
  }
  sequenceSubscriber(observer: Observer<number>) {
    const seq = [1, 2, 3, 4, 5, 6];
    let clearTimer: VoidFunction | undefined;

    // Will run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doInSequence(arr: number[], idx: number) {
      const timeout = setTimeout(() => {
        observer.next(arr[idx]);
        if (idx === arr.length - 1) {
          observer.complete();
        } else {
          doInSequence(arr, ++idx);
        }
      }, 1000);
      clearTimer = () => clearTimeout(timeout);
    }

    doInSequence(seq, 0);

    // Unsubscribe should clear the timeout to stop execution
    return {
      unsubscribe() {
        clearTimer?.();
      }
    };
  }
  multicastSequenceSubscriber() {
    const seq = [1, 2, 3, 4, 5, 6];
    // Keep track of each observer (one for every active subscription)
    const observers: Observer<unknown>[] = [];
    // Still a single timer because there will only ever be one
    // set of values being generated, multicasted to each subscriber
    let clearTimer: VoidFunction | undefined;

    // Return the subscriber function (runs when subscribe()
    // function is invoked)
    return (observer: Observer<unknown>) => {
      observers.push(observer);
      // When this is the first subscription, start the sequence
      if (observers.length === 1) {
        const multicastObserver: Observer<number> = {
          next(val) {
            // Iterate through observers and notify all subscriptions
            observers.forEach(obs => obs.next(val));
          },
          error() { /* Handle the error... */ },
          complete() {
            // Notify all complete callbacks
            observers.slice(0).forEach(obs => obs.complete());
          }
        };
        doSequence(multicastObserver, seq, 0);
      }

      return {
        unsubscribe() {
          // Remove from the observers array so it's no longer notified
          observers.splice(observers.indexOf(observer), 1);
          // If there's no more listeners, do cleanup
          if (observers.length === 0) {
            clearTimer?.();
          }
        }
      };

      // Run through an array of numbers, emitting one value
      // per second until it gets to the end of the array.
      function doSequence(sequenceObserver: Observer<number>, arr: number[], idx: number) {
        const timeout = setTimeout(() => {
          console.log('Emitting ' + arr[idx]);
          sequenceObserver.next(arr[idx]);
          if (idx === arr.length - 1) {
            sequenceObserver.complete();
          } else {
            doSequence(sequenceObserver, arr, ++idx);
          }
        }, 1000);
        clearTimer = () => clearTimeout(timeout);
      }
    };
  }

  ngOnInit(): void {
    //First Subscribe
    /* this.firstSub = this.sequence.subscribe({
      next(num) {
        let d = new Date();
        let timeStr = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
        console.log('1st Sub - (at ' + timeStr + 'ms): ' + num);
      },
      error(err) { console.log(err); },
      complete() { console.log('Finished 1st sequence'); }
    }); */
    this.firstSub = this.multicastSequence.subscribe({
      next(num) {
        let d = new Date();
        let timeStr = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
        console.log('1st Sub - (at ' + timeStr + 'ms): ' + num);
      },
      error(err) { console.log(err); },
      complete() { console.log('Finished 1st sequence'); }
    });

    //Second Subscribe after 500ms
    /* setTimeout(() => {
      this.secondSub = this.sequence.subscribe({
        next(num) {
          let d = new Date();
          let timeStr = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
          console.log('2nd Sub - (at ' + timeStr + 'ms): ' + num);
        },
        error(err) { console.log(err); },
        complete() { console.log('Finished 2nd sequence'); }
      });
    }, 500); */
    //Second Subscribe after 1500ms, should miss the firs value.
    setTimeout(() => {
      this.secondSub = this.multicastSequence.subscribe({
        next(num) {
          let d = new Date();
          let timeStr = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
          console.log('2nd Sub - (at ' + timeStr + 'ms): ' + num);
        },
        error(err) { console.log(err); },
        complete() { console.log('Finished 2nd sequence'); }
      });
    }, 1500);
  }
  ngOnDestroy(): void {
    if(this.firstSub) this.firstSub.unsubscribe();
    if(this.secondSub) this.secondSub.unsubscribe();
  }
}
