import { Component, Input } from '@angular/core';
//import mapboxgl from 'mapbox-gl';
//const mapboxgl = require('mapbox-gl');
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
// export class MapComponent implements OnInit {
export class MapComponent {
  @Input() location:any;
  ngOnInit(): void {
    console.log("mapboxgl==>>",this.location);
    (mapboxgl as any).accessToken  ='pk.eyJ1IjoiYXNpZnVycmFobWFucGlhbCIsImEiOiJjbG5qd29ldTEwMjdsMnBsazFsaW1xcm5rIn0.L5kKxav_0VTewsxlvWUS2g';
     const map = new mapboxgl.Map({
       container: 'map',
       style: 'mapbox://styles/mapbox/streets-v12', // style URL
       center:this.location, // starting position [lng, lat]
      //  center: [90.42488, 23.76495], // starting position [lng, lat]
       zoom: 13, // starting zoom
     });
    const marker1 = new mapboxgl.Marker({ color: 'black' })
      .setLngLat(this.location)
      .addTo(map);
  }
   

}
