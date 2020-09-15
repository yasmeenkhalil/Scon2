import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../services/company.service';
@Component({
  selector: 'app-loginascompany',
  templateUrl: './loginascompany.component.html',
  styleUrls: ['./loginascompany.component.css']
})
export class LoginascompanyComponent implements OnInit {
  form=new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)});
  constructor(private authservice:AuthService ,private router:Router,private toastr:ToastrService,private companyservice:CompanyService) { }

  ngOnInit(): void {
  }
  loginascompany(){
    this.authservice.Loginascompany(this.form.value).subscribe((data:any)=>{
     this.authservice.isLoginascompany = true;
      localStorage.setItem('token', data.token);
      this.toastr.success('تم الدخول بنجاح');
      this.router.navigateByUrl('/');
     },
     (err) => {
       this.toastr.error(err.error);
     }

    );
  }}
