import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Router} from "@angular/router"
import { BehaviorSubject } from 'rxjs';
import { login } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService { 
 getValue:any
 isLoginError= new EventEmitter<boolean>(false)
 headerHide= new EventEmitter<boolean>(false)

 isSellerLoggedIn=new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }

  userSignUp(data:any){ 
    this.http.post(environment.sellerApi,data,{observe: 'response'}).subscribe((result)=>{
     this.isSellerLoggedIn.next(true)
     this.router.navigate(['seller-home'])
     localStorage.setItem('seller', JSON.stringify(result.body))
      console.log(result)
    }); 
       return false;
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
     this.isSellerLoggedIn.next(true)
      this.router.navigate(['seller-home'])
    }
  }
  userLogin(data:login){ 
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe: 'response'}).subscribe((res:any)=>{
if (res && res.body && res.body.length) {
  this.headerHide.emit(true)
  console.log("user loged in");
  localStorage.setItem('seller', JSON.stringify(res.body))
  this.router.navigate(['seller-home']) 
}  else{ 
  this.isLoginError.emit(true)
  
}
      
    })

  }
}
