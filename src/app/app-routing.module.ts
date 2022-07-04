import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionGuard } from './guards/region.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'region/:name', children: [
    { path: '', component: RegionComponent, pathMatch: 'full', canActivate: [RegionGuard] },
    { path: 'country/:id', component: CountryComponent}
  ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
