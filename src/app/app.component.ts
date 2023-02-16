import { Component, OnInit } from '@angular/core';
import { Weather } from './common/weather';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather';

  // create varibales for each field of temperature and set them to be not-null
  weather!: Weather;
  temp_c: number = 0;
  temp_f: number = 0;
  humidity!: number;
  feelslike_c!: number;
  last_updated!: string;
  name!: string;
  lat!: number;
  lon!: number;
  tz_id!: string;
  localtime!: string;
  wind_mph!: number;
  wind_dir!: string;

  constructor(private weatherservice: WeatherService) {}

  //make lagos the default city when the page reloads
  ngOnInit(): void {
    this.getWeatherInformation('Lagos');
  }

  getCity(num: string) {
    this.getWeatherInformation(num);
  }

  getWeatherInformation(num: string) {
    //unwraps the json data before assign it to the vairables
    this.weatherservice.getwWeatherData(num).subscribe((data) => {
      this.temp_c = data.current.temp_c;
      this.temp_f = data.current.temp_f;
      this.humidity = data.current.humidity;
      this.feelslike_c = data.current.feelslike_c;
      this.last_updated = data.current.last_updated;
      this.name = data.location.name;
      this.lat = data.location.lat;
      this.lon = data.location.lon;
      this.tz_id = data.location.tz_id;
      this.localtime = data.location.localtime;
      this.wind_dir = data.current.wind_dir;
      this.wind_mph = data.current.wind_mph;
    });
  }
}
