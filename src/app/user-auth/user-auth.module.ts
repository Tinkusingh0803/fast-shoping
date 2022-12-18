import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAuthComponent} from './user-auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const router: Routes = [
{
  path: '', component: UserAuthComponent
}
]

@NgModule({
  declarations: [UserAuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(router)
  ]
})
export class UserAuthModule { }
