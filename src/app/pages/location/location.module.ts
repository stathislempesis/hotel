import { NgModule } from '@angular/core';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ThemeModule } from '../../@theme/theme.module';
import { LocationComponent } from './location.component';

@NgModule({
  imports: [
    ThemeModule,
    LeafletModule.forRoot(),
  ],
  declarations: [
    LocationComponent,
  ],
})
export class LocationModule { }
