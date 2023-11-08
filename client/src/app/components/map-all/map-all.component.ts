import { Component, Input } from '@angular/core';
//import mapboxgl from 'mapbox-gl';
//const mapboxgl = require('mapbox-gl');
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-all',
  templateUrl: './map-all.component.html',
  styleUrls: ['./map-all.component.css'],
})
export class MapAllComponent {
  @Input() locations!: {
    shop_id: string;
    coordinate: number[];
  }[];
  ngOnInit(): void {
    if (this.locations) {
      console.log('mapboxgl---->', this.locations[0]);
      console.log('mapboxgl length---->', this.locations[0]);
    }
    (mapboxgl as any).accessToken =
      'pk.eyJ1IjoiYXNpZnVycmFobWFucGlhbCIsImEiOiJjbG5qd29ldTEwMjdsMnBsazFsaW1xcm5rIn0.L5kKxav_0VTewsxlvWUS2g';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      // center: this.location, // starting position [lng, lat]
      center: [-0.1278, 51.5074], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    this.locations.forEach((location) => {
      new mapboxgl.Marker({ color: 'black' })
        .setLngLat([location.coordinate[0], location.coordinate[1]])
        .addTo(map);
    });

    // console.log('hi');
    // for (let i = 0; i < this.locations.length; i++){
    //   console.log(this.locations[i].coordinate);
    //   let marker = new mapboxgl.Marker();
    //     .setLngLat([this.locations[i].coordinate[0], this.locations[i].coordinate[1]])
    //     .addTo(map);
    // }

    // for (let i = 0; i < this.locations.length; i++) {
    //   // create a HTML element for each feature
    //   const el = document.createElement('div');
    //   el.className = 'marker';

    //   // make a marker for each feature and add to the map
    //   new mapboxgl.Marker(el)
    //     .setLngLat([
    //       this.locations[i].coordinate[0],
    //       this.locations[i].coordinate[1],
    //     ])
    //     .addTo(map);
    // }
  }
}
