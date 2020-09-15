import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-allfirm',
  templateUrl: './allfirm.component.html',
  styleUrls: ['./allfirm.component.css']
})
export class AllfirmComponent implements OnInit {
companies;
  constructor(private companyservice:CompanyService) { }

  ngOnInit(): void {
    this.companyservice.getcompanies().subscribe(data=>{
      this.companies=data;
      console.log(data);

    });
  }


}
