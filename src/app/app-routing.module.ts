import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { FeatureComponent } from './feature/feature.component';
import { DemocanconicaltagComponent } from './democanconicaltag/democanconicaltag.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page/dynamic-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'dtag', component: DemocanconicaltagComponent },
  {
    path: 'product', component: ProductComponent, pathMatch: 'full', data: {
      // title: 'Title for First Component',
      // descrption: 'Description of First Component',
      // ogTitle: 'Description of First Component for social media',
      canonical: '/product'
    }
  },
  { path: ':id', component: DynamicPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
