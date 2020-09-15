import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  url=environment.basedUrl;
  constructor(private http:HttpClient) { }
  getcategoeies(){
   return this.http.get(this.url+"categories");
  }
  getcompany(id){
    return this.http.get(this.url+'comp/'+id);
  }
}
