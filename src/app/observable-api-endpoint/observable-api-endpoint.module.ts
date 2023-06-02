import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ObservableApiEndpointRoutingModule } from './observable-api-endpoint-routing.module';
import { ObservableApiEndpointComponent } from './observable-api-endpoint.component';


@NgModule({
  declarations: [
    ObservableApiEndpointComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ObservableApiEndpointRoutingModule
  ]
})
export class ObservableApiEndpointModule { }
