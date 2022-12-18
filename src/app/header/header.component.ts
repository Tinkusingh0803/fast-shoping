import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sellerType: string = 'default';
  sellerName: string = '';
  searchResult: any;
  userName: any = ''
  constructor(private router: Router, private _service: ProductService,) {}
  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem('seller') && res.url.includes('seller')) {
          this.sellerType = 'seller';
          if (localStorage.getItem('seller')) {
            let sellerItem = localStorage.getItem('seller');
            let sellerStoreItem = sellerItem && JSON.parse(sellerItem);
            if (sellerStoreItem.name) {
              this.sellerName = sellerStoreItem?.name;
            } else {
              this.sellerName = sellerStoreItem[0]?.name;
            }
          }
        } else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user')
          let userData = userStore && JSON.parse(userStore)
          if (userData.name) {
            this.userName = userData.name;
            
          } else{ 
            this.userName = userData[0].name; 
          }
          this.sellerType = 'user';
        } else {
          this.sellerType = 'default';
        }
      }
    });
  }
  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
  searchProduct(event: any){
   if (event) {
    const element = event.target as HTMLInputElement;
    this._service.searchProducts(element.value).subscribe((result:any)=>{
      if(result){ 
        // search result show only 6 
        if (result.length>6) {
          result.length = 6;
        }
        this.searchResult = result;
      } 
    })
   } 
  }
  hideSearch(){
    this.searchResult = undefined;
  }
  mouseDownProduct(val:any){
    this.router.navigate([`search/${val}`]);
  }
  searchSubmit(val:any){
    this.router.navigate([`search/${val}`]);
  }

  userLogout(){
    localStorage.removeItem('user');
    this.router.navigate(['/user-auth']);
  }
}
