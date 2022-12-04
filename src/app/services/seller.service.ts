import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { login } from '../data-type';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  getValue: any;
  isLoginError = new EventEmitter<boolean>(false);
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {}
  userSignUp(data: any) {
    this.http
      .post(environment.sellerApi + '/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        this.router.navigate(['seller-home']);
        localStorage.setItem('seller', JSON.stringify(result.body));
      });
    return false;
  }
  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data: login) {
    this.http
      .get(
        `${environment.sellerApi + '/seller'}?email=${data.email}&password=${
          data.password
        }`,
        { observe: 'response' }
      )
      .subscribe((res: any) => {
        if (res && res.body && res.body.length) {
          localStorage.setItem('seller', JSON.stringify(res.body));
          this.router.navigate(['seller-home']);
        } else {
          this.isLoginError.emit(true);
        }
      });
  }
}
