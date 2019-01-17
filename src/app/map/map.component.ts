import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 61.5;
  lng = 23.8;
  zoom = 10;
  ezoom = 10;
  elat = 61;
  elng = 22;

  constructor() { }

  ngOnInit() {
  }

  mapClicked($event: MouseEvent) {
    this.elat = $event.coords.lat;
    this.elng = $event.coords.lng;
  }
}
