import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-observable-api-endpoint',
  templateUrl: './observable-api-endpoint.component.html',
  styleUrls: ['./observable-api-endpoint.component.css']
})
export class ObservableApiEndpointComponent implements OnInit {
  shipping: ShippingObj[];
  shipping$;
  constructor(private http: HttpClient) {
    this.shipping = [];
    this.shipping$ = this.http.get<ShippingObj[]>('/assets/shipping.json'); // this.http.get returning an Observable.
  }
  ngOnInit(): void {
    // Subscribe to begin listening for async result
    this.shipping$.subscribe({
      next: (response) => {
        this.shipping = response;
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => console.log('Complete!')
  });
  }
}
interface ShippingObj {
  type: string;
  price: number;
}