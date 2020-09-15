import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-mydiscounts',
  templateUrl: './mydiscounts.component.html',
  styleUrls: ['./mydiscounts.component.css']
})
export class MydiscountsComponent implements OnInit {
companies;
  constructor(private authservice:AuthService,private companyservice:CompanyService) { }

  ngOnInit(): void {
   var email= this.authservice.email;

  }

}
