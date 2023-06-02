import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableBasicComponent } from './observable-basic.component';

const routes: Routes = [{ path: '', component: ObservableBasicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableBasicRoutingModule { }
