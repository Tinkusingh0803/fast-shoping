import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  signupForm = false;
  authError: string = '';
  username = '';
  password = '';
  email = '';
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signup(sellerSignUp: NgForm) {
    console.log(sellerSignUp);
    this.seller.userSignUp(sellerSignUp.value);
    sellerSignUp.reset();
  }
  login(sellerlogin: NgForm) {
    this.seller.userLogin(sellerlogin.value);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Email or password is not corrent';
      }
    });
  }
  openLogin() {
    this.signupForm = true;
  }
  openSignup() {
    this.signupForm = false;
  }
}
