import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { CompanyService } from '../services/company.service';
import { CategoriesService } from '../services/categories.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { user } from '../models/user';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})

export class AdsComponent implements OnInit {
  cities;
  regons;
  categories;
  count;
user:user;
  response;
  numbers:any= [];
  emails:any =[];
  form=new FormGroup({
    agefrom: new FormControl('', Validators.required),
    ageto: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    CategoryId: new FormControl('', Validators.required),
    CityId: new FormControl('', Validators.required),
    RegonId: new FormControl('', Validators.required)
    });
  form2=new FormGroup({
      msg: new FormControl('', Validators.required)});
  form3=new FormGroup({
        msg: new FormControl('', Validators.required),
        emails: new FormControl('', Validators.required)});

  constructor(private companyservice:CompanyService,private categoryservice:CategoriesService
    ,private userservice:UserService,private router:Router) {

   }


  ngOnInit(): void {
    this.categoryservice.getcategoeies().subscribe((data:any)=>{
      this.categories=data;
    })
    this.companyservice.getcities().subscribe((data)=>{
      this.cities=data;
    })
  }
  getreagon(event){
    var cityId= event.target.value;
    this.companyservice.getreagon(cityId).subscribe(data=>{
     this.regons=data;
    })}



  search(){
    this.userservice.search(this.form.value).subscribe((data:any)=>{
      console.log(this.form.value);

      this.user=data;
      let count = data.count;
     this.count=count;
      console.log(data);
var num=data.rows.values();
console.log(num.phone);

for (const value of num) {
  console.log(value.phone);
  this.numbers.push(value.phone);
  }
  var mail=data.rows.values();
  console.log(mail.email);

  for (const value of mail) {
    console.log(value.email);
    this.emails.push(value.email);
    }
    console.log(this.emails);
   var emails=this.emails.toString();
    this.form3.controls.emails.setValue(emails);





    })}
    sendsms(){
      var numbers=this.numbers.toString()
     this.companyservice.sendsms(numbers,this.form2.value).subscribe((data)=>{

     })


    }
    sendmail(){

     this.companyservice.sendmail(this.form3.value).subscribe((data:any)=>{
console.log(data);

     })

    }






}
