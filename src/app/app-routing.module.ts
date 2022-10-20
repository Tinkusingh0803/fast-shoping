import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
