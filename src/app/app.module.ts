import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllfirmComponent } from './allfirm/allfirm.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ResturantComponent } from './resturant/resturant.component';
import { SportComponent } from './sport/sport.component';
import { CareComponent } from './care/care.component';
import { ShopComponent } from './shop/shop.component';
import { SchoolComponent } from './school/school.component';
import { HotalComponent } from './hotal/hotal.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';
import { CompanyService } from './services/company.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LoginasuserComponent } from './loginasuser/loginasuser.component';
import { LoginascompanyComponent } from './loginascompany/loginascompany.component';
import { LoginasmarkaterComponent } from './loginasmarkater/loginasmarkater.component';
import {RegisterasuserComponent} from './registerasuser/registerasuser.component';
import { RegisterasmarketerComponent } from './registerasmarketer/registerasmarketer.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';


import { UserprofileComponent } from './userprofile/userprofile.component';
import { RegistercompanyComponent } from './registercompany/registercompany.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { MenuComponent } from './menu/menu.component';
import { ShowcompanyComponent } from './showcompany/showcompany.component';
import { NavComponent } from './nav/nav.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { CompaniesComponent } from './admin/companies/companies.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AdsComponent } from './ads/ads.component';
import { ToastrModule } from 'ngx-toastr';
import { OwlModule } from 'ngx-owl-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MydiscountsComponent } from './mydiscounts/mydiscounts.component';
import { SendsmsComponent } from './sendsms/sendsms.component';
import { CompanyReportComponent } from './company-report/company-report.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    AllfirmComponent,
    HospitalComponent,
    ResturantComponent,
    SportComponent,
    CareComponent,
    ShopComponent,
    SchoolComponent,
    HotalComponent,
    AboutusComponent,
    LoginasuserComponent,
    LoginascompanyComponent,
    LoginasmarkaterComponent,
    RegisterasuserComponent,
    RegisterasmarketerComponent,
    UserprofileComponent,
    RegistercompanyComponent,
    CompanyprofileComponent,
    MenuComponent,
    ShowcompanyComponent,
    NavComponent,
    OurservicesComponent,
    CompaniesComponent,
    AdsComponent,
    MydiscountsComponent,
    SendsmsComponent,
    CompanyReportComponent,








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    MultiSelectModule,
    FormsModule,
   BrowserModule,
   AngularMultiSelectModule,
   MultiSelectModule,
   MatSelectModule,
   ReactiveFormsModule,
   HttpClientModule,
   ValidateEqualModule,
   MatDatepickerModule,
   MatSliderModule,
   ToastrModule.forRoot(),
   CarouselModule,
   OwlModule,
   FlexLayoutModule,
   MatTableModule,
   MatButtonModule,
   MatIconModule

],

  providers: [FormControl,CompanyService,HttpClient,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
