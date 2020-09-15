import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule ,NgModel, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { CompanyService } from '../services/company.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registerasuser',
  templateUrl: './registerasuser.component.html',
  styleUrls: ['./registerasuser.component.css']
})
export class RegisterasuserComponent implements OnInit {
  categories;
  cities;
  regons;
  form:FormGroup;
  imagefile:File;
@ViewChild('image') user_image

  constructor( private authservice:AuthService ,private router:Router, private fb: FormBuilder ,
    private categoryservice:CategoriesService,private companyservice:CompanyService,private toastr: ToastrService) {
    this.form=this.fb.group({
      'name':['', Validators.required],
      'gender':['', Validators.required],
      'email':['', [Validators.required,Validators.email]],
      'age':['', Validators.required],
      'regon':['', Validators.required],
      'city':['', Validators.required],
      'category':['', Validators.required],
     'image':['', Validators.required],
     'phone':['', Validators.required],
     'password':['', [Validators.required,Validators.minLength(6)]],
    });
   }

  ngOnInit(){
    this.companyservice.getcities().subscribe(data=>{this.cities=data;
      console.log(data);})
      this.categoryservice.getcategoeies().subscribe(data=>{
      this.categories=data;});
  }
  registerasuser(){
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
    formData.append('age', this.form.get('age').value);
    formData.append('gender', this.form.get('gender').value);
   formData.append('phone', this.form.get('phone').value);
    formData.append('RegonId', this.form.get('regon').value);
    formData.append('CityId', this.form.get('city').value);
   formData.append('CategoryId', this.form.get('category').value);
    formData.append('password', this.form.get('password').value);
    console.log(formData);

 this.authservice.registerasuser(formData).subscribe(data=>{console.log(formData);
  this.toastr.success('تم التسجيل  بنجاح');
  this.router.navigateByUrl('/loginasuser');

    },
    (err) => {
      this.toastr.error(err.error);
    });

  }

  getreagon(event){
    var cityId= event.target.value;
    this.companyservice.getreagon(cityId).subscribe(data=>{
     this.regons=data;
    })

}
}

