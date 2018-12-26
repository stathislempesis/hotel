import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-location',
  styleUrls: ['./location.component.scss'],
  template: `
    <nb-card>
      <nb-card-header>Hotel Nevada</nb-card-header>
      <nb-card-body>
        <div leaflet [leafletOptions]="options"></div>
      </nb-card-body>
    </nb-card>
  `,
})
export class LocationComponent {

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 14,
    center: L.latLng({ lat: 37.0253044, lng: 22.1129559 }),
  };
}
