import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather } from '../common/weather';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getwWeatherData(location: string) {
    const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=09cddf36bace4e7cb9a193609231102&q=${location}&aqi=no`;
    return this.http.get<getResponse>(weatherUrl);
  }
}

//An interface that helps us unwraps the json data
interface getResponse {
  current: {
    temp_c: number;
    temp_f:number;
    humidity: number;
    feelslike_c: number;
    last_updated: string;
    cloud: number,
    wind_dir:string,
    wind_mph:number
  },
  location: {
    name: string,
    lat: number,
    lon: number,
    tz_id: string,
    localtime: string
},
}
