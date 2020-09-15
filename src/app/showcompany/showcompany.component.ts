import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/company';
import { CategoriesService } from '../services/categories.service';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-showcompany',
  templateUrl: './showcompany.component.html',
  styleUrls: ['./showcompany.component.css']
})
export class ShowcompanyComponent implements OnInit {
company:Company;
discount;
discountall;
cupon;
  constructor(private companyservice:CompanyService
    ,private activatedroute:ActivatedRoute,private router :Router,private categoryservice:CategoriesService) { }

  ngOnInit(): void {
    var id=this.activatedroute.snapshot.params.id
    this.categoryservice.getcompany(id).subscribe((data:any)=>{
this.company=data;
console.log(data);
 })
 this.companyservice.getdiscount(id).subscribe((data:any)=>{
  this.discount=data;
})
this.companyservice.getdiscountall(id).subscribe((data:any)=>{
  this.discountall=data;
})
this.companyservice.getcupon(id).subscribe((data:any)=>{
  this.cupon=data;})


  }

}
