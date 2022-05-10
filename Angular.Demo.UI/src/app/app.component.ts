import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: WeatherForecast[];

  constructor(http: HttpClient) {
    console.log('environment', environment);
    http.get<WeatherForecast[]>(environment.apiUrl + '/WeatherForecast/Get').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  title = 'Angular.Demo.UI';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
