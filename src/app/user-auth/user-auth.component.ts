import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor(private _service: UserService, private router: Router) { }

  ngOnInit(): void {
    this._service.userAuthReload();
  }

  signUp(data:any){
    this._service.userSignUp(data).subscribe(res=>{
      if (res) {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res.body));
        this.router.navigate(['/']);
        
      }
    })
  }
}
