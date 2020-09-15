import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllfirmComponent } from './allfirm/allfirm.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ResturantComponent } from './resturant/resturant.component';
import { SportComponent } from './sport/sport.component';
import { CareComponent } from './care/care.component';
import { ShopComponent } from './shop/shop.component';
import { SchoolComponent } from './school/school.component';
import { HotalComponent } from './hotal/hotal.component';

import { AboutusComponent } from './aboutus/aboutus.component';

import { LoginasuserComponent } from './loginasuser/loginasuser.component';
import { LoginascompanyComponent } from './loginascompany/loginascompany.component';
import { LoginasmarkaterComponent } from './loginasmarkater/loginasmarkater.component';
import { RegisterasuserComponent } from './registerasuser/registerasuser.component';
import { RegisterasmarketerComponent } from './registerasmarketer/registerasmarketer.component';
import { RegistercompanyComponent } from './registercompany/registercompany.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ShowcompanyComponent } from './showcompany/showcompany.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import { MarketersComponent } from './admin/marketers/marketers.component';
import { UsersComponent } from './admin/users/users.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { AdsComponent } from './ads/ads.component';
import { RedirectGuard } from './guards/redirect.guard';
import { UserguardGuard } from './guards/userguard.guard';
import { CompanyguardGuard } from './guards/companyguard.guard';
import { MarketerguardGuard } from './guards/marketerguard.guard';
import { AdminguardGuard } from './guards/adminguard.guard';
import { SendsmsComponent } from './sendsms/sendsms.component';
import { CompanyReportComponent } from './company-report/company-report.component';


const routes: Routes = [
  {path: '', component: AllfirmComponent},
  {path: 'hospital', component: HospitalComponent},
  {path: 'resturant', component: ResturantComponent},
  {path: 'sport', component: SportComponent},
  {path: 'care', component: CareComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'school', component: SchoolComponent},
  {path: 'hotal', component: HotalComponent},

  {path : 'aboutus' , component: AboutusComponent},


  {path :'loginasuser', component:LoginasuserComponent, canActivate : [RedirectGuard]},
  {path : 'loginascompany', component:LoginascompanyComponent,canActivate : [RedirectGuard]},
  {path : 'loginasmarketer', component: LoginasmarkaterComponent,canActivate : [RedirectGuard]},
  {path :'registerasuser', component: RegisterasuserComponent,canActivate : [RedirectGuard]},
  {path : 'registerasmarketar', component:RegisterasmarketerComponent,canActivate : [RedirectGuard]},
  {path : 'registercompany' , component:RegistercompanyComponent,canActivate : [RedirectGuard]},
  {path :'userprofile' , component:UserprofileComponent,canActivate : [UserguardGuard]},
  {path : 'ourservices', component:OurservicesComponent},
  {path :'showcompany/:id' , component:ShowcompanyComponent},
  {path :'admin/companies', component: CompaniesComponent,canActivate : [AdminguardGuard,UserguardGuard]},
  {path :'admin/marketers', component:MarketersComponent,canActivate : [AdminguardGuard,UserguardGuard]},
  {path :'admin/users', component:UsersComponent,canActivate : [AdminguardGuard,UserguardGuard]},
  {path :'companyprofile',component:CompanyprofileComponent,canActivate : [CompanyguardGuard]},
  {path :'ads', component:AdsComponent,canActivate : [CompanyguardGuard]},
  {path :'sendsms', component:SendsmsComponent,canActivate : [CompanyguardGuard]},
  {path :'report', component:CompanyReportComponent,canActivate : [CompanyguardGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
