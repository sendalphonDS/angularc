import { Component } from '@angular/core';
import { latLng, Layer, tileLayer } from 'leaflet';
import { LeafletModule} from '@bluehalo/ngx-leaflet';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {
  options = {
    Layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...'
      
      })

    ],
    zoom: 14,
    center: latLng(-8.096874283219767, -79.01979410387604)
  }
}
