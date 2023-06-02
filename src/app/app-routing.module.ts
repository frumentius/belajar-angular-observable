import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'basic', loadChildren: () => import('./observable-basic/observable-basic.module').then(m => m.ObservableBasicModule) },
  { path: 'multicast', loadChildren: () => import('./observable-multicast/observable-multicast.module').then(m => m.ObservableMulticastModule) },
  { path: 'api-endpoint', loadChildren: () => import('./observable-api-endpoint/observable-api-endpoint.module').then(m => m.ObservableApiEndpointModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
