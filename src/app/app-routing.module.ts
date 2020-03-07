import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IndexPageComponent} from '@app/components/index_page/index_page.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
