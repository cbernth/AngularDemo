import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { AppConfigService } from './app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public forecasts?: WeatherForecast[];
  public title = 'Angular.Demo.UI';

  constructor(private http: HttpClient, public appConfigService: AppConfigService, private router: Router, private titleService: Title) {
    console.log('appConfigService', appConfigService.appConfig);
    this.getWeatherForecast();
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        while (route!.firstChild)
          route = route.firstChild;
        if (route.snapshot.data['title'])
          return route!.snapshot.data['title'];
        return 'Default title';
      })
    ).subscribe(
      (title: string) => {
        if (title)
          // We can either set the title directly from the property, or in a multi-lingual application we can look it up in a language file using the title as a key
          this.titleService.setTitle(this.appConfigService.appConfig.appConfigFile?.appTitle + ' - ' + title);
      });
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
