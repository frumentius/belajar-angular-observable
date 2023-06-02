import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableBasicRoutingModule } from './observable-basic-routing.module';
import { ObservableBasicComponent } from './observable-basic.component';


@NgModule({
  declarations: [
    ObservableBasicComponent
  ],
  imports: [
    CommonModule,
    ObservableBasicRoutingModule
  ]
})
export class ObservableBasicModule { }
