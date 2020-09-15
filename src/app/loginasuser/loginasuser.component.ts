import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginasuser',
  templateUrl: './loginasuser.component.html',
  styleUrls: ['./loginasuser.component.css']
})
export class LoginasuserComponent implements OnInit {
  form=new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)});
  constructor(private authservice:AuthService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  loginasuser(){
    this.authservice.Loginasuser(this.form.value).subscribe((data:any)=>{
      this.authservice.isLoginasuser = true;
      this.authservice.isAdmin = data.isAdmin;
       localStorage.setItem('token', data.token);
       localStorage.setItem('isAdmin', data.isAdmin);
       this.toastr.success('تم الدخول بنجاح');
       this.router.navigateByUrl('/');
      },
      (err) => {
        this.toastr.error(err.error);
      }
       )
  }

}
