import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginasuserComponent } from '../loginasuser/loginasuser.component';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email;
  isLoginasuser;
  isLoginascompany;
  isLoginasmarketer;
  isAdmin;
  id;
url=environment.basedUrl;
  constructor(private http:HttpClient) {
    let token = localStorage.getItem('token');
    if (token) {
      const helper = new JwtHelperService();
      const user = helper.decodeToken(token);
      this.email = user.email;
      this.id=user.id;
       this.isLoginascompany = user.isLoginascompany;
      this.isLoginasuser = user.isLoginasuser;
      this.isLoginasmarketer = user.isLoginasmarketer;
      this.isAdmin = user.isAdmin;
  }}
  Loginasuser(user){
    return this.http.post(this.url+'loginasuser',user);
  }
  Loginascompany(company){
    return this.http.post(this.url+'loginascompany',company);
  }
  Loginasmarketer(marketer){
    return this.http.post(this.url+'loginasmarketar',marketer);
  }
  registerasuser(user){

    return this.http.post(this.url+'registerasuser',user);
  }
  registerascompany(company){
    return this.http.post(this.url+'registerascompany',company);
  }
  registerasmarketer(marketer){
    return this.http.post(this.url+'registerasmarketer',marketer);
    console.log(marketer);

  }
  logout(){
    localStorage.clear();
    this.isLoginascompany = false;
    this.isLoginasuser = false;
    this.isLoginasmarketer = false;
    this.isAdmin = false;

  }
  getcitys(){
    return this.http.get(this.url+'citys');
  }
}
