import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RoomsComponent } from './rooms.component';

import { RoomsRoutingModule, routedComponents } from './rooms-routing.module';

import { SingleComponent } from './single/single.component';
import { DoubleComponent } from './double/double.component';

const components = [
  SingleComponent,
  DoubleComponent,
  RoomsComponent
];

@NgModule({
  imports: [
    ThemeModule,RoomsRoutingModule
  ],
  declarations: [...routedComponents, ...components],
})
export class RoomsModule { }
