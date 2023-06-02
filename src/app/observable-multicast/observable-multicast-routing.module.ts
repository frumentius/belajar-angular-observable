import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableMulticastComponent } from './observable-multicast.component';

const routes: Routes = [{ path: '', component: ObservableMulticastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableMulticastRoutingModule { }
