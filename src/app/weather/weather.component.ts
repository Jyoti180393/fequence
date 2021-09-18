import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input('weather') weather;
  info;
  constructor() {}

  ngOnInit() {}

  getCityWeatherInfo(cityName) {
    this.info = '';
    const name = (cityName as HTMLInputElement).value;
    this.weather.map((val) => {
      if (val.city.toLocaleLowerCase() === name.trim().toLocaleLowerCase()) {
        val.temprature = 50;
        this.info = `${val.city} has ${val.temprature} temprature`;
        return;
      }
    });
    this.info = this.info === '' ? `No Result found` : this.info;
  }
}
