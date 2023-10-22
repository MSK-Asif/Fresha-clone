import { Component } from '@angular/core';
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

  ngOnInit(): void {
    console.log("mapboxgl");
    (mapboxgl as any).accessToken  ='pk.eyJ1IjoiYXNpZnVycmFobWFucGlhbCIsImEiOiJjbG5qd29ldTEwMjdsMnBsazFsaW1xcm5rIn0.L5kKxav_0VTewsxlvWUS2g';
     new mapboxgl.Map({
       container: 'map',
       style: 'mapbox://styles/mapbox/streets-v12', // style URL
       center: [90.42488, 23.76495], // starting position [lng, lat]
       zoom: 9, // starting zoom
     });
  }
   

}
