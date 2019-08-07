import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'listings', loadChildren: './pages/listings/listings.module#ListingsPageModule' },
  { path: 'listings/:id', loadChildren: './pages/listings-details/listings-details.module#ListingsDetailsPageModule' },
  { path: 'createproperty', loadChildren: './pages/create-property/create-property.module#CreatePropertyPageModule' },
  { path: 'property/:id', loadChildren: './pages/edit-property/edit-property.module#EditPropertyPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
