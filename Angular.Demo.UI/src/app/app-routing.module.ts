import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'Test1', component: AppComponent, data: { title: 'Test route 1' } },
  { path: 'Test2', component: AppComponent, data: { title: 'Test route 2' } },
  // Route fallbacks
  { path: '**', redirectTo: '' },
  { path: '', component: AppComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        initialNavigation: 'enabled',
        preloadingStrategy: PreloadAllModules,
        relativeLinkResolution: 'legacy'
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
