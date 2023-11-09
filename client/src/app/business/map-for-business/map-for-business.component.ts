import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-for-business',
  templateUrl: './map-for-business.component.html',
  styleUrls: ['./map-for-business.component.css'],
})
export class MapForBusinessComponent {
  marker: any;
  ngOnInit(): void {
   
    (mapboxgl as any).accessToken =
      'pk.eyJ1IjoiYXNpZnVycmFobWFucGlhbCIsImEiOiJjbG5qd29ldTEwMjdsMnBsazFsaW1xcm5rIn0.L5kKxav_0VTewsxlvWUS2g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [90.42488, 23.76495], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    map.on('click', (e) => {
      console.log(e.lngLat);
      if (this.marker) {
        this.marker.remove();
      }
      this.marker = new mapboxgl.Marker({ color: 'black' })
        .setLngLat(e.lngLat)
        .addTo(map);
    })
  }
}
