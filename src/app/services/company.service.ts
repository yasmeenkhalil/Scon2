import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url=environment.basedUrl;
  url1 = environment.basedUrl + "companies/";
  constructor(private http : HttpClient) {

  }
  getcompanies(){
    return this.http.get(this.url1);
  }
  getcompany(email){
    console.log(email);

    return this.http.get(this.url1 + email);
  }

createcompany(company){
  return this.http.post(this.url1,company);
}
getcities(){
 return this.http.get(this.url+'cities');
}
getreagon(id){
  return this.http.get(this.url+`regons/ ${id}`);
}
sendsms(numbers,msg){

  return this.http.get('https://www.hisms.ws/api.php?send_sms&username=966505544326&password=uiop7890&&numbers='+numbers+'&sender=ARHC&message='+msg);
}
sendmail(emails){
  console.log(emails);

  return this.http.post(this.url+'sendmail',emails)
}

registerassubcompany(subcompany){
  return this.http.post(this.url+'subcompany/',subcompany)
}
adddiscount(discount){
  return this.http.post(this.url+'discount',discount)

}
getdiscount(id){
  return this.http.get(this.url+'discount/'+id)

}
getsubcompany(id){
  return this.http.get (this.url+'subcompany/'+id)
}
adddiscountall(discount){
  return this.http.post(this.url+'discountall',discount)

}
getdiscountall(id){
  return this.http.get(this.url+'discountall/'+id)

}
addcupon(cupon){
  return this.http.post (this.url+'cupon',cupon)
}
getcupon(id){
  return this.http.get (this.url+'cupon/'+id)
}
adduser(id,user){


  return this.http.post(this.url+'companyuser/'+id,user)
}
}

