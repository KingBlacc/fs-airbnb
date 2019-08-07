import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', loadChildren: './pages/listings/listings.module#ListingsPageModule' },
  { path: 'listings/:id', loadChildren: './pages/listings-details/listings-details.module#ListingsDetailsPageModule' },
  { path: 'createproperty', loadChildren: './pages/create-property/create-property.module#CreatePropertyPageModule' },
  { path: 'property/:id', loadChildren: './pages/edit-property/edit-property.module#EditPropertyPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
