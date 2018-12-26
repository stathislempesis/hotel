import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsComponent } from './rooms.component';
import { SingleComponent } from './single/single.component';
import { DoubleComponent } from './double/double.component';

const routes: Routes = [{
  path: '',
  component: RoomsComponent,
  children: [{
    path: 'single',
    component: SingleComponent,
  }, {
    path: 'double',
    component: DoubleComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule { }

export const routedComponents = [
  SingleComponent,
  DoubleComponent
];
