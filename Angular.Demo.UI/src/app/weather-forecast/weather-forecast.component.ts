import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  public forecasts?: WeatherForecast[];

  constructor(private http: HttpClient, public appConfigService: AppConfigService) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast(): void {
    this.http.get<WeatherForecast[]>(this.appConfigService.appConfig?.apiUrl + '/WeatherForecast/Get').subscribe(
      result => this.forecasts = result,
      error => console.error(error)
    );
  }

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
