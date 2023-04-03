import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { FeatureComponent } from './feature/feature.component';
import { DemocanconicaltagComponent } from './democanconicaltag/democanconicaltag.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'dtag', component: DemocanconicaltagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
