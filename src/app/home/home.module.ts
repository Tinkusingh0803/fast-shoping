import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component'
import {Routes, RouterModule} from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

const routes: Routes=[
  {
    path: '', component: HomeComponent
  }
]
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
