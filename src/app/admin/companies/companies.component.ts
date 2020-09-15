import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
companies;
  constructor(private companyservice:CompanyService) { }

  ngOnInit(): void {
    this.companyservice.getcompanies().subscribe(data=>{
      this.companies=data;
    })
  }

}
