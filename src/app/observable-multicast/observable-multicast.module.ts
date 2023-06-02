import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableMulticastRoutingModule } from './observable-multicast-routing.module';
import { ObservableMulticastComponent } from './observable-multicast.component';


@NgModule({
  declarations: [
    ObservableMulticastComponent
  ],
  imports: [
    CommonModule,
    ObservableMulticastRoutingModule
  ]
})
export class ObservableMulticastModule { }
