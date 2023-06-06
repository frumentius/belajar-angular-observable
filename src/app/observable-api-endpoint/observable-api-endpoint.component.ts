import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-api-endpoint',
  templateUrl: './observable-api-endpoint.component.html',
  styleUrls: ['./observable-api-endpoint.component.css']
})
export class ObservableApiEndpointComponent implements OnInit, OnDestroy {
  shipping: ShippingObj[];
  varSub!: null | Subscription;
  shipping$;
  constructor(private http: HttpClient) {
    this.shipping = [];
    this.shipping$ = this.http.get<ShippingObj[]>('/assets/shipping.json'); // this.http.get returning an Observable.
  }
  ngOnInit(): void {
    this.varSub = this.shipping$.subscribe({
      next: (response) => {
        this.shipping = response;
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => console.log('Complete!')
    });
  }
  ngOnDestroy(): void {
    if(this.varSub) this.varSub.unsubscribe();
  }
}
interface ShippingObj {
  type: string;
  price: number;
}