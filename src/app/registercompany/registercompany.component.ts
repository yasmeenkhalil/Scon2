import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registercompany',
  templateUrl: './registercompany.component.html',
  styleUrls: ['./registercompany.component.css']
})
export class RegistercompanyComponent implements OnInit {
  cities;
  regons;
  categories;
  selectedregon;
  form:FormGroup;
  imagefile:File;
@ViewChild('image') user_image
  constructor(private fb: FormBuilder,private authservice:AuthService ,private router:Router,private categoryservice:CategoriesService
    ,private companyservice:CompanyService,private toastr: ToastrService) {
    this.form=this.fb.group({
      'name':['', Validators.required],
      'kind':['', Validators.required],
      'email':['', [Validators.required,Validators.email]],
      'regon':['', Validators.required],
      'city':[ '', Validators.required],
    'category':['', Validators.required],
     'image':['', Validators.required],
     'phone':['', Validators.required],
     'address':['',Validators.required],
     'password':['', [Validators.required,Validators.minLength(6)]],
    });


   }
  ngOnInit() {
 this.companyservice.getcities().subscribe(data=>{this.cities=data;
console.log(data);})
this.categoryservice.getcategoeies().subscribe(data=>{
this.categories=data;});



 }


  registerascompany(){
    const Image = this.user_image.nativeElement;
    if (Image.files&& Image.files[0]){
      this.imagefile=Image.files[0];
    }
    const Imagefile:File=this.imagefile;
    console.log(Imagefile);


    const formData = new FormData();
    formData.append('image',Imagefile,Imagefile.name );
    formData.append('Name', this.form.get('name').value);
    formData.append('email', this.form.get('email').value);
    formData.append('kind', this.form.get('kind').value);
    formData.append('address', this.form.get('address').value);
   formData.append('phone', this.form.get('phone').value);
    formData.append('RegonId', this.form.get('regon').value);
    formData.append('CityId', this.form.get('city').value);
   formData.append('CategoryId', this.form.get('category').value);
    formData.append('password', this.form.get('password').value);
    console.log(formData);

 this.authservice.registerascompany(formData).subscribe(data=>{console.log(formData);
  this.toastr.success('تم تسجيل الشركة بنجاح');
  this.router.navigateByUrl('/loginascompany');
 },
 (err) => {
   this.toastr.error(err.error);
 })
  }

getreagon(event){
 var cityId= event.target.value;
this.companyservice.getreagon(cityId).subscribe(data=>{
  this.regons=data;


 })

}
}
