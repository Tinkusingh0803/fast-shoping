import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthGuard } from './auth.guard';
const routes: Routes = [ 
  {
    path: '', loadChildren:()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'seller-auth', loadChildren:()=> import('./seller-auth/seller-auth.module').then(m=>m.SellerAuthModule)
  },
  {
    path:'seller-home', loadChildren:()=> import('./seller-home/seller-home.module').then(m=>m.SellerHomeModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'seller-add-product', loadChildren:()=> import('./seller-add-product/seller-add-product.module').then(m=>m.SellerAddProductModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'seller-update-product/:id', loadChildren:()=> import('./seller-update-product/seller-update-product.module').then(m=>m.SellerUpdateProductModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
