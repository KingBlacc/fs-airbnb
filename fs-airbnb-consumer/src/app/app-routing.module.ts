import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'listings', pathMatch: 'full' },
  { path: 'listings', loadChildren: './pages/listings/listings.module#ListingsPageModule' },
  { path: 'listings/:id', loadChildren: './pages/listings-details/listings-details.module#ListingsDetailsPageModule' },
  { path: 'booking/:id', loadChildren: './pages/booking/booking.module#BookingPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
