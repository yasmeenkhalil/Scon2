import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.css']
})
export class CareComponent implements OnInit {

  constructor(private companyservice:CompanyService) { }

  ngOnInit(): void {

  }

}
