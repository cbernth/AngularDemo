import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public forecasts?: WeatherForecast[];
  public title = 'Angular.Demo.UI';

  constructor(private http: HttpClient, public appConfigService: AppConfigService) {
    console.log('appConfigService', appConfigService.appConfig);
    this.getWeatherForecast();
  }

  public getWeatherForecast(): void {
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
