import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginasmarkater',
  templateUrl: './loginasmarkater.component.html',
  styleUrls: ['./loginasmarkater.component.css']
})
export class LoginasmarkaterComponent implements OnInit {
  form=new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)});
  constructor(private authservice:AuthService , private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  loginasmarketer(){
    this.authservice.Loginasmarketer(this.form.value).subscribe((data:any)=>{
      this.authservice.isLoginasmarketer = true;
      localStorage.setItem('token', data.token);
      this.toastr.success('تم الدخول بنجاح');
      this.router.navigateByUrl('/');
     },
     (err) => {
       this.toastr.error(err.error);
     }

    )
  }

}
