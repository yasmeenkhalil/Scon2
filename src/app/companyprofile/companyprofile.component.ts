import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { AuthService } from '../services/auth.service';
import { CategoriesService } from '../services/categories.service';
import { FormBuilder, Validators ,FormsModule} from '@angular/forms';
import {Company} from '../models/company'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {
company:Company;


id;
form;
regons;
cities;
categories;
subcompany;
  form2: any;
  form3: any;
  form4: any;
  companyimagefile:File;
  @ViewChild('companyimage') company_image
  discountimagefile:File;
  @ViewChild('discountimage') discount_image
  discountallimagefile:File;
  @ViewChild('discountallimage') discountall_image
  cuponimagefile:File;
  @ViewChild('cuponimage') cupon_image
form5:any;
  discount
  constructor(private companyservice:CompanyService,private authservice:AuthService,
    private categoryservice:CategoriesService,private fb: FormBuilder, private toastr:ToastrService,private router:Router) {
    this.form=this.fb.group({
      'name':['', Validators.required],
      'email':['', Validators.required],
      'address':['', Validators.required],
      'phone':['', Validators.required],
      'regon':['', Validators.required],
      'city':['', Validators.required],
      'category':['', Validators.required],
     'image':['', Validators.required],
     'password':['', Validators.required],
    });

    this.form2=this.fb.group({
      'title':['', Validators.required],
      'discription':['', Validators.required],
      'startdate':['', Validators.required],
      'enddate':['', Validators.required],
      'price':['', Validators.required],
      'discount':['', Validators.required],
      'SubcompanyId':['', Validators.required],
     'image':['', Validators.required],
   });
    this.form3=this.fb.group({
      'title':['', Validators.required],
      'discription':['', Validators.required],
      'startdate':['', Validators.required],
      'enddate':['', Validators.required],
      'discount':['', Validators.required],
      'SubcompanyId':['', Validators.required],
     'image':['', Validators.required],
    });
    this.form4=this.fb.group({
      'name':['', Validators.required],
      'discription':['', Validators.required],
      'startdate':['', Validators.required],
      'enddate':['', Validators.required],
      'image':['', Validators.required],
      'cupontype':['', Validators.required],
      'prvprice':['', Validators.required],
     'currentprice':['', Validators.required],

    });
    this.form5=this.fb.group({
      'email':['', Validators.required],
      'password':['', Validators.required],

    });
  }

  ngOnInit(): void {

   var email=this.authservice.email;
   console.log(email);
   var id =this.authservice.id;
 this.id=id;



    this.companyservice.getcompany(email).subscribe((data:any)=>{
      this.company=data;



    });
    this.companyservice.getcities().subscribe(data=>{this.cities=data;
      console.log(data);})
      this.categoryservice.getcategoeies().subscribe(data=>{
      this.categories=data;});
      this.companyservice.getsubcompany(id).subscribe(data=>{
        this.subcompany=data;
        console.log('subcompany'+data);

      })
  }
  getreagon(event){
    var cityId= event.target.value;
    this.companyservice.getreagon(cityId).subscribe(data=>{
     this.regons=data;
    })};

    adddiscount(){
      const Image = this.discount_image.nativeElement;
      if (Image.files&& Image.files[0]){
        this.discountimagefile=Image.files[0];
      }
      const Imagefile:File=this.discountimagefile;
      console.log(Imagefile);

      var id =this.authservice.id;
      console.log(id);

      const formData = new FormData();
      formData.append('image',Imagefile,Imagefile.name );
      formData.append('discription', this.form2.get('discription').value);
      formData.append('title', this.form2.get('title').value);
      formData.append('startdate', this.form2.get('startdate').value);
     formData.append('enddate', this.form2.get('enddate').value);
      formData.append('price', this.form2.get('price').value);
      formData.append('discount', this.form2.get('discount').value);
     formData.append('SubcompanyId', this.form2.get('SubcompanyId').value);
     formData.append('CompanyId', id);
      console.log(formData);

   this.companyservice.adddiscount(formData).subscribe(data=>{console.log(formData);
    this.toastr.success('تم اضافة الخصم  بنجاح');

      },
      (err) => {
        this.toastr.error(err.error);
      });


    }
    registerasubcompany(){
      var id=this.authservice.id;
    console.log(id);
      const Image = this.company_image.nativeElement;
      if (Image.files&& Image.files[0]){
        this.companyimagefile=Image.files[0];
      }
      const Imagefile:File=this.companyimagefile;
      console.log(Imagefile);


      const formData = new FormData();
      formData.append('image',Imagefile,Imagefile.name );
      formData.append('Name', this.form.get('name').value);
      formData.append('address', this.form.get('address').value);
      formData.append('email', this.form.get('email').value);
     formData.append('phone', this.form.get('phone').value);
      formData.append('RegonId', this.form.get('regon').value);
      formData.append('CityId', this.form.get('city').value);
     formData.append('CategoryId', this.form.get('category').value);
      formData.append('password', this.form.get('password').value);
      formData.append('CompanyId', this.id);

      console.log(formData);

   this.companyservice.registerassubcompany(formData).subscribe(data=>{console.log(formData);
    this.toastr.success('تم التسجيل  بنجاح');

      },
      (err) => {
        this.toastr.error(err.error);
      });

    }
    adddiscountall(){
      const Image = this.discountall_image.nativeElement;
      if (Image.files&& Image.files[0]){
        this.discountallimagefile=Image.files[0];
      }
      const Imagefile:File=this.discountallimagefile;
      console.log(Imagefile);

      var id =this.authservice.id;
      console.log(id);

      const formData = new FormData();
      formData.append('image',Imagefile,Imagefile.name );
      formData.append('discription', this.form3.get('discription').value);
      formData.append('title', this.form3.get('title').value);
      formData.append('startdate', this.form3.get('startdate').value);
     formData.append('enddate', this.form3.get('enddate').value);
      formData.append('discount', this.form3.get('discount').value);
     formData.append('SubcompanyId', this.form3.get('SubcompanyId').value);
     formData.append('CompanyId', id);
      console.log(formData);

   this.companyservice.adddiscount(formData).subscribe(data=>{console.log(formData);
    this.toastr.success('تم اضافة الخصم  بنجاح');

      },
      (err) => {
        this.toastr.error(err.error);
      });


    }
    addcupon(){
      const Image = this.cupon_image.nativeElement;
      if (Image.files&& Image.files[0]){
        this.cuponimagefile=Image.files[0];
      }
      const Imagefile:File=this.cuponimagefile;
      console.log(Imagefile);

      var id =this.authservice.id;
      console.log(id);

      const formData = new FormData();
      formData.append('image',Imagefile,Imagefile.name );
      formData.append('discription', this.form4.get('discription').value);
      formData.append('name', this.form4.get('name').value);
      formData.append('startdate', this.form4.get('startdate').value);
     formData.append('enddate', this.form4.get('enddate').value);
      formData.append('cupontype', this.form4.get('cupontype').value);
      formData.append('prvprice', this.form4.get('prvprice').value);
     formData.append('currentprice', this.form4.get('currentprice').value);
     formData.append('CompanyId', id);
      console.log(formData);

   this.companyservice.addcupon(formData).subscribe(data=>{console.log(formData);
    this.toastr.success('تم اضافة الكوبون  بنجاح');

      },
      (err) => {
        this.toastr.error(err.error);
      });

    }
    adduser(){


      this.companyservice.adduser(this.id,this.form5.value).subscribe(data=>{console.log(data);
        this.toastr.success('تم اضافة المستخدم  بنجاح');

          },
          (err) => {
            this.toastr.error(err.error);
          }); }

}
