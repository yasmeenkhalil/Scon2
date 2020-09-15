import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
url=environment.basedUrl+"users/"
url2=environment.basedUrl+"search"
  constructor(private http :HttpClient) { }
  getuser(id){

    return this.http.get(this.url +id);
  }
  search(user){
    return this.http.post(this.url2,user);
  }
}
