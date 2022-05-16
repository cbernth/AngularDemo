import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: 'Test1', component: WeatherForecastComponent, data: { title: 'Test route 1' } },
  { path: 'Test2', component: WeatherForecastComponent, data: { title: 'Test route 2' } },
  // Route fallbacks
  { path: '', component: WeatherForecastComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: '404 Page not found!' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        initialNavigation: 'enabledBlocking',
        preloadingStrategy: PreloadAllModules
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
