import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  elat = 61.5;
  elng = 23.8;
  @Input() lat: string;
  @Input() lng: string;
  city: string;
  temp: number;

  constructor(private http: Http) { }

  ngOnChanges() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?'
      + 'lat=' + this.lat
      + '&lon=' + this.lng
      + '&units=metric'
      + '&lang=en'
      + '&appid=982c54e6f5ed5ceaee4995b58387e2ef';

    this.http.get(url).map(res => res.json()).subscribe(
      weatherData => {
        console.log(weatherData);
        this.city = weatherData.name;
        this.temp = weatherData.main.temp;
      });
  }

  ngOnInit() {
    const url = 'http://api.openweathermap.org/data/2.5/weather?'
      + 'lat=' + this.elat
      + '&lon=' + this.elng
      + '&units=metric'
      + '&lang=en'
      + '&appid=982c54e6f5ed5ceaee4995b58387e2ef';

    this.http.get(url).map(res => res.json()).subscribe(
      weatherData => {
        console.log(weatherData);
        this.city = weatherData.name;
        this.temp = weatherData.main.temp;
      });
  }



}
