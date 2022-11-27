import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sellerType: string = 'default';
  sellerName: string = '';
  constructor(private router: Router) {}
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
}
