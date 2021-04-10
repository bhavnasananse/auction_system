import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient, private router: Router) { }

  loginUser(data: any) {
    return this.http.post(environment.ApiUrl + 'users/login', data);
  }

  registerUser(data: any) {
    return this.http.post(environment.ApiUrl + 'users/register', data);
  }
  addProduct(data: any) {
    return this.http.post(environment.ApiUrl + 'product/addProduct', data);
  }
  getBidderList() {
    return this.http.get(environment.ApiUrl + 'admin/bidderList');
  }
  getAuctionerList() {
    return this.http.get(environment.ApiUrl + 'admin/sellerList');
  }
  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('key');
    this.router.navigate(['/login']);
  }
}
