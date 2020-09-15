import {City} from './city'
import {Category} from './category'
import {Regon} from './regon'
export class Company {
  id:Number;
  Name:   String;
    email:   String;
    address:  String;
    phone:  Number;
    CityId: City;
    RegonId:  Regon;
    CategoryId: Category;
    kind:   String;
    image:  String;
    password: String
}
