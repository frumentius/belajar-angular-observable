import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableApiEndpointComponent } from './observable-api-endpoint.component';

const routes: Routes = [{ path: '', component: ObservableApiEndpointComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableApiEndpointRoutingModule { }
