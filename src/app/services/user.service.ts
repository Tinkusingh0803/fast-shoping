import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(user:any){ 
 return this.http.post(`${environment.sellerApi + '/users'}`, user, {observe: 'response'}); 

  }
  userAuthReload(){
    if (localStorage.getItem('user')) {
      this.router.navigate(['/'])
    }
  }
}
