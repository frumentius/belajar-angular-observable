import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-observable-api-endpoint',
  templateUrl: './observable-api-endpoint.component.html',
  styleUrls: ['./observable-api-endpoint.component.css']
})
export class ObservableApiEndpointComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    const data = from(this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    ));
    // Subscribe to begin listening for async result
    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('Error: ' + err); },
      complete() { console.log('Completed'); }
    });
  }
}
