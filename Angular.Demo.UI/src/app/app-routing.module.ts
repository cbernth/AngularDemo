import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'Test', component: AppComponent },
  // Route fallbacks
  { path: '**', redirectTo: '' },
  { path: '', component: AppComponent }
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
